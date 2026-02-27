"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const packages = [
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
];

export default function PricingPage() {
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

      {/* Pricing Cards */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
          </div>
        </div>
      </section>

      {/* FAQ or Note */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#666666] font-[family-name:var(--font-body)]">
            Giá chưa bao gồm VAT. Liên hệ để được tư vấn và báo giá chi tiết theo nhu cầu riêng.
          </p>
        </div>
      </section>
    </main>
  );
}
