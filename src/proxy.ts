import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

console.log("Proxy is running!");

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|fa)/:path*", "/((?!api|_next|.*\\..*).*)"],
};
