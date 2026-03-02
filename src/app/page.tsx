"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BarChart3, Truck, Package, Globe, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const stats = [
    { value: "100+", label: "Khách hàng" },
    { value: "50+", label: "Dự án hoàn thành" },
    { value: "99%", label: "Hài lòng" },
    { value: "24/7", label: "Hỗ trợ" },
  ];

  const features = [
    { title: "Web Logistics", desc: "Website chuyên nghiệp, tối ưu SEO", icon: Globe, href: "/web-logistics" },
    { title: "App Quản lý", desc: "Quản lý vận tải, kho bãi hiệu quả", icon: Package, href: "/app" },
    { title: "Phần mềm WMS", desc: "Quản lý kho bãi thông minh", icon: BarChart3, href: "/wms" },
    { title: "Phần mềm TMS", desc: "Tối ưu vận tải, tiết kiệm chi phí", icon: Truck, href: "/tms" },
  ];

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      company: "Viettrans Logistics",
      content: "Misty LGS đã giúp chúng tôi tăng 40% hiệu suất kho. Hệ thống rất dễ sử dụng.",
      rating: 5,
    },
    {
      name: "Trần Thị B",
      company: "GreenLogistics",
      content: "Website mới giúp doanh thu online tăng 60% chỉ sau 3 tháng. Rất hài lòng!",
      rating: 5,
    },
    {
      name: "Lê Hoàng C",
      company: "ShipTech Inc",
      content: "App quản lý giao hàng vận hành rất mượt. Đội ngũ dev hiểu nghiệp vụ rất kỹ.",
      rating: 5,
    },
  ];

  const benefits = [
    { title: "Nhanh chóng", desc: "Triển khai trong thời gian ngắn", icon: Zap },
    { title: "An toàn", desc: "Dữ liệu được mã hóa và backup", icon: Check },
    { title: "Tiết kiệm", desc: "Giảm 30% chi phí vận hành", icon: BarChart3 },
    { title: "Hỗ trợ 24/7", desc: "Đội ngũ hỗ trợ luôn sẵn sàng", icon: Truck },
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
                  href="/demo" 
                  className="px-8 py-4 rounded-full font-semibold text-[#666666] border border-gray-200 hover:border-[#356df1] hover:text-[#356df1] transition-all font-[family-name:var(--font-body)]"
                >
                  Xem Demo
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

      {/* Products Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              Sản phẩm của chúng tôi
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Giải pháp toàn diện cho doanh nghiệp Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={feature.href}
                    className="block bg-[#ffffff] p-6 rounded-2xl border border-gray-100 hover:border-[#356df1] transition-colors group h-full"
                  >
                    <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] mb-4 group-hover:bg-[#356df1] group-hover:text-[#ffffff] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#356df1] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">{feature.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#356df1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Tìm hiểu thêm <ArrowUpRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#356df1]/10 rounded-full flex items-center justify-center text-[#356df1] mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              Khách hàng nói gì?
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Những đánh giá chân thực từ khách hàng đã tin tưởng Misty LGS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f8fafc] p-6 rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <p className="text-[#666666] mb-6 font-[family-name:var(--font-body)]">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-[#000000]">{testimonial.name}</div>
                  <div className="text-sm text-[#999999]">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center gap-2 text-[#356df1] font-semibold hover:gap-3 transition-all"
            >
              Xem tất cả đánh giá <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=600&fit=crop&q=80" 
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Sẵn sàng chuyển đổi số?
          </h2>
          <p className="text-[#ffffff]/80 text-lg mb-8 font-[family-name:var(--font-body)]">
            Bắt đầu miễn phí ngay hôm nay. Không cần thẻ tín dụng.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
            >
              Dùng thử miễn phí
            </Link>
            <Link 
              href="/pricing" 
              className="bg-transparent text-[#ffffff] border-2 border-[#ffffff] px-8 py-4 rounded-full font-semibold hover:bg-[#ffffff]/10 transition-all"
            >
              Xem báo giá
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
