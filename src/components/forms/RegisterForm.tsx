'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, User, Mail, Phone, Calendar, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration data:', data);
      // Handle successful registration
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="space-y-4 pb-8">
        <div className="flex items-center justify-center space-x-2">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
            <User className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Create Your Account
        </CardTitle>
        <CardDescription className="text-center text-slate-600 text-lg">
          Join our healthcare community and start your journey to better health
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">First Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          placeholder="Enter your first name"
                          className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Last Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                        <Input
                          placeholder="Enter your last name"
                          className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone & Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                        <Input
                          placeholder="Enter your phone number"
                          className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Date of Birth</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                        <Input
                          type="date"
                          className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Address Field */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Enter your full address"
                        className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Shield className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          className="pl-10 pr-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-4 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Shield className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-4 text-slate-400 hover:text-slate-600"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <p className="text-slate-600">
                Already have an account?{' '}
                <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                  Sign in here
                </a>
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
