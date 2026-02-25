"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Heart, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Tập trung khách hàng",
    desc: "Mọi quyết định đều xuất phát từ nhu cầu và lợi ích của khách hàng",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Đổi mới liên tục",
    desc: "Không ngừng cải tiến để mang lại giải pháp tốt nhất",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Đam mê Logistics",
    desc: "Hiểu sâu ngành để tạo ra sản phẩm thực sự giải quyết pain point",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Hợp tác lâu dài",
    desc: "Xây dựng mối quan hệ đối tác bền vững, cùng phát triển",
  },
];

const stats = [
  { value: "100+", label: "Khách hàng tin dùng", icon: <Users /> },
  { value: "50+", label: "Dự án thành công", icon: <Award /> },
  { value: "99%", label: "Khách hàng hài lòng", icon: <Heart /> },
  { value: "24/7", label: "Hỗ trợ kỹ thuật", icon: <TrendingUp /> },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 font-[family-name:var(--font-heading)]"
            >
              Về Misty LGS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed font-[family-name:var(--font-body)]"
            >
              Chúng tôi là đơn vị tiên phong trong lĩnh vực chuyển đổi số cho ngành Logistics Việt Nam. 
              Với đội ngũ am hiểu sâu sắc nghiệp vụ và công nghệ, chúng tôi mang đến giải pháp 
              thực sự giải quyết những thách thức vận hành của doanh nghiệp.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#1a1a1a] font-[family-name:var(--font-heading)]">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-[family-name:var(--font-body)]">
                <p>
                  <strong className="text-[#1a1a1a]">Misty LGS</strong> ra đời từ nhận thức sâu sắc về thực trạng ngành Logistics tại Việt Nam. 
                  Chúng tôi nhận thấy nhiều doanh nghiệp vận tải, kho bãi đang vật lộn với các phần mềm 
                  quản lý rời rạc, thiếu tính kết nối và không phù hợp với đặc thù nghiệp vụ.
                </p>
                <p>
                  Từ đó, chúng tôi quyết tâm xây dựng một nền tảng duy nhất - 
                  nơi tích hợp tất cả các khâu quản lý từ đơn hàng, kho bãi, vận chuyển 
                  đến kế toán, báo cáo trong một hệ sinh thái đồng nhất.
                </p>
                <p>
                  Với phương châm <strong>"Công nghệ phục vụ con người"</strong>, 
                  chúng tôi không ngừng lắng nghe, thấu hiểu và cải tiến để mang đến 
                  giải pháp thực sự giá trị cho từng doanh nghiệp đối tác.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#f0f4f8] p-8 rounded-3xl text-center border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#1a1a1a] mb-2 font-[family-name:var(--font-heading)]">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-[family-name:var(--font-body)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">
              Giá trị cốt lõi
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-body)]">
              Những nguyên tắc định hướng mọi hành động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 font-[family-name:var(--font-heading)]">{value.title}</h3>
                <p className="text-gray-600 font-[family-name:var(--font-body)]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">
              Tại sao chọn Misty LGS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Am hiểu ngành Logistics",
                desc: "Đội ngũ có kinh nghiệm thực tế trong vận tải, kho bãi, hiểu rõ pain point của doanh nghiệp",
              },
              {
                title: "Công nghệ hiện đại",
                desc: "Sử dụng Next.js, React, Node.js - stack công nghệ mạnh mẽ, dễ mở rộng và bảo trì",
              },
              {
                title: "Hỗ trợ tận tâm",
                desc: "Đội ngũ hỗ trợ 24/7, đào tạo sử dụng, đồng hành cùng doanh nghiệp phát triển",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#f0f4f8] rounded-3xl border border-gray-100"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mb-4 font-bold text-lg font-[family-name:var(--font-heading)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 font-[family-name:var(--font-heading)]">{item.title}</h3>
                <p className="text-gray-600 font-[family-name:var(--font-body)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            Hãy đồng hành cùng chúng tôi
          </h2>
          <p className="text-xl text-white/80 mb-8 font-[family-name:var(--font-body)]">
            Liên hệ ngay để được tư vấn miễn phí về giải pháp phù hợp với doanh nghiệp của bạn
          </p>
          <Link 
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-all font-[family-name:var(--font-body)]"
          >
            Liên hệ ngay <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
