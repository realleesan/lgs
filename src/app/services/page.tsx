"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Layout, Smartphone, Settings } from "lucide-react";
import Link from "next/link";
import { getServices } from "@/lib/api";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
  reversed: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices();
        setServices(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  // Fallback data if no services in database
  const defaultServices: Service[] = [
    {
      id: 1,
      title: "Web Logistics",
      subtitle: "Chuyên nghiệp & Tối ưu SEO",
      description: "Website giới thiệu công ty vận tải, logistics với giao diện hiện đại. Tích hợp đầy đủ tính năng cần thiết.",
      features: ["Tra cứu vận đơn", "Bảng giá tự động", "Tối ưu SEO", "CMS dễ quản lý"],
      icon: "Layout",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      reversed: false,
    },
    {
      id: 2,
      title: "App & Phần mềm",
      subtitle: "Quản lý toàn diện",
      description: "Giải pháp TMS, WMS giúp tự động hóa quy trình vận hành. Quản lý đơn hàng, điều phối xe, kho bãi hiệu quả.",
      features: ["Quản lý đơn hàng", "Điều phối xe", "Báo cáo thông minh", "Tích hợp API"],
      icon: "Smartphone",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
      reversed: true,
    },
    {
      id: 3,
      title: "Thiết kế theo yêu cầu",
      subtitle: "Giải pháp riêng biệt",
      description: "Phát triển tính năng theo quy trình đặc thù của doanh nghiệp. 100% cá nhân hóa theo nhu cầu.",
      features: ["Phân tích nghiệp vụ", "UI/UX độc quyền", "Khả năng mở rộng", "Hỗ trợ lâu dài"],
      icon: "Settings",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
      reversed: false,
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=600&fit=crop&q=80" 
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Dịch vụ
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Giải pháp công nghệ toàn diện cho ngành Logistics
          </p>
        </div>
      </section>

      {/* Services Alternating Layout */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-pulse text-[#666666]">Đang tải dịch vụ...</div>
            </div>
          ) : (
            displayServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={service.reversed ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356df1]/10 text-[#356df1] text-sm font-medium mb-4">
                    {iconMap[service.icon] || <Layout className="w-8 h-8" />}
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h2>
                  <p className="text-[#666666] mb-6 leading-relaxed font-[family-name:var(--font-body)]">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {(service.features || []).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#000000]">
                        <Check className="w-4 h-4 text-[#356df1]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-[#356df1] font-semibold hover:gap-3 transition-all font-[family-name:var(--font-body)]"
                  >
                    Tìm hiểu thêm <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Image */}
                <div className={service.reversed ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                      <img 
                        src={service.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=600&fit=crop&q=80" 
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Cần tư vấn chi tiết?
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            Liên hệ ngay để được hỗ trợ lựa chọn giải pháp phù hợp
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </main>
  );
}
