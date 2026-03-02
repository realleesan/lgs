"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  Package,
  Truck,
  BarChart3,
  Users,
  Settings,
  Bell,
  Search,
  Plus,
  Minus,
  Maximize2,
  Zap,
  Shield,
  Globe,
  Clock,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import LeadFormModal from "@/components/LeadFormModal";

type ProductType = "web" | "app" | "wms" | "tms";

interface DemoFeature {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: React.ReactNode;
  image: string;
}

interface TestimonialData {
  name: string;
  company: string;
  avatar: string;
  content: string;
  contentEn: string;
  rating: number;
}

const products = [
  {
    id: "web" as ProductType,
    name: "Web Logistics",
    nameEn: "Web Logistics",
    description: "Website chuyên nghiệp cho doanh nghiệp vận tải, logistics",
    descriptionEn: "Professional website for transportation and logistics businesses",
    color: "#356df1",
    features: ["Tối ưu SEO", "Responsive Design", "Tích hợp Chat", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "app" as ProductType,
    name: "App Quản lý",
    nameEn: "Management App",
    description: "Ứng dụng di động quản lý vận tải, kho bãi hiệu quả",
    descriptionEn: "Mobile app for efficient transportation and warehouse management",
    color: "#10b981",
    features: ["iOS & Android", "Offline Mode", "Push Notifications", "Real-time Sync"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "wms" as ProductType,
    name: "Phần mềm WMS",
    nameEn: "WMS Software",
    description: "Hệ thống quản lý kho bãi thông minh",
    descriptionEn: "Intelligent warehouse management system",
    color: "#f59e0b",
    features: ["Quản lý tồn kho", "Xuất nhập khẩu", "Báo cáo tự động", "Tích hợp RFID"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "tms" as ProductType,
    name: "Phần mềm TMS",
    nameEn: "TMS Software",
    description: "Hệ thống quản lý vận tải toàn diện",
    descriptionEn: "Comprehensive transportation management system",
    color: "#8b5cf6",
    features: ["Theo dõi xe", "Tối ưu lộ trình", "Quản lý tài xế", "Tính cước tự động"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80"
  }
];

const demoFeatures: DemoFeature[] = [
  {
    id: "dashboard",
    title: "Dashboard Tổng quan",
    titleEn: "Overview Dashboard",
    description: "Theo dõi toàn bộ hoạt động kinh doanh trong một giao diện duy nhất với các chỉ số KPI quan trọng.",
    descriptionEn: "Track all business activities in a single interface with key KPIs.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "orders",
    title: "Quản lý Đơn hàng",
    titleEn: "Order Management",
    description: "Tạo, theo dõi và quản lý đơn hàng với quy trình tự động hóa hoàn chỉnh.",
    descriptionEn: "Create, track and manage orders with complete automation.",
    icon: <Package className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "tracking",
    title: "Theo dõi Vận chuyển",
    titleEn: "Shipment Tracking",
    description: "Giám sát vị trí xe và hàng hóa theo thời gian thực trên bản đồ.",
    descriptionEn: "Monitor vehicle and cargo location in real-time on the map.",
    icon: <Truck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "analytics",
    title: "Báo cáo & Phân tích",
    titleEn: "Reports & Analytics",
    description: "Báo cáo chi tiết, biểu đồ trực quan giúp đưa ra quyết định kinh doanh đúng đắn.",
    descriptionEn: "Detailed reports and visualizations for better business decisions.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80"
  }
];

const testimonials: TestimonialData[] = [
  {
    name: "Nguyễn Văn A",
    company: "Công ty TNHH Vận tải ABC",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    content: "Misty LGS đã giúp chúng tôi giảm 40% chi phí vận hành và tăng 60% năng suất xử lý đơn hàng.",
    contentEn: "Misty LGS helped us reduce operational costs by 40% and increase order processing productivity by 60%.",
    rating: 5
  },
  {
    name: "Trần Thị B",
    company: "Công ty Logistics XYZ",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    content: "Giao diện trực quan, dễ sử dụng. Đội ngũ hỗ trợ nhiệt tình 24/7 rất đáng tin cậy.",
    contentEn: "Intuitive interface, easy to use. The 24/7 support team is very dedicated and reliable.",
    rating: 5
  },
  {
    name: "Lê Hoàng C",
    company: "Công ty CP Vận chuyển Quốc tế",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    content: "Phần mềm TMS rất mạnh mẽ, giúp chúng tôi quản lý hàng trăm xe chỉ trong một hệ thống duy nhất.",
    contentEn: "The TMS software is very powerful, helping us manage hundreds of vehicles in a single system.",
    rating: 5
  }
];

const stats = [
  { value: "100+", label: "Doanh nghiệp", labelEn: "Businesses" },
  { value: "50K+", label: "Đơn hàng/ngày", labelEn: "Orders/day" },
  { value: "99.9%", label: "Uptime", labelEn: "Uptime" },
  { value: "24/7", label: "Hỗ trợ", labelEn: "Support" },
];

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Nhanh chóng",
    titleEn: "Fast",
    description: "Triển khai trong vài ngày, không cần cài đặt phức tạp",
    descriptionEn: "Deploy in days, no complex installation needed"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "An toàn",
    titleEn: "Secure",
    description: "Dữ liệu được mã hóa và backup tự động hàng ngày",
    descriptionEn: "Data encrypted and automatically backed up daily"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Đa ngôn ngữ",
    titleEn: "Multilingual",
    description: "Hỗ trợ tiếng Việt và tiếng Anh",
    descriptionEn: "Supports Vietnamese and English"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Tiết kiệm thời gian",
    titleEn: "Time-saving",
    description: "Tự động hóa hóa đơn, báo cáo, thông báo",
    descriptionEn: "Automation of invoices, reports, notifications"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tăng trưởng",
    titleEn: "Growth",
    description: "Quy mô linh hoạt theo nhu cầu doanh nghiệp",
    descriptionEn: "Scalable to meet business needs"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Dễ dùng",
    titleEn: "User-friendly",
    description: "Giao diện trực quan, không cần đào tạo nhiều",
    descriptionEn: "Intuitive interface, minimal training needed"
  }
];

export default function DemoPage() {
  const [activeProduct, setActiveProduct] = useState<ProductType>("wms");
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLangVi, setIsLangVi] = useState(true);
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Auto-rotate features
  React.useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % demoFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentProduct = products.find(p => p.id === activeProduct);

  return (
    <main className="min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80" 
            alt="Technology Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#e8eefc]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Language Toggle */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsLangVi(!isLangVi)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffffff] border border-gray-200 shadow-sm text-sm font-medium text-[#666666] hover:border-[#356df1] transition-colors"
            >
              <Globe size={16} />
              {isLangVi ? "Tiếng Việt" : "English"}
            </button>
          </div>

          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#356df1]/10 border border-[#356df1]/20 mb-6"
            >
              <span className="w-2 h-2 bg-[#356df1] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#356df1]">
                {isLangVi ? "Trải nghiệm Demo" : "Demo Experience"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-[#000000] mb-6 font-[family-name:var(--font-heading)]"
            >
              {isLangVi ? "Trải nghiệm" : "Experience"}{" "}
              <span className="text-[#356df1]">
                {isLangVi ? "Misty LGS" : "Misty LGS"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]"
            >
              {isLangVi 
                ? "Khám phá các tính năng mạnh mẽ của phần mềm Logistics hàng đầu. Trải nghiệm trực quan, dễ dàng."
                : "Discover the powerful features of leading Logistics software. Visual, easy experience."
              }
            </motion.p>
          </div>

          {/* Product Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeProduct === product.id
                    ? "bg-[#356df1] text-[#ffffff] shadow-lg"
                    : "bg-[#ffffff] text-[#666666] border border-gray-200 hover:border-[#356df1]"
                }`}
              >
                {isLangVi ? product.name : product.nameEn}
              </button>
            ))}
          </motion.div>

          {/* Main Demo Interface */}
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#ffffff] rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Demo Header */}
            <div className="bg-[#f8fafc] border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-sm text-[#666666] font-[family-name:var(--font-body)]">
                  Misty LGS - {currentProduct?.name} Demo
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {isPlaying ? <Pause size={16} className="text-[#666666]" /> : <Play size={16} className="text-[#666666]" />}
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Maximize2 size={16} className="text-[#666666]" />
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="grid lg:grid-cols-3 min-h-[600px]">
              {/* Sidebar */}
              <div className="lg:col-span-1 bg-[#1e293b] p-6">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-[#356df1] rounded-xl flex items-center justify-center mb-4">
                    <LayoutDashboard className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#ffffff] mb-2 font-[family-name:var(--font-heading)]">
                    {isLangVi ? "Bảng điều khiển" : "Dashboard"}
                  </h3>
                  <p className="text-sm text-gray-400 font-[family-name:var(--font-body)]">
                    {isLangVi 
                      ? "Tổng quan hoạt động kinh doanh"
                      : "Business activity overview"
                    }
                  </p>
                </div>

                {/* Feature Navigation */}
                <div className="space-y-2">
                  {demoFeatures.map((feature, index) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                        activeFeature === index
                          ? "bg-[#356df1] text-[#ffffff]"
                          : "text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      <span className={activeFeature === index ? "text-[#ffffff]" : "text-gray-400"}>
                        {feature.icon}
                      </span>
                      <span className="text-sm font-medium">
                        {isLangVi ? feature.title : feature.titleEn}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#ffffff] mb-1">127</div>
                      <div className="text-xs text-gray-400">
                        {isLangVi ? "Đơn hàng hôm nay" : "Orders today"}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#ffffff] mb-1">45</div>
                      <div className="text-xs text-gray-400">
                        {isLangVi ? "Xe đang hoạt động" : "Active vehicles"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-2 bg-[#f8fafc] p-6 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Feature Image */}
                    <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm">
                      <img
                        src={demoFeatures[activeFeature].image}
                        alt={demoFeatures[activeFeature].title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>

                    {/* Feature Info */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#356df1]">
                          {demoFeatures[activeFeature].icon}
                        </span>
                        <h4 className="text-lg font-bold text-[#000000] font-[family-name:var(--font-heading)]">
                          {isLangVi ? demoFeatures[activeFeature].title : demoFeatures[activeFeature].titleEn}
                        </h4>
                      </div>
                      <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">
                        {isLangVi ? demoFeatures[activeFeature].description : demoFeatures[activeFeature].descriptionEn}
                      </p>
                    </div>

                    {/* Feature Indicators */}
                    <div className="flex items-center justify-center gap-2">
                      {demoFeatures.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveFeature(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeFeature === index
                              ? "bg-[#356df1] w-8"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#356df1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#ffffff] mb-2 font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-[#ffffff]/80 font-[family-name:var(--font-body)]">
                  {isLangVi ? stat.label : stat.labelEn}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {isLangVi ? "Tại sao chọn Misty LGS?" : "Why Choose Misty LGS?"}
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              {isLangVi 
                ? "Những lợi ích mang lại cho doanh nghiệp của bạn"
                : "Benefits for your business"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#ffffff] p-6 rounded-2xl border border-gray-100 hover:border-[#356df1] transition-colors group"
              >
                <div className="w-14 h-14 bg-[#356df1]/10 rounded-2xl flex items-center justify-center mb-4 text-[#356df1] group-hover:bg-[#356df1] group-hover:text-[#ffffff] transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[#000000] mb-2 font-[family-name:var(--font-heading)]">
                  {isLangVi ? benefit.title : benefit.titleEn}
                </h3>
                <p className="text-sm text-[#666666] font-[family-name:var(--font-body)]">
                  {isLangVi ? benefit.description : benefit.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4 font-[family-name:var(--font-heading)]">
              {isLangVi ? "Khách hàng nói gì?" : "What Customers Say?"}
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              {isLangVi 
                ? "Những đánh giá từ khách hàng đã sử dụng dịch vụ"
                : "Reviews from customers who have used our services"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f8fafc] p-6 rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#666666] mb-6 font-[family-name:var(--font-body)]">
                  "{isLangVi ? testimonial.content : testimonial.contentEn}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#000000] font-[family-name:var(--font-heading)]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#999999] font-[family-name:var(--font-body)]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=800&fit=crop&q=80" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356df1]/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-4 font-[family-name:var(--font-heading)]">
            {isLangVi 
              ? "Sẵn sàng trải nghiệm Misty LGS?"
              : "Ready to Experience Misty LGS?"
            }
          </h2>
          <p className="text-[#ffffff]/80 text-lg mb-8 font-[family-name:var(--font-body)]">
            {isLangVi 
              ? "Đăng ký dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng."
              : "Sign up for a free 14-day trial. No credit card required."
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-[#ffffff] text-[#356df1] px-8 py-4 rounded-full font-semibold hover:bg-[#f8fafc] transition-all flex items-center gap-2"
            >
              {isLangVi ? "Dùng thử miễn phí" : "Try Free"}
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-transparent text-[#ffffff] px-8 py-4 rounded-full font-semibold border-2 border-[#ffffff] hover:bg-[#ffffff]/10 transition-all"
            >
              {isLangVi ? "Liên hệ tư vấn" : "Contact Sales"}
            </button>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={showLeadForm} 
        onClose={() => setShowLeadForm(false)} 
        source="demo"
      />
    </main>
  );
}
