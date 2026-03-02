"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Smartphone, Tablet, Monitor, Zap, BarChart3, MessageCircle, Bell } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface Feature {
  icon: React.ReactNode;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

const features: Feature[] = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Quản lý đơn hàng",
    titleEn: "Order Management",
    description: "Tạo, theo dõi và cập nhật đơn hàng dễ dàng trên mobile.",
    descriptionEn: "Create, track and update orders easily on mobile.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Thông báo đẩy",
    titleEn: "Push Notifications",
    description: "Nhận thông báo real-time về đơn hàng mới, cập nhật trạng thái.",
    descriptionEn: "Receive real-time notifications about new orders, status updates.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Chat tích hợp",
    titleEn: "Integrated Chat",
    description: "Chat trực tiếp với khách hàng, đội ngũ hỗ trợ trong app.",
    descriptionEn: "Chat directly with customers, support team in app.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Báo cáo thông minh",
    titleEn: "Smart Reports",
    description: "Xem báo cáo doanh thu, hiệu suất mọi lúc mọi nơi.",
    descriptionEn: "View revenue, performance reports anytime, anywhere.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "iOS & Android",
    titleEn: "iOS & Android",
    description: "App được phát triển trên cả 2 nền tảng iOS và Android.",
    descriptionEn: "App developed on both iOS and Android platforms.",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Kết nối Web",
    titleEn: "Web Connection",
    description: "Đồng bộ dữ liệu với website, quản lý tập trung.",
    descriptionEn: "Sync data with website, centralized management.",
  },
];

const packages = [
  {
    name: "Basic App",
    price: "29.9",
    unit: "triệu VNĐ",
    unitEn: "million VND",
    description: "App cơ bản cho doanh nghiệp",
    descriptionEn: "Basic app for business",
    features: [
      "App iOS + Android",
      "Giao diện cơ bản",
      "Đăng ký/Đăng nhập",
      "Quản lý đơn hàng",
      "Thông báo đẩy",
      "Bảo hành 12 tháng",
    ],
  },
  {
    name: "Pro App",
    price: "59.9",
    unit: "triệu VNĐ",
    unitEn: "million VND",
    description: "App đầy đủ tính năng",
    descriptionEn: "Full-featured app",
    popular: true,
    features: [
      "App iOS + Android",
      "Giao diện theo yêu cầu",
      "Đăng ký/Đăng nhập",
      "Quản lý đơn hàng",
      "Thông báo đẩy",
      "Tích hợp thanh toán",
      "Báo cáo nâng cao",
      "Bảo hành 24 tháng",
    ],
  },
  {
    name: "Enterprise App",
    price: "Liên hệ",
    unit: "",
    unitEn: "",
    description: "App doanh nghiệp",
    descriptionEn: "Enterprise app",
    features: [
      "App theo yêu cầu",
      "Giao diện cao cấp",
      "Tích hợp CRM/ERP",
      "AI/Chatbot",
      "Bảo hành trọn đời",
      "Hỗ trợ 24/7",
    ],
  },
];

export default function AppPage() {
  const { lang, setLang } = useLanguage();

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=800&fit=crop&q=80" 
            alt="Mobile App"
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
                <Smartphone size={18} />
                App
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
                {lang === "vi" ? "Mobile App" : "Mobile App"}{" "}
                <span className="text-[#356df1]">
                  {lang === "vi" ? "Logistics" : "Logistics"}
                </span>
              </h1>
              
              <p className="text-lg text-[#666666] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                {lang === "vi"
                  ? "Ứng dụng di động giúp quản lý đơn hàng, theo dõi vận chuyển, giao tiếp với khách hàng mọi lúc mọi nơi."
                  : "Mobile app to manage orders, track shipments, communicate with customers anytime, anywhere."}
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
                  <span>{lang === "vi" ? "iOS & Android" : "iOS & Android"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#356df1]" />
                  <span>{lang === "vi" ? "Dùng thử miễn phí" : "Free Trial"}</span>
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80" 
                  alt="App Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#356df1]/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {lang === "vi" ? "Tính năng nổi bật" : "Key Features"}
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              {lang === "vi"
                ? "Tất cả tính năng cần thiết cho app logistics hiện đại"
                : "All essential features for modern logistics app"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] p-6 rounded-2xl border border-gray-100 hover:border-[#356df1] transition-colors"
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
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {lang === "vi" ? "Bảng giá" : "Pricing"}
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              {lang === "vi"
                ? "Giá chưa bao gồm VAT. Liên hệ để được tư vấn chi tiết."
                : "Price excluding VAT. Contact for detailed consultation."}
            </p>
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
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=600&fit=crop&q=80" 
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            {lang === "vi" 
              ? "Sẵn sàng có app logistics?" 
              : "Ready to Have a Logistics App?"}
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            {lang === "vi"
              ? "Liên hệ ngay để được tư vấn miễn phí"
              : "Contact us now for free consultation"}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            {lang === "vi" ? "Liên hệ ngay" : "Contact Now"}
          </Link>
        </div>
      </section>
    </main>
  );
}
