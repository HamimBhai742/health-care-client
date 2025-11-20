/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { loginZodSchema } from '@/validation/login.schema';

export const loginUser = async (currentState: any, formData: any) => {
  try {
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
    }).then((res) => res.json());
    return res;
  } catch (error) {
    return { error: error };
  }
};
