/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { registerFormSchema } from '@/validation/register.schema';

export const registerPatient = async (currentstate: any, formData: any) => {
  try {
    const registerData = {
      password: formData.get('password'),
      patient: {
        name: formData.get('name'),
        email: formData.get('email'),
      },
    };

    const parsedData = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      dob: formData.get('dob'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    };

    const parsedRegisterData = registerFormSchema.safeParse(parsedData);
    if (!parsedRegisterData.success) {
      return {
        success: false,
        errors: parsedRegisterData.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const registerFormData = new FormData();
    registerFormData.append('data', JSON.stringify(registerData));

    const res = await fetch(
      'http://localhost:5000/api/v1/user/create-patient',
      {
        method: 'POST',
        body: registerFormData,
      }
    ).then((res) => res.json());

    return res;
  } catch (error) {
    return { error: error };
  }
};
