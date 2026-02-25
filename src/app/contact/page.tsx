"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "web",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Hotline tư vấn",
      value: "+84 123 456 789",
      desc: "Hỗ trợ 24/7",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email liên hệ",
      value: "contact@mistylgs.com",
      desc: "Phản hồi trong 24h",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Văn phòng",
      value: "TP. Hồ Chí Minh",
      desc: "Việt Nam",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Giờ làm việc",
      value: "8:00 - 18:00",
      desc: "Thứ 2 - Thứ 7",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#356df1] mb-6 font-[family-name:var(--font-heading)]">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-xl text-[#356df1] leading-relaxed font-[family-name:var(--font-body)]">
              Đừng để những rào cản công nghệ kìm hãm sự phát triển của doanh nghiệp. 
              Hãy chia sẻ vấn đề của bạn, Misty LGS sẽ đưa ra giải pháp tối ưu nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#356df1] mb-4 font-[family-name:var(--font-heading)]">
                  Thông tin liên hệ
                </h2>
                <p className="text-[#356df1] font-[family-name:var(--font-body)]">
                  Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. 
                  Liên hệ ngay để được tư vấn miễn phí.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-[#ffffff] rounded-2xl border-2 border-[#356df1]/30">
                    <div className="w-12 h-12 bg-[#356df1] text-[#ffffff] rounded-xl flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#356df1] font-[family-name:var(--font-heading)]">{info.title}</h4>
                      <p className="text-[#356df1] font-semibold font-[family-name:var(--font-body)]">{info.value}</p>
                      <p className="text-sm text-[#356df1]/70 font-[family-name:var(--font-body)]">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Message */}
              <div className="p-6 bg-[#356df1]/5 rounded-2xl border-2 border-[#356df1]/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#356df1] text-[#ffffff] rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#356df1] mb-2 font-[family-name:var(--font-heading)]">Tư vấn trực tiếp</h4>
                    <p className="text-[#356df1]/70 text-sm mb-3 font-[family-name:var(--font-body)]">
                      Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc.
                    </p>
                    <p className="text-sm text-[#356df1] font-semibold font-[family-name:var(--font-body)]">
                      Thời gian phản hồi: Trong vòng 2 giờ
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#ffffff] p-8 lg:p-12 rounded-3xl shadow-xl border-2 border-[#356df1]/30"
            >
              <h3 className="text-2xl font-bold text-[#356df1] mb-6 font-[family-name:var(--font-heading)]">
                Gửi yêu cầu tư vấn
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#356df1]/10 text-[#356df1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#356df1] mb-2 font-[family-name:var(--font-heading)]">Đã gửi thành công!</h4>
                  <p className="text-[#356df1]/70 font-[family-name:var(--font-body)]">Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#356df1] ml-1 font-[family-name:var(--font-body)]">Họ và tên *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-5 py-4 rounded-xl bg-[#ffffff] border-2 border-[#356df1]/30 focus:outline-none focus:border-[#356df1] transition-all text-[#356df1] font-medium placeholder:text-[#356df1]/40 font-[family-name:var(--font-body)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#356df1] ml-1 font-[family-name:var(--font-body)]">Số điện thoại *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="09xx xxx xxx"
                        className="w-full px-5 py-4 rounded-xl bg-[#ffffff] border-2 border-[#356df1]/30 focus:outline-none focus:border-[#356df1] transition-all text-[#356df1] font-medium placeholder:text-[#356df1]/40 font-[family-name:var(--font-body)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#356df1] ml-1 font-[family-name:var(--font-body)]">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@company.com"
                      className="w-full px-5 py-4 rounded-xl bg-[#ffffff] border-2 border-[#356df1]/30 focus:outline-none focus:border-[#356df1] transition-all text-[#356df1] font-medium placeholder:text-[#356df1]/40 font-[family-name:var(--font-body)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#356df1] ml-1 font-[family-name:var(--font-body)]">Dịch vụ quan tâm</label>
                    <select
                      title="Dịch vụ quan tâm"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-[#ffffff] border-2 border-[#356df1]/30 focus:outline-none focus:border-[#356df1] transition-all text-[#356df1] font-medium appearance-none font-[family-name:var(--font-body)]"
                    >
                      <option>Thiết kế Web Logistics có sẵn</option>
                      <option>App & Phần mềm quản lý (WMS/TMS)</option>
                      <option>Thiết kế Web/App theo yêu cầu</option>
                      <option>Tư vấn Chuyển đổi số</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#356df1] ml-1 font-[family-name:var(--font-body)]">Lời nhắn</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Mô tả sơ lược về nhu cầu của bạn..."
                      className="w-full px-5 py-4 rounded-xl bg-[#ffffff] border-2 border-[#356df1]/30 focus:outline-none focus:border-[#356df1] transition-all text-[#356df1] font-medium placeholder:text-[#356df1]/40 resize-none font-[family-name:var(--font-body)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#356df1] text-[#ffffff] py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#356df1]/80 transition-all shadow-lg shadow-[#356df1]/20 font-[family-name:var(--font-body)]"
                  >
                    Gửi yêu cầu <Send size={20} />
                  </button>

                  <p className="text-xs text-[#356df1]/50 text-center font-[family-name:var(--font-body)]">
                    Bằng việc gửi form, bạn đồng ý với chính sách bảo mật của chúng tôi.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#356df1] mb-4 font-[family-name:var(--font-heading)]">
              Vị trí của chúng tôi
            </h2>
            <p className="text-[#356df1] font-[family-name:var(--font-body)]">TP. Hồ Chí Minh, Việt Nam</p>
          </div>
          <div className="bg-[#356df1]/10 rounded-3xl h-96 flex items-center justify-center border-2 border-[#356df1]/30">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#356df1] mx-auto mb-4" />
              <p className="text-[#356df1] font-[family-name:var(--font-body)]">Bản đồ sẽ được tích hợp tại đây</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
