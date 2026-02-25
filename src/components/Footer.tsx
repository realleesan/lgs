import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-[#000000] pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/icons.png" alt="Misty LGS Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Misty <span className="text-[#356df1]">LGS</span>
            </span>
          </Link>
          <p className="text-[#666666] text-sm leading-relaxed font-[family-name:var(--font-body)]">
            Đơn vị tiên phong trong lĩnh vực chuyển đổi số cho ngành Logistics. 
            Chúng tôi cung cấp giải pháp công nghệ toàn diện, tối ưu hóa quy trình vận hành và quản lý.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/profile.php?id=61586737089750" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#356df1] hover:text-[#ffffff] transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#356df1] hover:text-[#ffffff] transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">Dịch vụ</h4>
          <ul className="space-y-4 text-[#666666] text-sm font-[family-name:var(--font-body)]">
            <li><Link href="/services" className="hover:text-[#356df1] transition-colors">Web Logistics có sẵn</Link></li>
            <li><Link href="/services" className="hover:text-[#356df1] transition-colors">App Quản lý vận tải</Link></li>
            <li><Link href="/services" className="hover:text-[#356df1] transition-colors">Phần mềm kho bãi (WMS)</Link></li>
            <li><Link href="/services" className="hover:text-[#356df1] transition-colors">Thiết kế theo yêu cầu</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">Liên kết nhanh</h4>
          <ul className="space-y-4 text-[#666666] text-sm font-[family-name:var(--font-body)]">
            <li><Link href="/" className="hover:text-[#356df1] transition-colors">Trang chủ</Link></li>
            <li><Link href="/about" className="hover:text-[#356df1] transition-colors">Về chúng tôi</Link></li>
            <li><Link href="/solutions" className="hover:text-[#356df1] transition-colors">Giải pháp All-in-One</Link></li>
            <li><Link href="/pricing" className="hover:text-[#356df1] transition-colors">Báo giá</Link></li>
            <li><Link href="/news" className="hover:text-[#356df1] transition-colors">Tin tức</Link></li>
            <li><Link href="/contact" className="hover:text-[#356df1] transition-colors">Báo giá dịch vụ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">Liên hệ</h4>
          <ul className="space-y-4 text-[#666666] text-sm font-[family-name:var(--font-body)]">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#356df1] shrink-0" />
              <span>Phường Phú Diễn, Thành phố Hà Nội</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#356df1] shrink-0" />
              <span>0914960029</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#356df1] shrink-0" />
              <span>baominhkpkp@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-[#356df1] shrink-0" />
              <span>08:00 - 23:00 (T2 - CN)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center text-[#999999] text-xs font-[family-name:var(--font-body)]">
        <p>© {new Date().getFullYear()} Misty LGS. All rights reserved. Designed for Logistics Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
