"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Xu hướng chuyển đổi số Logistics 2024",
    excerpt: "Khám phá những xu hướng công nghệ mới nhất đang thay đổi cách vận hành của các doanh nghiệp logistics.",
    category: "Xu hướng",
    date: "20/02/2024",
    views: 1250,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Giải pháp All-in-One cho Logistics",
    excerpt: "Tìm hiểu cách hệ thống quản lý tích hợp giúp doanh nghiệp tối ưu hóa vận hành và giảm chi phí.",
    category: "Giải pháp",
    date: "18/02/2024",
    views: 980,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    size: "medium",
  },
  {
    id: 3,
    title: "Case Study: Thành công chuyển đổi số",
    excerpt: "Chia sẻ kinh nghiệm thực tế và kết quả đạt được sau khi triển khai hệ thống.",
    category: "Case Study",
    date: "15/02/2024",
    views: 756,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    size: "medium",
  },
  {
    id: 4,
    title: "5 Tiêu chí chọn phần mềm WMS",
    excerpt: "Hướng dẫn lựa chọn giải pháp WMS phù hợp với quy mô doanh nghiệp.",
    category: "Hướng dẫn",
    date: "12/02/2024",
    views: 542,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    size: "small",
  },
  {
    id: 5,
    title: "Tầm quan trọng của dữ liệu trong vận tải",
    excerpt: "Cách tận dụng dữ liệu để đưa ra quyết định kinh doanh chính xác.",
    category: "Kiến thức",
    date: "10/02/2024",
    views: 423,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    size: "small",
  },
  {
    id: 6,
    title: "Ra mắt tính năng mới: AI trong Logistics",
    excerpt: "Cập nhật phiên bản mới với công nghệ AI giúp dự đoán nhu cầu vận chuyển.",
    category: "Sản phẩm",
    date: "08/02/2024",
    views: 687,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
    size: "small",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop&q=80" 
            alt="News Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Tin tức
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Cập nhật tin tức và xu hướng mới nhất
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group bg-[#ffffff] rounded-2xl border border-gray-100 overflow-hidden hover:border-[#356df1] transition-colors ${
                  item.size === "large" ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${item.size === "large" ? "h-64" : "h-40"} overflow-hidden`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#356df1]/10 text-[#356df1] text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#999999]">
                      <Clock size={12} /> {item.date}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#000000] mb-2 group-hover:text-[#356df1] transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h2>

                  <p className="text-[#666666] text-sm mb-4 line-clamp-2 font-[family-name:var(--font-body)]">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-xs text-[#999999]">
                      <Eye size={12} /> {item.views}
                    </span>
                    <Link 
                      href={`/news/${item.id}`} 
                      className="flex items-center gap-1 text-[#356df1] text-sm font-medium hover:gap-2 transition-all"
                    >
                      Đọc tiếp <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-16 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1920&h=400&fit=crop&q=80" 
          alt="Newsletter"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Đăng ký nhận tin
          </h2>
          <p className="text-[#ffffff]/80 mb-6 font-[family-name:var(--font-body)]">
            Nhận thông tin cập nhật về xu hướng công nghệ
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="flex-1 px-5 py-3 rounded-full bg-[#ffffff] text-[#000000] font-medium"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-[#000000] text-[#ffffff] rounded-full font-semibold hover:bg-[#333333] transition-colors"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
