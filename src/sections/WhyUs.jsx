import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { HeadsetIcon, ShieldIcon, TagIcon, UserIcon } from '../components/Icons.jsx';

const REASONS = [
  {
    icon: ShieldIcon,
    title: 'Verified Properties',
    text: 'Every listing we share is checked for ownership documents and legal clarity before it reaches you.',
  },
  {
    icon: UserIcon,
    title: 'Expert Guidance',
    text: 'Local market knowledge of Indore to help you choose the right location, price and property type.',
  },
  {
    icon: TagIcon,
    title: 'Best Deals',
    text: 'Transparent pricing and strong negotiation so buyers, sellers and tenants all get a fair deal.',
  },
  {
    icon: HeadsetIcon,
    title: 'Trusted Support',
    text: 'A single point of contact from enquiry to registration, available on call and WhatsApp.',
  },
];

export default function WhyUs() {
  return (
    <section className="section section--navy" id="why-us">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="Property Decisions Made Simple"
          text="Buying or selling property is one of life's biggest decisions. We make sure it is also one of the easiest."
        />
        <div className="reasons">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <Reveal className="reason" key={title} delay={i * 100}>
              <div className="reason__icon"><Icon width={28} height={28} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
