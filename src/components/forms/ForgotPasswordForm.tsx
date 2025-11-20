"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

type State = {
  success?: boolean;
  error?: string;
};

async function forgotPasswordAction(prevState: State, formData: FormData): Promise<State> {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { error: "Please enter a valid email address" };
  }

  // TODO: Implement forgot password API call
  console.log("Forgot password request:", email);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}

export default function ForgotPasswordForm() {
  const [state, formAction, isPending] = useActionState(forgotPasswordAction, {});

  if (state.success) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Check Your Email</h1>
              <p className="text-gray-600">
                We&apos;ve sent password reset instructions to your email address.
              </p>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
        <div className="text-center space-y-2 mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
          <p className="text-gray-600">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10 h-12 bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            {state.error && (
              <p className="text-sm text-red-600 bg-red-50 p-2 rounded-lg">{state.error}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>

        <div className="text-center mt-6">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
