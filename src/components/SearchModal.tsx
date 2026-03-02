"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResult {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  href: string;
  category: string;
}

const searchData: SearchResult[] = [
  {
    title: "Trang chủ",
    titleEn: "Home",
    description: "Giải pháp chuyển đổi số Logistics",
    descriptionEn: "Logistics digital transformation solutions",
    href: "/",
    category: "general",
  },
  {
    title: "Dịch vụ",
    titleEn: "Services",
    description: "Thiết kế Web, App, WMS, TMS",
    descriptionEn: "Web, App, WMS, TMS Design",
    href: "/services",
    category: "services",
  },
  {
    title: "Giải pháp",
    titleEn: "Solutions",
    description: "Giải pháp All-in-One cho Logistics",
    descriptionEn: "All-in-One solutions for Logistics",
    href: "/solutions",
    category: "services",
  },
  {
    title: "Báo giá",
    titleEn: "Pricing",
    description: "Bảng giá dịch vụ",
    descriptionEn: "Service pricing",
    href: "/pricing",
    category: "general",
  },
  {
    title: "Portfolio",
    titleEn: "Portfolio",
    description: "Các dự án đã thực hiện",
    descriptionEn: "Completed projects",
    href: "/portfolio",
    category: "general",
  },
  {
    title: "Đánh giá khách hàng",
    titleEn: "Testimonials",
    description: "Khách hàng nói gì về chúng tôi",
    descriptionEn: "What customers say about us",
    href: "/testimonials",
    category: "general",
  },
  {
    title: "FAQ",
    titleEn: "FAQ",
    description: "Câu hỏi thường gặp",
    descriptionEn: "Frequently asked questions",
    href: "/faq",
    category: "general",
  },
  {
    title: "Demo",
    titleEn: "Demo",
    description: "Xem trước sản phẩm",
    descriptionEn: "Product preview",
    href: "/demo",
    category: "services",
  },
  {
    title: "Liên hệ",
    titleEn: "Contact",
    description: "Liên hệ với chúng tôi",
    descriptionEn: "Contact us",
    href: "/contact",
    category: "general",
  },
  {
    title: "Website Logistics",
    titleEn: "Web Logistics",
    description: "Thiết kế website vận tải, logistics",
    descriptionEn: "Transport, logistics website design",
    href: "/web-logistics",
    category: "products",
  },
  {
    title: "App Mobile",
    titleEn: "Mobile App",
    description: "Phát triển ứng dụng di động",
    descriptionEn: "Mobile app development",
    href: "/app",
    category: "products",
  },
  {
    title: "Phần mềm WMS",
    titleEn: "WMS Software",
    description: "Quản lý kho bãi",
    descriptionEn: "Warehouse management",
    href: "/wms",
    category: "products",
  },
  {
    title: "Phần mềm TMS",
    titleEn: "TMS Software",
    description: "Quản lý vận tải",
    descriptionEn: "Transport management",
    href: "/tms",
    category: "products",
  },
  {
    title: "Tin tức",
    titleEn: "News",
    description: "Tin tức về Logistics",
    descriptionEn: "Logistics news",
    href: "/news",
    category: "content",
  },
  {
    title: "Về chúng tôi",
    titleEn: "About Us",
    description: "Thông tin về Misty LGS",
    descriptionEn: "Information about Misty LGS",
    href: "/about",
    category: "general",
  },
];

export default function SearchModal({ onOpen }: { onOpen?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredResults = query.trim()
    ? searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.titleEn.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.descriptionEn.toLowerCase().includes(query.toLowerCase())
      )
    : searchData;

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          if (onOpen) onOpen();
        }}
        className="flex items-center gap-2 px-4 py-2 bg-[#f8fafc] border border-gray-200 rounded-full text-sm text-[#666666] hover:border-[#356df1] hover:text-[#356df1] transition-colors"
      >
        <Search size={16} />
        <span className="hidden sm:inline">{lang === "vi" ? "Tìm kiếm..." : "Search..."}</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-gray-200 rounded text-xs">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#000000]/50 z-50"
            />

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            >
              <div className="bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
                  <Search className="w-5 h-5 text-[#999999]" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={lang === "vi" ? "Tìm kiếm trang, dịch vụ..." : "Search pages, services..."}
                    className="flex-1 text-[#000000] placeholder-[#999999] outline-none text-lg"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-5 h-5 text-[#666666]" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredResults.length > 0 ? (
                    <div className="py-2">
                      {filteredResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-4 py-3 hover:bg-[#f8fafc] transition-colors"
                        >
                          <div>
                            <div className="font-medium text-[#000000]">
                              {lang === "vi" ? result.title : result.titleEn}
                            </div>
                            <div className="text-sm text-[#666666]">
                              {lang === "vi" ? result.description : result.descriptionEn}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#999999]" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-[#666666]">
                      {lang === "vi" 
                        ? "Không tìm thấy kết quả" 
                        : "No results found"}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-gray-100 bg-[#f8fafc] flex items-center justify-between">
                  <span className="text-xs text-[#999999]">
                    {lang === "vi" 
                      ? `${filteredResults.length} kết quả` 
                      : `${filteredResults.length} results`}
                  </span>
                  <button
                    onClick={() => setLang(lang === "vi" ? "en" : "vi")}
                    className="text-xs text-[#356df1] hover:underline"
                  >
                    {lang === "vi" ? "EN" : "VN"}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
