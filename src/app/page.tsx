"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BarChart3, Truck, Package, Globe, Star, ArrowUpRight, Settings, Users, TrendingUp, Layout, Code, Smartphone, Database, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  // Pain points - 4 main logistics problems (from app.md) - with images
  const painPoints = [
    { icon: Package, title: "Quản lý đơn hàng bằng Excel", desc: "Excel rời rạc, không biết trạng thái đơn hàng, nhân viên cập nhật thủ công", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80" },
    { icon: Globe, title: "Không có tracking cho khách", desc: "Khách hàng gọi điện hỏi hàng đang ở đâu, phải gọi điện hỏi tài xế", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&q=80" },
    { icon: Truck, title: "Điều phối xe thủ công", desc: "Không biết xe nào đang rảnh, không tối ưu chuyến, chi phí vận chuyển cao", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop&q=80" },
    { icon: Settings, title: "Website thiếu chuyên nghiệp", desc: "Không có form báo giá, không có tracking, không có catalog dịch vụ", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&q=80" },
  ];

  // Solutions - 4 main groups (from app.md) - with images
  const solutions = [
    { 
      title: "Website Logistics", 
      desc: "Website chuyên cho công ty logistics với tracking đơn hàng, form báo giá, quản lý khách hàng, đa ngôn ngữ và SEO.",
      icon: Globe, 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
      href: "/web-logistics",
      features: ["Tra cứu vận đơn online", "Bảng giá tự động", "Tối ưu SEO logistics", "Đa ngôn ngữ"]
    },
    { 
      title: "Logistics Management System (LMS)", 
      desc: "Phần mềm quản lý logistics toàn diện với các module quản lý đơn hàng, khách hàng, tài xế/xe, chứng từ và dashboard doanh thu.",
      icon: Database, 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
      href: "/solutions",
      features: ["Quản lý đơn hàng", "Quản lý tài xế/xe", "Tracking vận chuyển", "Dashboard doanh thu"]
    },
    { 
      title: "Logistics Mobile App", 
      desc: "App cho driver và khách hàng: nhận chuyến, cập nhật trạng thái, scan POD, GPS tracking, xem lịch sử vận chuyển.",
      icon: Smartphone, 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
      href: "/app",
      features: ["Driver App", "Customer App", "GPS real-time", "Scan POD"]
    },
    { 
      title: "Custom Web App", 
      desc: "Hệ thống theo yêu cầu: Freight forwarding, Warehouse management, CRM logistics, Booking system.",
      icon: Code, 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80",
      href: "/solutions",
      features: ["Freight forwarding", "WMS custom", "CRM logistics", "Booking system"]
    },
  ];

  // Workflow/Process (5 steps from app.md)
  const workflow = [
    { step: "01", title: "Phân tích nhu cầu", desc: "Tìm hiểu quy trình kinh doanh, xác định pain points" },
    { step: "02", title: "Thiết kế hệ thống", desc: "Lập technical specification, thiết kế UI/UX" },
    { step: "03", title: "Phát triển", desc: "Code và tích hợp các tính năng theo yêu cầu" },
    { step: "04", title: "Triển khai", desc: "Deploy, testing và đào tạo sử dụng" },
    { step: "05", title: "Bảo trì", desc: "Hỗ trợ kỹ thuật, cập nhật tính năng mới" },
  ];

  // Pricing tiers (from app.md)
  const pricingTiers = [
    {
      name: "Starter",
      price: "Liên hệ",
      desc: "Phù hợp doanh nghiệp nhỏ",
      features: ["Landing page", "1 ngôn ngữ", "Form liên hệ", "Bảo hành 12 tháng"]
    },
    {
      name: "Business",
      price: "Liên hệ",
      desc: "Phù hợp doanh nghiệp vừa",
      features: ["Website đầy đủ", "Tracking đơn hàng", "CMS quản lý", "Bảo hành 24 tháng"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      desc: "Phù hợp doanh nghiệp lớn",
      features: ["Đa ngôn ngữ", "Dashboard", "Tích hợp API", "Hỗ trợ 24/7"]
    },
  ];

  // Demo links (important for logistics customers)
  const demos = [
    { title: "Website Logistics", desc: "Xem demo website chuyên nghiệp", href: "/demo" },
    { title: "Dashboard quản lý", desc: "Xem demo hệ thống quản lý", href: "/demo" },
    { title: "Tracking System", desc: "Xem demo tra cứu vận đơn", href: "/demo" },
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
              <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] leading-[1.2] font-[family-name:var(--font-heading)]">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              Thách thức mà doanh nghiệp Logistics gặp phải
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
                  className="bg-[#ffffff] rounded-2xl border border-gray-100 overflow-hidden card-gradient"
                >
                  {/* Image */}
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={point.image} 
                      alt={point.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dot-pattern">
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
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={solution.href}
                    className="block bg-[#ffffff] rounded-2xl border border-gray-100 overflow-hidden hover:border-[#356df1] transition-colors group h-full card-gradient"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] shrink-0 group-hover:bg-[#356df1] group-hover:text-[#ffffff] transition-colors">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#356df1] transition-colors">
                            {solution.title}
                          </h3>
                          <p className="text-[#666666] mb-4 font-[family-name:var(--font-body)]">
                            {solution.desc}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {solution.features.map((feature, idx) => (
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
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section - 5 steps (Section 5) */}
      <section className="py-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              Quy trình làm việc
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              5 bước chuyên nghiệp từ phân tích đến bảo trì
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#356df1]/10 rounded-full flex items-center justify-center text-[#356df1] mx-auto mb-4 text-2xl font-bold font-[family-name:var(--font-heading)]">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">
                  {step.desc}
                </p>
              </motion.div>
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
            Nhận tư vấn chuyển đổi số miễn phí - giải pháp phù hợp với quy mô và ngân sách của bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
            >
              Nhận tư vấn chuyển đổi số miễn phí
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
