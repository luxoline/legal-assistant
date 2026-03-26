import Link from 'next/link';
import { Scale, MessageCircle, Code2, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '48px 24px 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '12px' }}>
              <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: '8px', padding: '6px', display: 'flex', alignItems: 'center' }}>
                <Scale size={16} color="#fff" />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)' }}>
                Lex<span style={{ color: 'var(--accent)' }}>AI</span>
              </span>
            </Link>
            <p style={{ color: 'var(--foreground-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              {t('brandDesc')}
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[MessageCircle, Code2, Briefcase].map((Icon, i) => (
                <a key={i} href="#" style={{
                  color: 'var(--foreground-muted)',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  transition: 'color 0.2s',
                }}
                  onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary)'}
                  onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--foreground-muted)'}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--foreground)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>{t('product')}</h4>
            {['features', 'useCases', 'pricing', 'changelog'].map(item => (
              <a key={item} href="#" style={{ display: 'block', color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--foreground-muted)'}
              >{t(item as any)}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--foreground)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>{t('resources')}</h4>
            {['documentation', 'blog', 'legalGlossary', 'caseStudies'].map(item => (
              <a key={item} href="#" style={{ display: 'block', color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--foreground-muted)'}
              >{t(item as any)}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--foreground)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>{t('legal')}</h4>
            {['privacyPolicy', 'termsOfService', 'cookiePolicy', 'disclaimer'].map(item => (
              <a key={item} href="#" style={{ display: 'block', color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--foreground-muted)'}
              >{t(item as any)}</a>
            ))}
          </div>
        </div>

        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'var(--foreground-muted)', fontSize: '0.8rem' }}>
            {t('rights')}
          </p>
          <p style={{ color: 'var(--foreground-muted)', fontSize: '0.8rem' }}>
            {t('notAdvice')}
          </p>
        </div>
      </div>
    </footer>
  );
}
