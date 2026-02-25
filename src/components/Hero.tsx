"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#ffffff]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5f5f5] -z-10 skew-x-[-12deg] translate-x-1/4" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#356df1]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356df1]/10 text-[#356df1] text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#356df1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#356df1]"></span>
            </span>
            Chuyển đổi số Logistics 4.0
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[#000000] leading-tight font-[family-name:var(--font-heading)]">
            Nâng tầm vận hành <br />
            <span className="text-[#356df1] italic font-[family-name:var(--font-heading)]">Misty LGS</span> giải pháp tối ưu
          </h1>
          
          <p className="text-lg text-[#666666] leading-relaxed max-w-xl font-[family-name:var(--font-body)]">
            Chúng tôi không chỉ thiết kế Web/App, chúng tôi xây dựng hệ sinh thái công nghệ giúp doanh nghiệp Logistics quản lý tinh gọn, hiệu quả và đột phá doanh thu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="bg-[#356df1] text-[#ffffff] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#2a5ad9] transition-all font-[family-name:var(--font-body)]"
            >
              Bắt đầu ngay <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#services" 
              className="border-2 border-[#356df1] text-[#356df1] px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-[#356df1]/5 transition-all font-[family-name:var(--font-body)]"
            >
              Xem giải pháp
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">100+</div>
              <div className="text-xs text-[#999999] uppercase font-semibold font-[family-name:var(--font-body)]">Đối tác tin dùng</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">99%</div>
              <div className="text-xs text-[#999999] uppercase font-semibold font-[family-name:var(--font-body)]">Tối ưu quy trình</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-[#356df1] font-[family-name:var(--font-heading)]">24/7</div>
              <div className="text-xs text-[#999999] uppercase font-semibold font-[family-name:var(--font-body)]">Hỗ trợ kỹ thuật</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-[#ffffff] rounded-3xl border border-gray-200 p-4 overflow-hidden group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80" 
                alt="Logistics Warehouse"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-[#ffffff] p-4 rounded-2xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#356df1]/10 text-[#356df1] rounded-lg flex items-center justify-center">
                <BarChart3 size={24} />
              </div>
              <div>
                <div className="text-[10px] text-[#999999] font-bold uppercase font-[family-name:var(--font-body)]">Lợi nhuận</div>
                <div className="text-lg font-bold text-[#000000] font-[family-name:var(--font-heading)]">+32%</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-[#ffffff] p-4 rounded-2xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#356df1]/10 text-[#356df1] rounded-lg flex items-center justify-center">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-[10px] text-[#999999] font-bold uppercase font-[family-name:var(--font-body)]">Tốc độ xử lý</div>
                <div className="text-lg font-bold text-[#000000] font-[family-name:var(--font-heading)]">0.2s</div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#356df1]/5 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
