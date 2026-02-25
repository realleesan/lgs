"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Xu hướng chuyển đổi số trong ngành Logistics 2024",
    excerpt: "Khám phá những xu hướng công nghệ mới nhất đang thay đổi cách vận hành của các doanh nghiệp logistics hiện đại.",
    category: "Xu hướng",
    date: "20/02/2024",
    views: 1250,
    image: "/globe.svg",
  },
  {
    id: 2,
    title: "Giải pháp All-in-One: Giải pháp toàn diện cho doanh nghiệp logistics",
    excerpt: "Tìm hiểu cách hệ thống quản lý tích hợp giúp doanh nghiệp tối ưu hóa vận hành và giảm chi phí đến 30%.",
    category: "Giải pháp",
    date: "18/02/2024",
    views: 980,
    image: "/window.svg",
  },
  {
    id: 3,
    title: "Case Study: Thành công chuyển đổi số của Công ty Vận tải ABC",
    excerpt: "Chia sẻ kinh nghiệm thực tế và kết quả đạt được sau khi triển khai hệ thống quản lý logistics của Misty LGS.",
    category: "Case Study",
    date: "15/02/2024",
    views: 756,
    image: "/file.svg",
  },
  {
    id: 4,
    title: "5 Tiêu chí lựa chọn phần mềm quản lý kho bãi (WMS)",
    excerpt: "Hướng dẫn chi tiết giúp doanh nghiệp lựaải pháp chọn gi WMS phù hợp với quy mô và nhu cầu.",
    category: "Hướng dẫn",
    date: "12/02/2024",
    views: 542,
    image: "/globe.svg",
  },
  {
    id: 5,
    title: "Tầm quan trọng của dữ liệu trong quản lý vận tải",
    excerpt: "Cách tận dụng dữ liệu để đưa ra quyết định kinh doanh chính xác và tối ưu hóa hiệu suất vận hành.",
    category: "Kiến thức",
    date: "10/02/2024",
    views: 423,
    image: "/window.svg",
  },
  {
    id: 6,
    title: "Misty LGS ra mắt tính năng mới: Tích hợp AI vào hệ thống",
    excerpt: "Cập nhật phiên bản mới với công nghệ AI giúp dự đoán nhu cầu vận chuyển và tối ưu lộ trình.",
    category: "Sản phẩm",
    date: "08/02/2024",
    views: 687,
    image: "/file.svg",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">Tin tức & Cập nhật</h1>
            <p className="text-xl text-[#666666] leading-relaxed font-[family-name:var(--font-body)]">
              Cập nhật những tin tức mới nhất về công nghệ logistics, xu hướng chuyển đổi số và giải pháp từ Misty LGS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-[#ffffff] rounded-2xl border border-gray-200 overflow-hidden hover:border-[#356df1] transition-colors"
              >
                <div className="h-48 bg-[#f5f5f5] flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#356df1]/10 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#356df1] rounded-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#356df1]/10 text-[#356df1] text-xs font-semibold rounded-full font-[family-name:var(--font-body)]">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#999999] font-[family-name:var(--font-body)]">
                      <Clock size={14} /> {item.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#000000] mb-3 font-[family-name:var(--font-heading)] group-hover:text-[#356df1] transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-[#666666] text-sm mb-4 font-[family-name:var(--font-body)] line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-xs text-[#999999] font-[family-name:var(--font-body)]">
                      <Eye size={14} /> {item.views} lượt xem
                    </span>
                    <Link href={`/news/${item.id}`} className="flex items-center gap-1 text-[#356df1] text-sm font-semibold font-[family-name:var(--font-body)] group-hover:gap-2 transition-all">
                      Đọc tiếp <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#356df1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            Đăng ký nhận tin tức mới nhất
          </h2>
          <p className="text-[#ffffff]/80 text-lg mb-8 font-[family-name:var(--font-body)]">
            Nhận thông tin cập nhật về xu hướng công nghệ và ưu đãi từ Misty LGS
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              className="flex-1 px-6 py-4 rounded-full bg-[#ffffff] text-[#000000] font-medium font-[family-name:var(--font-body)] placeholder:text-[#999999] focus:outline-none"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-[#000000] text-[#ffffff] rounded-full font-bold font-[family-name:var(--font-body)] hover:bg-[#333333] transition-colors"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
