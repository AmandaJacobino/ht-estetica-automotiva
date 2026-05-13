import { useState } from 'react';
import { Ico } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Quanto tempo leva para fazer o polimento?',
    answer: 'O polimento técnico leva em média de 4 a 8 horas, dependendo do estado da pintura. Lavagens completas levam cerca de 1h30 a 2h. Todo o serviço é feito com calma, sem pressa — qualidade exige tempo.',
  },
  {
    question: 'O polimento tira riscos de chave e arranhões?',
    answer: 'Riscos superficiais (que não prenderam a unha) saem completamente. Riscos profundos podem ser atenuados — eu avalio caso a caso e te falo com honestidade o que é possível atingir antes de começar o trabalho.',
  },
  {
    question: 'Quanto tempo dura o resultado?',
    answer: 'Com enceramento profissional, o brilho dura cerca de 30 a 45 dias de proteção ativa. Com selantes e coatings (serviços premium), essa durabilidade se estende por muitos meses.',
  },
  {
    question: 'Atende em condomínio? Preciso de autorização?',
    answer: 'Sim, atendemos em condomínios. Recomendo que você avise a portaria e, se necessário, solicite autorização à administração. Levamos toda a estrutura: água, energia, produtos e equipamentos.',
  },
  {
    question: 'Gasta muita água e energia, já que é em casa?',
    answer: 'Não. Utilizamos técnicas de lavagem a seco e a baixo consumo quando necessário. Em média, gastamos menos de 30 litros de água por veículo — bem menos que uma lavagem tradicional.',
  },
  {
    question: 'Quais regiões atendem?',
    answer: 'Atendemos Sorocaba e cidades vizinhas. Para regiões mais distantes, consulte a disponibilidade e pode haver uma pequena taxa de deslocamento.',
  },
];

/** FAQ section — accessible accordion */
export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow="Perguntas"
          title={<><span className="o">Dúvidas</span> Frequentes</>}
          subtitle="Tire suas principais dúvidas antes mesmo de pedir orçamento."
        />

        <div className="faq reveal">
          {FAQ_ITEMS.map((it, i) => (
            <FaqCard key={it.question} it={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqCard({ it, index }: { it: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        id={triggerId}
        className="faq-q"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span>{it.question}</span>
        <span className="faq-plus" aria-hidden="true">
          <Ico.Plus />
        </span>
      </button>
      <div
        id={answerId}
        className="faq-a-wrapper"
        role="region"
        aria-labelledby={triggerId}
      >
        <div className="faq-a-content">
          <div className="faq-a">{it.answer}</div>
        </div>
      </div>
    </div>
  );
}
