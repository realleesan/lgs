"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-1/4" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Chuyển đổi số Logistics 4.0
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-dark leading-tight">
              Nâng tầm vận hành <br />
              <span className="text-primary italic">Misty LGS</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Chúng tôi cung cấp giải pháp Web, App và phần mềm quản lý toàn diện cho ngành Logistics. 
              Chuyển đổi số doanh nghiệp với hệ sinh thái All-in-One.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all shadow-xl shadow-primary/20 group"
              >
                Khám phá dịch vụ <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-gray-200 text-dark px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                Liên hệ ngay
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-xs text-gray-500 uppercase font-semibold">Khách hàng</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-gray-500 uppercase font-semibold">Dự án</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-xs text-gray-500 uppercase font-semibold">Hài lòng</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 overflow-hidden">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80" 
                  alt="Logistics Warehouse"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Dịch vụ của chúng tôi</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
              Giải pháp toàn diện cho Logistics
            </h3>
            <p className="text-lg text-gray-600">
              Từ website giới thiệu đến hệ thống quản lý phức tạp, chúng tôi đáp ứng mọi nhu cầu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Web Logistics",
                desc: "Website giới thiệu chuyên nghiệp, tích hợp tracking, tối ưu SEO",
                link: "/services",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "App & Phần mềm",
                desc: "TMS, WMS - Quản lý vận tải, kho hàng, điều phối xe",
                link: "/services",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Thiết kế Custom",
                desc: "Giải pháp phần mềm theo yêu cầu riêng, 100% cá nhân hóa",
                link: "/services",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-dark mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link 
                  href={service.link}
                  className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Tìm hiểu thêm <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Sẵn sàng chuyển đổi số?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Liên hệ ngay để được tư vấn miễn phí. Chúng tôi sẽ giúp bạn tìm ra giải pháp phù hợp nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
            >
              Liên hệ ngay <ArrowRight size={20} />
            </Link>
            <Link 
              href="/solutions"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white/10 transition-all"
            >
              Xem giải pháp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
