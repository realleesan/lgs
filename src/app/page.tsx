"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BarChart3, Truck, Package, Globe } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const stats = [
    { value: "100+", label: "Khách hàng" },
    { value: "50+", label: "Dự án hoàn thành" },
    { value: "99%", label: "Hài lòng" },
    { value: "24/7", label: "Hỗ trợ" },
  ];

  const features = [
    { title: "Web Logistics", desc: "Website chuyên nghiệp, tối ưu SEO" },
    { title: "App Quản lý", desc: "Quản lý vận tải, kho bãi hiệu quả" },
    { title: "Phần mềm TMS/WMS", desc: "Tự động hóa quy trình Logistics" },
    { title: "Tư vấn DS", desc: "Chuyển đổi số toàn diện" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#ffffff]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80" 
            alt="Logistics Warehouse"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#e8eefc]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
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
                    <div key={index}>
                      <div className="text-2xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">{stat.value}</div>
                      <div className="text-sm text-[#999999] font-[family-name:var(--font-body)]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80" 
                  alt="Logistics Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#356df1]/30 via-transparent to-transparent" />
                
                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-6 right-6 bg-[#ffffff] p-4 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-[#999999]">Đơn hàng mới</div>
                      <div className="font-bold text-[#000000]">+127 hôm nay</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">{feature.title}</h3>
                <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative py-32 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=600&fit=crop&q=80" 
          alt="Shipping Containers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Sẵn sàng chuyển đổi số?
          </h2>
          <p className="text-[#ffffff]/80 text-lg mb-8 font-[family-name:var(--font-body)]">
            Bắt đầu miễn phí ngay hôm nay. Không cần thẻ tín dụng.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            Dùng thử miễn phí
          </Link>
        </div>
      </section>
    </main>
  );
}
