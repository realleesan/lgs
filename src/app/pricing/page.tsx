"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Cơ bản",
    price: "9.990.000",
    unit: "VNĐ",
    description: "Phù hợp doanh nghiệp nhỏ mới bắt đầu",
    popular: false,
    features: [
      { name: "Website logistics có sẵn", included: true },
      { name: "Domain + Hosting 1 năm", included: true },
      { name: "Giao diện chuẩn responsive", included: true },
      { name: "Tích hợp form liên hệ", included: true },
      { name: "Hỗ trợ SEO cơ bản", included: true },
      { name: "Bảo hành 12 tháng", included: true },
      { name: "App quản lý", included: false },
      { name: "Phần mềm WMS/TMS", included: false },
      { name: "Tích hợp API", included: false },
      { name: "Hỗ trợ 24/7", included: false },
    ],
  },
  {
    name: "Nâng cao",
    price: "19.990.000",
    unit: "VNĐ",
    description: "Giải pháp toàn diện cho doanh nghiệp vừa",
    popular: true,
    features: [
      { name: "Website logistics có sẵn", included: true },
      { name: "Domain + Hosting 1 năm", included: true },
      { name: "Giao diện responsive tùy chỉnh", included: true },
      { name: "Tích hợp form liên hệ", included: true },
      { name: "Hỗ trợ SEO nâng cao", included: true },
      { name: "Bảo hành 24 tháng", included: true },
      { name: "App quản lý vận tải", included: true },
      { name: "Phần mềm WMS cơ bản", included: true },
      { name: "Tích hợp API", included: true },
      { name: "Hỗ trợ 24/7", included: false },
    ],
  },
  {
    name: "Doanh nghiệp",
    price: "Liên hệ",
    unit: "",
    description: "Giải pháp riêng biệt theo yêu cầu",
    popular: false,
    features: [
      { name: "Thiết kế website theo yêu cầu", included: true },
      { name: "Domain + Hosting riêng", included: true },
      { name: "Giao diện unique độc quyền", included: true },
      { name: "Tích hợp đa form liên hệ", included: true },
      { name: "SEO toàn diện", included: true },
      { name: "Bảo hành trọn đời", included: true },
      { name: "App quản lý đầy đủ", included: true },
      { name: "Phần mềm WMS/TMS đầy đủ", included: true },
      { name: "Tích hợp đa API", included: true },
      { name: "Hỗ trợ 24/7", included: true },
    ],
  },
];

const webPackages = [
  {
    name: "Gói Web Basic",
    price: "5.990.000",
    unit: "VNĐ",
    features: [
      "Giao diện có sẵn",
      "5 trang nội dung",
      "Domain + Hosting",
      "Hỗ trợ SEO",
      "Bảo hành 12 tháng",
    ],
  },
  {
    name: "Gói Web Pro",
    price: "12.990.000",
    unit: "VNĐ",
    features: [
      "Giao diện tùy chỉnh",
      "10 trang nội dung",
      "Domain + VIP Hosting",
      "SEO nâng cao",
      "Bảo hành 24 tháng",
    ],
  },
  {
    name: "Gói Web Enterprise",
    price: "25.990.000",
    unit: "VNĐ",
    features: [
      "Thiết kế độc quyền",
      "Trang không giới hạn",
      "Hosting riêng cao cấp",
      "SEO toàn diện",
      "Bảo hành trọn đời",
    ],
  },
];

const appPackages = [
  {
    name: "Gói App Basic",
    price: "29.990.000",
    unit: "VNĐ",
    features: [
      "App iOS + Android",
      "Chức năng cơ bản",
      "Admin Dashboard",
      "Hỗ trợ 1 năm",
      "Đăng ký App Store",
    ],
  },
  {
    name: "Gói App Business",
    price: "59.990.000",
    unit: "VNĐ",
    features: [
      "App iOS + Android",
      "Chức năng đầy đủ",
      "Admin Dashboard Pro",
      "Hỗ trợ 2 năm",
      "Đăng ký App Store",
      "Tích hợp thanh toán",
    ],
  },
  {
    name: "Gói App Enterprise",
    price: "Liên hệ",
    unit: "",
    features: [
      "App theo yêu cầu",
      "Tính năng tùy biến",
      "Hệ thống quản lý riêng",
      "Hỗ trợ trọn đời",
      "Đăng ký App Store",
      "Tích hợp đa nền tảng",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">Bảng giá dịch vụ</h1>
            <p className="text-xl text-[#666666] leading-relaxed font-[family-name:var(--font-body)]">
              Lựa chọn giải pháp phù hợp với nhu cầu và quy mô doanh nghiệp của bạn. Tất cả gói đều bao gồm hỗ trợ kỹ thuật và bảo trì.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#000000] text-center mb-4 font-[family-name:var(--font-heading)]">Gói giải pháp toàn diện</h2>
          <p className="text-[#666666] text-center mb-12 font-[family-name:var(--font-body)]">Giải pháp tích hợp đầy đủ tính năng cho doanh nghiệp logistics</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-[#ffffff] rounded-2xl border ${pkg.popular ? 'border-[#356df1] ring-2 ring-[#356df1]' : 'border-gray-200'} p-8`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#356df1] text-[#ffffff] text-sm font-bold rounded-full font-[family-name:var(--font-body)]">
                    Phổ biến nhất
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">{pkg.price}</span>
                    {pkg.unit && <span className="text-[#666666] font-[family-name:var(--font-body)]">/{pkg.unit}</span>}
                  </div>
                  <p className="text-[#666666] text-sm mt-2 font-[family-name:var(--font-body)]">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check size={20} className="text-[#356df1] shrink-0" />
                      ) : (
                        <X size={20} className="text-[#999999] shrink-0" />
                      )}
                      <span className={feature.included ? 'text-[#000000]' : 'text-[#999999]'}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full py-4 rounded-full font-bold text-center transition-colors font-[family-name:var(--font-body)] ${pkg.popular ? 'bg-[#356df1] text-[#ffffff] hover:bg-[#2a5ad9]' : 'bg-[#f5f5f5] text-[#000000] hover:bg-[#e5e5e5]'}`}>
                  {pkg.price === "Liên hệ" ? "Liên hệ ngay" : "Đăng ký ngay"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Packages */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#000000] text-center mb-4 font-[family-name:var(--font-heading)]">Gói thiết kế website</h2>
          <p className="text-[#666666] text-center mb-12 font-[family-name:var(--font-body)]">Giải pháp website chuyên nghiệp cho doanh nghiệp logistics</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] rounded-2xl border border-gray-200 p-8"
              >
                <h3 className="text-xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">{pkg.price}</span>
                  <span className="text-[#666666] font-[family-name:var(--font-body)]">VNĐ</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#666666]">
                      <Check size={18} className="text-[#356df1] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full py-3 bg-[#356df1] text-[#ffffff] rounded-full font-bold text-center hover:bg-[#2a5ad9] transition-colors font-[family-name:var(--font-body)]">
                  Đăng ký
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Packages */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#000000] text-center mb-4 font-[family-name:var(--font-heading)]">Gói phát triển ứng dụng</h2>
          <p className="text-[#666666] text-center mb-12 font-[family-name:var(--font-body)]">App di động chuyên nghiệp cho quản lý logistics</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] rounded-2xl border border-gray-200 p-8"
              >
                <h3 className="text-xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">{pkg.price}</span>
                  {pkg.unit && <span className="text-[#666666] font-[family-name:var(--font-body)]">VNĐ</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#666666]">
                      <Check size={18} className="text-[#356df1] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full py-3 bg-[#356df1] text-[#ffffff] rounded-full font-bold text-center hover:bg-[#2a5ad9] transition-colors font-[family-name:var(--font-body)]">
                  {pkg.price === "Liên hệ" ? "Liên hệ ngay" : "Đăng ký"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#356df1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Chưa chọn được giải pháp?
          </h2>
          <p className="text-[#ffffff]/80 text-lg mb-8 font-[family-name:var(--font-body)]">
            Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết theo nhu cầu của doanh nghiệp
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-[#ffffff] text-[#356df1] rounded-full font-bold font-[family-name:var(--font-body)] hover:bg-[#f5f5f5] transition-colors">
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </main>
  );
}
