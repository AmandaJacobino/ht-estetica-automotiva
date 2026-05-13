import { Ico } from '../ui/Icons';
import { waLink } from '../../lib/whatsapp';

/** Site footer with brand, navigation columns and social links */
export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot">
            <div className="foot-brand">
              <span className="or">HT</span>{' '}
              <span className="bl">Estética</span>{' '}
              <span className="or">Automotiva</span>
            </div>
            <p className="foot-desc">
              Detalhamento automotivo com paixão e técnica. Atendimento a domicílio em Sorocaba e região.
            </p>
            <div className="foot-socials">
              <a
                href="https://www.instagram.com/ht.esteticaautomotiva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Ico.Insta />
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <Ico.Whats />
              </a>
              <a href="mailto:tedescohenrique@hotmail.com" aria-label="Email">
                <Ico.Mail />
              </a>
            </div>
          </div>

          <div className="foot">
            <h3>Navegação</h3>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="foot">
            <h3>Serviços</h3>
            <ul>
              <li><a href="#servicos">Lavagem Simples</a></li>
              <li><a href="#servicos">Lavagem Completa</a></li>
              <li><a href="#processo">Polimento</a></li>
              <li><a href="#processo">Proteção e Selagem</a></li>
            </ul>
          </div>

          <div className="foot">
            <h3>Atendimento</h3>
            <ul>
              <li>Sorocaba — SP</li>
              <li>Seg–Sáb · 08h às 18h</li>
              <li>A domicílio</li>
              <li>Resposta em minutos</li>
            </ul>
          </div>
        </div>

        <div className="foot-bot">
          <div>© 2026 HT Estética Automotiva. Todos os direitos reservados.</div>
          <div className="mono">SOROCABA–SP · BRASIL</div>
        </div>
      </div>
    </footer>
  );
}
