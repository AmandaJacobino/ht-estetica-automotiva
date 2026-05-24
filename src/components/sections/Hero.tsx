import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

/** Set to e.g. `/videos/hero.mp4` when the hero video asset is ready */
const videoSrc: string | null = null;

const HERO_POSTER = '/og-image.png';

/** Hero section with headline, stats strip and media card */
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <div className="hero-video">
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
              <Ico.Whats style={{ width: 16, height: 16 }} /> Solicitar Orçamento Gratuito
            </a>
            <a className="btn btn-ghost" href="#servicos">
              Conhecer Serviços <Ico.Arrow style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
