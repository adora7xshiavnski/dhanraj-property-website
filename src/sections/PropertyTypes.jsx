import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { BuildingIcon, HomeIcon, LandIcon, ShopIcon, VillaIcon } from '../components/Icons.jsx';

const TYPES = [
  { icon: HomeIcon, title: 'Independent Houses', text: 'Ready-to-move family homes' },
  { icon: BuildingIcon, title: 'Flats & Apartments', text: '1, 2, 3 BHK and more' },
  { icon: VillaIcon, title: 'Villas & Duplexes', text: 'Premium living spaces' },
  { icon: LandIcon, title: 'Residential Plots', text: 'Build your home your way' },
  { icon: ShopIcon, title: 'Commercial Spaces', text: 'Shops, offices and showrooms' },
];

export default function PropertyTypes() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHeading
          eyebrow="Property Types"
          title="Find the Space That Fits You"
          text="Residential or commercial, for living or for investment, we help you find the right property."
        />
        <div className="types">
          {TYPES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <Link to="/#contact" className="type-card">
                <span className="type-card__icon"><Icon width={30} height={30} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
