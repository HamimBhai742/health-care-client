import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type userRole = 'patient' | 'doctor' | 'admin';

const authRoute=['/register','/login','/forgot-password','/reset-password']

const commonRoute={
  exact:['/my-profile','/settings'],
  pattern:[]
}

const doctorProtectedRoute={
  exact:[/^\/docotr/],
  pattern:[]
}

const patientProtectedRoute={
  exact:[/^\/patient/],
  pattern:[]
}

const adminProtectedRoute={
  exact:[/^\/admin/],
  pattern:[]
}



// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
};
