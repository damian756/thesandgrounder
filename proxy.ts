import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const OPEN = new Set(["/", "/robots.txt", "/sitemap.xml", "/favicon.ico"]);
const NOINDEX = "noindex, nofollow";

export function proxy(request: NextRequest) {
  if (OPEN.has(request.nextUrl.pathname)) {
    const response = NextResponse.next();
    response.headers.set("x-robots-tag", NOINDEX);
    return response;
  }
  return new NextResponse("The Sandgrounder has closed.", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "x-robots-tag": NOINDEX,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
