"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Puzzle, Users, Zap, Check } from "lucide-react";

const Solution = () => {
  return (
    <section id="solutions" className="py-24 bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-[#356df1] font-bold tracking-wider uppercase text-sm font-[family-name:var(--font-body)]">Giải pháp All-in-One</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#000000] leading-tight font-[family-name:var(--font-heading)]">
                Xóa bỏ rào cản từ <br /> các phần mềm rời rạc
              </h3>
              <p className="text-[#666666] text-lg leading-relaxed font-[family-name:var(--font-body)]">
                Nhiều doanh nghiệp Logistics đang mệt mỏi với việc quản lý dữ liệu phân tán trên nhiều nền tảng khác nhau. Misty LGS mang đến một hệ sinh thái duy nhất, đồng bộ và cá nhân hóa.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Hợp nhất dữ liệu",
                  desc: "Mọi thông tin từ đơn hàng, kho bãi đến vận chuyển đều nằm trên một nền tảng.",
                  icon: <Layers className="w-6 h-6 text-[#356df1]" />,
                },
                {
                  title: "Cá nhân hóa tối đa",
                  desc: "Chúng tôi tùy chỉnh phần mềm theo đúng quy trình nghiệp vụ đặc thù của bạn.",
                  icon: <Puzzle className="w-6 h-6 text-[#356df1]" />,
                },
                {
                  title: "Trải nghiệm đồng nhất",
                  desc: "Giao diện hiện đại, dễ sử dụng cho cả quản lý và nhân viên vận hành.",
                  icon: <Users className="w-6 h-6 text-[#356df1]" />,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-[#f5f5f5] transition-colors border border-gray-100">
                  <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#000000] font-[family-name:var(--font-heading)]">{item.title}</h4>
                    <p className="text-[#666666] text-sm leading-relaxed font-[family-name:var(--font-body)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#356df1] rounded-[2.5rem] p-8 lg:p-12 text-[#ffffff] shadow-2xl relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#356df1]" fill="#356df1" />
                </div>
                <div>
                  <div className="text-xs text-[#ffffff]/50 font-bold uppercase tracking-widest font-[family-name:var(--font-body)]">Hệ sinh thái</div>
                  <div className="text-xl font-bold font-[family-name:var(--font-heading)]">Misty LGS Platform</div>
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
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#ffffff]/10 border border-[#ffffff]/20"
                  >
                    <div className="w-5 h-5 bg-[#ffffff] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#356df1]" strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium text-[#ffffff]/90 font-[family-name:var(--font-body)]">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-[#ffffff]/20 border border-[#ffffff]/30 text-center">
                <p className="text-[#ffffff]/80 text-sm italic font-[family-name:var(--font-body)]">
                  "Chuyển đổi từ 5 phần mềm rời rạc sang 1 hệ thống duy nhất giúp doanh nghiệp tiết kiệm 40% chi phí vận hành."
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#356df1]/10 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
