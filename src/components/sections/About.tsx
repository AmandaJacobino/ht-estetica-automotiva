import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

/** About section — Henrique's story, certification card and CTAs */
export function About() {
  return (
    <section className="section pt-0" id="sobre">
      <div className="container">
        <div className="about">
          {/* Left — media */}
          <div className="reveal">
            <div className="about-media">
              <div className="about-frame">
                <div className="about-person">
                  <div className="text-center">
                    <div className="about-avatar title-font">HT</div>
                  </div>
                </div>
              </div>
              <div className="cert-card">
                <div className="cert-img-wrapper" aria-hidden="true" />
                <div className="cert-label">Certificado Profissional</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal">
            <div className="sec-eyebrow">Quem está por trás</div>
            <h2 className="sec-title title-font">
              Mais do que polir, é <span className="o">restaurar a história</span>.
            </h2>
            <div className="about-text">
              <p>
                Meu nome é <b>Henrique</b>, eu fundei este serviço movido por uma paixão genuína por
                automóveis e um respeito profundo pelo trabalho bem feito.
              </p>
              <p>
                O seu veículo é muito mais que um meio de transporte —{' '}
                <b>ele é testemunha das suas conquistas</b>. Por isso, meu compromisso não é
                simplesmente em polir, mas honrar essa história com o cuidado que ela merece.
              </p>
              <p>
                Mesmo sendo novo no mercado, trago algo que vale mais que anos de experiência:{' '}
                <span className="hi"> dedicação minuciosa</span> e{' '}
                <span className="hi">honestidade total</span> com cada cliente.
              </p>
            </div>
            <div className="about-quote">
              Aqui, o seu carro não é "mais um". Ele é o mais importante.
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="btn btn-primary"
                href={waLink('Olá Henrique, quero solicitar um orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Ico.Whats size={16} /> Solicitar orçamento
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Ver serviços <Ico.Arrow size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
