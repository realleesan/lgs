import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import NewsletterPopup from "@/components/NewsletterPopup";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mistylgs.vn"),
  title: {
    default: "Misty LGS | Nền tảng giải pháp chuyển đổi số cho doanh nghiệp logistics",
    template: "%s | Misty LGS",
  },
  description: "Misty LGS - Nền tảng giải pháp chuyển đổi số cho doanh nghiệp logistics vừa và nhỏ. Giải quyết bài toán quản lý đơn hàng, tracking vận chuyển, quản lý kho, điều phối xe và tự động hóa chứng từ.",
  keywords: [
    "chuyển đổi số logistics",
    "giải pháp logistics",
    "quản lý đơn hàng logistics",
    "tracking vận chuyển",
    "quản lý kho WMS",
    "quản lý vận tải TMS",
    "website logistics",
    "app vận tải",
    "phần mềm logistics",
    "điều phối xe",
    "quản lý chứng từ",
    "tự động hóa logistics",
  ],
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
    title: "Misty LGS | Nền tảng giải pháp chuyển đổi số cho doanh nghiệp logistics",
    description: "Misty LGS - Nền tảng giải pháp chuyển đổi số cho doanh nghiệp logistics vừa và nhỏ. Giải quyết bài toán quản lý đơn hàng, tracking vận chuyển, quản lý kho, điều phối xe.",
    images: [
      {
        url: "/icons.png",
        width: 1200,
        height: 630,
        alt: "Misty LGS - Giải pháp chuyển đổi số logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Misty LGS | Nền tảng giải pháp chuyển đổi số cho doanh nghiệp logistics",
    description: "Misty LGS - Nền tảng giải pháp chuyển đổi số cho doanh nghiệp logistics vừa và nhỏ.",
    images: ["/icons.png"],
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
      vi: "https://mistylgs.vn/",
      en: "https://mistylgs.vn/en/",
      zh: "https://mistylgs.vn/cn/",
    } as any,
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
        <ErrorBoundary>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <NewsletterPopup />
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
