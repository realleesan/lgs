"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Package, BarChart3, Truck, Smartphone, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: React.ReactNode;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

const features: Feature[] = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "Quản lý kho hàng",
    titleEn: "Warehouse Management",
    description: "Quản lý nhập xuất kho, tồn kho theo thời gian thực với độ chính xác cao.",
    descriptionEn: "Manage inventory in-out, real-time inventory with high accuracy.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Mã vạch & Scanner",
    titleEn: "Barcode & Scanner",
    description: "Quét mã vạch nhanh chóng, giảm sai sót khi nhập xuất hàng hóa.",
    descriptionEn: "Fast barcode scanning, reduce errors in goods in-out.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Quản lý vận chuyển",
    titleEn: "Transport Management",
    description: "Theo dõi và quản lý xe vận chuyển, tối ưu lộ trình giao hàng.",
    descriptionEn: "Track and manage transport vehicles, optimize delivery routes.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App di động",
    titleEn: "Mobile App",
    description: "Ứng dụng cho nhân viên kho, lái xe có thể sử dụng trên mobile.",
    descriptionEn: "App for warehouse staff, drivers can use on mobile.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Báo cáo thông minh",
    titleEn: "Smart Reports",
    description: "Báo cáo tự động, biểu đồ trực quan giúp quản lý đưa ra quyết định nhanh.",
    descriptionEn: "Automatic reports, visual charts help managers make quick decisions.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bảo mật dữ liệu",
    titleEn: "Data Security",
    description: "Mã hóa dữ liệu, backup tự động, đảm bảo an toàn thông tin.",
    descriptionEn: "Data encryption, automatic backup, ensure information safety.",
  },
];

const modules = [
  {
    name: "Quản lý tồn kho",
    nameEn: "Inventory Management",
    description: "Theo dõi số lượng, vị trí, trạng thái hàng hóa trong kho",
    descriptionEn: "Track quantity, location, status of goods in warehouse",
  },
  {
    name: "Nhập xuất hàng",
    nameEn: "In-Out Goods",
    description: "Quy trình nhập hàng, xuất hàng với xác nhận QR code",
    descriptionEn: "Inbound, outbound process with QR code confirmation",
  },
  {
    name: "Đặt hàng & PO",
    nameEn: "Orders & PO",
    description: "Quản lý đơn đặt hàng, purchase order tự động",
    descriptionEn: "Manage orders, automatic purchase orders",
  },
  {
    name: "Báo cáo & Thống kê",
    nameEn: "Reports & Analytics",
    description: "Báo cáo tồn kho, doanh thu, hiệu suất kho chi tiết",
    descriptionEn: "Detailed inventory, revenue, warehouse performance reports",
  },
];

const packages = [
  {
    name: "WMS Basic",
    price: "49.9",
    unit: "triệu VNĐ/năm",
    unitEn: "million VND/year",
    description: "Cho doanh nghiệp nhỏ",
    descriptionEn: "For small businesses",
    features: [
      "Quản lý 1 kho",
      "Người dùng không giới hạn",
      "App mobile",
      "Báo cáo cơ bản",
      "Hỗ trợ 24/7",
    ],
  },
  {
    name: "WMS Pro",
    price: "99.9",
    unit: "triệu VNĐ/năm",
    unitEn: "million VND/year",
    description: "Giải pháp toàn diện",
    descriptionEn: "Complete solution",
    popular: true,
    features: [
      "Quản lý nhiều kho",
      "Người dùng không giới hạn",
      "App mobile đầy đủ",
      "Báo cáo nâng cao",
      "Tích hợp API",
      "Hỗ trợ 24/7",
    ],
  },
  {
    name: "WMS Enterprise",
    price: "Liên hệ",
    unit: "",
    unitEn: "",
    description: "Giải pháp doanh nghiệp",
    descriptionEn: "Enterprise solution",
    features: [
      "Quản lý không giới hạn",
      "Team riêng hỗ trợ",
      "Phát triển theo yêu cầu",
      "AI & Automation",
      "Bảo hành trọn đời",
      "SLA cam kết",
    ],
  },
];

export default function WMSPage() {
  const [lang, setLang] = useState<"vi" | "en">("vi");

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=800&fit=crop&q=80" 
            alt="WMS"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#ffffff]/95 to-[#f8fafc]" />
        </div>

        {/* Language Toggle */}
        <div className="absolute top-28 right-6 z-10">
          <button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            className="flex items-center gap-2 px-4 py-2 bg-[#ffffff] border border-gray-200 rounded-full text-sm font-medium text-[#666666] hover:border-[#356df1] hover:text-[#356df1] transition-all shadow-sm"
          >
            <span className="text-xs">{lang === "vi" ? "🇻🇳" : "🇺🇸"}</span>
            {lang === "vi" ? "EN" : "VN"}
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#356df1]/10 text-[#356df1] text-sm font-medium mb-6">
                <Package size={18} />
                WMS
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
                {lang === "vi" ? "Phần mềm WMS" : "WMS Software"}{" "}
                <span className="text-[#356df1]">
                  {lang === "vi" ? "Quản lý kho bãi" : "Warehouse Management"}
                </span>
              </h1>
              
              <p className="text-lg text-[#666666] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                {lang === "vi"
                  ? "Hệ thống quản lý kho bãi thông minh giúp tự động hóa quy trình, giảm chi phí và tăng hiệu suất. Phù hợp cho các doanh nghiệp logistics, kho vận."
                  : "Smart warehouse management system to automate processes, reduce costs and increase efficiency. Suitable for logistics, warehousing businesses."}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#356df1] text-[#ffffff] px-6 py-3 rounded-full font-semibold hover:bg-[#2a5ad9] transition-colors"
                >
                  {lang === "vi" ? "Nhận báo giá" : "Get Quote"}
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-[#ffffff] text-[#356df1] border border-[#356df1] px-6 py-3 rounded-full font-semibold hover:bg-[#e8eefc] transition-colors"
                >
                  {lang === "vi" ? "Xem Demo" : "Watch Demo"}
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-[#666666]">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#356df1]" />
                  <span>{lang === "vi" ? "Dùng thử 14 ngày" : "14-day Free Trial"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#356df1]" />
                  <span>{lang === "vi" ? "Không cần thẻ" : "No Card Required"}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80" 
                  alt="WMS Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#356df1]/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {lang === "vi" ? "Các module chính" : "Key Modules"}
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              {lang === "vi"
                ? "Đầy đủ tính năng cho quản lý kho hiện đại"
                : "Complete features for modern warehouse management"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] p-6 rounded-2xl border border-gray-100 hover:border-[#356df1] transition-colors"
              >
                <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">
                  {lang === "vi" ? module.name : module.nameEn}
                </h3>
                <p className="text-[#666666] text-sm font-[family-name:var(--font-body)]">
                  {lang === "vi" ? module.description : module.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {lang === "vi" ? "Tính năng nổi bật" : "Key Features"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">
                  {lang === "vi" ? feature.title : feature.titleEn}
                </h3>
                <p className="text-[#666666] text-sm font-[family-name:var(--font-body)]">
                  {lang === "vi" ? feature.description : feature.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {lang === "vi" ? "Bảng giá" : "Pricing"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 border ${
                  pkg.popular 
                    ? "bg-[#356df1] border-[#356df1] text-[#ffffff]" 
                    : "bg-[#ffffff] border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ffffff] text-[#356df1] text-sm font-bold rounded-full whitespace-nowrap">
                    {lang === "vi" ? "Phổ biến" : "Popular"}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 font-[family-name:var(--font-heading)] ${pkg.popular ? "text-[#ffffff]" : "text-[#000000]"}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold font-[family-name:var(--font-heading)] ${pkg.popular ? "text-[#ffffff]" : "text-[#356df1]"}`}>
                      {pkg.price}
                    </span>
                    {pkg.unit && (
                      <span className={`text-base ${pkg.popular ? "text-[#ffffff]/80" : "text-[#666666]"}`}>
                        {lang === "vi" ? pkg.unit : pkg.unitEn}
                      </span>
                    )}
                  </div>
                  <p className={`text-base mt-2 ${pkg.popular ? "text-[#ffffff]/80" : "text-[#666666]"}`}>
                    {lang === "vi" ? pkg.description : pkg.descriptionEn}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={20} className={pkg.popular ? "text-[#ffffff]" : "text-[#356df1]"} />
                      <span className={pkg.popular ? "text-[#ffffff]" : "text-[#000000]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className={`block w-full py-4 rounded-full font-semibold text-center transition-all ${
                    pkg.popular 
                      ? "bg-[#ffffff] text-[#356df1] hover:bg-[#f8fafc]" 
                      : "bg-[#356df1] text-[#ffffff] hover:bg-[#2a5ad9]"
                  }`}
                >
                  {lang === "vi" ? "Đăng ký ngay" : "Register Now"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=600&fit=crop&q=80" 
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            {lang === "vi" 
              ? "Sẵn sàng quản lý kho hiệu quả?" 
              : "Ready to Manage Warehouse Efficiently?"}
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            {lang === "vi"
              ? "Dùng thử miễn phí 14 ngày"
              : "14-day Free Trial"}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            {lang === "vi" ? "Dùng thử ngay" : "Try Now"}
          </Link>
        </div>
      </section>
    </main>
  );
}
