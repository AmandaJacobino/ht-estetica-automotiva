import { useState } from 'react';
import { useBeforeAfter } from '../../hooks/useBeforeAfter';

interface Slide {
  label: string;
  before: string;
  after: string;
  car: string;
  beforeSrc?: string;
  afterSrc?: string;
}

const BA_SLIDES: Slide[] = [
  {
    label: 'Revitalização de faróis',
    before: 'AMARELADO',
    after: 'NOVO',
    car: 'Farol — antes e depois',
    beforeSrc: '/assets/images/before-farol-1.jpg',
    afterSrc: '/assets/images/after-farol-1.jpg',
  },
  {
    label: 'Revitalização de faróis',
    before: 'OPACO',
    after: 'CRISTALINO',
    car: 'Farol — antes e depois',
    beforeSrc: '/assets/images/before-farol-2.jpeg',
    afterSrc: '/assets/images/after-farol-2.jpeg',
  },
];

/** Draggable before/after comparison slider with slide carousel */
export function BeforeAfter() {
  const [idx, setIdx] = useState(0);
  const { pos, ref, handleDragStart } = useBeforeAfter(50);
  const total = BA_SLIDES.length;
  const cur = BA_SLIDES[idx % total]!;

  const goTo = (i: number) => setIdx(i);
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  };
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  };

  return (
    <div className="reveal mt-20">
      {/* Divider row */}
      <div className="divider flex items-center gap-4">
        <span>ANTES × DEPOIS / Arraste para comparar</span>
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,var(--line),transparent)' }} />
        <span className="ba-index">
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Slider */}
      <div
        className="ba"
        ref={ref}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        {/* Before layer */}
        <div className="ba-layer ba-before">
          {cur.beforeSrc ? (
            <img
              src={cur.beforeSrc}
              alt={`Antes — ${cur.label}`}
              draggable={false}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="ba-shine-text">{cur.before}</div>
          )}
        </div>

        {/* After layer */}
        <div className="ba-layer ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          {cur.afterSrc ? (
            <img
              src={cur.afterSrc}
              alt={`Depois — ${cur.label}`}
              draggable={false}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div
              className="ba-shine-text"
              style={{ color: 'rgba(var(--orange-rgb), 0.2)' }}
            >
              {cur.after}
            </div>
          )}
        </div>

        {/* Labels */}
        <div className="ba-label ba-before-lbl">Antes</div>
        <div className="ba-label ba-after-lbl">Depois</div>

        {/* Caption */}
        <div className="ba-caption">
          <div className="ba-cap-title title-font">{cur.label}</div>
          <div className="ba-cap-sub">{cur.car}</div>
        </div>

        {/* Handle */}
        <div className="ba-handle" style={{ left: `${pos}%` }} />
        <div className="ba-knob" style={{ left: `${pos}%` }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </div>

        {/* Navigation arrows */}
        <button type="button" className="ba-nav prev" onClick={goPrev} aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button type="button" className="ba-nav next" onClick={goNext} aria-label="Próximo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Dot navigation */}
      <div className="ba-dots">
        {BA_SLIDES.map((_, i) => (
          <button
            type="button"
            key={i}
            className={`ba-dot ${i === idx ? 'on' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
