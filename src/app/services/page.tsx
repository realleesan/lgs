"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layout, Smartphone, Settings, CheckCircle2, Globe, Truck, Warehouse } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web",
    title: "Web Logistics có sẵn",
    subtitle: "Website giới thiệu doanh nghiệp vận tải chuyên nghiệp",
    description: "Hệ thống website giới thiệu công ty vận tải, logistics chuyên nghiệp với giao diện chuẩn ngành, tối ưu SEO, tích hợp tra cứu vận đơn real-time.",
    icon: <Layout className="w-8 h-8" />,
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80",
    features: [
      "Giao diện chuẩn Logistics, hiện đại",
      "Tích hợp tra cứu Tracking real-time",
      "Bảng giá tự động & báo giá online",
      "CMS dễ sử dụng, quản lý nội dung",
      "Tối ưu SEO, tốc độ tải nhanh",
      "Responsive trên mọi thiết bị",
    ],
    benefits: [
      { icon: <Globe />, title: "Tăng 40% lượt truy cập", desc: "Nhờ SEO tối ưu và giao diện chuyên nghiệp" },
      { icon: <Truck />, title: "Giảm 60% cuộc gọi hỏi vận đơn", desc: "Khách hàng tự tra cứu tracking" },
    ],
  },
  {
    id: "app",
    title: "App & Phần mềm quản lý",
    subtitle: "TMS, WMS - Giải pháp quản lý vận hành",
    description: "Giải pháp quản lý vận tải (TMS), quản lý kho (WMS) giúp tự động hóa quy trình, giảm sai sót và tối ưu chi phí vận hành.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&q=80",
    features: [
      "Quản lý đơn hàng tập trung (OMS)",
      "Điều phối xe, tối ưu lộ trình",
      "Quản lý kho hàng (WMS) thông minh",
      "App lái xe, giao nhận chuyên nghiệp",
      "Báo cáo doanh thu, chi phí real-time",
      "Tích hợp E-invoice, Vận đơn điện tử",
    ],
    benefits: [
      { icon: <Warehouse />, title: "Tăng 35% hiệu suất kho", desc: "Nhờ quản lý thông minh và tự động hóa" },
      { icon: <Truck />, title: "Giảm 25% chi phí vận chuyển", desc: "Tối ưu lộ trình và điều phối" },
    ],
  },
  {
    id: "custom",
    title: "Thiết kế theo yêu cầu",
    subtitle: "Giải pháp phần mềm Custom riêng biệt",
    description: "Tư vấn và phát triển các tính năng chuyên biệt dựa trên quy trình đặc thù của doanh nghiệp. Cá nhân hóa trải nghiệm 100%.",
    icon: <Settings className="w-8 h-8" />,
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&q=80",
    features: [
      "Phân tích nghiệp vụ chuyên sâu",
      "Thiết kế UI/UX độc quyền theo brand",
      "Phát triển tính năng đặc thù",
      "Tích hợp API bên thứ 3 (ERP, CRM)",
      "Khả năng mở rộng vô hạn",
      "Bảo mật cao, đáp ứng compliance",
    ],
    benefits: [
      { icon: <Settings />, title: "100% cá nhân hóa", desc: "Phù hợp hoàn hảo với quy trình của bạn" },
      { icon: <CheckCircle2 />, title: "Không giới hạn tính năng", desc: "Phát triển theo nhu cầu thực tế" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-dark mb-6">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Từ website giới thiệu đến hệ thống quản lý phức tạp, 
              chúng tôi cung cấp giải pháp công nghệ toàn diện cho ngành Logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-24 ${index % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                  {service.icon}
                </div>
                
                <div>
                  <p className="text-primary font-semibold mb-2">{service.subtitle}</p>
                  <h2 className="text-4xl font-extrabold text-dark mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4">
                  <Link 
                    href="/contact"
                    className={`${service.color} text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all`}
                  >
                    Tư vấn ngay <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>

              {/* Image & Benefits */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-dark text-sm mb-1">{benefit.title}</h4>
                      <p className="text-xs text-gray-500">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Bạn cần giải pháp tùy chỉnh?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Liên hệ ngay để được tư vấn miễn phí về giải pháp phù hợp nhất với doanh nghiệp của bạn.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-all"
          >
            Liên hệ tư vấn <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
