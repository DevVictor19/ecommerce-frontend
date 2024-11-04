'use server';

import { isAxiosError } from 'axios';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { api } from '@/lib/axios';
import { setAuthTokenCookie } from '@/lib/cookies';

import { LoginRequest, LoginResponse, SignupRequest } from './contracts';

export async function login(request: LoginRequest) {
  try {
    const { data } = await api.post<LoginResponse>(
      `${API_ENDPOINT.AUTH}/login`,
      request,
    );

    setAuthTokenCookie(data.token);
  } catch (error) {
    console.error(error);

    if (isAxiosError(error)) {
      const message = error.response?.data?.message ?? 'Internal Server Error';

      return { message };
    }

    return { message: 'Internal Server Error' };
  }
}

export async function signup(request: SignupRequest) {
  try {
    await api.post(`${API_ENDPOINT.AUTH}/signup`, request);
  } catch (error) {
    console.error(error);

    if (isAxiosError(error)) {
      const message = error.response?.data?.message ?? 'Internal Server Error';

      return { message };
    }

    return { message: 'Internal Server Error' };
  }
}
