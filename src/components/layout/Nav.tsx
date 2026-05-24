import { useEffect, useState } from 'react';
import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export { NAV_LINKS };

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/** Full-screen mobile navigation overlay */
function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <nav
      id="mobile-nav"
      className={`mobile-menu ${open ? 'open' : ''}`}
      aria-label="Navegação mobile"
      aria-hidden={!open}
    >
      {NAV_LINKS.map((l) => (
        <a key={l.href} href={l.href} onClick={onClose} tabIndex={open ? 0 : -1}>
          {l.label}
        </a>
      ))}
      <div style={{ marginTop: 24 }}>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          tabIndex={open ? 0 : -1}
        >
          <Ico.Whats style={{ width: 16, height: 16 }} aria-hidden="true" /> Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
}

/** Sticky top navigation bar with desktop links and mobile burger menu */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('inicio');

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        if (visible.size > 0) {
          const topEntry = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
          if (topEntry) setActive(topEntry[0]);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header>
        <nav className="nav" aria-label="Principal">
          <div className="container nav-inner">
          <div className="logo">
            <div className="logo-text">
              <span className="or">HT</span>{' '}
              <span className="bl">Estética</span>{' '}
              <span className="or">Automotiva</span>
            </div>
          </div>
          <div className="nav-links">
            {NAV_LINKS.map((l) => {
              const id = l.href.slice(1);
              const isActive = id === active;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`nav-link${isActive ? ' active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              <Ico.Whats style={{ width: 14, height: 14 }} aria-hidden="true" /> Orçamento
            </a>
          </div>
          <button
            id="nav-burger"
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <Ico.Close aria-hidden="true" /> : <Ico.Menu aria-hidden="true" />}
          </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
