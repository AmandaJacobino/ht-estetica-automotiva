import { Ico } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  { name: 'Carlos M.',  role: 'Volkswagen Jetta',   text: 'Trabalho impecável! Meu carro parece ter saído da concessionária. Recomendo demais!' },
  { name: 'Maria G.',   role: 'Honda Civic',         text: 'Adorei o resultado final do meu carro. Atendimento excelente e muito atencioso.' },
  { name: 'Arthur B.',  role: 'Toyota Corolla',      text: 'O Henrique ressuscitou o brilho do meu carro, que trabalho incrível!' },
  { name: 'Bia H.',     role: 'Jeep Compass',        text: 'Adorei o resultado do meu carro, com certeza vou contratá-lo novamente!' },
  { name: 'Rafael P.',  role: 'Chevrolet Onix',      text: 'Profissionalismo do começo ao fim. A cor do meu preto voltou a ser preta de verdade.' },
  { name: 'Lívia S.',   role: 'Hyundai HB20',        text: 'Melhor custo-benefício da região. Super atencioso e pontual. Sumiram os riscos!' },
];

/** Testimonials section — client review cards */
export function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <SectionHeader
          eyebrow="Depoimentos"
          title={<>O que nossos <span className="o">clientes dizem</span></>}
          subtitle="Avaliações reais de quem já confiou o carro com a gente."
        />

        <div className="testis reveal">
          {TESTIMONIALS.map((t) => (
            <div className="testi" key={t.name}>
              <div className="testi-quote">"</div>
              <div className="testi-stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Ico.Star key={j} />
                ))}
              </div>
              <p>"{t.text}"</p>
              <div className="testi-who">
                <div className="testi-av">{t.name[0]}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
