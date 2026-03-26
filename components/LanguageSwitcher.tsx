'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleLanguageChange(e.target.value)}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        color: 'var(--foreground)',
        padding: '6px 12px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        outline: 'none',
      }}
    >
      <option value="tr">TR</option>
      <option value="en">EN</option>
    </select>
  );
}
