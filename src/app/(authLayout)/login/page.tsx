import { Metadata } from 'next';
import LoginForm from '@/components/forms/LoginForm';

export const metadata: Metadata = {
  title: 'Login - HealthCare ',
  description:
    'Sign in to your HealthCare account to access appointments, medical records, and connect with healthcare professionals.',
  keywords:
    'healthcare login, medical dashboard, patient portal, doctor consultation, health records',
  openGraph: {
    title: 'Login - HealthCare',
    description: 'Access your healthcare dashboard and medical services',
    type: 'website',
  },
};

export default function LoginPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <LoginForm />
    </div>
  );
}
