import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/animations.scss';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="scroll-indicator">
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: 'spring', damping: 10 }}
      />
    </div>
  );
};

export default ScrollIndicator;