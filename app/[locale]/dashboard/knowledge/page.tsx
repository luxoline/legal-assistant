'use client';

import { BookOpen, Search, Tag, TrendingUp, Filter, ExternalLink } from 'lucide-react';

const topics = [
  { category: 'Contract Law', count: 18, icon: '📋', color: '#1E3A5F', items: ['Offer & Acceptance', 'Consideration', 'Breach of Contract', 'Remedies', 'Exclusion Clauses', 'Privity of Contract'], trending: true },
  { category: 'Criminal Law', count: 14, icon: '⚖️', color: '#C62828', items: ['Mens Rea', 'Actus Reus', 'Defences', 'Homicide', 'Theft & Fraud', 'Sentencing'], trending: false },
  { category: 'Constitutional Law', count: 12, icon: '🏛️', color: '#7B1FA2', items: ['Fundamental Rights', 'Separation of Powers', 'Judicial Review', 'Due Process', 'Equal Protection'], trending: true },
  { category: 'Tort Law', count: 11, icon: '🔨', color: '#2E7D32', items: ['Negligence', 'Duty of Care', 'Defamation', 'Nuisance', 'Occupier\'s Liability'], trending: false },
  { category: 'EU Law', count: 9, icon: '🇪🇺', color: '#1565C0', items: ['GDPR', 'Free Movement', 'Competition Law', 'Directives & Regulations', 'Court of Justice'], trending: false },
  { category: 'Tax Law', count: 7, icon: '💼', color: '#E65100', items: ['Income Tax', 'Capital Gains', 'VAT', 'Tax Avoidance', 'International Tax'], trending: false },
];

const popularArticles = [
  { title: 'Introduction to Legal Research Methods', category: 'General', reads: 234 },
  { title: 'Case Law Analysis: Step-by-Step Guide', category: 'Research Skills', reads: 189 },
  { title: 'Understanding Statutory Interpretation', category: 'Legal Theory', reads: 156 },
  { title: 'Writing Effective Legal Arguments', category: 'Legal Writing', reads: 143 },
  { title: 'Landmark Cases Every Law Student Should Know', category: 'Case Law', reads: 128 },
];

export default function KnowledgePage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em', marginBottom: '6px' }}>
          Knowledge Base
        </h1>
        <p style={{ color: 'var(--foreground-muted)', fontSize: '0.9rem' }}>
          Browse curated legal topics, concepts, and resources.
        </p>
      </div>

      {/* Search & filter bar */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
          <Search size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--foreground-muted)' }} />
          <input
            type="text"
            placeholder="Search knowledge base..."
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
          <Filter size={14} /> Filter
        </button>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '28px' }}>
        {[
          { icon: BookOpen, label: 'Total Articles', value: '89', color: '#1E3A5F' },
          { icon: Tag, label: 'Categories', value: '6', color: '#C9A84C' },
          { icon: TrendingUp, label: 'This Week', value: '+8 new', color: '#2E7D32' },
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
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '14px' }}>Browse by Category</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
            {topics.map((t, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '20px',
                boxShadow: 'var(--shadow)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{t.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)' }}>{t.category}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)' }}>{t.count} articles</div>
                    </div>
                  </div>
                  {t.trending && (
                    <span style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--accent)', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <TrendingUp size={9} /> Trending
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {t.items.slice(0, 4).map(item => (
                    <span key={item} style={{
                      background: t.color + '12',
                      color: t.color,
                      fontSize: '0.7rem',
                      padding: '3px 8px',
                      borderRadius: '100px',
                      fontWeight: 500,
                    }}>{item}</span>
                  ))}
                  {t.items.length > 4 && (
                    <span style={{ background: 'var(--surface-2)', color: 'var(--foreground-muted)', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '100px' }}>
                      +{t.items.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Popular articles */}
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '14px' }}>Popular Articles</h2>
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
                    <span style={{ fontSize: '0.7rem', color: 'var(--foreground-muted)' }}>{a.reads} reads</span>
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
