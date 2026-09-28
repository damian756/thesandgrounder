import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const OPEN = new Set(["/", "/robots.txt", "/sitemap.xml", "/favicon.ico"]);

export function proxy(request: NextRequest) {
  if (OPEN.has(request.nextUrl.pathname)) return NextResponse.next();
  return new NextResponse("The Sandgrounder has closed.", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "x-robots-tag": "noindex",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
