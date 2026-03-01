"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronLeft, ChevronRight, ChevronDown, Layout, Smartphone, Settings, Box } from "lucide-react";
import Link from "next/link";

const services = [
  { id: "web", name: "Thiết kế Web Logistics", icon: Layout },
  { id: "app", name: "Phát triển App", icon: Smartphone },
  { id: "wms", name: "Phần mềm WMS/TMS", icon: Box },
  { id: "custom", name: "Thiết kế theo yêu cầu", icon: Settings },
];

const pricingData: Record<string, Array<{
  name: string;
  price: string;
  unit: string;
  description: string;
  features: Array<{ name: string; included: boolean }>;
  cta: string;
  popular: boolean;
}>> = {
  web: [
    {
      name: "Starter",
      price: "9.9M",
      unit: "VNĐ/năm",
      description: "Cho doanh nghiệp nhỏ",
      features: [
        { name: "Web Logistics", included: true },
        { name: "Domain + Hosting", included: true },
        { name: "Hỗ trợ SEO cơ bản", included: true },
        { name: "Bảo hành 12 tháng", included: true },
        { name: "App quản lý", included: false },
        { name: "Phần mềm WMS/TMS", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "Business",
      price: "19.9M",
      unit: "VNĐ/năm",
      description: "Giải pháp toàn diện",
      features: [
        { name: "Web Logistics", included: true },
        { name: "Domain + Hosting", included: true },
        { name: "Hỗ trợ SEO nâng cao", included: true },
        { name: "Bảo hành 24 tháng", included: true },
        { name: "App quản lý", included: true },
        { name: "Phần mềm WMS", included: true },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      unit: "",
      description: "Giải pháp riêng",
      features: [
        { name: "Thiết kế theo yêu cầu", included: true },
        { name: "Hosting riêng", included: true },
        { name: "SEO toàn diện", included: true },
        { name: "Bảo hành trọn đời", included: true },
        { name: "App đầy đủ", included: true },
        { name: "WMS/TMS đầy đủ", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
  app: [
    {
      name: "Basic App",
      price: "29.9M",
      unit: "VNĐ",
      description: "App cơ bản cho doanh nghiệp",
      features: [
        { name: "App iOS + Android", included: true },
        { name: "Giao diện cơ bản", included: true },
        { name: "Đăng ký/Đăng nhập", included: true },
        { name: "Quản lý đơn hàng", included: true },
        { name: "Thông báo đẩy", included: true },
        { name: "Tích hợp payment", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "Pro App",
      price: "59.9M",
      unit: "VNĐ",
      description: "App đầy đủ tính năng",
      features: [
        { name: "App iOS + Android", included: true },
        { name: "Giao diện theo yêu cầu", included: true },
        { name: "Đăng ký/Đăng nhập", included: true },
        { name: "Quản lý đơn hàng", included: true },
        { name: "Thông báo đẩy", included: true },
        { name: "Tích hợp payment", included: true },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "Enterprise App",
      price: "Liên hệ",
      unit: "",
      description: "Giải pháp riêng",
      features: [
        { name: "App theo yêu cầu", included: true },
        { name: "Giao diện cao cấp", included: true },
        { name: "Tích hợp CRM/ERP", included: true },
        { name: "AI/Chatbot", included: true },
        { name: "Bảo hành trọn đời", included: true },
        { name: "Hỗ trợ 24/7", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
  wms: [
    {
      name: "WMS Basic",
      price: "49.9M",
      unit: "VNĐ/năm",
      description: "Quản lý kho cơ bản",
      features: [
        { name: "Quản lý nhập xuất kho", included: true },
        { name: "Quản lý tồn kho", included: true },
        { name: "Mã vạch/Scan", included: true },
        { name: "Báo cáo cơ bản", included: true },
        { name: "Nhiều kho", included: false },
        { name: "Tích hợp API", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "WMS Pro",
      price: "99.9M",
      unit: "VNĐ/năm",
      description: "Giải pháp quản lý kho toàn diện",
      features: [
        { name: "Quản lý nhập xuất kho", included: true },
        { name: "Quản lý tồn kho", included: true },
        { name: "Mã vạch/Scan", included: true },
        { name: "Báo cáo nâng cao", included: true },
        { name: "Nhiều kho", included: true },
        { name: "Tích hợp API", included: true },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "WMS Enterprise",
      price: "Liên hệ",
      unit: "",
      description: "Giải pháp riêng",
      features: [
        { name: "WMS đầy đủ", included: true },
        { name: "TMS tích hợp", included: true },
        { name: "Multi-warehouse", included: true },
        { name: "AI dự báo tồn kho", included: true },
        { name: "Bảo hành trọn đời", included: true },
        { name: "Hỗ trợ 24/7", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
  custom: [
    {
      name: "Basic Custom",
      price: "39.9M",
      unit: "VNĐ",
      description: "Thiết kế theo yêu cầu cơ bản",
      features: [
        { name: "Thiết kế theo yêu cầu", included: true },
        { name: "1 năm bảo hành", included: true },
        { name: "Hỗ trợ cơ bản", included: true },
        { name: "Code sạch", included: true },
        { name: "Tài liệu kỹ thuật", included: false },
        { name: "Đào tạo sử dụng", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "Premium Custom",
      price: "79.9M",
      unit: "VNĐ",
      description: "Giải pháp tùy chỉnh cao cấp",
      features: [
        { name: "Thiết kế theo yêu cầu", included: true },
        { name: "2 năm bảo hành", included: true },
        { name: "Hỗ trợ 24/7", included: true },
        { name: "Code sạch, scalable", included: true },
        { name: "Tài liệu kỹ thuật", included: true },
        { name: "Đào tạo sử dụng", included: true },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "Enterprise Custom",
      price: "Liên hệ",
      unit: "",
      description: "Giải pháp doanh nghiệp",
      features: [
        { name: "Thiết kế theo yêu cầu", included: true },
        { name: "Bảo hành trọn đời", included: true },
        { name: "Hỗ trợ 24/7", included: true },
        { name: "Team riêng", included: true },
        { name: "Phát triển liên tục", included: true },
        { name: "SLA cam kết", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
};

export default function PricingPage() {
  const [activeService, setActiveService] = useState("web");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentPackages = pricingData[activeService] || pricingData.web;
  const ActiveIcon = services.find(s => s.id === activeService)?.icon || Layout;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentPackages.length) % currentPackages.length);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Bảng giá
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Chọn giải pháp phù hợp với nhu cầu
          </p>
        </div>
      </section>

      {/* Service Selector - Dropdown */}
      <section className="py-8 bg-[#ffffff] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-6 py-4 bg-[#f8fafc] border border-gray-200 rounded-xl hover:border-[#356df1] transition-colors"
            >
              <span className="flex items-center gap-3">
                <ActiveIcon className="w-6 h-6 text-[#356df1]" />
                <span className="text-lg font-medium text-[#000000] font-[family-name:var(--font-body)]">
                  {services.find(s => s.id === activeService)?.name}
                </span>
              </span>
              <ChevronDown className={`text-[#666666] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#ffffff] border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10"
                >
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <button
                        key={service.id}
                        onClick={() => {
                          setActiveService(service.id);
                          setCurrentSlide(0);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-6 py-4 hover:bg-[#f8fafc] transition-colors ${
                          activeService === service.id ? 'bg-[#356df1]/10 text-[#356df1]' : 'text-[#000000]'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-base font-medium font-[family-name:var(--font-body)]">
                          {service.name}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Service Tabs - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(service.id);
                    setCurrentSlide(0);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    activeService === service.id
                      ? 'bg-[#356df1] text-[#ffffff]'
                      : 'bg-[#f8fafc] text-[#666666] hover:bg-[#e8eef5]'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium font-[family-name:var(--font-body)]">{service.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Slider */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-8">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#666666] hover:border-[#356df1] hover:text-[#356df1] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Cards */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeService}-${currentSlide}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {currentPackages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative rounded-3xl p-6 border ${
                        pkg.popular 
                          ? "bg-[#356df1] border-[#356df1] text-[#ffffff]" 
                          : "bg-[#ffffff] border-gray-200"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ffffff] text-[#356df1] text-xs font-bold rounded-full">
                          Phổ biến
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
                          {pkg.unit && <span className={`text-sm ${pkg.popular ? "text-[#ffffff]/80" : "text-[#666666]"}`}>{pkg.unit}</span>}
                        </div>
                        <p className={`text-sm mt-2 ${pkg.popular ? "text-[#ffffff]/80" : "text-[#666666]"}`}>
                          {pkg.description}
                        </p>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            {feature.included ? (
                              <Check size={18} className={pkg.popular ? "text-[#ffffff]" : "text-[#356df1]"} />
                            ) : (
                              <X size={18} className="text-gray-400" />
                            )}
                            <span className={feature.included 
                              ? (pkg.popular ? "text-[#ffffff]" : "text-[#000000]") 
                              : "text-gray-400"
                            }>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link 
                        href="/contact"
                        className={`block w-full py-3 rounded-full font-semibold text-center transition-all ${
                          pkg.popular 
                            ? "bg-[#ffffff] text-[#356df1] hover:bg-[#f8fafc]" 
                            : "bg-[#356df1] text-[#ffffff] hover:bg-[#2a5ad9]"
                        }`}
                      >
                        {pkg.cta}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#666666] hover:border-[#356df1] hover:text-[#356df1] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots - Below cards */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {currentPackages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#356df1] w-8' : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Note included in pricing section */}
      <section className="py-8 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#666666] font-[family-name:var(--font-body)]">
            Giá chưa bao gồm VAT. Liên hệ để được tư vấn và báo giá chi tiết theo nhu cầu riêng.
          </p>
        </div>
      </section>
    </main>
  );
}
