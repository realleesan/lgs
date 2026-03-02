"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2, ArrowRight, Send } from "lucide-react";
import { submitLead } from "@/lib/api";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
  source?: string;
}

const services = [
  { value: "web-logistics", label: "Website Logistics", labelEn: "Web Logistics" },
  { value: "app", label: "App Mobile", labelEn: "Mobile App" },
  { value: "wms", label: "Phần mềm WMS", labelEn: "WMS Software" },
  { value: "tms", label: "Phần mềm TMS", labelEn: "TMS Software" },
  { value: "custom", label: "Thiết kế theo yêu cầu", labelEn: "Custom Development" },
  { value: "consultation", label: "Tư vấn chuyển đổi số", labelEn: "Digital Transformation Consulting" },
];

const budgets = [
  { value: "under-50m", label: "Dưới 50 triệu", labelEn: "Under 50M VND" },
  { value: "50-100m", label: "50-100 triệu", labelEn: "50-100M VND" },
  { value: "100-200m", label: "100-200 triệu", labelEn: "100-200M VND" },
  { value: "over-200m", label: "Trên 200 triệu", labelEn: "Over 200M VND" },
];

export default function LeadFormModal({ isOpen, onClose, service, source = "website" }: LeadFormModalProps) {
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service_interest: service || "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitLead({
        ...formData,
        source,
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service_interest: service || "",
          budget: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      console.error("Error submitting lead:", err);
      setError(lang === "vi" ? "Có lỗi xảy ra. Vui lòng thử lại." : "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000000]/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 px-4"
          >
            <div className="bg-[#ffffff] rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-[#356df1] px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#ffffff] font-[family-name:var(--font-heading)]">
                    {lang === "vi" ? "Đăng ký tư vấn" : "Get Consultation"}
                  </h3>
                  <p className="text-[#ffffff]/80 text-sm">
                    {lang === "vi" 
                      ? "Nhận báo giá miễn phí" 
                      : "Get Free Quote"}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#ffffff]/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-[#ffffff]" />
                </button>
              </div>

              {/* Language Toggle */}
              <div className="flex justify-end px-6 pt-4">
                <button
                  onClick={() => setLang(lang === "vi" ? "en" : "vi")}
                  className="text-xs text-[#356df1] hover:underline"
                >
                  {lang === "vi" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-[#000000] mb-2">
                      {lang === "vi" ? "Cảm ơn bạn!" : "Thank You!"}
                    </h4>
                    <p className="text-[#666666]">
                      {lang === "vi" 
                        ? "Chúng tôi sẽ liên hệ sớm nhất." 
                        : "We will contact you soon."}
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#000000] mb-1">
                        {lang === "vi" ? "Họ và tên *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#000000] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20"
                        placeholder={lang === "vi" ? "Nhập họ và tên" : "Enter your name"}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#000000] mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#000000] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#000000] mb-1">
                          {lang === "vi" ? "Số điện thoại *" : "Phone *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#000000] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20"
                          placeholder="09xx xxx xxx"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-[#000000] mb-1">
                        {lang === "vi" ? "Tên công ty" : "Company Name"}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#000000] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20"
                        placeholder={lang === "vi" ? "Nhập tên công ty" : "Enter company name"}
                      />
                    </div>

                    {/* Service & Budget */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#000000] mb-1">
                          {lang === "vi" ? "Dịch vụ quan tâm" : "Interested Service"}
                        </label>
                        <select
                          value={formData.service_interest}
                          onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#000000] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20"
                        >
                          <option value="">{lang === "vi" ? "Chọn dịch vụ" : "Select service"}</option>
                          {services.map((s) => (
                            <option key={s.value} value={s.value}>
                              {lang === "vi" ? s.label : s.labelEn}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#000000] mb-1">
                          {lang === "vi" ? "Ngân sách dự kiến" : "Budget"}
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#000000] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20"
                        >
                          <option value="">{lang === "vi" ? "Chọn ngân sách" : "Select budget"}</option>
                          {budgets.map((b) => (
                            <option key={b.value} value={b.value}>
                              {lang === "vi" ? b.label : b.labelEn}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[#000000] mb-1">
                        {lang === "vi" ? "Tin nhắn" : "Message"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#000000] focus:outline-none focus:border-[#356df1] focus:ring-2 focus:ring-[#356df1]/20 resize-none"
                        placeholder={lang === "vi" 
                          ? "Mô tả nhu cầu của bạn..." 
                          : "Describe your needs..."}
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#356df1] text-[#ffffff] py-4 rounded-xl font-semibold hover:bg-[#2a5ad9] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {lang === "vi" ? "Đang gửi..." : "Sending..."}
                        </>
                      ) : (
                        <>
                          {lang === "vi" ? "Gửi yêu cầu" : "Submit Request"}
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </>
                )}

                <p className="text-xs text-center text-[#999999]">
                  {lang === "vi" 
                    ? "Chúng tôi sẽ bảo mật thông tin của bạn." 
                    : "We will keep your information secure."}
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============================================
// Hook để sử dụng LeadForm
// ============================================
export function useLeadForm(service?: string) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
    LeadForm: () => (
      <LeadFormModal 
        isOpen={isOpen} 
        onClose={close} 
        service={service}
      />
    ),
  };
}
