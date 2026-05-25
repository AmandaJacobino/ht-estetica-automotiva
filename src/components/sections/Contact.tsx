import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';
import { SectionHeader } from '../ui/SectionHeader';

/** Contact section — direct contact channels card */
export function Contact() {
  return (
    <section className="section pb-20" id="contato">
      <div className="container">
        <SectionHeader
          eyebrow="Contato"
          title={<>Pronto para um <span className="o">brilho</span><br />que vem até você?</>}
          subtitle="Atendimento a domicílio em Sorocaba e região. Resposta em minutos no WhatsApp."
        />

        <div className="contact-single">
          <div className="contact-card reveal">
            <div className="divider">CANAIS DIRETOS</div>

            {/* WhatsApp row */}
            <a className="contact-row" href={waLink()} target="_blank" rel="noopener noreferrer">
              <div className="contact-ico wa"><Ico.Whats /></div>
              <div className="flex-1">
                <div className="contact-lbl">WhatsApp</div>
                <div className="contact-val">(15) 99786-1991</div>
              </div>
              <Ico.Arrow size={18} style={{ color: 'var(--fg-mute)' }} />
            </a>

            {/* Email row */}
            <a className="contact-row" href="mailto:tedescohenrique@hotmail.com">
              <div className="contact-ico em"><Ico.Mail /></div>
              <div className="flex-1">
                <div className="contact-lbl">E-mail</div>
                <div className="contact-val">tedescohenrique@hotmail.com</div>
              </div>
              <Ico.Arrow size={18} style={{ color: 'var(--fg-mute)' }} />
            </a>

            {/* Instagram row */}
            <a
              className="contact-row"
              href="https://www.instagram.com/ht.esteticaautomotiva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-ico ig"><Ico.Insta /></div>
              <div className="flex-1">
                <div className="contact-lbl">Instagram</div>
                <div className="contact-val">@ht.esteticaautomotiva</div>
              </div>
              <Ico.Arrow size={18} style={{ color: 'var(--fg-mute)' }} />
            </a>

            {/* Location row */}
            <div className="contact-row">
              <div className="contact-ico loc"><Ico.Pin /></div>
              <div className="flex-1">
                <div className="contact-lbl">Atendimento</div>
                <div className="contact-val">Sorocaba e região · a domicílio</div>
              </div>
            </div>

            {/* Hours row */}
            <div className="contact-row">
              <div className="contact-ico loc"><Ico.Clock /></div>
              <div className="flex-1">
                <div className="contact-lbl">Horário</div>
                <div className="contact-val">Seg — Sáb · 08h às 18h</div>
              </div>
            </div>

            <div className="mt-6">
              <a
                className="btn btn-whats w-full justify-center"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Ico.Whats size={18} /> Chamar no WhatsApp agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
