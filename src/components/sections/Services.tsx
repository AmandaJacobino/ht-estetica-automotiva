import { Ico } from '../ui/Icons';
import { BeforeAfter } from './BeforeAfter';
import { SectionHeader } from '../ui/SectionHeader';

interface ServiceItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  anchorId?: string;
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    number: '01',
    icon: <Ico.Wrench />,
    title: 'Correção de Riscos',
    description: 'Elimina arranhões, manchas e imperfeições profundas usando técnicas de corte profissional.',
  },
  {
    number: '02',
    icon: <Ico.Sparkle />,
    title: 'Aplicação de Polimento',
    description: 'Refinamento da superfície para restaurar o brilho original e uniformizar a pintura.',
    anchorId: 'polimento',
  },
  {
    number: '03',
    icon: <Ico.Shield />,
    title: 'Proteção e Selagem',
    description: 'Camada protetora contra raios UV, chuva ácida e poluentes atmosféricos.',
    anchorId: 'protecao',
  },
  {
    number: '04',
    icon: <Ico.Car />,
    title: 'Resultado Final',
    description: 'Brilho profundo e duradouro com proteção garantida por meses.',
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
        <SectionHeader
          eyebrow="Nosso processo"
          align="left"
          className="services-intro"
          title={<>Não se trata apenas de limpar,<br />mas de <span className="o">restaurar e proteger</span>.</>}
          subtitle="Utilizamos produtos e técnicas de ponta para um resultado superior e duradouro. Cada etapa é executada com atenção e paciência."
        />

        <div className="services stagger reveal">
          {SERVICE_ITEMS.map((it) => (
            <div className="svc" key={it.number} id={it.anchorId}>
              <div className="svc-num">// {it.number}</div>
              <div className="svc-ico">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.description}</p>
              <div className="svc-line" />
            </div>
          ))}
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
}
