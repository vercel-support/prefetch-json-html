import { NextRequest, NextResponse } from "next/server";
import i18n from "../next-i18next.config";

const defaultLocale = "pl-PL";
const basePath = "/pl";
const locales = (i18n.i18n.locales || []).filter(
  (locale: string) => locale !== "default"
);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Automatically redirect homepage to the default locale
  /* if (pathname === "/") {
    const realUrl = new URL(req.url);
    const { pathname: realPathname } = realUrl;

    // Check whether the pathname starts with basePath and supported locales
    const pathnameMatchesRegexp = new RegExp(
      `^${basePath}/(${locales.join("|")})(?:/|$)`
    );
    const pathnameMatches = realPathname.match(pathnameMatchesRegexp);

    if (!pathnameMatches) {
      // If the pathname does not match, redirect to the homepage with the default locale
      const redirectUrl = `${req.nextUrl.origin}${basePath}/${defaultLocale}`;
      return NextResponse.redirect(redirectUrl);
    }
  } */

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|media|assets|static|_next|favicon.ico).*)"],
};
