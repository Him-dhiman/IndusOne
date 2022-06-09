import React from 'react';
import "../App.css";
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards/Cards';

function LandingPage() {
  return (
      <>
        <HeroSection />
        <Cards />
      </>
  );
}

export default LandingPage;