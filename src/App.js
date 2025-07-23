import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import ThreeScene from './components/ThreeScene';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app dark-purple-theme">
        <ThreeScene />
        <Navbar />
        <ScrollIndicator />
        <main>
          <HeroSection />
          <Services />
          <Projects />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;