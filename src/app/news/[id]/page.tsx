"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Eye, Share2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getNews, getNewsById } from "@/lib/api";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  views: number;
  image: string;
  size: string;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function NewsDetailPage({ params }: PageProps) {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resolvedParams = await params;
        const id = parseInt(resolvedParams.id);
        
        const [newsData, allNewsData] = await Promise.all([
          getNewsById(id),
          getNews()
        ]);
        
        setNews(newsData);
        setAllNews(allNewsData || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Không tìm thấy tin tức");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params]);

  // Find next and previous news
  const currentIndex = allNews.findIndex(n => n.id === news?.id);
  const prevNews = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null;
  const nextNews = currentIndex > 0 ? allNews[currentIndex - 1] : null;

  if (loading) {
    return (
      <main className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="animate-pulse text-[#666666]">Đang tải tin tức...</div>
        </div>
      </main>
    );
  }

  if (error || !news) {
    return (
      <main className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#000000] mb-4">Không tìm thấy tin tức</h1>
          <Link href="/news" className="text-[#356df1] hover:underline">
            ← Quay lại danh sách tin tức
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img 
          src={news.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=800&fit=crop&q=80"} 
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link 
            href="/news"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffffff]/20 backdrop-blur-sm rounded-full text-[#ffffff] hover:bg-[#ffffff]/30 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Quay lại</span>
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#ffffff] rounded-3xl shadow-lg p-8 lg:p-12"
          >
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-[#356df1]/10 text-[#356df1] text-sm font-medium rounded-full">
                {news.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#999999]">
                <Calendar size={14} /> {news.date}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#999999]">
                <Eye size={14} /> {news.views} lượt xem
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]">
              {news.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-[#666666] mb-8 font-[family-name:var(--font-body)] leading-relaxed">
              {news.excerpt}
            </p>

            {/* Share */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <span className="text-sm text-[#666666]">Chia sẻ:</span>
              <button className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#666666] hover:bg-[#356df1] hover:text-[#ffffff] transition-colors">
                <Share2 size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none font-[family-name:var(--font-body)]">
              {news.content ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: news.content }}
                  className="text-[#333333] leading-relaxed"
                />
              ) : (
                <>
                  <p className="text-[#333333] mb-6 leading-relaxed">
                    Trong bối cảnh chuyển đổi số đang diễn ra mạnh mẽ tại Việt Nam, ngành Logistics đứng trước cơ hội và thách thức lớn. Việc ứng dụng công nghệ vào quản lý vận tải, kho bãi không còn là lựa chọn mà trở thành yêu cầu bắt buộc để doanh nghiệp tồn tại và phát triển.
                  </p>
                  <h2 className="text-xl font-bold text-[#000000] mt-8 mb-4">
                    Tại sao cần chuyển đổi số trong Logistics?
                  </h2>
                  <p className="text-[#333333] mb-6 leading-relaxed">
                    Theo các chuyên gia, ngành Logistics Việt Nam đang đối mặt với nhiều thách thức như: chi phí logistics cao (chiếm khoảng 16-17% GDP), thiếu hụt nhân lực công nghệ thông tin, và sự phân mảnh trong hệ thống quản lý. Việc chuyển đổi số giúp doanh nghiệp:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#333333]">
                    <li>Tối ưu hóa quy trình vận hành, giảm chi phí</li>
                    <li>Theo dõi và quản lý tài sản real-time</li>
                    <li>Nâng cao trải nghiệm khách hàng</li>
                    <li>Đưa ra quyết định dựa trên dữ liệu</li>
                  </ul>
                  <h2 className="text-xl font-bold text-[#000000] mt-8 mb-4">
                    Giải pháp từ Misty LGS
                  </h2>
                  <p className="text-[#333333] mb-6 leading-relaxed">
                    Misty LGS cung cấp các giải pháp toàn diện giúp doanh nghiệp Logistics chuyển đổi số thành công. Từ thiết kế website chuyên nghiệp, phát triển ứng dụng di động, đến phần mềm quản lý kho (WMS) và vận tải (TMS), chúng tôi đồng hành cùng doanh nghiệp trong suốt hành trình chuyển đổi.
                  </p>
                  <p className="text-[#333333] mb-6 leading-relaxed">
                    Với đội ngũ giàu kinh nghiệm và am hiểu ngành Logistics, Misty LGS cam kết mang đến giải pháp phù hợp nhất với nhu cầu và ngân sách của từng doanh nghiệp.
                  </p>
                </>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
              <span className="text-sm text-[#666666]">Tags:</span>
              <span className="px-3 py-1 bg-[#f8fafc] text-[#666666] text-sm rounded-full">Logistics</span>
              <span className="px-3 py-1 bg-[#f8fafc] text-[#666666] text-sm rounded-full">Chuyển đổi số</span>
              <span className="px-3 py-1 bg-[#f8fafc] text-[#666666] text-sm rounded-full">Công nghệ</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#000000] mb-8 font-[family-name:var(--font-heading)]">
            Tin tức liên quan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous News */}
            {prevNews && (
              <Link 
                href={`/news/${prevNews.id}`}
                className="group bg-[#ffffff] rounded-2xl p-4 border border-gray-100 hover:border-[#356df1] transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={prevNews.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&q=80"} 
                      alt={prevNews.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-[#999999] mb-1">
                      <ChevronLeft size={14} /> Tin trước
                    </div>
                    <h3 className="text-base font-bold text-[#000000] group-hover:text-[#356df1] transition-colors line-clamp-2 font-[family-name:var(--font-heading)]">
                      {prevNews.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}

            {/* Next News */}
            {nextNews && (
              <Link 
                href={`/news/${nextNews.id}`}
                className="group bg-[#ffffff] rounded-2xl p-4 border border-gray-100 hover:border-[#356df1] transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={nextNews.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&q=80"} 
                      alt={nextNews.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-end gap-2 text-xs text-[#999999] mb-1">
                      Tin sau <ChevronRight size={14} />
                    </div>
                    <h3 className="text-base font-bold text-[#000000] group-hover:text-[#356df1] transition-colors line-clamp-2 text-right font-[family-name:var(--font-heading)]">
                      {nextNews.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Back to News List */}
          <div className="text-center mt-8">
            <Link 
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#356df1] text-[#ffffff] rounded-full font-medium hover:bg-[#2a5ad9] transition-colors"
            >
              <ArrowLeft size={18} />
              Xem tất cả tin tức
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
