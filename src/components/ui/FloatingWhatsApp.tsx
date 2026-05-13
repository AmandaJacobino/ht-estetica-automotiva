import { Ico } from './Icons';
import { waLink } from '../../lib/whatsapp';

/** Fixed floating WhatsApp button (bottom-right). */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Conversar no WhatsApp"
    >
      <Ico.Whats aria-hidden="true" />
    </a>
  );
}
