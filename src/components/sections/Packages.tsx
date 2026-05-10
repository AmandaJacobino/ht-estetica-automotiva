import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

/** CTA band — inline call to action strip, also used inside Packages */
export function CtaBand() {
  return (
    <div className="cta-band reveal">
      <div>
        <h3 className="title-font">Não sabe qual serviço escolher?</h3>
        <p>Envie uma foto do seu carro no WhatsApp — eu analiso e recomendo o ideal pra você.</p>
      </div>
      <a
        className="btn btn-whats"
        href={waLink('Olá Henrique! Gostaria de entender qual serviço é ideal para meu carro.')}
        target="_blank"
        rel="noreferrer"
      >
        <Ico.Whats style={{ width: 18, height: 18 }} /> Falar no WhatsApp
      </a>
    </div>
  );
}

/**
 * Packages section — wash package cards + CTA band.
 * In the original this was `function Services()`.
 */
export function Packages() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="sec-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            Pacotes
          </div>
          <h2 className="sec-title title-font">
            Nossos <span className="o">Serviços</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Escolha o cuidado ideal. Transparência total no que está incluso.
          </p>
        </div>

        <div className="wash-wrap reveal">
          {/* Lavagem Simples */}
          <div className="wash">
            <div className="wash-ico"><Ico.Droplet /></div>
            <h3 className="title-font">Lavagem Simples</h3>
            <div className="wash-price">
              <span className="p">sob consulta</span>
              <span className="l">· atendimento a domicílio</span>
            </div>
            <ul>
              <li><Ico.Check /><span><b>Limpeza interna simples</b> — aspiração e higienização</span></li>
              <li><Ico.Check /><span><b>Lavagem externa completa</b> com shampoo neutro</span></li>
              <li><Ico.Check /><span><b>Pretinho nos pneus</b> e finalização</span></li>
            </ul>
            <a
              href={waLink('Olá! Gostaria de orçamento para a Lavagem Simples.')}
              target="_blank"
              rel="noreferrer"
              className="wash-btn ghost"
            >
              Solicitar <Ico.Arrow style={{ width: 14, height: 14 }} />
            </a>
          </div>

          {/* Lavagem Completa */}
          <div className="wash featured">
            <div className="wash-badge">Mais pedido</div>
            <div className="wash-ico"><Ico.Sparkle /></div>
            <h3 className="title-font">Lavagem Completa</h3>
            <div className="wash-price">
              <span className="p">sob consulta</span>
              <span className="l">· pacote premium</span>
            </div>
            <ul>
              <li><Ico.Check /><span><b>Limpeza interna</b> profunda com produtos específicos</span></li>
              <li><Ico.Check /><span><b>Lavagem externa completa</b> + descontaminação</span></li>
              <li><Ico.Check /><span><b>Enceramento completo da lataria</b> com brilho duradouro</span></li>
              <li><Ico.Check /><span><b>Revitalização</b> de plásticos e pretinho nos pneus</span></li>
            </ul>
            <a
              href={waLink('Olá! Gostaria de orçamento para a Lavagem Completa.')}
              target="_blank"
              rel="noreferrer"
              className="wash-btn"
            >
              Solicitar orçamento <Ico.Arrow style={{ width: 14, height: 14 }} />
            </a>
          </div>
        </div>

        <CtaBand />
      </div>
    </section>
  );
}
