import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <Reveal className="section-heading">
      {eyebrow && <span className="eyebrow eyebrow--lined">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
