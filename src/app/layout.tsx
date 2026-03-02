import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import NewsletterPopup from "@/components/NewsletterPopup";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mistylgs.vn"),
  title: {
    default: "Misty LGS | Chuyển đổi số Logistics toàn diện",
    template: "%s | Misty LGS",
  },
  description: "Misty LGS chuyên cung cấp giải pháp Web, App và phần mềm quản lý tối ưu cho ngành Logistics. Chuyển đổi số doanh nghiệp với hệ sinh thái All-in-One.",
  keywords: ["logistics", "vận tải", "quản lý kho", "WMS", "TMS", "website logistics", "app vận tải", "chuyển đổi số", "phần mềm logistics"],
  authors: [{ name: "Misty LGS" }],
  creator: "Misty LGS",
  publisher: "Misty LGS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://mistylgs.vn",
    siteName: "Misty LGS",
    title: "Misty LGS | Chuyển đổi số Logistics toàn diện",
    description: "Misty LGS chuyên cung cấp giải pháp Web, App và phần mềm quản lý tối ưu cho ngành Logistics. Chuyển đổi số doanh nghiệp với hệ sinh thái All-in-One.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Misty LGS - Giải pháp Logistics toàn diện",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Misty LGS | Chuyển đổi số Logistics toàn diện",
    description: "Misty LGS chuyên cung cấp giải pháp Web, App và phần mềm quản lý tối ưu cho ngành Logistics.",
    images: ["/og-image.png"],
    creator: "@mistylgs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mistylgs.vn",
    languages: {
      vi: "https://mistylgs.vn",
      en: "https://mistylgs.vn",
    },
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RQ38QNBSBT" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQ38QNBSBT');
          `}
        </Script>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className={`${exo2.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
