import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import createMiddleware from 'next-intl/middleware';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed'
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(tr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
