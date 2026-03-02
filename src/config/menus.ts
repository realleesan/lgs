// Menu configuration for the application
// This file centralizes all menu items for easy maintenance

export interface MenuItem {
  name: string;
  href: string;
}

export const servicesMenu: MenuItem[] = [
  { name: "Thiết kế Web Logistics", href: "/web-logistics" },
  { name: "Phát triển App Mobile", href: "/app" },
  { name: "Phần mềm WMS", href: "/wms" },
  { name: "Phần mềm TMS", href: "/tms" },
];

export const solutionsMenu: MenuItem[] = [
  { name: "Giải pháp All-in-One", href: "/solutions" },
  { name: "Quản lý kho bãi", href: "/solutions" },
  { name: "Quản lý vận tải", href: "/solutions" },
  { name: "Tư vấn chuyển đổi số", href: "/solutions" },
];

export const demoMenu: MenuItem[] = [
  { name: "Xem Demo", href: "/demo" },
  { name: "Tính năng", href: "/demo#features" },
  { name: "Báo giá", href: "/pricing" },
];

export const aboutMenu: MenuItem[] = [
  { name: "Về chúng tôi", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Đánh giá khách hàng", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
];

// Footer menu configurations
export const footerServices = [
  { name: "Web Logistics có sẵn", href: "/web-logistics" },
  { name: "App Quản lý vận tải", href: "/app" },
  { name: "Phần mềm kho bãi (WMS)", href: "/wms" },
  { name: "Thiết kế theo yêu cầu", href: "/services" },
];

export const footerQuickLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Về chúng tôi", href: "/about" },
  { name: "Giải pháp All-in-One", href: "/solutions" },
  { name: "Báo giá", href: "/pricing" },
  { name: "Tin tức", href: "/news" },
];

export const footerSupport = [
  { name: "FAQ", href: "/faq" },
  { name: "Đánh giá khách hàng", href: "/testimonials" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Liên hệ", href: "/contact" },
];
