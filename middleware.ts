import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// (no login needed)
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    // 👇 THIS is the correct way to protect routes
    await auth.protect()
  }
})

// tell Next.js where middleware should apply
export const config = {
  matcher: [
    // Skip internal and static files
    '/((?!_next|.*\\..*).*)',
    // Apply to API routes as well
    '/(api|trpc)(.*)',
  ],
}
