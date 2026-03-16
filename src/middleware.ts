import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["vi", "en", "cn"],
  defaultLocale: "vi",
  localePrefix: "always"
});

export const config = {
  matcher: ["/", "/(vi|en|cn)/:path*"]
};