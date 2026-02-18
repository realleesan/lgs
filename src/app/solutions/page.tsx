"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Puzzle, Users, Zap, Check, BarChart3, Shield, Clock, Truck, Warehouse, FileText, Smartphone } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Warehouse className="w-6 h-6" />,
    title: "Quản lý kho (WMS)",
    desc: "Theo dõi tồn kho real-time, quản lý vị trí, nhập xuất tự động",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Quản lý vận tải (TMS)",
    desc: "Điều phối xe, tối ưu lộ trình, theo dõi vận đơn",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Kế toán & Công nợ",
    desc: "Tự động tính phí, quản lý công nợ, báo cáo tài chính",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App lái xe",
    desc: "Giao việc, chụp POD, cập nhật trạng thái giao hàng",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Báo cáo Analytics",
    desc: "Dashboard thời gian thực, phân tích hiệu suất",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bảo mật & Phân quyền",
    desc: "Phân quyền chi tiết, bảo mật dữ liệu cao cấp",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Giải pháp All-in-One
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Hệ sinh thái<br />
                <span className="text-blue-400">Misty LGS Platform</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Thay vì sử dụng 5-7 phần mềm rời rạc, hãy trải nghiệm một nền tảng 
                duy nhất quản lý toàn bộ chuỗi cung ứng của bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                >
                  Đăng ký demo <ArrowRight size={20} />
                </Link>
                <Link 
                  href="#features"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  Tìm hiểu thêm
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Đơn hàng/ ngày", value: "10K+" },
                    { label: "Xe vận chuyển", value: "500+" },
                    { label: "Kho hàng", value: "50+" },
                    { label: "Người dùng", value: "2000+" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-dark mb-4">
              Vấn đề: Phần mềm rời rạc
            </h2>
            <p className="text-lg text-gray-600">
              Nhiều doanh nghiệp đang mệt mỏi với việc quản lý dữ liệu trên nhiều nền tảng khác nhau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Layers />, title: "Dữ liệu phân tán", desc: "Thông tin nằm rải rác trên nhiều hệ thống, khó tổng hợp" },
              { icon: <Clock />, title: "Mất thời gian", desc: "Nhân viên phải nhập liệu lặp lại, đối chiếu thủ công" },
              { icon: <Puzzle />, title: "Không đồng bộ", desc: "Các hệ thống không kết nối, thiếu thông tin real-time" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-50" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-dark mb-4">
              Giải pháp: Một nền tảng duy nhất
            </h2>
            <p className="text-lg text-gray-600">
              Misty LGS Platform tích hợp tất cả các khâu quản lý vào một hệ sinh thái đồng nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-dark mb-6">
                Lợi ích khi chuyển sang All-in-One
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Tiết kiệm 40% chi phí vận hành", desc: "Không cần trả phí cho nhiều phần mềm riêng biệt" },
                  { title: "Tăng 60% hiệu suất làm việc", desc: "Dữ liệu đồng bộ, không cần nhập liệu lặp lại" },
                  { title: "Giảm 80% sai sót", desc: "Tự động hóa quy trình, loại bỏ lỗi thủ công" },
                  { title: "Quyết định nhanh hơn", desc: "Báo cáo real-time, dữ liệu chính xác tức thì" },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Misty LGS Platform bao gồm</h3>
              <ul className="space-y-4">
                {[
                  "Quản lý đơn hàng tập trung (OMS)",
                  "Quản lý kho thông minh (WMS)",
                  "Điều phối vận tải (TMS)",
                  "Kế toán & Công nợ tự động",
                  "Báo cáo BI & Analytics",
                  "App lái xe & Giao nhận",
                  "Tích hợp API (ERP, CRM, E-invoice)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-6">
            Sẵn sàng chuyển đổi?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Đăng ký demo miễn phí để trải nghiệm sức mạnh của Misty LGS Platform
          </p>
          <Link 
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-all"
          >
            Đăng ký demo ngay <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
