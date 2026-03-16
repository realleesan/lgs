import { MetadataRoute } from "next";

/**
 * Sitemap Configuration
 * 
 * Priority based on customer journey:
 * 1. Home (/) - Landing page, highest priority
 * 2. Solutions (/solutions) - Main solution overview
 * 3. Product pages (WMS, TMS, Web, App) - Key conversion pages
 * 4. Demo (/demo) - Try before buy
 * 5. Pricing (/pricing) - Cost transparency
 * 6. Contact (/contact) - Conversion point
 * 7. Secondary pages (About, News, FAQ) - Supporting content
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mistylgs.vn";

  const staticPages = [
    // Primary - Homepage (highest priority)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    // Primary - Main navigation (high priority)
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    // Product pages (key conversion)
    {
      url: `${baseUrl}/wms`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tms`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-logistics`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/app`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // Secondary - Supporting content
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return staticPages;
}
