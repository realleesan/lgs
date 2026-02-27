"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye } from "lucide-react";
import Link from "next/link";
import { getNews } from "@/lib/api";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  views: number;
  image: string;
  size: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNews();
        setNews(data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

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
            {loading ? (
              <div className="col-span-full text-center py-20">
                <div className="animate-pulse text-[#666666]">Đang tải tin tức...</div>
              </div>
            ) : news.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <p className="text-[#666666]">Chưa có tin tức nào</p>
              </div>
            ) : (
              news.map((item, index) => (
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
                      src={item.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80"} 
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
              ))
            )}
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
