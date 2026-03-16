"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { mainMenu, solutionsMenu } from "@/config/menus";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-[#ffffff] border-b border-gray-100",
        isScrolled ? "shadow-sm" : ""
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

        {/* Desktop Navigation - Simplified to 5 main items */}
        <div className="hidden md:flex items-center gap-6">
          {mainMenu.map((item) => (
            item.href === "/solutions" ? (
              /* Solutions Dropdown */
              <div 
                key={item.name}
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
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
                >
                  {item.name} <ChevronDown size={16} />
                </Link>
                {solutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#ffffff] border border-gray-200 rounded-xl shadow-lg py-2">
                    {solutionsMenu.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="block px-4 py-2 text-sm text-[#666666] hover:text-[#356df1] hover:bg-[#f5f5f5] font-[family-name:var(--font-body)]"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#666666] hover:text-[#356df1] transition-colors font-[family-name:var(--font-body)]"
              >
                {item.name}
              </Link>
            )
          ))}

          {/* CTA Button */}
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

      {/* Mobile Menu - Simplified */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#ffffff] border-t border-gray-200 md:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 gap-4">
            {mainMenu.map((item) => (
              item.href === "/solutions" ? (
                <div key={item.name} className="border-b pb-2">
                  <div className="text-lg font-medium text-[#000000] mb-2 font-[family-name:var(--font-body)]">
                    {item.name}
                  </div>
                  {solutionsMenu.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="block pl-4 py-2 text-base text-[#666666] font-[family-name:var(--font-body)]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-[#000000] border-b pb-2 font-[family-name:var(--font-body)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* CTA Button for Mobile */}
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
