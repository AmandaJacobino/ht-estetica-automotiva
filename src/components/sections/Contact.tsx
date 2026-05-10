import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

/** Contact section — direct contact channels card */
export function Contact() {
  return (
    <section className="section" id="contato" style={{ paddingBottom: 80 }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="sec-eyebrow" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            Contato
          </div>
          <h2 className="sec-title title-font">
            Pronto para um <span className="o">brilho</span><br />que vem até você?
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Atendimento a domicílio em Sorocaba e região. Resposta em minutos no WhatsApp.
          </p>
        </div>

        <div className="contact-single">
          <div className="contact-card reveal">
            <div className="divider">CANAIS DIRETOS</div>

            {/* WhatsApp row */}
            <a className="contact-row" href={waLink()} target="_blank" rel="noreferrer">
              <div className="contact-ico wa"><Ico.Whats /></div>
              <div style={{ flex: 1 }}>
                <div className="contact-lbl">WhatsApp</div>
                <div className="contact-val">(15) 99786-1991</div>
              </div>
              <Ico.Arrow style={{ width: 18, height: 18, color: 'var(--fg-mute)' }} />
            </a>

            {/* Email row */}
            <a className="contact-row" href="mailto:tedescohenrique@hotmail.com">
              <div className="contact-ico em"><Ico.Mail /></div>
              <div style={{ flex: 1 }}>
                <div className="contact-lbl">E-mail</div>
                <div className="contact-val">tedescohenrique@hotmail.com</div>
              </div>
              <Ico.Arrow style={{ width: 18, height: 18, color: 'var(--fg-mute)' }} />
            </a>

            {/* Instagram row */}
            <a
              className="contact-row"
              href="https://www.instagram.com/ht.esteticaautomotiva"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-ico ig"><Ico.Insta /></div>
              <div style={{ flex: 1 }}>
                <div className="contact-lbl">Instagram</div>
                <div className="contact-val">@ht.esteticaautomotiva</div>
              </div>
              <Ico.Arrow style={{ width: 18, height: 18, color: 'var(--fg-mute)' }} />
            </a>

            {/* Location row */}
            <div className="contact-row">
              <div className="contact-ico loc"><Ico.Pin /></div>
              <div style={{ flex: 1 }}>
                <div className="contact-lbl">Atendimento</div>
                <div className="contact-val">Sorocaba e região · a domicílio</div>
              </div>
            </div>

            {/* Hours row */}
            <div className="contact-row">
              <div className="contact-ico loc"><Ico.Clock /></div>
              <div style={{ flex: 1 }}>
                <div className="contact-lbl">Horário</div>
                <div className="contact-val">Seg — Sáb · 08h às 18h</div>
              </div>
            </div>

            <div style={{ marginTop: 22 }}>
              <a
                className="btn btn-whats"
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Ico.Whats style={{ width: 18, height: 18 }} /> Chamar no WhatsApp agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
