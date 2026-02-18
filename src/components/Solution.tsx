"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Puzzle, Users, Zap, Check } from "lucide-react";

const Solution = () => {
  return (
    <section id="solutions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Pain points and illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Giải pháp All-in-One</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-dark leading-tight">
                Xóa bỏ rào cản từ <br /> các phần mềm rời rạc
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nhiều doanh nghiệp Logistics đang mệt mỏi với việc quản lý dữ liệu phân tán trên nhiều nền tảng khác nhau. Misty LGS mang đến một hệ sinh thái duy nhất, đồng bộ và cá nhân hóa.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Hợp nhất dữ liệu",
                  desc: "Mọi thông tin từ đơn hàng, kho bãi đến vận chuyển đều nằm trên một nền tảng.",
                  icon: <Layers className="w-6 h-6 text-primary" />,
                },
                {
                  title: "Cá nhân hóa tối đa",
                  desc: "Chúng tôi tùy chỉnh phần mềm theo đúng quy trình nghiệp vụ đặc thù của bạn.",
                  icon: <Puzzle className="w-6 h-6 text-primary" />,
                },
                {
                  title: "Trải nghiệm đồng nhất",
                  desc: "Giao diện hiện đại, dễ sử dụng cho cả quản lý và nhân viên vận hành.",
                  icon: <Users className="w-6 h-6 text-primary" />,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Comparison or Feature Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" fill="white" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-bold uppercase tracking-widest">Hệ sinh thái</div>
                  <div className="text-xl font-bold">Misty LGS Platform</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Quản lý đơn hàng tập trung (OMS)",
                  "Quản lý kho thông minh (WMS)",
                  "Điều phối vận tải (TMS)",
                  "Kế toán & Công nợ tự động",
                  "Báo cáo BI & Analytics thời gian thực",
                  "App lái xe & Giao nhận chuyên nghiệp",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-primary/20 border border-primary/30 text-center">
                <p className="text-primary-foreground/80 text-sm italic">
                  "Chuyển đổi từ 5 phần mềm rời rạc sang 1 hệ thống duy nhất giúp doanh nghiệp tiết kiệm 40% chi phí vận hành."
                </p>
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
