'use client';
import { useActionState, useState } from 'react';
import { Eye, EyeOff, Mail, Shield, LogIn, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { loginUser } from '@/service/auth/LoginUser';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '../ui/field';
import { loginFormError } from '@/error/login.form.error';
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(loginUser, null);
  console.log(state);
  return (
    <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm'>
      <CardHeader className='space-y-4 pb-8'>
        <div className='flex items-center justify-center  space-x-2'>
          <div className='p-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full'>
            <LogIn className='h-6 w-6 text-white' />
          </div>
        </div>
        <CardTitle className='text-3xl font-bold text-center bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
          Welcome Back
        </CardTitle>
        <CardDescription className='text-center text-slate-600 text-lg'>
          Sign in to access your healthcare dashboard
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        <form action={formAction} className='space-y-6'>
          <FieldGroup>
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
              {loginFormError('email', state) && (
                <FieldDescription className='text-red-600 mt-1'>
                  {loginFormError('email', state)}
                </FieldDescription>
              )}
            </Field>

            {/* Password Field */}
            <Field>
              <FieldLabel className='text-slate-700 font-medium'>
                Password
              </FieldLabel>

              <div className='relative'>
                <Shield className='absolute left-3 top-4 h-4 w-4 text-slate-400' />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='pl-10 pr-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400'
                  name='password'
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
              {loginFormError('password', state) && (
                <FieldDescription className='text-red-600 mt-1'>
                  {loginFormError('password', state)}
                </FieldDescription>
              )}
            </Field>

            {/* Forgot Password Link */}
            <div className='flex justify-end'>
              <a
                href='/forgot-password'
                className='text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline'
              >
                Forgot your password?
              </a>
            </div>

            {/* Submit Button */}
            <Button
              className='w-full h-12 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200'
              disabled={isPending}
            >
              {isPending ? 'Signing In...' : 'Sign In'}
            </Button>
          </FieldGroup>

          {/* Divider */}
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t border-slate-200' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-white px-2 text-slate-500'>
                Or continue with
              </span>
            </div>
          </div>

          {/* Biometric Login */}
          <Button
            type='button'
            variant='outline'
            className='w-full h-12 border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200'
          >
            <Fingerprint className='h-5 w-5 mr-2 text-slate-600' />
            <span className='text-slate-700 font-medium'>
              Use Biometric Login
            </span>
          </Button>

          {/* Register Link */}
          <div className='text-center pt-4'>
            <p className='text-slate-600'>
              Don&apos;t have an account?{' '}
              <a
                href='/register'
                className='text-blue-600 hover:text-blue-700 font-medium hover:underline'
              >
                Create one here
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
