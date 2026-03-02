"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp, Users } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  contentEn: string;
  projectType: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "Giám đốc điều hành",
    company: "Viettrans Logistics",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
    rating: 5,
    content: "Misty LGS đã giúp chúng tôi chuyển đổi số toàn diện. Từ khi sử dụng hệ thống WMS, hiệu suất kho tăng 40%, sai sót giảm 90%. Đội ngũ hỗ trợ rất nhiệt tình.",
    contentEn: "Misty LGS helped us transform our operations digitally. Since using the WMS system, warehouse efficiency increased by 40%, errors reduced by 90%. The support team is very dedicated.",
    projectType: "WMS Pro",
    location: "TP. Hồ Chí Minh",
  },
  {
    id: 2,
    name: "Trần Thị B",
    position: "Quản lý vận tải",
    company: "GreenLogistics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
    rating: 5,
    content: "Website mới giúp khách hàng dễ dàng tra cứu vận đơn và đặt dịch vụ. Doanh thu online tăng 60% chỉ sau 3 tháng. Rất hài lòng với dịch vụ!",
    contentEn: "The new website makes it easy for customers to track shipments and book services. Online revenue increased by 60% just after 3 months. Very satisfied with the service!",
    projectType: "Web Logistics",
    location: "Hà Nội",
  },
  {
    id: 3,
    name: "Lê Hoàng C",
    position: "CTO",
    company: "ShipTech Inc",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    rating: 5,
    content: "App quản lý giao hàng vận hành rất mượt. Đội ngũ dev hiểu nghiệp vụ logistics rất kỹ, có những tính năng mà chúng tôi không nghĩ tới ban đầu.",
    contentEn: "The delivery management app runs very smoothly. The dev team has deep understanding of logistics business, with features we didn't even think of initially.",
    projectType: "App Delivery",
    location: "TP. Hồ Chí Minh",
  },
  {
    id: 4,
    name: "Phạm Văn D",
    position: "Trưởng phòng IT",
    company: "Express Delivery",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80",
    rating: 5,
    content: "Hệ thống TMS giúp tối ưu lộ trình xe, tiết kiệm 25% chi phí nhiên liệu. Báo cáo tự động giúp quản lý theo dõi hiệu quả kinh doanh dễ dàng hơn.",
    contentEn: "The TMS system helped optimize vehicle routes, saving 25% on fuel costs. Automated reports make it easier for management to track business performance.",
    projectType: "TMS Enterprise",
    location: "Đà Nẵng",
  },
  {
    id: 5,
    name: "Vũ Thị E",
    position: "Giám đốc kinh doanh",
    company: "ColdShip Vietnam",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
    rating: 5,
    content: "Tính năng giám sát nhiệt độ real-time là điểm mấu chốt. Khách hàng yên tâm hơn, tỷ lệ hàng hỏng giảm đáng kể. Cảm ơn Misty LGS!",
    contentEn: "The real-time temperature monitoring feature is crucial. Customers are more reassured, and damage rates have decreased significantly. Thank you Misty LGS!",
    projectType: "Cold Chain App",
    location: "TP. Hồ Chí Minh",
  },
  {
    id: 6,
    name: "Hoàng Văn F",
    position: "Chủ doanh nghiệp",
    company: "TransCorp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    rating: 5,
    content: "Từ một công ty vận tải nhỏ, nhờ hệ thống All-in-One của Misty LGS, chúng tôi đã mở rộng quy mô gấp 3 lần. Quản lý tập trung, hiệu quả rõ rệt.",
    contentEn: "From a small transport company, thanks to Misty LGS's All-in-One system, we expanded our scale 3 times. Centralized management, clear efficiency.",
    projectType: "All-in-One",
    location: "Hà Nội",
  },
];

const partners = [
  { name: "Viettrans", logo: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=80&fit=crop&q=80" },
  { name: "GreenLogistics", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=80&fit=crop&q=80" },
  { name: "ShipTech", logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=80&fit=crop&q=80" },
  { name: "Express Delivery", logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=200&h=80&fit=crop&q=80" },
  { name: "ColdShip", logo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=200&h=80&fit=crop&q=80" },
  { name: "TransCorp", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=80&fit=crop&q=80" },
];

export default function TestimonialsPage() {
  const { lang, setLang } = useLanguage();

  const stats = [
    { value: "100+", label: "Khách hàng", labelEn: "Customers" },
    { value: "50+", label: "Dự án hoàn thành", labelEn: "Projects Completed" },
    { value: "98%", label: "Hài lòng", labelEn: "Satisfaction Rate" },
    { value: "5+", label: "Năm kinh nghiệm", labelEn: "Years Experience" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop&q=80" 
            alt="Testimonials Background"
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
            {lang === "vi" ? "Khách hàng nói gì?" : "What Our Customers Say"}
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            {lang === "vi" 
              ? "Những đánh giá chân thực từ khách hàng đã tin tưởng Misty LGS" 
              : "Genuine reviews from customers who trusted Misty LGS"}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#356df1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-2 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-[#ffffff]/80 text-sm font-[family-name:var(--font-body)]">
                  {lang === "vi" ? stat.label : stat.labelEn}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] rounded-2xl p-6 border border-gray-100 hover:border-[#356df1]/30 hover:shadow-lg transition-all"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-[#356df1]/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#666666] mb-6 leading-relaxed font-[family-name:var(--font-body)] line-clamp-4">
                  {lang === "vi" ? testimonial.content : testimonial.contentEn}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#000000] font-[family-name:var(--font-heading)]">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-[#666666] font-[family-name:var(--font-body)]">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Project & Location */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#999999]">
                  <span className="bg-[#356df1]/10 text-[#356df1] px-2 py-1 rounded-full">
                    {testimonial.projectType}
                  </span>
                  <span>•</span>
                  <span>{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {lang === "vi" ? "Đối tác chiến lược" : "Strategic Partners"}
            </h2>
            <p className="text-[#666666] font-[family-name:var(--font-body)]">
              {lang === "vi" 
                ? "Hợp tác với các doanh nghiệp hàng đầu trong ngành Logistics" 
                : "Partnering with leading companies in the Logistics industry"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] rounded-xl p-4 flex items-center justify-center border border-gray-100 hover:border-[#356df1]/30 hover:shadow-md transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-8 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">{partner.name.charAt(0)}</span>
                  </div>
                  <div className="text-xs font-medium text-[#666666]">{partner.name}</div>
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
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#ffffff]/20 rounded-full flex items-center justify-center">
              <ThumbsUp className="w-8 h-8 text-[#ffffff]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            {lang === "vi" 
              ? "Bạn cũng muốn trở thành đối tác?" 
              : "Want to Become a Partner?"}
          </h2>
          <p className="text-[#ffffff]/80 mb-8 font-[family-name:var(--font-body)]">
            {lang === "vi" 
              ? "Liên hệ ngay để được tư vấn giải pháp phù hợp với doanh nghiệp của bạn" 
              : "Contact us now to get consulting for solutions that fit your business"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all"
            >
              {lang === "vi" ? "Liên hệ ngay" : "Contact Now"}
            </Link>
            <Link 
              href="/demo" 
              className="inline-block bg-transparent text-[#ffffff] border-2 border-[#ffffff] px-8 py-4 rounded-full font-semibold hover:bg-[#ffffff]/10 transition-all"
            >
              {lang === "vi" ? "Xem Demo" : "Watch Demo"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
