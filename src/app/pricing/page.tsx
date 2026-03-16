"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import LeadFormModal from "@/components/LeadFormModal";

const pricingData: Record<string, Array<{
  name: string;
  price: string;
  unit: string;
  description: string;
  features: Array<{ name: string; included: boolean }>;
  cta: string;
  popular: boolean;
}>> = {
  // Website Logistics (from app.md)
  website: [
    {
      name: "Starter",
      price: "9.9M",
      unit: "VNĐ/năm",
      description: "Phù hợp doanh nghiệp nhỏ",
      features: [
        { name: "Landing page", included: true },
        { name: "1 ngôn ngữ", included: true },
        { name: "Form liên hệ", included: true },
        { name: "Bảo hành 12 tháng", included: true },
        { name: "Tracking đơn hàng", included: false },
        { name: "CMS quản lý", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "Business",
      price: "19.9M",
      unit: "VNĐ/năm",
      description: "Phù hợp doanh nghiệp vừa",
      features: [
        { name: "Website đầy đủ", included: true },
        { name: "Tracking đơn hàng", included: true },
        { name: "CMS quản lý", included: true },
        { name: "Bảo hành 24 tháng", included: true },
        { name: "Đa ngôn ngữ", included: false },
        { name: "Tích hợp API", included: false },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      unit: "",
      description: "Phù hợp doanh nghiệp lớn",
      features: [
        { name: "Đa ngôn ngữ", included: true },
        { name: "Dashboard", included: true },
        { name: "Tích hợp API", included: true },
        { name: "Bảo hành trọn đời", included: true },
        { name: "Hỗ trợ 24/7", included: true },
        { name: "Thiết kế theo yêu cầu", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
  // Logistics Management System (LMS) - from app.md
  lms: [
    {
      name: "Starter",
      price: "29.9M",
      unit: "VNĐ/năm",
      description: "Phù hợp doanh nghiệp nhỏ",
      features: [
        { name: "Quản lý đơn hàng", included: true },
        { name: "Quản lý khách hàng", included: false },
        { name: "Tracking vận chuyển", included: false },
        { name: "Quản lý tài xế/xe", included: false },
        { name: "Dashboard doanh thu", included: false },
        { name: "Tích hợp API", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "Business",
      price: "59.9M",
      unit: "VNĐ/năm",
      description: "Phù hợp doanh nghiệp vừa",
      features: [
        { name: "Quản lý đơn hàng", included: true },
        { name: "Quản lý khách hàng", included: true },
        { name: "Tracking vận chuyển", included: true },
        { name: "Quản lý tài xế/xe", included: true },
        { name: "Dashboard doanh thu", included: false },
        { name: "Tích hợp API", included: false },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      unit: "",
      description: "Phù hợp doanh nghiệp lớn",
      features: [
        { name: "Full system", included: true },
        { name: "API tích hợp", included: true },
        { name: "Automation", included: true },
        { name: "Quản lý chứng từ", included: true },
        { name: "Báo cáo nâng cao", included: true },
        { name: "Hỗ trợ 24/7", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
  // Mobile App (from app.md)
  mobile: [
    {
      name: "Starter",
      price: "29.9M",
      unit: "VNĐ",
      description: "Phù hợp doanh nghiệp nhỏ",
      features: [
        { name: "Driver App cơ bản", included: true },
        { name: "Nhận chuyến", included: true },
        { name: "Cập nhật trạng thái", included: true },
        { name: "Customer App", included: false },
        { name: "GPS tracking", included: false },
        { name: "Scan POD", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "Business",
      price: "59.9M",
      unit: "VNĐ",
      description: "Phù hợp doanh nghiệp vừa",
      features: [
        { name: "Driver App", included: true },
        { name: "Customer App", included: true },
        { name: "GPS real-time", included: true },
        { name: "Scan POD", included: true },
        { name: "Thông báo tự động", included: true },
        { name: "Tích hợp API", included: false },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      unit: "",
      description: "Phù hợp doanh nghiệp lớn",
      features: [
        { name: "Full Mobile System", included: true },
        { name: "Tích hợp API", included: true },
        { name: "AI/Chatbot", included: true },
        { name: "Custom features", included: true },
        { name: "Bảo hành trọn đời", included: true },
        { name: "Hỗ trợ 24/7", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
  // Custom System (from app.md)
  custom: [
    {
      name: "Basic",
      price: "49.9M",
      unit: "VNĐ",
      description: "Phù hợp doanh nghiệp nhỏ",
      features: [
        { name: "Freight forwarding system", included: true },
        { name: "Giao diện cơ bản", included: true },
        { name: "Quản lý đơn hàng", included: true },
        { name: "Warehouse management", included: false },
        { name: "CRM logistics", included: false },
        { name: "Tích hợp API", included: false },
      ],
      cta: "Bắt đầu",
      popular: false,
    },
    {
      name: "Pro",
      price: "99.9M",
      unit: "VNĐ",
      description: "Phù hợp doanh nghiệp vừa",
      features: [
        { name: "Full Freight forwarding", included: true },
        { name: "Warehouse management (WMS)", included: true },
        { name: "CRM logistics", included: true },
        { name: "Booking system", included: true },
        { name: "Tích hợp API", included: true },
        { name: "Báo cáo nâng cao", included: false },
      ],
      cta: "Bắt đầu",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      unit: "",
      description: "Phù hợp doanh nghiệp lớn",
      features: [
        { name: "Full system theo yêu cầu", included: true },
        { name: "Tích hợp ERP/CRM", included: true },
        { name: "Automation workflow", included: true },
        { name: "AI/Analytics", included: true },
        { name: "Bảo hành trọn đời", included: true },
        { name: "Hỗ trợ 24/7", included: true },
      ],
      cta: "Liên hệ",
      popular: false,
    },
  ],
};

export default function PricingPage() {
  const [activeService, setActiveService] = useState("website");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const currentPackages = pricingData[activeService] || pricingData.website;

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
        </div>
      </section>

      {/* Service Tabs */}
      <section className="pb-8 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => { setActiveService("website"); setCurrentSlide(0); }}
              className={`px-6 py-3 rounded-full transition-all ${
                activeService === "website"
                  ? 'bg-[#356df1] text-[#ffffff]'
                  : 'bg-[#f8fafc] text-[#666666] hover:bg-[#e8eef5]'
              }`}
            >
              <span className="text-base font-medium font-[family-name:var(--font-body)]">Website Logistics</span>
            </button>
            <button
              onClick={() => { setActiveService("lms"); setCurrentSlide(0); }}
              className={`px-6 py-3 rounded-full transition-all ${
                activeService === "lms"
                  ? 'bg-[#356df1] text-[#ffffff]'
                  : 'bg-[#f8fafc] text-[#666666] hover:bg-[#e8eef5]'
              }`}
            >
              <span className="text-base font-medium font-[family-name:var(--font-body)]">Phần mềm LMS</span>
            </button>
            <button
              onClick={() => { setActiveService("mobile"); setCurrentSlide(0); }}
              className={`px-6 py-3 rounded-full transition-all ${
                activeService === "mobile"
                  ? 'bg-[#356df1] text-[#ffffff]'
                  : 'bg-[#f8fafc] text-[#666666] hover:bg-[#e8eef5]'
              }`}
            >
              <span className="text-base font-medium font-[family-name:var(--font-body)]">Mobile App</span>
            </button>
            <button
              onClick={() => { setActiveService("custom"); setCurrentSlide(0); }}
              className={`px-6 py-3 rounded-full transition-all ${
                activeService === "custom"
                  ? 'bg-[#356df1] text-[#ffffff]'
                  : 'bg-[#f8fafc] text-[#666666] hover:bg-[#e8eef5]'
              }`}
            >
              <span className="text-base font-medium font-[family-name:var(--font-body)]">Custom System</span>
            </button>
          </div>

          {/* VAT Note - Above cards */}
          <div className="text-center mt-6">
            <p className="text-[#666666] font-[family-name:var(--font-body)]">
              Giá chưa bao gồm VAT. Liên hệ để được tư vấn và báo giá chi tiết theo nhu cầu riêng.
            </p>
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
              className="flex-shrink-0 w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#666666] hover:border-[#356df1] hover:text-[#356df1] transition-colors"
            >
              <ChevronLeft size={28} />
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
                      className={`relative rounded-3xl p-8 border ${
                        pkg.popular 
                          ? "bg-[#356df1] border-[#356df1] text-[#ffffff]" 
                          : "bg-[#ffffff] border-gray-200"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ffffff] text-[#356df1] text-sm font-bold rounded-full whitespace-nowrap">
                          Phổ biến
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className={`text-xl font-bold mb-2 font-[family-name:var(--font-heading)] ${pkg.popular ? "text-[#ffffff]" : "text-[#000000]"}`}>
                          {pkg.name}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className={`text-5xl font-bold font-[family-name:var(--font-heading)] ${pkg.popular ? "text-[#ffffff]" : "text-[#356df1]"}`}>
                            {pkg.price}
                          </span>
                          {pkg.unit && <span className={`text-base ${pkg.popular ? "text-[#ffffff]/80" : "text-[#666666]"}`}>{pkg.unit}</span>}
                        </div>
                        <p className={`text-base mt-2 ${pkg.popular ? "text-[#ffffff]/80" : "text-[#666666]"}`}>
                          {pkg.description}
                        </p>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            {feature.included ? (
                              <Check size={20} className={pkg.popular ? "text-[#ffffff]" : "text-[#356df1]"} />
                            ) : (
                              <X size={20} className="text-gray-400" />
                            )}
                            <span className={feature.included 
                              ? (pkg.popular ? "text-[#ffffff]" : "text-[#000000]") 
                              : "text-gray-400 text-base"
                            }>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button 
                        onClick={() => {
                          setSelectedService(activeService);
                          setIsLeadFormOpen(true);
                        }}
                        className={`block w-full py-4 rounded-full font-semibold text-center transition-all ${
                          pkg.popular 
                            ? "bg-[#ffffff] text-[#356df1] hover:bg-[#f8fafc]" 
                            : "bg-[#356df1] text-[#ffffff] hover:bg-[#2a5ad9]"
                        }`}
                      >
                        {pkg.cta}
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="flex-shrink-0 w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#666666] hover:border-[#356df1] hover:text-[#356df1] transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
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

      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
        service={selectedService}
        source="pricing"
      />
    </main>
  );
}
