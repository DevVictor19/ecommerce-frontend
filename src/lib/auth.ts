'use server';

import { errors, jwtVerify } from 'jose';

export interface JwtPayload {
  iss: string;
  userId: string;
  roles: string[];
  exp: number;
}

export async function decodeJwt(token: string) {
  try {
    const verified = await jwtVerify<JwtPayload>(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
    );

    return verified.payload;
  } catch (error) {
    if (error instanceof errors.JWTExpired) {
      console.error('Token expired!');
    } else {
      console.error('Invalid token!', error);
    }
    return null;
  }
}
