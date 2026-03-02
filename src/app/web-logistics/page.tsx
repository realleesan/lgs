"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Globe, Search, BarChart3, Smartphone, Mail, MessageCircle } from "lucide-react";
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
    icon: <Search className="w-6 h-6" />,
    title: "Tối ưu SEO",
    titleEn: "SEO Optimized",
    description: "Thiết kế chuẩn SEO từ đầu, tăng thứ hạng Google, thu hút khách hàng tự nhiên.",
    descriptionEn: "SEO-standard design from the start, improve Google rankings, attract organic customers.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Thống kê & Báo cáo",
    titleEn: "Analytics & Reports",
    description: "Theo dõi lượt truy cập, hành vi khách hàng, doanh thu theo thời gian thực.",
    descriptionEn: "Track visits, customer behavior, revenue in real-time.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Domain & Hosting",
    titleEn: "Domain & Hosting",
    description: "Miễn phí domain và hosting năm đầu, hỗ trợ SSL miễn phí.",
    descriptionEn: "Free domain and hosting for the first year, free SSL support.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    titleEn: "Responsive Design",
    description: "Hiển thị hoàn hảo trên mọi thiết bị: desktop, tablet, mobile.",
    descriptionEn: "Perfect display on all devices: desktop, tablet, mobile.",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Marketing",
    titleEn: "Email Marketing",
    description: "Tích hợp form đăng ký nhận tin, gửi email tự động cho khách hàng.",
    descriptionEn: "Integrate subscription forms, send automated emails to customers.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Tích hợp Chat",
    titleEn: "Chat Integration",
    description: "Tích hợp Zalo, Facebook Messenger, hotline để khách liên hệ dễ dàng.",
    descriptionEn: "Integrate Zalo, Facebook Messenger, hotline for easy customer contact.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "9.9",
    unit: "triệu VNĐ/năm",
    unitEn: "million VND/year",
    description: "Cho doanh nghiệp nhỏ",
    descriptionEn: "For small businesses",
    features: [
      "Giao diện chuẩn logistics",
      "5 trang nội dung",
      "Tối ưu SEO cơ bản",
      "Domain + Hosting năm đầu",
      "SSL miễn phí",
      "Bảo hành 12 tháng",
      "Hỗ trợ 24/7",
    ],
  },
  {
    name: "Business",
    price: "19.9",
    unit: "triệu VNĐ/năm",
    unitEn: "million VND/year",
    description: "Giải pháp toàn diện",
    descriptionEn: "Complete solution",
    popular: true,
    features: [
      "Giao diện theo yêu cầu",
      "Trang không giới hạn",
      "SEO nâng cao",
      "Domain + Hosting năm đầu",
      "SSL miễn phí",
      "Bảo hành 24 tháng",
      "Hỗ trợ 24/7",
      "Tích hợp Zalo/Chat",
      "Quản lý đơn hàng",
    ],
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    unit: "",
    unitEn: "",
    description: "Giải pháp riêng biệt",
    descriptionEn: "Custom solution",
    features: [
      "Thiết kế theo yêu cầu",
      "Trang không giới hạn",
      "SEO toàn diện",
      "Hosting riêng",
      "SSL Premium",
      "Bảo hành trọn đời",
      "Team riêng hỗ trợ",
      "Tích hợp API",
      "Phát triển liên tục",
    ],
  },
];

export default function WebLogisticsPage() {
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop&q=80" 
            alt="Web Logistics"
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
                <Globe size={18} />
                {lang === "vi" ? "Web Logistics" : "Web Logistics"}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
                {lang === "vi" 
                  ? "Website Logistics" 
                  : "Logistics Website"}{" "}
                <span className="text-[#356df1]">
                  {lang === "vi" ? "Chuyên nghiệp" : "Professional"}
                </span>
              </h1>
              
              <p className="text-lg text-[#666666] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                {lang === "vi"
                  ? "Giới thiệu công ty vận tải, logistics với giao diện hiện đại. Tích hợp đầy đủ tính năng: tra cứu vận đơn, bảng giá tự động, đặt dịch vụ online."
                  : "Introduce transport, logistics company with modern interface. Fully integrated features: order tracking, automatic pricing, online service booking."}
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
                  <span>{lang === "vi" ? "Miễn phí Domain" : "Free Domain"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#356df1]" />
                  <span>{lang === "vi" ? "Miễn phí Hosting" : "Free Hosting"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#356df1]" />
                  <span>{lang === "vi" ? "SSL miễn phí" : "Free SSL"}</span>
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80" 
                  alt="Web Logistics Preview"
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
                ? "Tất cả tính cần thiết cho website logistics hiện đại"
                : "All essential features for modern logistics website"}
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
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=600&fit=crop&q=80" 
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            {lang === "vi" 
              ? "Sẵn sàng có website logistics?" 
              : "Ready to Have a Logistics Website?"}
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            {lang === "vi"
              ? "Liên hệ ngay để được tư vấn miễn phí"
              : "Contact us now for free consultation"}
          </p>
          <button 
            onClick={() => setIsLeadFormOpen(true)}
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            {lang === "vi" ? "Liên hệ ngay" : "Contact Now"}
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
        service="web-logistics"
        source="web-logistics"
      />
    </main>
  );
}
