/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

export const registerPatient = async (currentstate:any, formData:any) => {
  try {
    const registerData = {
      password: formData.get('password'),
      patient: {
        name: formData.get('name'),
        email: formData.get('email'),
      },
    };
    const registerFormData = new FormData();
    registerFormData.append('data', JSON.stringify(registerData));

    const res = await fetch('http://localhost:5000/api/v1/user/create-patient', {
      method: 'POST',
      body: registerFormData,
    }).then((res) => res.json());

    return res;
  } catch (error) {
    return { message: error };
  }
};
