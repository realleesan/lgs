"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Giải pháp", href: "/solutions" },
    { name: "Về chúng tôi", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-[#ffffff]/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#356df1] rounded-lg flex items-center justify-center text-[#ffffff] font-bold text-xl group-hover:scale-105 transition-transform">
            M
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]",
            isScrolled ? "text-[#356df1]" : "text-[#356df1]"
          )}>
            Misty <span className="text-[#356df1]">LGS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#356df1] hover:text-[#356df1]/70 transition-colors font-[family-name:var(--font-body)]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#356df1] text-[#ffffff] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#356df1]/80 transition-all shadow-lg shadow-[#356df1]/20 font-[family-name:var(--font-body)]"
          >
            Nhận tư vấn
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#356df1] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#ffffff] border-t shadow-xl md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[#356df1] border-b pb-2 font-[family-name:var(--font-body)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#356df1] text-[#ffffff] text-center py-3 rounded-lg font-bold font-[family-name:var(--font-body)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nhận tư vấn ngay
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
