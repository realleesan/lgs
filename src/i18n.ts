import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be validated against a list of valid locales
export const locales = ["vi", "en", "cn"] as const;
export type Locale = (typeof locales)[number];

export const routing = {
  locales,
  defaultLocale: "vi"
};

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale = locale as Locale;
  if (!locales.includes(validLocale)) notFound();

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});