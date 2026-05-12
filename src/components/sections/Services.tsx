import { Ico } from '../ui/Icons';
import { BeforeAfter } from './BeforeAfter';

interface ServiceItem {
  n: string;
  ico: React.ReactNode;
  t: string;
  d: string;
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    n: '01',
    ico: <Ico.Wrench />,
    t: 'Correção de Riscos',
    d: 'Elimina arranhões, manchas e imperfeições profundas usando técnicas de corte profissional.',
  },
  {
    n: '02',
    ico: <Ico.Sparkle />,
    t: 'Aplicação de Polimento',
    d: 'Refinamento da superfície para restaurar o brilho original e uniformizar a pintura.',
  },
  {
    n: '03',
    ico: <Ico.Shield />,
    t: 'Proteção e Selagem',
    d: 'Camada protetora contra raios UV, chuva ácida e poluentes atmosféricos.',
  },
  {
    n: '04',
    ico: <Ico.Car />,
    t: 'Resultado Final',
    d: 'Brilho profundo e duradouro com proteção garantida por meses.',
  },
];

/**
 * Services section — our 4-step process pillars + before/after slider.
 * In the original this was `function Pillars()`.
 */
export function Services() {
  return (
    <section className="section" id="processo">
      <div className="container">
        <div className="reveal services-intro">
          <div className="sec-eyebrow">Nosso processo</div>
          <h2 className="sec-title title-font">
            Não se trata apenas de limpar,<br />
            mas de <span className="o">restaurar e proteger</span>.
          </h2>
          <p className="sec-sub">
            Utilizamos produtos e técnicas de ponta para um resultado superior e duradouro.
            Cada etapa é executada com atenção e paciência.
          </p>
        </div>

        <div className="services stagger reveal">
          {SERVICE_ITEMS.map((it) => (
            <div className="svc" key={it.n}>
              <div className="svc-num">// {it.n}</div>
              <div className="svc-ico">{it.ico}</div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              <div className="svc-line" />
            </div>
          ))}
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
}

