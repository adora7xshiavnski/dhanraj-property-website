import { whatsappLink } from '../data/site.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dhanraj Property on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
