"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Globe, Package, Truck, Zap } from "lucide-react";
import { getSolutions } from "@/lib/api";

interface Solution {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
};

const defaultSolutions: Solution[] = [
  {
    id: 1,
    title: "Giải pháp All-in-One",
    subtitle: "Toàn diện",
    icon: "Globe",
    description: "Hệ thống tích hợp tất cả tính năng cần thiết cho doanh nghiệp Logistics. Từ quản lý đơn hàng, kho bãi đến vận tải trong một nền tảng duy nhất.",
    features: ["Quản lý tập trung", "Tích hợp đa kênh", "Báo cáo real-time", "Tiết kiệm 30% chi phí"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Quản lý kho bãi (WMS)",
    subtitle: "Kho bãi",
    icon: "Package",
    description: "Hệ thống quản lý kho thông minh. Theo dõi tồn kho, quy trình nhập xuất, tối ưu không gian lưu trữ.",
    features: ["Quản lý tồn kho", "Quy trình nhập/xuất", "Báo cáo tự động", "Tích hợp barcode"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Quản lý vận tải (TMS)",
    subtitle: "Vận tải",
    icon: "Truck",
    description: "Giải pháp quản lý vận tải toàn diện. Điều phối xe, theo dõi lộ trình, tối ưu chi phí vận chuyển.",
    features: ["Điều phối xe", "Theo dõi GPS", "Tối ưu lộ trình", "Quản lý tài xế"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Tư vấn chuyển đổi số",
    subtitle: "Consulting",
    icon: "Zap",
    description: "Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số. Phân tích quy trình, đề xuất giải pháp phù hợp.",
    features: ["Phân tích quy trình", "Đề xuất giải pháp", "Triển khai từng bước", "Đào tạo nhân sự"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
  },
];

const benefits = [
  { number: "30%", label: "Giảm chi phí" },
  { number: "50%", label: "Tăng hiệu suất" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Hỗ trợ" },
];

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("1");

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const data = await getSolutions();
        setSolutions(data || []);
        if (data && data.length > 0) {
          setActiveTab(String(data[0].id));
        }
      } catch (error) {
        console.error("Error fetching solutions:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSolutions();
  }, []);

  const displaySolutions = solutions.length > 0 ? solutions : defaultSolutions;
  const activeSolution = displaySolutions.find(s => String(s.id) === activeTab) || displaySolutions[0];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop&q=80" 
            alt="Solutions Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Giải pháp
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Giải pháp tối ưu cho doanh nghiệp Logistics
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-[#356df1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#ffffff] font-[family-name:var(--font-heading)]">{benefit.number}</div>
                <div className="text-[#ffffff]/80 text-sm font-[family-name:var(--font-body)]">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-6">
          {loading ? (
            <div className="text-center py-4">
              <div className="animate-pulse text-[#666666]">Đang tải...</div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {displaySolutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(String(solution.id))}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 font-[family-name:var(--font-body)] ${
                    activeTab === String(solution.id)
                      ? "bg-[#356df1] text-[#ffffff]"
                      : "bg-[#f8fafc] text-[#666666] hover:bg-[#f1f5f9]"
                  }`}
                >
                  {iconMap[solution.icon] || <Globe className="w-6 h-6" />}
                  {solution.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img 
                    src={activeSolution.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"}
                    alt={activeSolution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356df1]/10 text-[#356df1] text-sm font-medium mb-4">
                  {iconMap[activeSolution.icon] || <Globe className="w-6 h-6" />}
                  {activeSolution.subtitle}
                </div>
                <h2 className="text-3xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
                  {activeSolution.title}
                </h2>
                <p className="text-[#666666] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                  {activeSolution.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {(activeSolution.features || []).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#356df1]/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#356df1]" />
                      </div>
                      <span className="text-[#000000] font-[family-name:var(--font-body)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop&q=80" 
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Cần tư vấn giải pháp?
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            Liên hệ để được phân tích và đề xuất giải pháp phù hợp
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
          >
            Liên hệ tư vấn
          </a>
        </div>
      </section>
    </main>
  );
}
