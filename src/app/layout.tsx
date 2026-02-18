import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Misty LGS | Chuyển đổi số Logistics toàn diện",
  description: "Misty LGS chuyên cung cấp giải pháp Web, App và phần mềm quản lý tối ưu cho ngành Logistics. Chuyển đổi số doanh nghiệp với hệ sinh thái All-in-One.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
