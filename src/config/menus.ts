/**
 * Website Mission:
 * "Giúp doanh nghiệp Logistics Việt Nam chuyển đổi số thành công với giải pháp công nghệ toàn diện -
 * từ website đến phần mềm quản lý: đơn giản, nhanh chóng, hiệu quả."
 * 
 * Customer Pain Points Addressed:
 * 1. Không biết bắt đầu từ đâu → Menu đơn giản 5 mục chính
 * 2. Thông tin lộn xộn → Mỗi trang có giá trị riêng biệt
 * 3. Không rõ lợi ích → CTA rõ ràng trên mỗi trang
 * 4. Lo lắng về chi phí → Trang báo giá chi tiết
 * 5. Muốn xem trước → Trang demo trực quan
 * 
 * Menu Philosophy:
 * - Tối đa 5 mục menu chính + 1 CTA button
 * - Mỗi mục menu dẫn đến giải pháp cụ thể cho vấn đề khách hàng
 * - Không trùng lặp, không confuse
 * - Hỗ trợ hành trình khách hàng: Landing → Tìm hiểu → Demo → Quyết định
 */

// Menu configuration for the application
// Simplified structure based on customer journey

export interface MenuItem {
  name: string;
  href: string;
  description?: string; // Brief description for accessibility
}

// Primary Navigation - 5 items max (excluding CTA)
// Following customer journey: Home → Solutions → Demo → Pricing → Contact
export const mainMenu: MenuItem[] = [
  { 
    name: "Trang chủ", 
    href: "/",
    description: "Trang chủ - Tổng quan giải pháp"
  },
  { 
    name: "Giải pháp", 
    href: "/solutions",
    description: "Các giải pháp WMS, TMS, Web, App"
  },
  { 
    name: "Xem Demo", 
    href: "/demo",
    description: "Trải nghiệm phần mềm trực quan"
  },
  { 
    name: "Báo giá", 
    href: "/pricing",
    description: "Bảng giá dịch vụ chi tiết"
  },
  { 
    name: "Liên hệ", 
    href: "/contact",
    description: "Liên hệ tư vấn miễn phí"
  },
];

// Solutions Dropdown - Products/Services
// Each item solves a specific customer problem
export const solutionsMenu: MenuItem[] = [
  { 
    name: "Phần mềm WMS", 
    href: "/wms",
    description: "Quản lý kho bãi thông minh"
  },
  { 
    name: "Phần mềm TMS", 
    href: "/tms",
    description: "Quản lý vận tải hiệu quả"
  },
  { 
    name: "Web Logistics", 
    href: "/web-logistics",
    description: "Website chuyên nghiệp cho logistics"
  },
  { 
    name: "App Mobile", 
    href: "/app",
    description: "Ứng dụng quản lý trên điện thoại"
  },
];

// Secondary Links - Pages with unique value
// These pages have different content from main pages
export const secondaryMenu: MenuItem[] = [
  { 
    name: "Về chúng tôi", 
    href: "/about",
    description: "Thông tin về Misty LGS"
  },
  { 
    name: "Tin tức", 
    href: "/news",
    description: "Tin tức và cập nhật ngành logistics"
  },
  { 
    name: "Câu hỏi thường gặp", 
    href: "/faq",
    description: "FAQ - Giải đáp thắc mắc"
  },
];

// Footer menu configurations
// Organized by customer needs

export const footerProducts = [
  { name: "Phần mềm WMS", href: "/wms", description: "Quản lý kho bãi" },
  { name: "Phần mềm TMS", href: "/tms", description: "Quản lý vận tải" },
  { name: "Web Logistics", href: "/web-logistics", description: "Website logistics" },
  { name: "App Mobile", href: "/app", description: "Ứng dụng di động" },
];

export const footerCompany = [
  { name: "Về chúng tôi", href: "/about" },
  { name: "Tin tức", href: "/news" },
  { name: "Câu hỏi thường gặp", href: "/faq" },
];

export const footerActions = [
  { name: "Xem Demo", href: "/demo" },
  { name: "Báo giá", href: "/pricing" },
  { name: "Liên hệ tư vấn", href: "/contact" },
];

// Customer Journey Map:
// 1. Landing (/) → Overview of solutions
// 2. Solutions (/solutions) → Choose specific solution
// 3. Product pages (wms, tms, web-logistics, app) → Detailed info
// 4. Demo (/demo) → Try before buy
// 5. Pricing (/pricing) → Cost transparency
// 6. Contact (/contact) → Take action
// 
// Removed/Consolidated:
// - /services: Merged into /solutions (duplicate content)
// - /portfolio: Removed (not primary decision factor)
// - /testimonials: Can be referenced in /about or /demo
