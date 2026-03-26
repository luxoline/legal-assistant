'use client';

import { Link } from '@/i18n/routing';
import { useTheme } from 'next-themes';
import { Moon, Sun, Scale, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav style={{
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      boxShadow: 'var(--shadow)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              borderRadius: '10px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Scale size={20} color="#fff" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
              Lex<span style={{ color: 'var(--accent)' }}>AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <Link href="/#features" style={{ color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--foreground-muted)')}>
              Features
            </Link>
            <Link href="/#use-cases" style={{ color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--foreground-muted)')}>
              Use Cases
            </Link>
            <Link href="/login" style={{ color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--foreground-muted)')}>
              Login
            </Link>
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme toggle */}
            {mounted && (
              <>
                <LanguageSwitcher />
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--foreground-muted)',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'; (e.currentTarget as HTMLElement).style.color = 'var(--foreground-muted)'; }}
                  title="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </>
            )}

            {/* CTA */}
            <Link href="/login" style={{
              background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}>
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground)', display: 'none' }}
              className="mobile-menu-btn"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            padding: '16px 0',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <Link href="/#features" style={{ color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.95rem', padding: '8px 0' }} onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="/#use-cases" style={{ color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.95rem', padding: '8px 0' }} onClick={() => setMenuOpen(false)}>Use Cases</Link>
            <Link href="/login" style={{ color: 'var(--foreground-muted)', textDecoration: 'none', fontSize: '0.95rem', padding: '8px 0' }} onClick={() => setMenuOpen(false)}>Login</Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
