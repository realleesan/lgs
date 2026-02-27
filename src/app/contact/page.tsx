"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "web", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, title: "Điện thoại", value: "0914960029" },
    { icon: <Mail className="w-5 h-5" />, title: "Email", value: "baominhkpkp@gmail.com" },
    { icon: <MapPin className="w-5 h-5" />, title: "Địa chỉ", value: "Phường Phú Diễn, TP. Hà Nội" },
    { icon: <Clock className="w-5 h-5" />, title: "Giờ làm", value: "08:00 - 23:00 (T2-CN)" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#ffffff] to-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
            Liên hệ
          </h1>
          <p className="text-lg text-[#666666] font-[family-name:var(--font-body)]">
            Sẵn sàng hỗ trợ bạn 24/7
          </p>
        </div>
      </section>

      {/* Contact Grid - Large Map */}
      <section className="py-12 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Map - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-[#f8fafc] rounded-3xl h-[500px] overflow-hidden border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.657489667626!2d105.76235767477684!3d21.046192780608256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb1a1cba5e3%3A0x6017c53dc908c0d9!2zUGjDumMgUGjDuiwgVGjhu6cgxJDhu6ljLCBIYWkgIsSDbw!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="p-4 bg-[#f8fafc] rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#356df1]/10 rounded-lg flex items-center justify-center text-[#356df1]">
                        {info.icon}
                      </div>
                      <div className="text-xs text-[#999999]">{info.title}</div>
                    </div>
                    <div className="font-bold text-[#000000] font-[family-name:var(--font-body)]">{info.value}</div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="p-6 bg-[#f8fafc] rounded-3xl border border-gray-100">
                <h3 className="text-lg font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
                  Gửi tin nhắn
                </h3>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <p className="text-[#000000] font-medium">Đã gửi thành công!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      required 
                      placeholder="Họ tên"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-gray-200 focus:outline-none focus:border-[#356df1] text-[#000000]"
                    />
                    <input 
                      type="tel" 
                      required 
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-gray-200 focus:outline-none focus:border-[#356df1] text-[#000000]"
                    />
                    <input 
                      type="email" 
                      required 
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-gray-200 focus:outline-none focus:border-[#356df1] text-[#000000]"
                    />
                    <textarea 
                      rows={3} 
                      placeholder="Nội dung"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#ffffff] border border-gray-200 focus:outline-none focus:border-[#356df1] text-[#000000] resize-none"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-[#356df1] text-[#ffffff] py-3 rounded-xl font-semibold hover:bg-[#2a5ad9] transition-all flex items-center justify-center gap-2"
                    >
                      Gửi <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
