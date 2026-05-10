import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

/** About section — Henrique's story, certification card and CTAs */
export function About() {
  return (
    <section className="section" id="sobre" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="about">
          {/* Left — media */}
          <div className="reveal">
            <div className="about-media">
              <div className="about-frame">
                <div className="about-person">
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        margin: '0 auto 12px',
                        background: 'linear-gradient(135deg,#ff6a1a,#d94e00)',
                        display: 'grid',
                        placeItems: 'center',
                        fontFamily: 'Orbitron',
                        fontWeight: 800,
                        fontSize: 28,
                        color: '#fff',
                        boxShadow: '0 20px 40px -10px rgba(255,106,26,.5)',
                      }}
                    >
                      HT
                    </div>
                    <div className="pmark">[ foto do Henrique ]</div>
                  </div>
                </div>
              </div>
              <div className="cert-card">
                <div className="cert-img" />
                <div className="cert-label">Certificado Profissional</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal">
            <div className="sec-eyebrow">Quem está por trás</div>
            <h2 className="title-font">
              Mais do que polir, é <span className="o">restaurar a história</span>.
            </h2>
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
            <div className="about-quote">
              Aqui, o seu carro não é "mais um". Ele é o mais importante.
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                className="btn btn-primary"
                href={waLink('Olá Henrique, quero solicitar um orçamento.')}
                target="_blank"
                rel="noreferrer"
              >
                <Ico.Whats style={{ width: 16, height: 16 }} /> Solicitar orçamento
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Ver serviços <Ico.Arrow style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
