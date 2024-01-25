import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicPaths = ['/Login', '/Payment', '/', '/Highlights'];

  const isPublicPath = publicPaths.includes(path);

  const token = request.cookies.get('token')?.value || '';

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/Login', request.nextUrl));
  }

  if (path === '/Highlights') {
    return null;
  }
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/Login',
    '/Payment',
    '/Highlights',
    '/Course',
    '/FocalPoint',
  ],
};
