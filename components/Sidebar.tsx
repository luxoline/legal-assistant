'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, LayoutDashboard, Search, FileText, BookOpen, Settings, LogOut, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/research', icon: Search, label: 'Legal Research' },
  { href: '/dashboard/notes', icon: FileText, label: 'My Notes' },
  { href: '/dashboard/knowledge', icon: BookOpen, label: 'Knowledge Base' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside style={{
      width: collapsed ? '72px' : '240px',
      minHeight: '100vh',
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.3s ease',
      position: 'sticky',
      top: 0,
      flexShrink: 0,
      overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{
        padding: collapsed ? '20px 16px' : '20px 20px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
        gap: '10px',
        minHeight: '64px',
      }}>
        {!collapsed && (
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: '8px', padding: '6px', display: 'flex', flexShrink: 0 }}>
              <Scale size={16} color="#fff" />
            </div>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)', whiteSpace: 'nowrap' }}>
              Lex<span style={{ color: 'var(--accent)' }}>AI</span>
            </span>
          </Link>
        )}
        {collapsed && (
          <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: '8px', padding: '6px', display: 'flex' }}>
            <Scale size={16} color="#fff" />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '4px',
            cursor: 'pointer',
            color: 'var(--foreground-muted)',
            display: 'flex',
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
        >
          <ChevronLeft size={14} style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
        </button>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '12px 10px' }}>
        {!collapsed && (
          <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--foreground-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 10px', marginBottom: '4px' }}>
            Navigation
          </p>
        )}
        {navLinks.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              title={collapsed ? label : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: collapsed ? '10px' : '10px 12px',
                borderRadius: '10px',
                textDecoration: 'none',
                marginBottom: '4px',
                background: isActive ? 'var(--primary)' : 'transparent',
                color: isActive ? '#fff' : 'var(--foreground-muted)',
                fontWeight: isActive ? 600 : 400,
                fontSize: '0.875rem',
                transition: 'all 0.2s',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
              onMouseOver={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'; }}
              onMouseOut={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <Icon size={18} style={{ flexShrink: 0 }} />
              {!collapsed && <span style={{ whiteSpace: 'nowrap' }}>{label}</span>}
              {!collapsed && isActive && <div style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div style={{ padding: '12px 10px', borderTop: '1px solid var(--border)' }}>
        {/* User */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: collapsed ? '10px' : '10px 12px',
          borderRadius: '10px',
          marginBottom: '4px',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: 700,
            flexShrink: 0,
          }}>JD</div>
          {!collapsed && (
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--foreground)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>John Doe</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--foreground-muted)' }}>Law Student</div>
            </div>
          )}
        </div>

        <Link href="/settings" title={collapsed ? 'Settings' : undefined} style={{
          display: 'flex', alignItems: 'center', gap: '10px', padding: collapsed ? '10px' : '10px 12px',
          borderRadius: '10px', textDecoration: 'none', color: 'var(--foreground-muted)', fontSize: '0.875rem',
          marginBottom: '4px', transition: 'background 0.2s', justifyContent: collapsed ? 'center' : 'flex-start',
        }}
          onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
          onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
        >
          <Settings size={18} style={{ flexShrink: 0 }} />
          {!collapsed && <span>Settings</span>}
        </Link>

        <Link href="/login" title={collapsed ? 'Log out' : undefined} style={{
          display: 'flex', alignItems: 'center', gap: '10px', padding: collapsed ? '10px' : '10px 12px',
          borderRadius: '10px', textDecoration: 'none', color: '#EF4444', fontSize: '0.875rem',
          transition: 'background 0.2s', justifyContent: collapsed ? 'center' : 'flex-start',
        }}
          onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.08)'}
          onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
        >
          <LogOut size={18} style={{ flexShrink: 0 }} />
          {!collapsed && <span>Log Out</span>}
        </Link>
      </div>
    </aside>
  );
}
