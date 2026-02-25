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
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80",
  },
  {
    title: "App & Phần mềm quản lý",
    description: "Giải pháp quản lý vận tải (TMS), quản lý kho (WMS). Giúp tự động hóa quy trình, giảm sai sót và tối ưu chi phí vận hành.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Quản lý đơn hàng", "Điều phối xe", "Báo cáo doanh thu"],
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop&q=80",
  },
  {
    title: "Thiết kế theo yêu cầu",
    description: "Tư vấn và phát triển các tính năng chuyên biệt dựa trên quy trình đặc thù của doanh nghiệp. Cá nhân hóa trải nghiệm 100%.",
    icon: <Settings className="w-8 h-8" />,
    features: ["Phân tích nghiệp vụ", "UI/UX độc quyền", "Khả năng mở rộng"],
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop&q=80",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm font-[family-name:var(--font-body)]">Dịch vụ cốt lõi</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight font-[family-name:var(--font-heading)]">
            Giải pháp công nghệ <br /> dành riêng cho Logistics
          </h3>
          <p className="text-gray-600 text-lg font-[family-name:var(--font-body)]">
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
              className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-primary/20 transition-all group overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px] font-[family-name:var(--font-body)]">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700 font-[family-name:var(--font-body)]">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
