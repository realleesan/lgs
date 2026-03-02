# Misty LGS - Kế hoạch Refactoring & Tối ưu Code

## Tổng quan

Tài liệu này tổng hợp các vấn đề phát hiện trong codebase và đề xuất kế hoạch refactoring theo từng phase.

---

## Phase 1: Bảo mật & Khẩn cấp (Tuần 1)

### 1.1 Fix Supabase Keys Hardcoded ⚠️ CRITICAL

**Vấn đề:**
- File: `src/lib/supabase.ts` (lines 3-4)
- API URL và Anonymous Key bị hardcoded trong source code
- Rủi ro: Bất kỳ ai cũng có thể truy cập database

**Giải pháp:**
```env
# Tạo file .env.local
NEXT_PUBLIC_SUPABASE_URL=https://fwzzvdmezlceoagnomgo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Cập nhật `src/lib/supabase.ts`:**
```typescript
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
```

**Files cần tạo/cập nhật:**
- `.env.local` - Biến môi trường
- `.gitignore` - Thêm `.env.local`

---

## Phase 2: Giảm Duplicate Code (Tuần 2)

### 2.1 Tạo LanguageContext

**Vấn đề:**
- 6 pages sử dụng `lang` state riêng biệt:
  - `web-logistics/page.tsx`
  - `wms/page.tsx`
  - `tms/page.tsx`
  - `testimonials/page.tsx`
  - `faq/page.tsx`
  - `app/page.tsx`

**Giải pháp:**
Tạo `src/contexts/LanguageContext.tsx`:
```typescript
"use client";
import { createContext, useContext, useState } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("vi");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
```

**Cập nhật `layout.tsx`:**
```typescript
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="vi">
        {/* ... */}
      </html>
    </LanguageProvider>
  );
}
```

**Files cần tạo:**
- `src/contexts/LanguageContext.tsx`

**Files cần cập nhật:**
- `src/app/layout.tsx`
- 6 pages trên (thay `useState` bằng `useLanguage()`)

---

### 2.2 Kết nối NewsletterPopup với API

**Vấn đề:**
- Hàm `subscribeNewsletter` đã có trong `src/lib/api.ts`
- Nhưng `NewsletterPopup` không gọi API, chỉ lưu localStorage

**Giải pháp:**
Cập nhật `src/components/NewsletterPopup.tsx`:
```typescript
import { subscribeNewsletter } from "@/lib/api";

const handleSubmit = async (e: React.FormEvent) => {
  // ... validation
  try {
    await subscribeNewsletter(email);
    setSuccess(true);
  } catch (err) {
    setError("Đã có lỗi xảy ra");
  }
};
```

**Files cần cập nhật:**
- `src/components/NewsletterPopup.tsx`

---

## Phase 3: Tối ưu Data Fetching (Tuần 3)

### 3.1 Sử dụng API Functions

**Vấn đề:**
- Các landing pages có dữ liệu hardcoded
- API functions đã có trong `src/lib/api.ts` nhưng chưa được dùng

**Giải pháp:**
- Portfolio: Dùng `getPortfolio()`, `getPortfolioById()`
- Testimonials: Dùng `getTestimonials()`
- FAQ: Dùng `getFAQs()`
- News: Dùng `getNews()`, `getNewsById()`

**Ví dụ cập nhật `portfolio/page.tsx`:**
```typescript
import { getPortfolio } from "@/lib/api";

export default async function PortfolioPage() {
  const portfolio = await getPortfolio({ featured: true });
  // Render data
}
```

**Files cần cập nhật:**
- `src/app/portfolio/page.tsx`
- `src/app/testimonials/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/news/page.tsx`

---

### 3.2 Tích hợp Loading Skeletons

**Vấn đề:**
- Trang loading chậm không có skeleton
- Components đã có trong `src/components/Loading.tsx`

**Giải pháp:**
Thêm skeleton vào các trang sử dụng dynamic data:
```typescript
import { BlogSkeleton, CardSkeleton } from "@/components/Loading";

// Trong component
{isLoading ? <BlogSkeleton /> : <Content />}
```

---

## Phase 4: SEO & Media (Tuần 4)

### 4.1 Tạo OG Image

**Vấn đề:**
- Metadata refer đến `/og-image.png` nhưng chưa tạo

**Giải pháp:**
- Tạo `public/og-image.png` (1200x630)
- Hoặc cập nhật metadata trong `layout.tsx`

**Files cần tạo:**
- `public/og-image.png`

---

### 4.2 Thêm Error Boundaries

**Vấn đề:**
- Không có error handling cho các trang

**Giải pháp:**
Tạo `src/components/ErrorBoundary.tsx`:
```typescript
"use client";
import { Component, ReactNode } from "react";

export default class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Đã xảy ra lỗi</div>;
    }
    return this.props.children;
  }
}
```

**Files cần tạo:**
- `src/components/ErrorBoundary.tsx`

---

## Phase 5: Cleanup & Tối ưu (Tuần 5)

### 5.1 Tối ưu Navbar Menu

**Vấn đề:**
- Menu items được define 2 lần (desktop + mobile)

**Giải pháp:**
Chuyển menu data ra file riêng `src/config/menus.ts`:
```typescript
export const servicesMenu = [
  { name: "Thiết kế Web Logistics", href: "/web-logistics" },
  { name: "Phát triển App Mobile", href: "/app" },
  // ...
];

export const solutionsMenu = [...];
export const aboutMenu = [...];
```

**Files cần tạo:**
- `src/config/menus.ts`

**Files cần cập nhật:**
- `src/components/Navbar.tsx`

---

### 5.2 Kiểm tra & Test

- Chạy `npm run build` để kiểm tra lỗi
- Test tất cả forms (LeadForm, Newsletter)
- Test multi-language toggle
- Test responsive design

---

## Tổng kết Files

### Files cần Tạo mới:
| File | Phase | Mô tả |
|------|-------|-------|
| `.env.local` | 1 | Environment variables |
| `src/contexts/LanguageContext.tsx` | 2 | Language state management |
| `public/og-image.png` | 4 | Social sharing image |
| `src/components/ErrorBoundary.tsx` | 4 | Error handling |
| `src/config/menus.ts` | 5 | Menu configuration |

### Files cần Cập nhật:
| File | Phase | Mô tả |
|------|-------|-------|
| `src/lib/supabase.ts` | 1 | Use env variables |
| `.gitignore` | 1 | Add .env.local |
| `src/app/layout.tsx` | 2 | Add LanguageProvider |
| `6 pages` | 2 | Use useLanguage() hook |
| `src/components/NewsletterPopup.tsx` | 2 | Connect to API |
| `src/app/portfolio/page.tsx` | 3 | Use getPortfolio() |
| `src/app/testimonials/page.tsx` | 3 | Use getTestimonials() |
| `src/app/faq/page.tsx` | 3 | Use getFAQs() |
| `src/app/news/page.tsx` | 3 | Use getNews() |
| `src/components/Navbar.tsx` | 5 | Use menus.ts |

---

## Ưu tiên thực hiện

1. **Phase 1** - Bắt buộc (Bảo mật)
2. **Phase 2** - Quan trọng (Giảm duplicate)
3. **Phase 3** - Nâng cao (Dynamic data)
4. **Phase 4** - Cải thiện (SEO)
5. **Phase 5** - Tối ưu (Cleanup)
