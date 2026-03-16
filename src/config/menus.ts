/**
 * Website Mission:
 * "Nền tảng giải pháp chuyển đổi số cho doanh nghiệp logistics vừa và nhỏ"
 * 
 * Customer Pain Points Addressed (from app.md):
 * 1. Quản lý đơn hàng bằng Excel
 * 2. Không có tracking cho khách
 * 3. Điều phối xe thủ công
 * 4. Website thiếu chuyên nghiệp
 * 
 * Solutions (4 main groups from app.md):
 * 1. Website Logistics
 * 2. Logistics Management System (LMS)
 * 3. Logistics Mobile App
 * 4. Custom Web App
 */

// Menu configuration - Updated according to app.md sitemap

export interface MenuItem {
  name: string;
  href: string;
  description?: string;
}

// Primary Navigation - 6 items (from app.md sitemap)
export const mainMenu: MenuItem[] = [
  { 
    name: "Trang chủ", 
    href: "/",
    description: "Trang chủ - Giải pháp chuyển đổi số logistics"
  },
  { 
    name: "Giới thiệu", 
    href: "/about",
    description: "Sứ mệnh, Về chúng tôi, Portfolio"
  },
  { 
    name: "Dịch vụ", 
    href: "/services",
    description: "Website Logistics, LMS, Mobile App, Custom System"
  },
  { 
    name: "Demo", 
    href: "/demo",
    description: "Demo website, phần mềm, dashboard logistics"
  },
  { 
    name: "Blog", 
    href: "/news",
    description: "Tin tức chuyển đổi số logistics"
  },
  { 
    name: "Liên hệ", 
    href: "/contact",
    description: "Liên hệ tư vấn miễn phí"
  },
];

// Services sub-menu - 4 main groups + additional services
export const servicesMenu: MenuItem[] = [
  { 
    name: "Website Logistics", 
    href: "/web-logistics",
    description: "Website chuyên nghiệp với tracking, form báo giá, đa ngôn ngữ"
  },
  { 
    name: "Logistics Management System (LMS)", 
    href: "/solutions",
    description: "Phần mềm quản lý logistics toàn diện"
  },
  { 
    name: "Logistics Mobile App", 
    href: "/app",
    description: "Driver app và Customer app"
  },
  { 
    name: "Custom Web App", 
    href: "/solutions",
    description: "Hệ thống theo yêu cầu riêng"
  },
  { 
    name: "Thuê website", 
    href: "/services",
    description: "Dịch vụ thuê website theo tháng"
  },
  { 
    name: "Bảo trì website", 
    href: "/services",
    description: "Dịch vụ bảo trì và cập nhật"
  },
];

// Demo sub-menu
export const demoMenu: MenuItem[] = [
  { 
    name: "Demo Website Logistics", 
    href: "/demo",
    description: "Xem demo website chuyên nghiệp"
  },
  { 
    name: "Demo Phần mềm Logistics", 
    href: "/demo",
    description: "Xem demo hệ thống quản lý"
  },
  { 
    name: "Demo Dashboard", 
    href: "/demo",
    description: "Xem demo dashboard thống kê"
  },
];

// Secondary Links
export const secondaryMenu: MenuItem[] = [
  { 
    name: "Pricing", 
    href: "/pricing",
    description: "Bảng giá dịch vụ"
  },
  { 
    name: "Portfolio", 
    href: "/portfolio",
    description: "Dự án đã triển khai"
  },
  { 
    name: "Câu hỏi thường gặp", 
    href: "/faq",
    description: "FAQ - Giải đáp thắc mắc"
  },
];

// Footer menu configurations
export const footerProducts = [
  { name: "Website Logistics", href: "/web-logistics", description: "Website logistics" },
  { name: "LMS - Phần mềm quản lý", href: "/solutions", description: "Logistics Management System" },
  { name: "Mobile App", href: "/app", description: "Ứng dụng di động" },
  { name: "Custom Development", href: "/solutions", description: "Phát triển theo yêu cầu" },
];

export const footerCompany = [
  { name: "Về chúng tôi", href: "/about" },
  { name: "Tin tức", href: "/news" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
];

export const footerActions = [
  { name: "Xem Demo", href: "/demo" },
  { name: "Báo giá", href: "/pricing" },
  { name: "Liên hệ tư vấn", href: "/contact" },
];

// Customer Journey Map (from app.md):
// 1. Landing (/) → Overview of solutions
// 2. About (/about) → Sứ mệnh, Về chúng tôi, Portfolio
// 3. Services (/services) → 4 main groups + Thuê web + Bảo trì
// 4. Demo (/demo) → Website, Software, Dashboard
// 5. Blog (/news) → Chuyển đổi số logistics
// 6. Contact (/contact) → Take action
