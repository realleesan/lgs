"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BarChart3, Truck, Package, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const stats = [
    { value: "100+", label: "Khách hàng", icon: <Globe className="w-5 h-5" /> },
    { value: "50+", label: "Dự án hoàn thành", icon: <Package className="w-5 h-5" /> },
    { value: "99%", label: "Hài lòng", icon: <BarChart3 className="w-5 h-5" /> },
    { value: "24/7", label: "Hỗ trợ", icon: <Zap className="w-5 h-5" /> },
  ];

  const features = [
    {
      title: "Web Logistics",
      desc: "Website chuyên nghiệp, tối ưu SEO",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "App Quản lý",
      desc: "Quản lý vận tải, kho bãi hiệu quả",
      icon: <Package className="w-6 h-6" />,
    },
    {
      title: "Phần mềm TMS/WMS",
      desc: "Tự động hóa quy trình Logistics",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Tư vấn DS",
      desc: "Chuyển đổi số toàn diện",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const partners = [
    "Logistics Co", "TransPort", "ShipFast", "CargoPro", "FreightHub", "BoxMove"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Modern SaaS Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#ffffff]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#e8eefc] -z-10" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#356df1]/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#356df1]/3 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#356df1]/10 border border-[#356df1]/20">
                <span className="w-2 h-2 bg-[#356df1] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#356df1]">Logistics 4.0 Solution</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-[#000000] leading-[1.1] font-[family-name:var(--font-heading)]">
                Chuyển đổi số
                <span className="block text-[#356df1]">Logistics</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-[#666666] max-w-lg leading-relaxed font-[family-name:var(--font-body)]">
                Giải pháp All-in-one giúp doanh nghiệp tối ưu vận hành, giảm chi phí và tăng trưởng bền vững.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="group bg-[#356df1] text-[#ffffff] px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-[#2a5ad9] transition-all"
                >
                  Dùng thử miễn phí
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="px-8 py-4 rounded-full font-semibold text-[#666666] border border-gray-200 hover:border-[#356df1] hover:text-[#356df1] transition-all font-[family-name:var(--font-body)]"
                >
                  Xem giải pháp
                </Link>
              </div>

              {/* Stats */}
              <div className="pt-8">
                <div className="flex flex-wrap gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">{stat.value}</div>
                      <div className="text-sm text-[#999999] font-[family-name:var(--font-body)]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-[#ffffff] rounded-3xl border border-gray-100 p-8 overflow-hidden">
                  {/* Dashboard Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                      <div className="w-12 h-12 bg-[#356df1] rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-[#ffffff]" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#000000]">Dashboard</div>
                        <div className="text-sm text-[#999999]">Tổng quan hệ thống</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-[#f8fafc] rounded-2xl">
                        <div className="text-3xl font-bold text-[#000000]">1,234</div>
                        <div className="text-sm text-[#999999]">Đơn hàng</div>
                      </div>
                      <div className="p-4 bg-[#f8fafc] rounded-2xl">
                        <div className="text-3xl font-bold text-[#356df1]">98%</div>
                        <div className="text-sm text-[#999999]">Hoàn thành</div>
                      </div>
                    </div>

                    <div className="h-32 bg-[#f8fafc] rounded-2xl flex items-end justify-around p-4">
                      {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                        <div key={i} className="w-8 bg-[#356df1]/20 rounded-t-lg" style={{ height: `${h}%` }}>
                          <div className="w-full bg-[#356df1] rounded-t-lg h-full" style={{ height: '70%' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-[#ffffff] p-4 rounded-2xl border border-gray-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-[#999999]">Đơn hàng mới</div>
                    <div className="font-bold text-[#000000]">+127 hôm nay</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#ffffff] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-[#999999] mb-8 font-[family-name:var(--font-body)]">Được tin tưởng bởi các doanh nghiệp</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            {partners.map((partner, index) => (
              <div key={index} className="text-xl font-bold text-[#666666] font-[family-name:var(--font-heading)]">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - 4 columns */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              Giải pháp toàn diện
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Tất cả trong một nền tảng duy nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] p-6 rounded-2xl border border-gray-100 hover:border-[#356df1] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#356df1] transition-colors">
                  <div className="text-[#356df1] group-hover:text-[#ffffff] transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">{feature.title}</h3>
                <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#356df1]/20 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-6 font-[family-name:var(--font-heading)]">
            Sẵn sàng chuyển đổi số?
          </h2>
          <p className="text-[#94a3b8] text-lg mb-8 font-[family-name:var(--font-body)]">
            Bắt đầu miễn phí ngay hôm nay. Không cần thẻ tín dụng.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#356df1] text-[#ffffff] px-8 py-4 rounded-full font-semibold hover:bg-[#2a5ad9] transition-all"
          >
            Dùng thử miễn phí
          </Link>
        </div>
      </section>
    </main>
  );
}
