import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#356df1] text-[#ffffff] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#ffffff] rounded-lg flex items-center justify-center text-[#356df1] font-bold text-xl">
              M
            </div>
            <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Misty <span className="text-[#ffffff]">LGS</span>
            </span>
          </Link>
          <p className="text-[#ffffff]/80 text-sm leading-relaxed font-[family-name:var(--font-body)]">
            Đơn vị tiên phong trong lĩnh vực chuyển đổi số cho ngành Logistics. 
            Chúng tôi cung cấp giải pháp công nghệ toàn diện, tối ưu hóa quy trình vận hành và quản lý.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/10 flex items-center justify-center hover:bg-[#ffffff]/20 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/10 flex items-center justify-center hover:bg-[#ffffff]/20 transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">Dịch vụ</h4>
          <ul className="space-y-4 text-[#ffffff]/80 text-sm font-[family-name:var(--font-body)]">
            <li><Link href="/services" className="hover:text-[#ffffff] transition-colors">Web Logistics có sẵn</Link></li>
            <li><Link href="/services" className="hover:text-[#ffffff] transition-colors">App Quản lý vận tải</Link></li>
            <li><Link href="/services" className="hover:text-[#ffffff] transition-colors">Phần mềm kho bãi (WMS)</Link></li>
            <li><Link href="/services" className="hover:text-[#ffffff] transition-colors">Thiết kế theo yêu cầu</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">Liên kết nhanh</h4>
          <ul className="space-y-4 text-[#ffffff]/80 text-sm font-[family-name:var(--font-body)]">
            <li><Link href="/" className="hover:text-[#ffffff] transition-colors">Trang chủ</Link></li>
            <li><Link href="/about" className="hover:text-[#ffffff] transition-colors">Về chúng tôi</Link></li>
            <li><Link href="/solutions" className="hover:text-[#ffffff] transition-colors">Giải pháp All-in-One</Link></li>
            <li><Link href="/contact" className="hover:text-[#ffffff] transition-colors">Báo giá dịch vụ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">Liên hệ</h4>
          <ul className="space-y-4 text-[#ffffff]/80 text-sm font-[family-name:var(--font-body)]">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#ffffff] shrink-0" />
              <span>TP. Hồ Chí Minh, Việt Nam</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#ffffff] shrink-0" />
              <span>+84 123 456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#ffffff] shrink-0" />
              <span>contact@mistylgs.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#ffffff]/10 text-center text-[#ffffff]/60 text-xs font-[family-name:var(--font-body)]">
        <p>© {new Date().getFullYear()} Misty LGS. All rights reserved. Designed for Logistics Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
