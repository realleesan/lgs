"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Smartphone, Settings, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Web Logistics có sẵn",
    description: "Hệ thống website giới thiệu công ty vận tải, logistics chuyên nghiệp. Giao diện chuẩn ngành, tối ưu SEO, tích hợp tra cứu vận đơn.",
    icon: <Layout className="w-8 h-8" />,
    features: ["Tra cứu Tracking", "Bảng giá tự động", "CMS dễ sử dụng"],
    color: "bg-blue-500",
  },
  {
    title: "App & Phần mềm quản lý",
    description: "Giải pháp quản lý vận tải (TMS), quản lý kho (WMS). Giúp tự động hóa quy trình, giảm sai sót và tối ưu chi phí vận hành.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Quản lý đơn hàng", "Điều phối xe", "Báo cáo doanh thu"],
    color: "bg-indigo-600",
  },
  {
    title: "Thiết kế theo yêu cầu",
    description: "Tư vấn và phát triển các tính năng chuyên biệt dựa trên quy trình đặc thù của doanh nghiệp. Cá nhân hóa trải nghiệm 100%.",
    icon: <Settings className="w-8 h-8" />,
    features: ["Phân tích nghiệp vụ", "UI/UX độc quyền", "Khả năng mở rộng"],
    color: "bg-accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Dịch vụ cốt lõi</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-dark leading-tight">
            Giải pháp công nghệ <br /> dành riêng cho Logistics
          </h3>
          <p className="text-gray-600 text-lg">
            Chúng tôi tập trung vào việc giải quyết các bài toán vận hành phức tạp bằng giao diện đơn giản và tính năng mạnh mẽ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-primary/20 transition-all group"
            >
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-dark mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
