'use client';

import Link from 'next/link';
import { Search, FileText, BookOpen, TrendingUp, Clock, ArrowRight, Sparkles, Scale } from 'lucide-react';

const stats = [
  { label: 'Research Sessions', value: '24', change: '+3 this week', icon: Search, color: '#1E3A5F' },
  { label: 'Saved Notes', value: '47', change: '+12 this month', icon: FileText, color: '#C9A84C' },
  { label: 'Knowledge Items', value: '89', change: '+8 this week', icon: BookOpen, color: '#2E7D32' },
  { label: 'Study Streak', value: '7 days', change: 'Keep it up!', icon: TrendingUp, color: '#7B1FA2' },
];

const recentActivity = [
  { type: 'research', title: 'Contract Law — Offer and Acceptance', time: '2 hours ago', color: '#1E3A5F' },
  { type: 'note', title: 'Criminal Intent: Mens Rea Overview', time: 'Yesterday', color: '#C9A84C' },
  { type: 'research', title: 'EU GDPR Article 17 — Right to Erasure', time: '2 days ago', color: '#1E3A5F' },
  { type: 'note', title: 'Tort Law: Negligence Elements', time: '3 days ago', color: '#2E7D32' },
  { type: 'research', title: 'Constitutional Rights — Freedom of Speech', time: '4 days ago', color: '#7B1FA2' },
];

const quickActions = [
  { href: '/dashboard/research', icon: Search, label: 'New Research', description: 'Ask a legal question', color: '#1E3A5F' },
  { href: '/dashboard/notes', icon: FileText, label: 'New Note', description: 'Save research findings', color: '#C9A84C' },
  { href: '/dashboard/knowledge', icon: BookOpen, label: 'Knowledge Base', description: 'Browse your library', color: '#2E7D32' },
];

export default function DashboardPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em', marginBottom: '6px' }}>
          Welcome back, John 👋
        </h1>
        <p style={{ color: 'var(--foreground-muted)', fontSize: '0.95rem' }}>
          Thursday, 26 March 2026 — Here&apos;s your research overview.
        </p>
      </div>

      {/* AI Coming Soon Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
        borderRadius: '16px',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
        flexWrap: 'wrap',
        gap: '16px',
        boxShadow: '0 4px 20px rgba(30,58,95,0.3)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px', display: 'flex' }}>
            <Sparkles size={22} color="#F0C060" />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>AI Tools Coming Soon</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Advanced legal analysis & document processing — in development</div>
          </div>
        </div>
        <Link href="/dashboard/research" style={{
          background: 'var(--accent)',
          color: '#1A1A2E',
          textDecoration: 'none',
          padding: '9px 18px',
          borderRadius: '8px',
          fontSize: '0.875rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          whiteSpace: 'nowrap',
        }}>
          Try Research <ArrowRight size={15} />
        </Link>
      </div>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '20px 22px',
              boxShadow: 'var(--shadow)',
              transition: 'transform 0.2s',
            }}
              onMouseOver={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
              onMouseOut={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ background: s.color + '18', borderRadius: '8px', padding: '8px', color: s.color }}>
                  <Icon size={18} />
                </div>
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--foreground-muted)', marginTop: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '0.75rem', color: s.color, marginTop: '6px', fontWeight: 500 }}>{s.change}</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'start' }}>
        {/* Recent Activity */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)' }}>Recent Activity</h2>
            <Link href="/dashboard/research" style={{ fontSize: '0.8rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View all <ArrowRight size={13} />
            </Link>
          </div>
          {recentActivity.map((a, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px 24px',
              borderBottom: i < recentActivity.length - 1 ? '1px solid var(--border)' : 'none',
              transition: 'background 0.2s',
              cursor: 'pointer',
            }}
              onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
              onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: a.color,
                flexShrink: 0,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--foreground)', fontWeight: 500 }}>{a.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <Clock size={11} /> {a.time}
                </div>
              </div>
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: '100px',
                background: a.color + '18',
                color: a.color,
                textTransform: 'capitalize',
              }}>
                {a.type}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ minWidth: '200px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '12px' }}>Quick Actions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {quickActions.map((a, i) => {
              const Icon = a.icon;
              return (
                <Link key={i} href={a.href} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow)',
                  transition: 'all 0.2s',
                }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'; (e.currentTarget as HTMLElement).style.borderColor = a.color; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
                >
                  <div style={{ background: a.color + '18', padding: '8px', borderRadius: '8px', color: a.color, display: 'flex' }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>{a.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)' }}>{a.description}</div>
                  </div>
                </Link>
              );
            })}

            {/* Disclaimer box */}
            <div style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '14px 16px',
              marginTop: '4px',
            }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                <Scale size={14} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)' }}>Disclaimer</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--foreground-muted)', lineHeight: 1.5 }}>
                LexAI is not a substitute for professional legal advice. Always consult a qualified lawyer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
