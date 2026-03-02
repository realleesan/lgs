"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { FAQSchema } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItem {
  id: number;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Misty LGS có cung cấp dịch vụ dùng thử miễn phí không?",
    questionEn: "Does Misty LGS offer a free trial?",
    answer: "Có, chúng tôi cung cấp dùng thử miễn phí 14 ngày cho tất cả các sản phẩm. Bạn có thể trải nghiệm đầy đủ tính năng trước khi quyết định mua. Không cần thẻ tín dụng.",
    answerEn: "Yes, we offer a 14-day free trial for all products. You can fully experience the features before deciding to purchase. No credit card required.",
    category: "general",
  },
  {
    id: 2,
    question: "Thời gian triển khai hệ thống mất bao lâu?",
    questionEn: "How long does system implementation take?",
    answer: "Thời gian triển khai phụ thuộc vào độ phức tạp của dự án: Website cơ bản 7-14 ngày, App mobile 30-60 ngày, WMS/TMS 45-90 ngày. Chúng tôi sẽ làm việc sát với bạn để đảm bảo tiến độ.",
    answerEn: "Implementation time depends on project complexity: Basic websites 7-14 days, Mobile apps 30-60 days, WMS/TMS 45-90 days. We will work closely with you to ensure the timeline.",
    category: "service",
  },
  {
    id: 3,
    question: "Hệ thống có tích hợp được với phần mềm hiện tại củaúng tôi ch không?",
    questionEn: "Can the system integrate with our existing software?",
    answer: "Có, chúng tôi hỗ trợ tích hợp với hầu hết các hệ thống ERP, CRM, và phần mềm kế toán phổ biến. Đội ngũ kỹ thuật sẽ khảo sát và tư vấn giải pháp tích hợp phù hợp.",
    answerEn: "Yes, we support integration with most popular ERP, CRM, and accounting software. Our technical team will survey and advise on appropriate integration solutions.",
    category: "technical",
  },
  {
    id: 4,
    question: "Dữ liệu có được bảo mật an toàn không?",
    questionEn: "Is data secured safely?",
    answer: "Chúng tôi sử dụng mã hóa SSL 256-bit, lưu trữ trên cloud server với backup tự động hàng ngày. Hệ thống đạt chuẩn bảo mật ISO 27001 và tuân thủ các quy định về bảo vệ dữ liệu.",
    answerEn: "We use 256-bit SSL encryption, store on cloud servers with automatic daily backups. System meets ISO 27001 security standards and complies with data protection regulations.",
    category: "security",
  },
  {
    id: 5,
    question: "Chi phí bảo trì và nâng cấp sau khi triển khai là bao nhiêu?",
    questionEn: "What are the maintenance and upgrade costs after implementation?",
    answer: "Chi phí bảo trì hàng năm từ 15-20% giá trị contract ban đầu, bao gồm: hosting, bảo mật, cập nhật tính năng mới và hỗ trợ kỹ thuật 24/7. Gói Enterprise có bảo hành trọn đời.",
    answerEn: "Annual maintenance costs from 15-20% of initial contract value, including: hosting, security, new feature updates and 24/7 technical support. Enterprise package has lifetime warranty.",
    category: "pricing",
  },
  {
    id: 6,
    question: "Có hỗ trợ đào tạo sử dụng hệ thống không?",
    questionEn: "Is there training support for using the system?",
    answer: "Có, tất cả các gói dịch vụ đều bao gồm đào tạo trực tuyến hoặc tại chỗ. Chúng tôi cung cấp tài liệu hướng dẫn chi tiết và video tutorial cho người dùng.",
    answerEn: "Yes, all service packages include online or on-site training. We provide detailed documentation and video tutorials for users.",
    category: "service",
  },
  {
    id: 7,
    question: "Misty LGS có hỗ trợ xuất hóa đơn VAT không?",
    questionEn: "Does Misty LGS support VAT invoicing?",
    answer: "Có, chúng tôi xuất hóa đơn VAT hợp lệ cho tất cả các giao dịch. Hóa đơn sẽ được gửi qua email trong vòng 24h sau khi thanh toán.",
    answerEn: "Yes, we issue valid VAT invoices for all transactions. Invoices will be sent via email within 24 hours after payment.",
    category: "pricing",
  },
  {
    id: 8,
    question: "Có thể tùy chỉnh giao diện và tính năng theo nhu cầu không?",
    questionEn: "Can we customize the interface and features as needed?",
    answer: "Hoàn toàn có thể. Chúng tôi cung cấp gói thiết kế theo yêu cầu với 100% cá nhân hóa. Đội ngũ sẽ phân tích nghiệp vụ và phát triển tính năng phù hợp với quy trình của bạn.",
    answerEn: "Absolutely. We offer custom design packages with 100% personalization. The team will analyze your business and develop features that fit your processes.",
    category: "service",
  },
];

const categories = [
  { id: "all", name: "Tất cả", nameEn: "All" },
  { id: "general", name: "Chung", nameEn: "General" },
  { id: "service", name: "Dịch vụ", nameEn: "Service" },
  { id: "pricing", name: "Giá cả", nameEn: "Pricing" },
  { id: "technical", name: "Kỹ thuật", nameEn: "Technical" },
  { id: "security", name: "Bảo mật", nameEn: "Security" },
];

export default function FAQPage() {
  const { lang, setLang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFAQs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  // Transform FAQ items for structured data
  const structuredDataItems = faqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <FAQSchema items={structuredDataItems} />
      <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=600&fit=crop&q=80" 
            alt="FAQ Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]" />
        </div>

        {/* Language Toggle */}
        <div className="absolute top-28 right-6 z-10">
          <button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            className="flex items-center gap-2 px-4 py-2 bg-[#ffffff] border border-gray-200 rounded-full text-sm font-medium text-[#666666] hover:border-[#356df1] hover:text-[#356df1] transition-all shadow-sm"
          >
            <span className="text-xs">{lang === "vi" ? "🇻🇳" : "🇺🇸"}</span>
            {lang === "vi" ? "EN" : "VN"}
          </button>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            {lang === "vi" ? "Câu hỏi thường gặp" : "Frequently Asked Questions"}
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            {lang === "vi" 
              ? "Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ của Misty LGS" 
              : "Find answers to common questions about Misty LGS services"}
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-[#ffffff] border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <div className="relative">
            <input 
              type="text"
              placeholder={lang === "vi" ? "Tìm kiếm câu hỏi..." : "Search questions..."}
              className="w-full px-6 py-4 bg-[#f8fafc] border border-gray-200 rounded-full text-[#000000] placeholder-[#999999] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20 font-[family-name:var(--font-body)]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#356df1] text-[#ffffff] rounded-full font-medium hover:bg-[#2a5ad9] transition-colors">
              {lang === "vi" ? "Tìm" : "Search"}
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all font-[family-name:var(--font-body)] ${
                  activeCategory === category.id
                    ? "bg-[#356df1] text-[#ffffff]"
                    : "bg-[#f8fafc] text-[#666666] hover:bg-[#e8eefc] hover:text-[#356df1]"
                }`}
              >
                {lang === "vi" ? category.name : category.nameEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#ffffff] border border-gray-200 rounded-2xl overflow-hidden hover:border-[#356df1]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-[#000000] font-[family-name:var(--font-body)] pr-4">
                    {lang === "vi" ? item.question : item.questionEn}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#356df1] flex-shrink-0 transition-transform duration-300 ${openItem === item.id ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <p className="text-[#666666] leading-relaxed font-[family-name:var(--font-body)]">
                          {lang === "vi" ? item.answer : item.answerEn}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#ffffff] rounded-3xl p-8 lg:p-12 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#356df1]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-[#356df1]" />
            </div>
            <h2 className="text-2xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {lang === "vi" 
                ? "Không tìm thấy câu trả lời?" 
                : "Can't Find the Answer?"}
            </h2>
            <p className="text-[#666666] mb-8 font-[family-name:var(--font-body)]">
              {lang === "vi" 
                ? "Liên hệ với chúng tôi để được tư vấn và hỗ trợ chi tiết" 
                : "Contact us for detailed consultation and support"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#356df1] text-[#ffffff] px-6 py-3 rounded-full font-semibold hover:bg-[#2a5ad9] transition-colors"
              >
                <MessageCircle size={18} />
                {lang === "vi" ? "Liên hệ ngay" : "Contact Now"}
              </Link>
              <a 
                href="tel:1900xxxx" 
                className="inline-flex items-center gap-2 bg-[#ffffff] text-[#356df1] border border-[#356df1] px-6 py-3 rounded-full font-semibold hover:bg-[#e8eefc] transition-colors"
              >
                <Phone size={18} />
                {lang === "vi" ? "Gọi điện" : "Call Us"}
              </a>
              <a 
                href="mailto:info@mistylgs.com" 
                className="inline-flex items-center gap-2 bg-[#ffffff] text-[#666666] border border-gray-200 px-6 py-3 rounded-full font-semibold hover:border-[#356df1] hover:text-[#356df1] transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
