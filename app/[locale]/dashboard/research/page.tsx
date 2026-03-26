'use client';

import { Send, Bot, User, Sparkles, Scale, Clock, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useChat } from '@ai-sdk/react';

export default function ResearchPage() {
  const t = useTranslations('Research');

  const { messages, input, handleInputChange, handleSubmit, setMessages, append, isLoading, error } = useChat({
    api: '/api/chat',
    onError: (err) => {
      console.error('Chat error:', err);
    }
  });

  const pastSessions = [
    { title: t('ps1Title'), date: t('ps1Time'), messages: 8 },
    { title: t('ps2Title'), date: t('ps2Time'), messages: 5 },
    { title: t('ps3Title'), date: t('ps3Time'), messages: 12 },
    { title: t('ps4Title'), date: t('ps4Time'), messages: 6 },
    { title: t('ps5Title'), date: t('ps5Time'), messages: 14 },
  ];

  const suggestions = [
    t('sug1'),
    t('sug2'),
    t('sug3'),
    t('sug4'),
  ];

  const sendMessage = (text?: string) => {
    if (text) {
      append({ id: Date.now().toString(), role: 'user', content: text });
    }
  };

  return (
    <div style={{ display: 'flex', gap: '24px', height: 'calc(100vh - 64px - 64px)', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Sessions sidebar */}
      <div style={{
        width: '240px',
        flexShrink: 0,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow)',
      }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--border)' }}>
          <button
            onClick={() => setMessages([{ id: Date.now().toString(), role: 'assistant', content: t('assistantNew') }])}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '9px 14px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={14} /> {t('btnNewResearch')}
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--foreground-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 8px 4px' }}>{t('pastSessions')}</p>
          {pastSessions.map((s, i) => (
            <button key={i} style={{
              width: '100%',
              background: 'none',
              border: 'none',
              borderRadius: '8px',
              padding: '10px',
              cursor: 'pointer',
              textAlign: 'left',
              marginBottom: '2px',
              transition: 'background 0.2s',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '6px',
            }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'none'; }}
            >
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--foreground)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--foreground-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <Clock size={10} /> {s.date}
                </div>
              </div>
              <ChevronRight size={12} color="var(--foreground-muted)" style={{ flexShrink: 0, marginTop: '4px' }} />
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
        {/* Chat header */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: '8px', padding: '6px', display: 'flex' }}>
            <Scale size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)' }}>{t('assistantTitle')}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)' }}>{t('assistantSub')}</div>
          </div>
          <div style={{ marginLeft: 'auto', background: 'rgba(201,168,76,0.15)', color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: '100px', border: '1px solid var(--accent)' }}>
            {t('beta')}
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {messages.map((m, i) => (
            <div key={m.id} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexDirection: m.role === 'user' ? 'row-reverse' : 'row' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: m.role === 'user' ? 'var(--primary)' : 'linear-gradient(135deg, var(--primary), var(--accent))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {m.role === 'user' ? <User size={15} color="#fff" /> : <Bot size={15} color="#fff" />}
              </div>
              <div style={{
                maxWidth: '70%',
                background: m.role === 'user' ? 'var(--primary)' : 'var(--surface-2)',
                color: m.role === 'user' ? '#fff' : 'var(--foreground)',
                borderRadius: m.role === 'user' ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
                padding: '12px 16px',
                fontSize: '0.875rem',
                lineHeight: 1.65,
                border: m.role === 'user' ? 'none' : '1px solid var(--border)',
                whiteSpace: 'pre-wrap',
                boxShadow: 'var(--shadow-sm)',
              }}>
                {m.content}
                {m.role === 'assistant' && i === messages.length - 1 && isLoading && (
                  <span style={{ display: 'inline-block', width: '2px', height: '1rem', background: 'var(--primary)', marginLeft: '4px', filter: 'drop-shadow(0 0 4px var(--primary))', animation: 'opacity 0.8s infinite' }} />
                )}
              </div>
            </div>
          ))}

          {error && (
            <div style={{
              margin: '0 auto',
              padding: '12px 16px',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              maxWidth: '80%',
            }}>
              <AlertCircle size={16} />
              <div style={{ wordBreak: 'break-word' }}>
                <strong style={{ marginRight: '4px' }}>Hata:</strong>
                Yapay zeka yanıt veremedi. Lütfen **.env.local** dosyanızda **GOOGLE_GENERATION_AI_API_KEY** anahtarının tanımlı olduğundan emin olun.
              </div>
            </div>
          )}

          {isLoading && messages[messages.length - 1]?.role === 'user' && !error && (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Loader2 size={15} color="#fff" style={{ animation: 'spin 1s linear infinite' }} />
              </div>
              <div style={{ background: 'var(--surface-2)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px', border: '1px solid var(--border)' }}>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && !isLoading && (
          <div style={{ padding: '0 24px 16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => sendMessage(s)} style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                color: 'var(--foreground-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLElement).style.color = 'var(--primary)'; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--foreground-muted)'; }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ padding: '16px 24px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
            <textarea
              value={input}
              onChange={handleInputChange}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e as any); } }}
              placeholder={t('inputPlaceholder')}
              rows={2}
              style={{
                flex: 1,
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: 'var(--foreground)',
                fontSize: '0.875rem',
                resize: 'none',
                outline: 'none',
                fontFamily: 'inherit',
                lineHeight: 1.5,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; }}
              onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 16px',
                cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'opacity 0.2s',
                flexShrink: 0,
                opacity: (isLoading || !input.trim()) ? 0.6 : 1,
              }}
              onMouseOver={e => { if (!isLoading) (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
              onMouseOut={e => { if (!isLoading) (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isLoading ? <Loader2 size={16} key="loader" style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={16} key="send" />}
              </div>
              <span key="btnText">{t('btnSend')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
