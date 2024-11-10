import { NextRequest, NextResponse } from 'next/server';

import { decodeJwt } from './lib/auth';

export async function middleware(req: NextRequest) {
  const authCookie = req.cookies.get('authToken');

  const verifiedTokenPayload =
    authCookie?.value && (await decodeJwt(authCookie.value));

  const pathname = req.nextUrl.pathname;

  const isUserAuthenticated = !!verifiedTokenPayload;
  const isProtectedRoute = !(pathname.includes('/signup') || pathname === '/'); // public routes

  // trying to access a protected route non authenticated
  if (isProtectedRoute && !isUserAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (isUserAuthenticated) {
    const userRoles = verifiedTokenPayload.roles;
    const isAdmin = userRoles.includes('ADMIN');
    const isClient = userRoles.includes('CLIENT');

    // trying to access a public route authenticated
    if (!isProtectedRoute) {
      if (isAdmin) return NextResponse.redirect(new URL('/admin', req.url));
      if (isClient) return NextResponse.redirect(new URL('/shop', req.url));
    }

    // trying to access admin route with no admin permission
    if (!isAdmin && pathname.includes('/admin')) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // trying to access client route with no client permission
    if (!isClient && pathname.includes('/shop')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
}

export const config = {
  matcher: ['/', '/signup', '/admin/:path*', '/shop/:path*'],
};
