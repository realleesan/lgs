"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "100+", label: "Khách hàng" },
  { value: "50+", label: "Dự án" },
  { value: "99%", label: "Hài lòng" },
];

const values = [
  { title: "Tập trung khách hàng", description: "Luôn đặt nhu cầu khách hàng lên hàng đầu" },
  { title: "Chất lượng cao", description: "Cam kết mang đến sản phẩm tốt nhất" },
  { title: "Phát triển bền vững", description: "Xây dựng giải pháp lâu dài cho doanh nghiệp" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero with Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop&q=80" 
            alt="Office Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Về chúng tôi
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Đồng hành cùng doanh nghiệp Logistics chuyển đổi số
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#356df1]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#ffffff] font-[family-name:var(--font-heading)]">{stat.value}</div>
                <div className="text-[#ffffff]/80 text-sm font-[family-name:var(--font-body)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" 
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
                Misty LGS
              </h2>
              <p className="text-[#666666] mb-4 leading-relaxed font-[family-name:var(--font-body)]">
                Chúng tôi là đơn vị chuyên cung cấp giải pháp công nghệ cho ngành Logistics. Với sứ mệnh giúp doanh nghiệp chuyển đổi số hiệu quả, Misty LGS mang đến hệ thống toàn diện từ website, app đến phần mềm quản lý.
              </p>
              <p className="text-[#666666] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                Đội ngũ giàu kinh nghiệm, am hiểu ngành Logistics, luôn sẵn sàng hỗ trợ khách hàng 24/7.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Giải pháp All-in-One",
                  "Hỗ trợ 24/7",
                  "Bảo hành dài hạn",
                  "Giá cạnh tranh"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#356df1]/10 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#356df1]" />
                    </div>
                    <span className="text-[#000000] font-[family-name:var(--font-body)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#000000] text-center mb-12 font-[family-name:var(--font-heading)]">
            Giá trị cốt lõi
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] p-6 rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#356df1]/10 rounded-xl flex items-center justify-center text-[#356df1] mb-4">
                  {index === 0 ? <Users className="w-6 h-6" /> : index === 1 ? <Award className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">{value.title}</h3>
                <p className="text-[#666666] text-sm font-[family-name:var(--font-body)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop&q=80" 
          alt="Meeting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Sẵn sàng hợp tác?
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            Liên hệ ngay để được tư vấn miễn phí
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
