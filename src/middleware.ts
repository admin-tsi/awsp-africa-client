import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicPaths = ['/Login', '/Payment', '/', '/Highlights'];

  const isPublicPath = publicPaths.includes(path);

  const tokenCookie = request.cookies.get('token');

  const tokenString = tokenCookie ? tokenCookie.value : '';

  if (!isPublicPath && !tokenCookie) {
    return NextResponse.redirect(new URL('/Login', request.nextUrl));
  }

  if (path === '/Highlights') {
    return null;
  }

  if (tokenCookie) {
    const token = JSON.parse(tokenString);

    if (path === '/Step' && token.isverified) {
      return NextResponse.redirect(new URL('/Courses', request.nextUrl));
    }
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
    '/Step',
  ],
};
