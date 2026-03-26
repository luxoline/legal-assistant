'use client';

import { BookOpen, Search, Tag, TrendingUp, Filter, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function KnowledgePage() {
  const t = useTranslations('Knowledge');

  const topics = [
    { category: t('cat1Title'), count: 18, icon: '📋', color: '#1E3A5F', items: t.raw('cat1Items') as string[], trending: true },
    { category: t('cat2Title'), count: 14, icon: '⚖️', color: '#C62828', items: t.raw('cat2Items') as string[], trending: false },
    { category: t('cat3Title'), count: 12, icon: '🏛️', color: '#7B1FA2', items: t.raw('cat3Items') as string[], trending: true },
    { category: t('cat4Title'), count: 11, icon: '🔨', color: '#2E7D32', items: t.raw('cat4Items') as string[], trending: false },
    { category: t('cat5Title'), count: 9, icon: '🇪🇺', color: '#1565C0', items: t.raw('cat5Items') as string[], trending: false },
    { category: t('cat6Title'), count: 7, icon: '💼', color: '#E65100', items: t.raw('cat6Items') as string[], trending: false },
  ];

  const popularArticles = [
    { title: t('art1Title'), category: t('art1Cat'), reads: 234 },
    { title: t('art2Title'), category: t('art2Cat'), reads: 189 },
    { title: t('art3Title'), category: t('art3Cat'), reads: 156 },
    { title: t('art4Title'), category: t('art4Cat'), reads: 143 },
    { title: t('art5Title'), category: t('art5Cat'), reads: 128 },
  ];
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em', marginBottom: '6px' }}>
          {t('title')}
        </h1>
        <p style={{ color: 'var(--foreground-muted)', fontSize: '0.9rem' }}>
          {t('desc')}
        </p>
      </div>

      {/* Search & filter bar */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
          <Search size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--foreground-muted)' }} />
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            style={{
              width: '100%',
              padding: '11px 14px 11px 40px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '11px 16px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          color: 'var(--foreground-muted)',
          fontSize: '0.875rem',
          cursor: 'pointer',
          fontWeight: 500,
        }}>
          <Filter size={14} /> {t('filter')}
        </button>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '28px' }}>
        {[
          { icon: BookOpen, label: t('statTotal'), value: '89', color: '#1E3A5F' },
          { icon: Tag, label: t('statCategories'), value: '6', color: '#C9A84C' },
          { icon: TrendingUp, label: t('statTrending'), value: t('statTrendingVal'), color: '#2E7D32' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: 'var(--shadow)' }}>
              <div style={{ background: s.color + '18', borderRadius: '8px', padding: '8px', color: s.color }}>
                <Icon size={16} />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)' }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)' }}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px', alignItems: 'start' }}>
        {/* Topics grid */}
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '14px' }}>{t('browseCat')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
            {topics.map((topic, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: 'var(--shadow)',
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem' }}>{topic.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)' }}>{topic.category}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)' }}>{topic.count} {t('articles')}</div>
                    </div>
                  </div>
                  {topic.trending && (
                    <span style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--accent)', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <TrendingUp size={9} /> {t('trending')}
                    </span>
                  )}
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {topic.items.slice(0, 4).map((item, j) => (
                    <span key={j} style={{ background: 'var(--surface-2)', color: 'var(--foreground-muted)', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '100px' }}>
                      {item}
                    </span>
                  ))}
                  {topic.items.length > 4 && (
                    <span style={{ background: 'var(--surface-2)', color: 'var(--foreground-muted)', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '100px' }}>
                      +{topic.items.length - 4} {t('more')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Popular articles */}
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '14px' }}>{t('popularArticles')}</h2>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            {popularArticles.map((a, i) => (
              <div key={i} style={{
                padding: '14px 18px',
                borderBottom: i < popularArticles.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
              >
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--foreground-muted)', width: '20px', flexShrink: 0, marginTop: '1px' }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)', lineHeight: 1.35, marginBottom: '4px' }}>{a.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--foreground-muted)' }}>{a.category}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--foreground-muted)' }}>{a.reads} {t('reads')}</span>
                  </div>
                </div>
                <ExternalLink size={12} color="var(--foreground-muted)" style={{ flexShrink: 0, marginTop: '4px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
