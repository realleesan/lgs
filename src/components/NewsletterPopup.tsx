"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Check, Loader2 } from "lucide-react";
import { subscribeNewsletter } from "@/lib/api";

interface NewsletterPopupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholder?: string;
  successMessage?: string;
  delay?: number; // Delay in milliseconds before showing popup
  storageKey?: string; // Key to store dismissed state in localStorage
}

export default function NewsletterPopup({
  title = "Đăng ký nhận tin tức",
  description = "Nhận thông tin mới nhất về giải pháp Logistics và ưu đãi đặc biệt từ Misty LGS",
  buttonText = "Đăng ký ngay",
  placeholder = "Nhập email của bạn",
  successMessage = "Cảm ơn bạn! Đã đăng ký thành công.",
  delay = 5000, // Show after 5 seconds
  storageKey = "newsletter_dismissed",
}: NewsletterPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user has already dismissed the popup
    const isDismissed = localStorage.getItem(storageKey);
    if (isDismissed) return;

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, storageKey]);

  const handleClose = () => {
    setIsOpen(false);
    // Store dismissed state for 7 days
    localStorage.setItem(storageKey, Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !email.includes("@")) {
      setError("Vui lòng nhập email hợp lệ");
      return;
    }

    setLoading(true);

    // Simulate API call
    try {
      await subscribeNewsletter(email);
      setSuccess(true);
      // Store email in localStorage for demo purposes
      localStorage.setItem("newsletter_email", email);
    } catch (err) {
      setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            {success ? (
              // Success state
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check size={32} className="text-green-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {successMessage}
                </h3>
                <p className="text-gray-600">
                  Cảm ơn bạn đã quan tâm đến Misty LGS!
                </p>
              </div>
            ) : (
              // Form state
              <>
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-[#356df1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={28} className="text-[#356df1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#356df1] focus:border-transparent outline-none transition-all"
                      disabled={loading}
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#356df1] text-white py-3 rounded-lg font-semibold hover:bg-[#2a5ad9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Đang xử lý...
                      </>
                    ) : (
                      buttonText
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Chúng tôi cam kết không gửi spam. Bạn có thể hủy đăng ký bất cứ lúc nào.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
