"use client";

import React from "react";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
  address?: {
    addressLocality: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name = "Misty LGS",
  url = "https://mistylgs.vn",
  logo = "https://mistylgs.vn/icons.png",
  description = "Misty LGS chuyên cung cấp giải pháp Web, App và phần mềm quản lý tối ưu cho ngành Logistics.",
  contactPoint = {
    telephone: "+84-xxx-xxx-xxx",
    contactType: "customer service",
  },
  address = {
    addressLocality: "Hồ Chí Minh",
    addressCountry: "VN",
  },
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  potentialAction?: {
    target: string;
    "query-input": string;
  };
}

export function WebSiteSchema({
  name = "Misty LGS",
  url = "https://mistylgs.vn",
  potentialAction = {
    target: "https://mistylgs.vn/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}: WebSiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    potentialAction: {
      "@type": "SearchAction",
      ...potentialAction,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  name?: string;
  image?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string;
  priceRange?: string;
  telephone?: string;
}

export function LocalBusinessSchema({
  name = "Misty LGS",
  image = "https://mistylgs.vn/icons.png",
  description = "Misty LGS chuyên cung cấp giải pháp Web, App và phần mềm quản lý tối ưu cho ngành Logistics.",
  address = {
    streetAddress: "Quận 1",
    addressLocality: "Hồ Chí Minh",
    addressRegion: "Hồ Chí Minh",
    addressCountry: "VN",
  },
  openingHours = "Mo-Fr 09:00-18:00",
  priceRange = "$$",
  telephone = "+84-xxx-xxx-xxx",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    image,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    openingHours,
    priceRange,
    telephone,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  priceRange?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = {
    name: "Misty LGS",
    url: "https://mistylgs.vn",
  },
  areaServed = "Vietnam",
  priceRange = "$$",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      ...provider,
    },
    areaServed,
    priceRange,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  brand?: {
    name: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    priceValidUntil?: string;
  };
}

export function ProductSchema({
  name,
  description,
  image,
  brand = {
    name: "Misty LGS",
  },
  offers = {
    price: "0",
    priceCurrency: "VND",
    availability: "https://schema.org/InStock",
  },
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand,
    offers: {
      "@type": "Offer",
      ...offers,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
