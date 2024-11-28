import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Apply to all API routes, but explicitly exclude the webhooks route
    '/api/(?!webhooks).*',
    '/(api|trpc)(.*)',
  ],
};
