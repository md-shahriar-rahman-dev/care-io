import { NextResponse } from 'next/server';

// Minimal middleware
export function middleware(request) {
  // You can log requests if you want
  console.log('Middleware hit:', request.nextUrl.pathname);

  // Just pass through
  return NextResponse.next();
}

// Which routes this middleware applies to
export const config = {
  matcher: '/:path*', // all routes
};
