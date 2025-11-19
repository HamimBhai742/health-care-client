import { Metadata } from 'next';
import RegisterForm from '@/components/forms/RegisterForm';

export const metadata: Metadata = {
  title: 'Register - HealthCare | Join Our Medical Community',
  description:
    'Create your HealthCare account to access world-class medical services, connect with certified doctors, and manage your health journey online.',
  keywords:
    'healthcare registration, medical account, doctor consultation, health services, patient portal',
  openGraph: {
    title: 'Register - HealthCare',
    description:
      'Join our healthcare community and start your journey to better health',
    type: 'website',
  },
};

export default function RegisterPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <RegisterForm />
    </div>
  );
}
