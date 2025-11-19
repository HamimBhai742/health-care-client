'use client';
import { useActionState, useState } from 'react';
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '../ui/field';
import { registerPatient } from '@/service/auth/RegisterUser';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(registerPatient, null);
  console.log(state);
  return (
    <Card className='w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm'>
      <CardHeader className='space-y-4 pb-8'>
        <div className='flex items-center justify-center space-x-2'>
          <div className='p-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full'>
            <User className='h-6 w-6 text-white' />
          </div>
        </div>
        <CardTitle className='text-3xl font-bold text-center bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
          Create Your Account
        </CardTitle>
        <CardDescription className='text-center text-slate-600 text-lg'>
          Join our healthcare community and start your journey to better health
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        <form action={formAction} className='space-y-6'>
          <FieldGroup>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Name Fields */}
              <Field>
                <FieldLabel className='text-slate-700 font-medium'>
                  Full Name
                </FieldLabel>

                <div className='relative'>
                  <User className='absolute left-3 top-3 h-4 w-4 text-slate-400' />
                  <Input
                    placeholder='Enter your full name'
                    className='pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                    name='name'
                    type='text'
                    required
                  />
                </div>
              </Field>

              {/* Email Field */}
              <Field>
                <FieldLabel className='text-slate-700 font-medium'>
                  Email Address
                </FieldLabel>

                <div className='relative'>
                  <Mail className='absolute left-3 top-4 h-4 w-4 text-slate-400' />
                  <Input
                    type='email'
                    placeholder='Enter your email address'
                    className='pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                    name='email'
                  />
                </div>
              </Field>
            </div>

            {/* Phone & Date of Birth */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Field>
                <FieldLabel className='text-slate-700 font-medium'>
                  Phone Number
                </FieldLabel>

                <div className='relative'>
                  <Phone className='absolute left-3 top-4 h-4 w-4 text-slate-400' />
                  <Input
                    placeholder='Enter your phone number'
                    className='pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                    name='phone'
                    type='text'
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel className='text-slate-700 font-medium'>
                  Date of Birth
                </FieldLabel>

                <div className='relative'>
                  <Calendar className='absolute left-3 top-4 h-4 w-4 text-slate-400' />
                  <Input
                    type='date'
                    className='pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                    name='dob'
                  />
                </div>
              </Field>
            </div>

            {/* Address Field */}
            <Field>
              <FieldLabel className='text-slate-700 font-medium'>
                Address
              </FieldLabel>

              <div className='relative'>
                <MapPin className='absolute left-3 top-4 h-4 w-4 text-slate-400' />
                <Input
                  placeholder='Enter your full address'
                  className='pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                  name='address'
                  type='text'
                />
              </div>
            </Field>

            {/* Password Fields */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Field>
                <FieldLabel className='text-slate-700 font-medium'>
                  Password
                </FieldLabel>

                <div className='relative'>
                  <Shield className='absolute left-3 top-4 h-4 w-4 text-slate-400' />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='Create a strong password'
                    className='pl-10 pr-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-4 text-slate-400 hover:text-slate-600'
                  >
                    {showPassword ? (
                      <EyeOff className='h-4 w-4' />
                    ) : (
                      <Eye className='h-4 w-4' />
                    )}
                  </button>
                </div>
              </Field>

              <Field>
                <FieldLabel className='text-slate-700 font-medium'>
                  Confirm Password
                </FieldLabel>

                <div className='relative'>
                  <Shield className='absolute left-3 top-4 h-4 w-4 text-slate-400' />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm your password'
                    className='pl-10 pr-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-4 text-slate-400 hover:text-slate-600'
                  >
                    {showConfirmPassword ? (
                      <EyeOff className='h-4 w-4' />
                    ) : (
                      <Eye className='h-4 w-4' />
                    )}
                  </button>
                </div>
              </Field>
            </div>

            {/* Submit Button */}
            <Button
              className='w-full h-12 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200'
              disabled={isPending}
            >
              {isPending ? 'Creating Account...' : 'Create Account'}
            </Button>
          </FieldGroup>
          {/* Login Link */}
          <div className='text-center pt-4'>
            <p className='text-slate-600'>
              Already have an account?{' '}
              <a
                href='/login'
                className='text-blue-600 hover:text-blue-700 font-medium hover:underline'
              >
                Sign in here
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
