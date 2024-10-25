import { cookies } from 'next/headers';

export function setAuthTokenCookie(token: string) {
  cookies().set('authToken', token, {
    path: '/',
    httpOnly: false,
    sameSite: 'strict',
    maxAge: 60 * 60 * 8, // 8 hours
  });
}
