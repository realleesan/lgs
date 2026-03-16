import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["vi", "en", "cn"],
  defaultLocale: "vi",
  localePrefix: "never" // Don't add locale prefix to URLs
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};