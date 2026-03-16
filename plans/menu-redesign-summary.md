# Website Redesign Summary - Menu & Navigation

## Ngày cập nhật: 2026-03-16

---

## 1. Sứ mệnh Website (Mission Statement)

**Mission:**
> "Giúp doanh nghiệp Logistics Việt Nam chuyển đổi số thành công với giải pháp công nghệ toàn diện - từ website đến phần mềm quản lý: đơn giản, nhanh chóng, hiệu quả."

---

## 2. Phân tích Pain Points của Khách hàng

### Vấn đề đã xác định:

| # | Pain Point | Giải pháp |
|---|------------|------------|
| 1 | Không biết bắt đầu từ đâu khi muốn chuyển đổi số | Menu đơn giản 5 mục chính |
| 2 | Menu lộn xộn, quá nhiều lựa chọn | Giảm từ 10+ xuống 5 mục |
| 3 | FAQ xuất hiện 2 lần trong menu | Loại bỏ trùng lặp |
| 4 | Solutions dropdown có 4 mục nhưng đều dẫn đến 1 trang | Mỗi sản phẩm có trang riêng |
| 5 | Không rõ lợi ích cụ thể | CTA rõ ràng trên mỗi trang |
| 6 | Lo lắng về chi phí | Trang báo giá chi tiết |
| 7 | Muốn xem trước khi mua | Trang demo trực quan |

---

## 3. Cấu trúc Menu Mới

### Header Navigation (5 mục chính)

```
Trang chủ    Giải pháp    Xem Demo    Báo giá    Liên hệ    [Nhận tư vấn]
```

#### Chi tiết:

| Mục menu | URL | Mô tả |
|----------|-----|-------|
| Trang chủ | / | Tổng quan giải pháp |
| Giải pháp | /solutions | Dropdown: WMS, TMS, Web, App |
| Xem Demo | /demo | Trải nghiệm phần mềm |
| Báo giá | /pricing | Bảng giá chi tiết |
| Liên hệ | /contact | Liên hệ tư vấn |

### Solutions Dropdown

| Sản phẩm | URL | Mô tả |
|----------|-----|-------|
| Phần mềm WMS | /wms | Quản lý kho bãi |
| Phần mềm TMS | /tms | Quản lý vận tải |
| Web Logistics | /web-logistics | Website logistics |
| App Mobile | /app | Ứng dụng di động |

### Footer Navigation

- **Sản phẩm:** WMS, TMS, Web Logistics, App Mobile
- **Về công ty:** Về chúng tôi, Tin tức, FAQ
- **Hành động:** Xem Demo, Báo giá, Liên hệ

---

## 4. Sơ đồ Hành trình Khách hàng (Customer Journey)

```
1. Landing (/)
   ↓
2. Solutions (/solutions) - Chọn giải pháp phù hợp
   ↓
3. Product Pages (/wms, /tms, /web-logistics, /app) - Xem chi tiết
   ↓
4. Demo (/demo) - Trải nghiệm trước khi mua
   ↓
5. Pricing (/pricing) - Xem chi phí
   ↓
6. Contact (/contact) - Liên hệ tư vấn
```

---

## 5. Các file đã thay đổi

| File | Thay đổi |
|------|----------|
| [`src/config/menus.ts`](src/config/menus.ts) | Cấu trúc menu mới với mission & customer journey |
| [`src/components/Navbar.tsx`](src/components/Navbar.tsx) | Menu đơn giản 5 mục + dropdown |
| [`src/components/Footer.tsx`](src/components/Footer.tsx) | Footer tổ chức lại theo customer journey |
| [`src/app/sitemap.ts`](src/app/sitemap.ts) | Cập nhật priority theo navigation mới |

---

## 6. So sánh Menu Trước & Sau

### Trước (10+ mục):
```
Trang chủ | Dịch vụ | Giải pháp | Demo | Báo giá | Tin tức | Giới thiệu▼ | FAQ | Liên hệ | Nhận tư vấn
```
- ❌ FAQ xuất hiện 2 lần
- ❌ Giải pháp dropdown: 4 mục → 1 trang
- ❌ Quá nhiều lựa chọn

### Sau (5 mục):
```
Trang chủ | Giải pháp▼ | Xem Demo | Báo giá | Liên hệ | [Nhận tư vấn]
```
- ✅ Không trùng lặp
- ✅ Mỗi sản phẩm có trang riêng
- ✅ Đơn giản, rõ ràng

---

## 7. Giá trị của từng trang (Unique Value)

| Trang | Giá trị độc nhất | Vấn đề giải quyết |
|-------|------------------|---------------------|
| / | Tổng quan giải pháp | "Tôi cần gì?" |
| /solutions | So sánh các giải pháp | "Giải pháp nào phù hợp?" |
| /wms | Chi tiết WMS | "WMS có tính năng gì?" |
| /tms | Chi tiết TMS | "TMS có tính năng gì?" |
| /web-logistics | Chi tiết Web | "Tôi cần website?" |
| /app | Chi tiết App | "Tôi cần app?" |
| /demo | Trải nghiệm thực tế | "Cho tôi xem trước" |
| /pricing | Bảng giá chi tiết | "Chi phí bao nhiêu?" |
| /contact | Liên hệ tư vấn | "Tôi muốn được tư vấn" |

---

## 8. Đã loại bỏ/Không còn ưu tiên

| Trang | Lý do |
|-------|-------|
| /services | Trùng lặp với /solutions |
| /portfolio | Không phải yếu tố quyết định chính |
| /testimonials | Có thể tích hợp vào /about hoặc /demo |

---

## 9. Next Steps (Nếu cần tiếp tục)

1. **Tối ưu trang chủ** - Cập nhật hero & CTAs theo customer journey
2. **Tinh gọn nội dung** - Mỗi trang tập trung vào 1 message
3. **Thêm social proof** - Tích hợp testimonials vào trang phù hợp
4. **Analytics** - Theo dõi hành vi người dùng để cải tiến

---

## 10. Tài liệu tham khảo

- File cấu hình: [`src/config/menus.ts`](src/config/menus.ts)
- Kế hoạch redesign: [`plans/redesign-plan.md`](plans/redesign-plan.md)
