import logo from '../assets/logo.jpg';
import { SITE } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';

const STEPS = [
  { title: 'Tell Us Your Need', text: 'Share your budget, preferred area and requirements by call, WhatsApp or the form below.' },
  { title: 'Get Verified Options', text: 'We shortlist properties that fit and arrange site visits at your convenience.' },
  { title: 'Negotiate & Finalise', text: 'We help you negotiate the best price and check every document carefully.' },
  { title: 'Move In or Hand Over', text: 'From agreement to registration, we stay with you until the deal is done.' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Reveal className="about__media">
          <img src={logo} alt={`${SITE.name} logo`} />
          <div className="about__tag">
            <strong>Buy · Sell · Rent · Invest</strong>
            <span>All under one roof</span>
          </div>
        </Reveal>
        <Reveal className="about__content" delay={120}>
          <span className="eyebrow eyebrow--lined">About Us</span>
          <h2>A Name You Can Trust in Indore Real Estate</h2>
          <p>
            {SITE.name} is an Indore-based real estate consultancy at Rajendra Nagar, Dhanwantri Nagar, helping families, professionals
            and investors with buying, selling, renting and investing in property. Our focus is simple: honest advice,
            verified properties and a smooth experience from start to finish.
          </p>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
