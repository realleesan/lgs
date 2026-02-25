"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#f0f4f8] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm font-[family-name:var(--font-body)]">Liên hệ ngay</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight font-[family-name:var(--font-heading)]">
                Bắt đầu hành trình <br /> chuyển đổi số của bạn
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-[family-name:var(--font-body)]">
                Đừng để những rào cản công nghệ kìm hãm sự phát triển của doanh nghiệp. Hãy chia sẻ vấn đề của bạn, Misty LGS sẽ đưa ra giải pháp tối ưu nhất.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Hotline tư vấn",
                  value: "+84 123 456 789",
                  icon: <Phone className="w-6 h-6 text-white" />,
                  bg: "bg-primary",
                },
                {
                  title: "Email liên hệ",
                  value: "contact@mistylgs.com",
                  icon: <Mail className="w-6 h-6 text-white" />,
                  bg: "bg-accent",
                },
                {
                  title: "Văn phòng làm việc",
                  value: "TP. Hồ Chí Minh, Việt Nam",
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  bg: "bg-primary",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-center">
                  <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center shadow-lg shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest font-[family-name:var(--font-body)]">{item.title}</h4>
                    <p className="text-xl font-bold text-[#1a1a1a] font-[family-name:var(--font-heading)]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 flex items-center gap-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1a1a1a] font-[family-name:var(--font-heading)]">Tư vấn trực tiếp 24/7</h4>
                <p className="text-gray-500 text-sm font-[family-name:var(--font-body)]">Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 font-[family-name:var(--font-body)]">Họ và tên</label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-5 py-4 rounded-xl bg-[#f0f4f8] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#1a1a1a] font-medium placeholder:text-gray-400 font-[family-name:var(--font-body)]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 font-[family-name:var(--font-body)]">Số điện thoại</label>
                  <input
                    type="tel"
                    placeholder="09xx xxx xxx"
                    className="w-full px-5 py-4 rounded-xl bg-[#f0f4f8] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#1a1a1a] font-medium placeholder:text-gray-400 font-[family-name:var(--font-body)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 font-[family-name:var(--font-body)]">Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 rounded-xl bg-[#f0f4f8] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#1a1a1a] font-medium placeholder:text-gray-400 font-[family-name:var(--font-body)]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 font-[family-name:var(--font-body)]">Dịch vụ quan tâm</label>
                <select 
                  title="Dịch vụ quan tâm"
                  className="w-full px-5 py-4 rounded-xl bg-[#f0f4f8] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#1a1a1a] font-medium appearance-none font-[family-name:var(--font-body)]"
                >
                  <option>Thiết kế Web Logistics có sẵn</option>
                  <option>App & Phần mềm quản lý (WMS/TMS)</option>
                  <option>Thiết kế Web/App theo yêu cầu</option>
                  <option>Tư vấn Chuyển đổi số</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 font-[family-name:var(--font-body)]">Lời nhắn của bạn</label>
                <textarea
                  rows={4}
                  placeholder="Mô tả sơ lược về nhu cầu của bạn..."
                  className="w-full px-5 py-4 rounded-xl bg-[#f0f4f8] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#1a1a1a] font-medium placeholder:text-gray-400 resize-none font-[family-name:var(--font-body)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent transition-all shadow-xl shadow-primary/20 group font-[family-name:var(--font-body)]"
              >
                Gửi yêu cầu ngay <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
