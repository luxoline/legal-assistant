'use client';

import { useState } from 'react';
import { Plus, Search, FileText, Tag, Calendar, X } from 'lucide-react';

const categories = ['All', 'Contract Law', 'Criminal Law', 'Constitutional Law', 'Tort Law', 'EU Law', 'Tax Law'];

const categoryColors: Record<string, string> = {
  'Contract Law': '#1E3A5F',
  'Criminal Law': '#C62828',
  'Constitutional Law': '#7B1FA2',
  'Tort Law': '#2E7D32',
  'EU Law': '#1565C0',
  'Tax Law': '#E65100',
};

const sampleNotes = [
  {
    id: 1,
    title: 'Elements of a Valid Contract',
    category: 'Contract Law',
    date: 'Mar 26, 2026',
    excerpt: 'A valid contract requires: offer, acceptance, consideration, intention to create legal relations, and capacity of parties.',
    tags: ['contract', 'offer', 'acceptance', 'consideration'],
    keyPoints: 5,
  },
  {
    id: 2,
    title: 'Mens Rea & Criminal Intent',
    category: 'Criminal Law',
    date: 'Mar 25, 2026',
    excerpt: 'Mens rea refers to the mental state or intention of a person while committing a crime. Types: intention, recklessness, negligence.',
    tags: ['criminal', 'intent', 'mens rea'],
    keyPoints: 7,
  },
  {
    id: 3,
    title: 'Duty of Care in Negligence',
    category: 'Tort Law',
    date: 'Mar 24, 2026',
    excerpt: 'The Donoghue v Stevenson case established the neighbour principle. Duty of care exists where harm is reasonably foreseeable.',
    tags: ['negligence', 'duty of care', 'tort'],
    keyPoints: 4,
  },
  {
    id: 4,
    title: 'GDPR Article 17 — Right to Erasure',
    category: 'EU Law',
    date: 'Mar 23, 2026',
    excerpt: 'Data subjects have the right to erasure (right to be forgotten) under specific conditions outlined in GDPR Article 17.',
    tags: ['GDPR', 'data protection', 'EU law'],
    keyPoints: 6,
  },
  {
    id: 5,
    title: 'Freedom of Speech — Constitutional Limits',
    category: 'Constitutional Law',
    date: 'Mar 22, 2026',
    excerpt: 'While freedom of speech is a fundamental right, it is subject to limitations when it conflicts with other rights or public order.',
    tags: ['constitutional', 'free speech', 'rights'],
    keyPoints: 8,
  },
  {
    id: 6,
    title: 'Capital Gains Tax Principles',
    category: 'Tax Law',
    date: 'Mar 20, 2026',
    excerpt: 'Capital gains tax is applied on the profit from selling an asset. Exemptions and rates vary by jurisdiction and asset type.',
    tags: ['tax', 'capital gains', 'assets'],
    keyPoints: 5,
  },
];

export default function NotesPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', category: 'Contract Law', content: '', tags: '' });

  const filtered = sampleNotes.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || n.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>My Notes</h1>
          <p style={{ color: 'var(--foreground-muted)', fontSize: '0.9rem', marginTop: '4px' }}>{sampleNotes.length} notes across {categories.length - 1} categories</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(30,58,95,0.3)',
          }}
        >
          <Plus size={17} /> New Note
        </button>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <Search size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--foreground-muted)' }} />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search notes..."
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
          onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'}
          onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
        />
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              background: selectedCategory === cat ? 'var(--primary)' : 'var(--surface)',
              color: selectedCategory === cat ? '#fff' : 'var(--foreground-muted)',
              border: selectedCategory === cat ? 'none' : '1px solid var(--border)',
              borderRadius: '100px',
              padding: '6px 14px',
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              ...(selectedCategory !== cat && categoryColors[cat] ? { borderColor: categoryColors[cat] + '44' } : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notes grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {filtered.map(note => (
          <div key={note.id} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: 'var(--shadow)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow)'; }}
          >
            {/* Category badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                background: (categoryColors[note.category] || '#1E3A5F') + '18',
                color: categoryColors[note.category] || '#1E3A5F',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '100px',
              }}>{note.category}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--foreground-muted)', fontSize: '0.72rem' }}>
                <Calendar size={11} /> {note.date}
              </div>
            </div>

            {/* Title */}
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1.35 }}>{note.title}</h3>

            {/* Excerpt */}
            <p style={{ fontSize: '0.82rem', color: 'var(--foreground-muted)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {note.excerpt}
            </p>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {note.tags.slice(0, 2).map(tag => (
                  <span key={tag} style={{
                    background: 'var(--surface-2)',
                    color: 'var(--foreground-muted)',
                    fontSize: '0.68rem',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                  }}>
                    <Tag size={9} /> {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--foreground-muted)', fontSize: '0.72rem' }}>
                <FileText size={11} /> {note.keyPoints} points
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px', color: 'var(--foreground-muted)' }}>
            <FileText size={40} style={{ margin: '0 auto 12px', opacity: 0.3 }} />
            <div style={{ fontSize: '1rem', fontWeight: 600 }}>No notes found</div>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>Try a different search or category</div>
          </div>
        )}
      </div>

      {/* New Note Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
        }} onClick={() => setShowModal(false)}>
          <div style={{
            background: 'var(--surface)',
            borderRadius: '20px',
            padding: '32px',
            width: '100%',
            maxWidth: '500px',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--foreground)' }}>New Note</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground-muted)', display: 'flex' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--foreground)', display: 'block', marginBottom: '6px' }}>Title</label>
                <input type="text" value={newNote.title} onChange={e => setNewNote({ ...newNote, title: e.target.value })}
                  placeholder="Note title..." style={{ width: '100%', padding: '10px 14px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'}
                  onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--foreground)', display: 'block', marginBottom: '6px' }}>Category</label>
                <select value={newNote.category} onChange={e => setNewNote({ ...newNote, category: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}>
                  {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--foreground)', display: 'block', marginBottom: '6px' }}>Content</label>
                <textarea value={newNote.content} onChange={e => setNewNote({ ...newNote, content: e.target.value })}
                  placeholder="Write your note..." rows={5}
                  style={{ width: '100%', padding: '10px 14px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'}
                  onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--foreground)', display: 'block', marginBottom: '6px' }}>Tags (comma-separated)</label>
                <input type="text" value={newNote.tags} onChange={e => setNewNote({ ...newNote, tags: e.target.value })}
                  placeholder="contract, law, case..." style={{ width: '100%', padding: '10px 14px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'}
                  onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button onClick={() => setShowModal(false)} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 18px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)', cursor: 'pointer' }}>
                Cancel
              </button>
              <button onClick={() => setShowModal(false)} style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px',
                fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
              }}>
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
