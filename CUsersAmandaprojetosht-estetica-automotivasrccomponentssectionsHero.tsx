import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

/** Hero background video (placed under public/assets/video/) */
const videoSrc: string | null = '/assets/video/hero-video.mp4';

const HERO_POSTER = '/og-image.png';

/** Hero section with full-bleed background video, headline and CTAs */
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-video" aria-hidden="true">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            preload="metadata"
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={HERO_POSTER}
            alt=""
            role="presentation"
          />
        )}
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="h1 title-font">
            Cuide do <span className="accent">chega</span> antes de{' '}
            <span className="stroke">você</span>
            <span className="h1-bang" aria-hidden="true" />!
          </h1>

          <p className="hero-sub">
            Polimento que transforma, presença que impõe respeito.
          </p>

          <div className="hero-ctas">
            <a
              className="btn btn-primary"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Ico.Whats size={16} /> Solicitar Orçamento Gratuito
            </a>
            <a className="btn btn-ghost" href="#servicos">
              Conhecer Serviços <Ico.Arrow size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
