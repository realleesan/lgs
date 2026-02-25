"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-[#356df1] font-bold tracking-wider uppercase text-sm font-[family-name:var(--font-body)]">Liên hệ ngay</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#000000] leading-tight font-[family-name:var(--font-heading)]">
                Bắt đầu hành trình <br /> chuyển đổi số của bạn
              </h3>
              <p className="text-[#666666] text-lg leading-relaxed font-[family-name:var(--font-body)]">
                Đừng để những rào cản công nghệ kìm hãm sự phát triển của doanh nghiệp. Hãy chia sẻ vấn đề của bạn, Misty LGS sẽ đưa ra giải pháp tối ưu nhất.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Hotline tư vấn",
                  value: "+84 123 456 789",
                  icon: <Phone className="w-6 h-6 text-[#ffffff]" />,
                  bg: "bg-[#356df1]",
                },
                {
                  title: "Email liên hệ",
                  value: "contact@mistylgs.com",
                  icon: <Mail className="w-6 h-6 text-[#ffffff]" />,
                  bg: "bg-[#356df1]",
                },
                {
                  title: "Văn phòng làm việc",
                  value: "TP. Hồ Chí Minh, Việt Nam",
                  icon: <MapPin className="w-6 h-6 text-[#ffffff]" />,
                  bg: "bg-[#356df1]",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-center">
                  <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center shadow-lg shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#999999] uppercase tracking-widest font-[family-name:var(--font-body)]">{item.title}</h4>
                    <p className="text-xl font-bold text-[#000000] font-[family-name:var(--font-heading)]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-[#f5f5f5] border border-gray-200 flex items-center gap-6">
              <div className="w-16 h-16 bg-[#356df1]/10 text-[#356df1] rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#000000] font-[family-name:var(--font-heading)]">Tư vấn trực tiếp 24/7</h4>
                <p className="text-[#666666] text-sm font-[family-name:var(--font-body)]">Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#ffffff] p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#000000] ml-1 font-[family-name:var(--font-body)]">Họ và tên</label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-5 py-4 rounded-xl bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#356df1] transition-all text-[#000000] font-medium placeholder:text-[#999999] font-[family-name:var(--font-body)]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#000000] ml-1 font-[family-name:var(--font-body)]">Số điện thoại</label>
                  <input
                    type="tel"
                    placeholder="09xx xxx xxx"
                    className="w-full px-5 py-4 rounded-xl bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#356df1] transition-all text-[#000000] font-medium placeholder:text-[#999999] font-[family-name:var(--font-body)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#000000] ml-1 font-[family-name:var(--font-body)]">Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 rounded-xl bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#356df1] transition-all text-[#000000] font-medium placeholder:text-[#999999] font-[family-name:var(--font-body)]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#000000] ml-1 font-[family-name:var(--font-body)]">Dịch vụ quan tâm</label>
                <select 
                  title="Dịch vụ quan tâm"
                  className="w-full px-5 py-4 rounded-xl bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#356df1] transition-all text-[#000000] font-medium appearance-none font-[family-name:var(--font-body)]"
                >
                  <option>Thiết kế Web Logistics có sẵn</option>
                  <option>App & Phần mềm quản lý (WMS/TMS)</option>
                  <option>Thiết kế Web/App theo yêu cầu</option>
                  <option>Tư vấn Chuyển đổi số</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#000000] ml-1 font-[family-name:var(--font-body)]">Lời nhắn của bạn</label>
                <textarea
                  rows={4}
                  placeholder="Mô tả sơ lược về nhu cầu của bạn..."
                  className="w-full px-5 py-4 rounded-xl bg-[#f5f5f5] border border-gray-200 focus:outline-none focus:border-[#356df1] transition-all text-[#000000] font-medium placeholder:text-[#999999] resize-none font-[family-name:var(--font-body)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#356df1] text-[#ffffff] py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#2a5ad9] transition-all shadow-lg group font-[family-name:var(--font-body)]"
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
