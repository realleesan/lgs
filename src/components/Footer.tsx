import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Misty <span className="text-accent">LGS</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Đơn vị tiên phong trong lĩnh vực chuyển đổi số cho ngành Logistics. 
            Chúng tôi cung cấp giải pháp công nghệ toàn diện, tối ưu hóa quy trình vận hành và quản lý.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6">Dịch vụ</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/services" className="hover:text-white transition-colors">Web Logistics có sẵn</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">App Quản lý vận tải</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Phần mềm kho bãi (WMS)</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Thiết kế theo yêu cầu</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Liên kết nhanh</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Trang chủ</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Giải pháp All-in-One</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Báo giá dịch vụ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6">Liên hệ</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>TP. Hồ Chí Minh, Việt Nam</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+84 123 456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>contact@mistylgs.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Misty LGS. All rights reserved. Designed for Logistics Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
