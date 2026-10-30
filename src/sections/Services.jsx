import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { ArrowIcon, BuildingIcon, ChartIcon, HandshakeIcon, HomeIcon } from '../components/Icons.jsx';

const SERVICES = [
  {
    icon: HomeIcon,
    title: 'Buy',
    subtitle: 'Your Home',
    text: 'Shortlisted, verified homes, flats and plots that match your budget, location and lifestyle, with support through site visits and paperwork.',
  },
  {
    icon: ChartIcon,
    title: 'Sell',
    subtitle: 'With Confidence',
    text: 'Realistic market pricing, genuine buyer leads and smooth negotiation so you get the right value for your property without the stress.',
  },
  {
    icon: HandshakeIcon,
    title: 'Rent',
    subtitle: 'Hassle Free',
    text: 'For tenants and owners alike: suitable rental options, tenant screening and clear rental agreements handled end to end.',
  },
  {
    icon: BuildingIcon,
    title: 'Invest',
    subtitle: 'For a Better Future',
    text: 'Guidance on residential and commercial opportunities in growing areas of Indore, so your money works harder for you.',
  },
];

export default function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Real Estate Services"
          text="One trusted partner for every property need, from the first enquiry to handing over the keys."
        />
        <div className="services">
          {SERVICES.map(({ icon: Icon, title, subtitle, text }, i) => (
            <Reveal as="article" className="service-card" key={title} delay={i * 100}>
              <span className="service-card__num">0{i + 1}</span>
              <div className="service-card__icon"><Icon width={34} height={34} /></div>
              <h3>{title}</h3>
              <span className="service-card__sub">{subtitle}</span>
              <p>{text}</p>
              <Link to="/#contact" className="service-card__link">
                Enquire now <ArrowIcon width={16} height={16} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
