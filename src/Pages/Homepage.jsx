import React from 'react';
import Hero from '../Components/Hero/Hero';
import Features from '../Components/Feature/Feature';
import UseCases from '../Components/Usecases/Usecases';
import Samples from '../Components/Samples/Samples';
import Pricing from '../Components/Pricing/Pricing';
import CTA from '../Components/CTA/CTA';
import Team from '../Pages/Team/Team';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <UseCases />
      <Samples />
      <Team />
      <Pricing />
      <CTA />
    </div>
  );
};

export default Homepage;
