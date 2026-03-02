"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Globe, Smartphone, Package } from "lucide-react";
import Link from "next/link";

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  year?: string;
}

const categories = [
  { id: "all", name: "Tất cả", icon: Briefcase },
  { id: "web", name: "Website", icon: Globe },
  { id: "app", name: "App & Phần mềm", icon: Smartphone },
  { id: "wms", name: "WMS/TMS", icon: Package },
];

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Viettrans Logistics",
    category: "web",
    description: "Website giới thiệu và tra cứu vận đơn cho công ty vận tải lớn tại TP.HCM. Tích hợp hệ thống tracking real-time.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&q=80",
    client: "Viettrans Group",
    year: "2024",
  },
  {
    id: 2,
    title: "ShipTech App",
    category: "app",
    description: "Ứng dụng quản lý giao hàng cho đội ngũ shipper. Theo dõi đơn hàng, tính phí vận chuyển tự động.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    client: "ShipTech Inc",
    year: "2024",
  },
  {
    id: 3,
    title: "Warehouse Pro",
    category: "wms",
    description: "Phần mềm quản lý kho bãi thông minh với barcode scanning, quản lý tồn kho tự động.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80",
    client: "Logistics Plus",
    year: "2023",
  },
  {
    id: 4,
    title: "GreenLogistics Web",
    category: "web",
    description: "Website công ty vận tải xanh với tính năng báo giá online và đặt lịch vận chuyển.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    client: "Green Logistics",
    year: "2024",
  },
  {
    id: 5,
    title: "Fleet Manager",
    category: "app",
    description: "App quản lý đội xe tải, theo dõi vị trí GPS, quản lý nhiên liệu và bảo trì xe.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&q=80",
    client: "TransCorp",
    year: "2023",
  },
  {
    id: 6,
    title: "TMS Express",
    category: "wms",
    description: "Hệ thống quản lý vận tải toàn diện, tối ưu lộ trình, quản lý khách hàng và tính cước.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    client: "Express Delivery",
    year: "2024",
  },
  {
    id: 7,
    title: "ColdChain Monitor",
    category: "app",
    description: "Ứng dụng giám sát nhiệt độ xe lạnh theo thời gian thực, cảnh báo khi nhiệt độ vượt ngưỡng.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&q=80",
    client: "ColdShip Vietnam",
    year: "2023",
  },
  {
    id: 8,
    title: "Cargo Portal",
    category: "web",
    description: "Cổng thông tin vận tải biển, quản lý container, tra cứu lịch tàu và đặt chỗ online.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop&q=80",
    client: "Sea Freight Co",
    year: "2024",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop&q=80" 
            alt="Portfolio Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Portfolio
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Các dự án chúng tôi đã thực hiện cho khách hàng
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#ffffff] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all font-[family-name:var(--font-body)] ${
                    activeCategory === category.id
                      ? "bg-[#356df1] text-[#ffffff]"
                      : "bg-[#f8fafc] text-[#666666] hover:bg-[#e8eefc] hover:text-[#356df1]"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#ffffff] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#356df1]/30 hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 text-[#ffffff] text-sm font-medium bg-[#356df1] px-3 py-1 rounded-full">
                        Xem chi tiết <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-[#356df1] bg-[#356df1]/10 px-3 py-1 rounded-full font-[family-name:var(--font-body)]">
                        {categories.find(c => c.id === project.category)?.name || project.category}
                      </span>
                      {project.year && (
                        <span className="text-xs text-[#999999] font-[family-name:var(--font-body)]">
                          {project.year}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#356df1] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#666666] text-sm leading-relaxed font-[family-name:var(--font-body)] line-clamp-2">
                      {project.description}
                    </p>
                    {project.client && (
                      <p className="text-[#999999] text-xs mt-3 font-[family-name:var(--font-body)]">
                        Khách hàng: {project.client}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#666666] font-[family-name:var(--font-body)]">
                Chưa có dự án nào trong danh mục này
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Dự án hoàn thành" },
              { value: "40+", label: "Khách hàng" },
              { value: "5+", label: "Năm kinh nghiệm" },
              { value: "98%", label: "Khách hàng hài lòng" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#356df1] mb-2 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-[#666666] text-sm font-[family-name:var(--font-body)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop&q=80" 
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Bạn cần một dự án tương tự?
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            Liên hệ ngay để được tư vấn và báo giá miễn phí
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
