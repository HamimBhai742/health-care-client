/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { loginZodSchema } from '@/validation/login.schema';
import { parse } from 'cookie';
import { cookies } from 'next/headers';
export const loginUser = async (currentState: any, formData: any) => {
  try {
    let accessTokenObj: Record<string, any> | null = null;
    let refreshTokenObj: Record<string, any> | null = null;
    const loginData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const parsedLoginData = loginZodSchema.safeParse(loginData);
    if (!parsedLoginData.success) {
      return {
        success: false,
        errors: parsedLoginData.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }
    const res = await fetch('http://localhost:5000/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await res.json();
    console.log(res, result);
    const setCookies = await res.headers.getSetCookie();
    if (setCookies && setCookies.length > 0) {
      setCookies.forEach((cookie: string) => {
        const parseToken = parse(cookie);
        console.log(parseToken);
        if (parseToken['accessToken']) {
          accessTokenObj = parseToken;
        }
        if (parseToken['refreshToken']) {
          refreshTokenObj = parseToken;
        }
      });
    }

    if (!accessTokenObj) {
      throw new Error('access token not found');
    }

    if (!refreshTokenObj) {
      throw new Error('refresh token not found');
    }
    const cookieStore = await cookies();
    cookieStore.set('accessToken', accessTokenObj.accessToken, {
      httpOnly: true,
      secure: true,
      path: accessTokenObj?.Path || '/',
    });

    cookieStore.set('refreshToken', refreshTokenObj.refreshToken, {
      httpOnly: true,
      secure: true,
      path: refreshTokenObj?.Path || '/',
    });
    return result;
  } catch (error) {
    return { error: error };
  }
};
