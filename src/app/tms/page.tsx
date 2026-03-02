"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Truck, MapPin, BarChart3, Clock, Route, Fuel, Users } from "lucide-react";
import Link from "next/link";
import LeadFormModal from "@/components/LeadFormModal";

interface Feature {
  icon: React.ReactNode;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

const features: Feature[] = [
  {
    icon: <Route className="w-6 h-6" />,
    title: "Tối ưu lộ trình",
    titleEn: "Route Optimization",
    description: "Tự động tính toán lộ trình tối ưu, tiết kiệm nhiên liệu và thời gian.",
    descriptionEn: "Automatically calculate optimal routes, save fuel and time.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Theo dõi GPS",
    titleEn: "GPS Tracking",
    description: "Theo dõi vị trí xe theo thời gian thực trên bản đồ trực quan.",
    descriptionEn: "Track vehicle location in real-time on visual map.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Quản lý đơn hàng",
    titleEn: "Order Management",
    description: "Quản lý đơn hàng từ đầu đến cuối, cập nhật trạng thái tự động.",
    descriptionEn: "Manage orders from start to finish, auto-update status.",
  },
  {
    icon: <Fuel className="w-6 h-6" />,
    title: "Quản lý nhiên liệu",
    titleEn: "Fuel Management",
    description: "Theo dõi tiêu thụ nhiên liệu, tính chi phí vận chuyển chính xác.",
    descriptionEn: "Track fuel consumption, calculate accurate transport costs.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Lịch trình thông minh",
    titleEn: "Smart Scheduling",
    description: "Tự động sắp xếp lịch trình giao hàng dựa trên đơn hàng và xe.",
    descriptionEn: "Auto-schedule deliveries based on orders and vehicles.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Quản lý tài xế",
    titleEn: "Driver Management",
    description: "Quản lý thông tin tài xế, phân công công việc, theo dõi hiệu suất.",
    descriptionEn: "Manage driver info, assign tasks, track performance.",
  },
];

const modules = [
  {
    name: "Quản lý đội xe",
    nameEn: "Fleet Management",
    description: "Quản lý thông tin xe, bảo trì, đăng kiểm, bảo hiểm",
    descriptionEn: "Manage vehicle info, maintenance, registration, insurance",
  },
  {
    name: "Quản lý tài xế",
    nameEn: "Driver Management",
    description: "Phân công công việc, theo dõi hành trình, đánh giá hiệu suất",
    descriptionEn: "Assign tasks, track trips, evaluate performance",
  },
  {
    name: "Tối ưu lộ trình",
    nameEn: "Route Optimization",
    description: "Tính toán lộ trình tối ưu, giảm chi phí vận chuyển",
    descriptionEn: "Calculate optimal routes, reduce transport costs",
  },
  {
    name: "Báo cáo & Phân tích",
    nameEn: "Reports & Analytics",
    description: "Báo cáo tự động, phân tích hiệu quả vận hành",
    descriptionEn: "Auto reports, analyze operational efficiency",
  },
];

const packages = [
  {
    name: "TMS Basic",
    price: "59.9",
    unit: "triệu VNĐ/năm",
    unitEn: "million VND/year",
    description: "Cho doanh nghiệp nhỏ",
    descriptionEn: "For small businesses",
    features: [
      "Quản lý 10 xe",
      "Theo dõi GPS",
      "Quản lý đơn hàng",
      "Báo cáo cơ bản",
      "Hỗ trợ 24/7",
    ],
  },
  {
    name: "TMS Pro",
    price: "129.9",
    unit: "triệu VNĐ/năm",
    unitEn: "million VND/year",
    description: "Giải pháp toàn diện",
    descriptionEn: "Complete solution",
    popular: true,
    features: [
      "Quản lý không giới hạn",
      "Tối ưu lộ trình AI",
      "Quản lý nhiên liệu",
      "Báo cáo nâng cao",
      "Tích hợp API",
      "Hỗ trợ 24/7",
    ],
  },
  {
    name: "TMS Enterprise",
    price: "Liên hệ",
    unit: "",
    unitEn: "",
    description: "Giải pháp doanh nghiệp",
    descriptionEn: "Enterprise solution",
    features: [
      "Giải pháp riêng biệt",
      "Team riêng hỗ trợ",
      "Phát triển theo yêu cầu",
      "AI & Machine Learning",
      "Bảo hành trọn đời",
      "SLA cam kết",
    ],
  },
];

export default function TMSPage() {
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=800&fit=crop&q=80" 
            alt="TMS"
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
                <Truck size={18} />
                TMS
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
                {lang === "vi" ? "Phần mềm TMS" : "TMS Software"}{" "}
                <span className="text-[#356df1]">
                  {lang === "vi" ? "Quản lý vận tải" : "Transport Management"}
                </span>
              </h1>
              
              <p className="text-lg text-[#666666] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                {lang === "vi"
                  ? "Hệ thống quản lý vận tải thông minh giúp tối ưu lộ trình, giảm chi phí nhiên liệu, theo dõi xe và tài xế theo thời gian thực."
                  : "Smart transport management system to optimize routes, reduce fuel costs, track vehicles and drivers in real-time."}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => setIsLeadFormOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#356df1] text-[#ffffff] px-6 py-3 rounded-full font-semibold hover:bg-[#2a5ad9] transition-colors"
                >
                  {lang === "vi" ? "Nhận báo giá" : "Get Quote"}
                  <ArrowRight size={18} />
                </button>
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
                  <span>{lang === "vi" ? "Tiết kiệm 25% nhiên liệu" : "Save 25% Fuel"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#356df1]" />
                  <span>{lang === "vi" ? "Tăng 40% hiệu suất" : "Boost 40% Efficiency"}</span>
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
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&q=80" 
                  alt="TMS Preview"
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
                  <Truck className="w-6 h-6" />
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

                <button 
                  onClick={() => setIsLeadFormOpen(true)}
                  className={`block w-full py-4 rounded-full font-semibold text-center transition-all ${
                    pkg.popular 
                      ? "bg-[#ffffff] text-[#356df1] hover:bg-[#f8fafc]" 
                      : "bg-[#356df1] text-[#ffffff] hover:bg-[#2a5ad9]"
                  }`}
                >
                  {lang === "vi" ? "Đăng ký ngay" : "Register Now"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&h=600&fit=crop&q=80" 
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            {lang === "vi" 
              ? "Tối ưu hoạt động vận tải?" 
              : "Optimize Transport Operations?"}
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            {lang === "vi"
              ? "Giảm 25% chi phí nhiên liệu, tăng 40% hiệu suất giao hàng"
              : "Reduce 25% fuel costs, increase 40% delivery efficiency"}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            {lang === "vi" ? "Dùng thử ngay" : "Try Now"}
          </Link>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
        service="tms"
        source="tms"
      />
    </main>
  );
}
