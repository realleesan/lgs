"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BarChart3, Truck, Package, Globe, Star, ArrowUpRight, Settings, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  // Pain points for logistics companies
  const painPoints = [
    { icon: Package, title: "Quản lý kho lộn xộn", desc: "Không biết hàng tồn kho bao nhiêu, nhập xuất thủ công" },
    { icon: Truck, title: "Điều xe không hiệu quả", desc: "Xe chạy rỗng, không tối ưu lộ trình, chi phí vận chuyển cao" },
    { icon: Globe, title: "Khách hàng không theo dõi được đơn", desc: "Khách hàng gọi điện hỏi liên tục, tốn thời gian" },
    { icon: Settings, title: "Hệ thống rời rạc", desc: "Nhiều phần mềm riêng lẻ, không tích hợp được với nhau" },
  ];

  // Services/Products offered
  const services = [
    { 
      title: "Thiết kế Web Logistics", 
      desc: "Website chuyên nghiệp cho công ty vận tải, logistics. Tích hợp tra cứu vận đơn, bảng giá tự động, SEO hiệu quả.",
      icon: Globe, 
      href: "/web-logistics",
      features: ["Tra cứu vận đơn online", "Bảng giá tự động", "Tối ưu SEO Google"]
    },
    { 
      title: "App Quản lý Logistics", 
      desc: "Ứng dụng di động cho driver, kho bãi, dispatch. Quản lý đơn hàng, theo dõi GPS, thông báo tự động.",
      icon: Truck, 
      href: "/app",
      features: ["Quản lý driver", "Theo dõi GPS real-time", "Thông báo tự động"]
    },
    { 
      title: "Phần mềm WMS", 
      desc: "Hệ thống quản lý kho bãi thông minh. Kiểm soát tồn kho, quy trình nhập xuất, barcode scanning.",
      icon: Package, 
      href: "/wms",
      features: ["Quản lý tồn kho", "Quy trình nhập/xuất", "Tích hợp barcode"]
    },
    { 
      title: "Phần mềm TMS", 
      desc: "Hệ thống quản lý vận tải toàn diện. Điều phối xe, tối ưu lộ trình, tính cước tự động.",
      icon: BarChart3, 
      href: "/tms",
      features: ["Điều phối xe tự động", "Tối ưu lộ trình", "Tính cước tự động"]
    },
  ];

  // Benefits
  const benefits = [
    { title: "Thiết kế theo yêu cầu", desc: "100% cá nhân hóa theo quy trình kinh doanh của bạn", icon: Settings },
    { title: "Dễ sử dụng", desc: "Giao diện trực quan, không cần đào tạo phức tạp", icon: Users },
    { title: "Tiết kiệm 30% chi phí", desc: "Giảm nhân sự, tăng hiệu suất vận hành", icon: TrendingUp },
    { title: "Hỗ trợ 24/7", desc: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ", icon: Zap },
  ];

  // Social proof
  const stats = [
    { value: "100+", label: "Doanh nghiệp Logistics" },
    { value: "50+", label: "Dự án triển khai" },
    { value: "30%", label: "Giảm chi phí vận hành" },
    { value: "24/7", label: "Hỗ trợ liên tục" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Focused on pain points */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#ffffff]">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#356df1]/10 border border-[#356df1]/20">
                <span className="w-2 h-2 bg-[#356df1] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#356df1]">Chuyên gia Logistics 10+ năm</span>
              </div>

              {/* Headline - Pain point focused */}
              <h1 className="text-5xl lg:text-6xl font-bold text-[#000000] leading-[1.1] font-[family-name:var(--font-heading)]">
                Giải quyết mọi
                <span className="block text-[#356df1]">bài toán Logistics</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-[#666666] max-w-lg leading-relaxed font-[family-name:var(--font-body)]">
                Từ thiết kế web, app đến phần mềm quản lý kho & vận tải. 
                Giải pháp trọn gói theo yêu cầu riêng của doanh nghiệp bạn.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="group bg-[#356df1] text-[#ffffff] px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-[#2a5ad9] transition-all"
                >
                  Nhận tư vấn miễn phí
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/demo" 
                  className="px-8 py-4 rounded-full font-semibold text-[#666666] border border-gray-200 hover:border-[#356df1] hover:text-[#356df1] transition-all font-[family-name:var(--font-body)]"
                >
                  Xem Demo
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="pt-4 flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-[#666666]">Thiết kế theo yêu cầu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-[#666666]">Bảo hành 24 tháng</span>
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
                      <div className="text-xs text-[#999999]">Đơn hàng hôm nay</div>
                      <div className="font-bold text-[#000000]">+127 đơn</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              Doanh nghiệp Logistics đang gặp khó khăn gì?
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Chúng tôi hiểu những thách thức của ngành logistics và có giải pháp phù hợp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#ffffff] p-6 rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">
                    {point.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              Giải pháp toàn diện cho Logistics
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Từ website đến phần mềm quản lý - tất cả đều có thể thiết kế theo yêu cầu riêng của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={service.href}
                    className="block bg-[#ffffff] p-8 rounded-2xl border border-gray-100 hover:border-[#356df1] transition-colors group h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] shrink-0 group-hover:bg-[#356df1] group-hover:text-[#ffffff] transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#356df1] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[#666666] mb-4 font-[family-name:var(--font-body)]">
                          {service.desc}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-[#666666]">
                              <Check className="w-4 h-4 text-[#356df1]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-1 text-[#356df1] text-sm font-medium">
                          Tìm hiểu thêm <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#356df1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
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
                  <div className="w-16 h-16 bg-[#ffffff]/10 rounded-full flex items-center justify-center text-[#ffffff] mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#ffffff] mb-2 font-[family-name:var(--font-heading)]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#ffffff]/80 font-[family-name:var(--font-body)]">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-[#666666] font-[family-name:var(--font-body)]">
                  {stat.label}
                </div>
              </div>
            ))}
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
            Sẵn sàng chuyển đổi số cho doanh nghiệp?
          </h2>
          <p className="text-[#ffffff]/80 text-lg mb-8 font-[family-name:var(--font-body)]">
            Liên hệ ngay để được tư vấn giải pháp phù hợp với quy mô và ngân sách của bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
            >
              Nhận tư vấn miễn phí
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
