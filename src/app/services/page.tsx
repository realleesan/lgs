"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Layout, Smartphone, Settings, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Logistics",
    subtitle: "Chuyên nghiệp & Tối ưu SEO",
    description: "Website giới thiệu công ty vận tải, logistics với giao diện hiện đại. Tích hợp đầy đủ tính năng cần thiết.",
    features: ["Tra cứu vận đơn", "Bảng giá tự động", "Tối ưu SEO", "CMS dễ quản lý"],
    icon: <Layout className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    reversed: false,
  },
  {
    title: "App & Phần mềm",
    subtitle: "Quản lý toàn diện",
    description: "Giải pháp TMS, WMS giúp tự động hóa quy trình vận hành. Quản lý đơn hàng, điều phối xe, kho bãi hiệu quả.",
    features: ["Quản lý đơn hàng", "Điều phối xe", "Báo cáo thông minh", "Tích hợp API"],
    icon: <Smartphone className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    reversed: true,
  },
  {
    title: "Thiết kế theo yêu cầu",
    subtitle: "Giải pháp riêng biệt",
    description: "Phát triển tính năng theo quy trình đặc thù của doanh nghiệp. 100% cá nhân hóa theo nhu cầu.",
    features: ["Phân tích nghiệp vụ", "UI/UX độc quyền", "Khả năng mở rộng", "Hỗ trợ lâu dài"],
    icon: <Settings className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
    reversed: false,
  },
];

const benefits = [
  { icon: <Zap className="w-5 h-5" />, text: "Triển khai nhanh" },
  { icon: <Shield className="w-5 h-5" />, text: "Bảo mật cao" },
  { icon: <BarChart3 className="w-5 h-5" />, text: "Phân tích dữ liệu" },
  { icon: <Check className="w-5 h-5" />, text: "Hỗ trợ 24/7" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
            Dịch vụ
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Giải pháp công nghệ toàn diện cho ngành Logistics
          </p>
        </div>
      </section>

      {/* Services Alternating Layout */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={service.reversed ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356df1]/10 text-[#356df1] text-sm font-medium mb-4">
                  {service.icon}
                  {service.subtitle}
                </div>
                <h2 className="text-3xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed font-[family-name:var(--font-body)]">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#000000]">
                      <Check className="w-4 h-4 text-[#356df1]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-[#356df1] font-semibold hover:gap-3 transition-all font-[family-name:var(--font-body)]"
                >
                  Tìm hiểu thêm <ArrowRight size={18} />
                </Link>
              </div>

              {/* Image */}
              <div className={service.reversed ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-[#ffffff] p-4 rounded-2xl border border-gray-100 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#356df1] rounded-xl flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-xs text-[#999999]">Chi tiết</div>
                        <div className="font-bold text-[#000000]">Xem ngay</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-[#666666]">
                <div className="w-8 h-8 bg-[#356df1]/10 rounded-lg flex items-center justify-center text-[#356df1]">
                  {benefit.icon}
                </div>
                <span className="font-medium font-[family-name:var(--font-body)]">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#356df1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Cần tư vấn chi tiết?
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            Liên hệ ngay để được hỗ trợ lựa chọn giải pháp phù hợp
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </main>
  );
}
