"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesMenu = [
    { name: "Thiết kế Web Logistics", href: "/services" },
    { name: "Phát triển App", href: "/services" },
    { name: "Phần mềm WMS/TMS", href: "/services" },
    { name: "Thiết kế theo yêu cầu", href: "/services" },
  ];

  const solutionsMenu = [
    { name: "Giải pháp All-in-One", href: "/solutions" },
    { name: "Quản lý kho bãi", href: "/solutions" },
    { name: "Quản lý vận tải", href: "/solutions" },
    { name: "Tư vấn chuyển đổi số", href: "/solutions" },
  ];

  const aboutMenu = [
    { name: "Về chúng tôi", href: "/about" },
    { name: "Portfolio", href: "#" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-[#ffffff] border-b border-gray-100",
        isScrolled ? "border-b border-gray-200" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/icons.png" alt="Misty LGS Logo" width={40} height={40} className="rounded-lg" />
          <span className={cn(
            "text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]",
            "text-[#000000]"
          )}>
            Misty <span className="text-[#356df1]">LGS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
          >
            Trang chủ
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
              setServicesOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 300);
            }}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
            >
              Dịch vụ <ChevronDown size={16} />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#ffffff] border border-gray-200 rounded-xl shadow-lg py-2">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#666666] hover:text-[#356df1] hover:bg-[#f5f5f5] font-[family-name:var(--font-body)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
              setSolutionsOpen(true);
            }}
            onMouseLeave={() => {
              solutionsTimeoutRef.current = setTimeout(() => setSolutionsOpen(false), 300);
            }}
          >
            <Link
              href="/solutions"
              className="flex items-center gap-1 text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
            >
              Giải pháp <ChevronDown size={16} />
            </Link>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#ffffff] border border-gray-200 rounded-xl shadow-lg py-2">
                {solutionsMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#666666] hover:text-[#356df1] hover:bg-[#f5f5f5] font-[family-name:var(--font-body)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
          >
            Báo giá
          </Link>

          <Link
            href="/news"
            className="text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
          >
            Tin tức
          </Link>

          {/* About Dropdown - Non-clickable title with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
              setAboutOpen(true);
            }}
            onMouseLeave={() => {
              aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 300);
            }}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
            >
              Giới thiệu <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#ffffff] border border-gray-200 rounded-xl shadow-lg py-2">
                {aboutMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#666666] hover:text-[#356df1] hover:bg-[#f5f5f5] font-[family-name:var(--font-body)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
          >
            Liên hệ
          </Link>

          <Link
            href="/contact"
            className="bg-[#356df1] text-[#ffffff] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2a5ad9] transition-all font-[family-name:var(--font-body)]"
          >
            Nhận tư vấn
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#000000] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#ffffff] border-t border-gray-200 md:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 gap-4">
            <Link
              href="/"
              className="text-lg font-medium text-[#000000] border-b pb-2 font-[family-name:var(--font-body)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            
            <div className="border-b pb-2">
              <div className="text-lg font-medium text-[#000000] mb-2 font-[family-name:var(--font-body)]">Dịch vụ</div>
              {servicesMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 py-2 text-base text-[#666666] font-[family-name:var(--font-body)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-b pb-2">
              <div className="text-lg font-medium text-[#000000] mb-2 font-[family-name:var(--font-body)]">Giải pháp</div>
              {solutionsMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 py-2 text-base text-[#666666] font-[family-name:var(--font-body)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/pricing"
              className="text-lg font-medium text-[#000000] border-b pb-2 font-[family-name:var(--font-body)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Báo giá
            </Link>

            <Link
              href="/news"
              className="text-lg font-medium text-[#000000] border-b pb-2 font-[family-name:var(--font-body)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tin tức
            </Link>

            <div className="border-b pb-2">
              <div className="text-lg font-medium text-[#000000] mb-2 font-[family-name:var(--font-body)]">Giới thiệu</div>
              <Link
                href="/about"
                className="block pl-4 py-2 text-base text-[#666666] font-[family-name:var(--font-body)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                - Về chúng tôi
              </Link>
              <span className="block pl-4 py-2 text-base text-[#666666] font-[family-name:var(--font-body)]">
                - Portfolio (sắp ra mắt)
              </span>
            </div>

            <Link
              href="/contact"
              className="text-lg font-medium text-[#000000] border-b pb-2 font-[family-name:var(--font-body)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Liên hệ
            </Link>

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
