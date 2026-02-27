"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, BarChart3, Package, Truck, Globe, Shield, Zap } from "lucide-react";

const solutions = [
  {
    id: "all-in-one",
    title: "Giải pháp All-in-One",
    subtitle: "Toàn diện",
    icon: <Globe className="w-6 h-6" />,
    description: "Hệ thống tích hợp tất cả tính năng cần thiết cho doanh nghiệp Logistics. Từ quản lý đơn hàng, kho bãi đến vận tải trong một nền tảng duy nhất.",
    features: ["Quản lý tập trung", "Tích hợp đa kênh", "Báo cáo real-time", "Tiết kiệm 30% chi phí"],
  },
  {
    id: "wms",
    title: "Quản lý kho bãi (WMS)",
    subtitle: "Kho bãi",
    icon: <Package className="w-6 h-6" />,
    description: "Hệ thống quản lý kho thông minh. Theo dõi tồn kho, quy trình nhập xuất, tối ưu không gian lưu trữ.",
    features: ["Quản lý tồn kho", "Quy trình nhập/xuất", "Báo cáo tự động", "Tích hợp barcode"],
  },
  {
    id: "tms",
    title: "Quản lý vận tải (TMS)",
    subtitle: "Vận tải",
    icon: <Truck className="w-6 h-6" />,
    description: "Giải pháp quản lý vận tải toàn diện. Điều phối xe, theo dõi lộ trình, tối ưu chi phí vận chuyển.",
    features: ["Điều phối xe", "Theo dõi GPS", "Tối ưu lộ trình", "Quản lý tài xế"],
  },
  {
    id: "digital",
    title: "Tư vấn chuyển đổi số",
    subtitle: "Consulting",
    icon: <Zap className="w-6 h-6" />,
    description: "Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số. Phân tích quy trình, đề xuất giải pháp phù hợp.",
    features: ["Phân tích quy trình", "Đề xuất giải pháp", "Triển khai từng bước", "Đào tạo nhân sự"],
  },
];

const benefits = [
  { number: "30%", label: "Giảm chi phí" },
  { number: "50%", label: "Tăng hiệu suất" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Hỗ trợ" },
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("all-in-one");

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
            Giải pháp
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Giải pháp tối ưu cho doanh nghiệp Logistics
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-[#356df1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#ffffff] font-[family-name:var(--font-heading)]">{benefit.number}</div>
                <div className="text-[#ffffff]/80 text-sm font-[family-name:var(--font-body)]">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 font-[family-name:var(--font-body)] ${
                  activeTab === solution.id
                    ? "bg-[#356df1] text-[#ffffff]"
                    : "bg-[#f8fafc] text-[#666666] hover:bg-[#f1f5f9]"
                }`}
              >
                {solution.icon}
                {solution.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356df1]/10 text-[#356df1] text-sm font-medium mb-4">
                  {activeSolution.icon}
                  {activeSolution.subtitle}
                </div>
                <h2 className="text-3xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
                  {activeSolution.title}
                </h2>
                <p className="text-[#666666] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                  {activeSolution.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {activeSolution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#356df1]/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#356df1]" />
                      </div>
                      <span className="text-[#000000] font-[family-name:var(--font-body)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="aspect-square bg-[#f8fafc] rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#356df1]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <div className="text-[#356df1]">
                        {activeSolution.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-[#000000] font-[family-name:var(--font-heading)]">
                      {activeSolution.title}
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 bg-[#ffffff] p-4 rounded-2xl border border-gray-100 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-[#999999]">Bảo mật</div>
                      <div className="font-bold text-[#000000]">ISO 27001</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Cần tư vấn giải pháp?
          </h2>
          <p className="text-[#666666] mb-8 font-[family-name:var(--font-body)]">
            Liên hệ để được phân tích và đề xuất giải pháp phù hợp
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#356df1] text-[#ffffff] px-8 py-4 rounded-full font-semibold hover:bg-[#2a5ad9] transition-all"
          >
            Liên hệ tư vấn
          </a>
        </div>
      </section>
    </main>
  );
}
