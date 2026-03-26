'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Scale, BookOpen, Brain, FileText, Shield, TrendingUp, ArrowRight, Star, GraduationCap, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");

  const features = [
    {
      icon: <Brain size={24} />,
      title: t("feature1Title"),
      description: t("feature1Desc"),
      color: "#1E3A5F",
    },
    {
      icon: <FileText size={24} />,
      title: t("feature2Title"),
      description: t("feature2Desc"),
      color: "#C9A84C",
    },
    {
      icon: <BookOpen size={24} />,
      title: t("feature3Title"),
      description: t("feature3Desc"),
      color: "#2E7D32",
    },
    {
      icon: <Shield size={24} />,
      title: t("feature4Title"),
      description: t("feature4Desc"),
      color: "#7B1FA2",
    },
  ];

  const useCases = [
    {
      icon: <GraduationCap size={32} />,
      title: t("useCase1Title"),
      description: t("useCase1Desc"),
      badge: t("popular"),
    },
    {
      icon: <Briefcase size={32} />,
      title: t("useCase2Title"),
      description: t("useCase2Desc"),
      badge: null,
    },
    {
      icon: <Scale size={32} />,
      title: t("useCase3Title"),
      description: t("useCase3Desc"),
      badge: null,
    },
  ];

  const stats = [
    { value: "50K+", label: t("stat1Label") },
    { value: "12+", label: t("stat2Label") },
    { value: "99%", label: t("stat3Label") },
    { value: "24/7", label: t("stat4Label") },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '80px 24px 100px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '100px',
          padding: '6px 16px',
          marginBottom: '32px',
          boxShadow: 'var(--shadow)',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-glow 2s infinite' }} />
          <span style={{ fontSize: '0.8rem', color: 'var(--foreground-muted)', fontWeight: 500 }}>
            {t("comingSoon")}
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.04em',
          color: 'var(--foreground)',
          marginBottom: '24px',
          maxWidth: '800px',
          margin: '0 auto 24px',
        }}>
          {t("heroTitle1")}{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {t("heroTitle2")}
          </span>
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--foreground-muted)',
          maxWidth: '580px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          {t("heroDesc")}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/login" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
            color: '#fff',
            textDecoration: 'none',
            padding: '14px 28px',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 4px 20px rgba(30, 58, 95, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(30,58,95,0.4)'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(30,58,95,0.3)'; }}
          >
            {t("getStarted")} <ArrowRight size={18} />
          </Link>
          <Link href="#features" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--surface)',
            color: 'var(--foreground)',
            textDecoration: 'none',
            padding: '14px 28px',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 600,
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow)',
            transition: 'transform 0.2s',
          }}>
            {t("learnMore")}
          </Link>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '24px',
          marginTop: '80px',
          padding: '32px',
          background: 'var(--surface)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em' }}>{s.value}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--foreground-muted)', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 24px', background: 'var(--surface-2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--foreground)', marginBottom: '12px' }}>
              {t("featuresTitle")}
            </h2>
            <p style={{ color: 'var(--foreground-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
              {t("featuresDesc")}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow)'; }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: f.color + '18',
                  color: f.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ color: 'var(--foreground-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--foreground)', marginBottom: '12px' }}>
              {t("useCasesTitle")}
            </h2>
            <p style={{ color: 'var(--foreground-muted)', fontSize: '1.1rem' }}>{t("useCasesDesc")}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {useCases.map((u, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '36px 28px',
                boxShadow: 'var(--shadow)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s',
              }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
              >
                {u.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                    color: '#1A1A2E',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <Star size={10} />
                    {u.badge}
                  </div>
                )}
                <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>{u.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '10px' }}>{u.title}</h3>
                <p style={{ color: 'var(--foreground-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(30,58,95,0.3)',
        }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)' }} />
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em', position: 'relative' }}>
            {t("ctaTitle")}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1.05rem', position: 'relative' }}>
            {t("ctaDesc")}
          </p>
          <Link href="/login" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent)',
            color: '#1A1A2E',
            textDecoration: 'none',
            padding: '14px 32px',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 700,
            position: 'relative',
            transition: 'transform 0.2s',
          }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
          >
            {t("getStarted")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
