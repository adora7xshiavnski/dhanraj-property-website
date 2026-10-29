import { useEffect } from 'react';
import Hero from '../sections/Hero.jsx';
import Services from '../sections/Services.jsx';
import WhyUs from '../sections/WhyUs.jsx';
import PropertyTypes from '../sections/PropertyTypes.jsx';
import About from '../sections/About.jsx';
import CtaBand from '../sections/CtaBand.jsx';
import Contact from '../sections/Contact.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'Dhanraj Property | Buy, Sell, Rent & Invest in Indore';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <PropertyTypes />
      <About />
      <CtaBand />
      <Contact />
    </>
  );
}
