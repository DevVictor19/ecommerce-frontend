import { cookies } from 'next/headers';

export function setAuthTokenCookie(token: string) {
  cookies().set('authToken', token, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 8, // 8 hours
  });
}
