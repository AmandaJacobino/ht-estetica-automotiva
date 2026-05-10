import { Ico } from './Icons';
import { waLink } from '../../lib/whatsapp';

/** Fixed floating WhatsApp button (bottom-right). */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      className="float-wa"
      aria-label="WhatsApp"
    >
      <Ico.Whats />
    </a>
  );
}
