import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Include the locales
    '/', '/(tr|en)/:path*', 
    // Exclude API routes, static files, and other special paths
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
