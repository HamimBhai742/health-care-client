/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

export const loginUser = async (currentState: any, formData: any) => {
  try {
    const loginData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const data = new FormData();
    data.append('data', JSON.stringify(loginData));
    const res = await fetch('http://localhost:5000/api/v1/auth/login', {
      method: 'POST',
      body: data,
    }).then((res) => res.json());
    return res;
  } catch (error) {
    return { error: error };
  }
};
