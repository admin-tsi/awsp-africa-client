import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/Login' || path === '/Payment' || path === '/'

  const token = request.cookies.get('token')?.value || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/Course', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/Login', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/Login',
    '/Payment',
    '/Leadboard',
    '/Course',
    '/FocalPoint'
  ]
}
