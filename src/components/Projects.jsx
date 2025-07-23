import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/projects.scss';

const networks = {
  Mainnet: [
    {
      id: 1,
      name: 'Axone',
      image: 'axone.png',
      explorer: '#',
      stake: '#',
    },
  ],
  Testnet: [
    {
      id: 2,
      name: 'Story Aenid',
      image: 'story.png',
      explorer: '#',
      stake: '#',
    },
    {
      id: 3,
      name: 'Lumera',
      image: 'lumera.png',
      explorer: '#',
      stake: '#',
    },
    {
      id: 4,
      name: 'Kiichain',
      image: 'kiichain.png',
      explorer: '#',
      stake: '#',
    },
    {
      id: 5,
      name: 'Warden',
      image: 'warden.png',
      explorer: '#',
      stake: '#',
    },
  ]
};

const NetworkCard = ({ name, image, explorer, stake }) => (
  <motion.div
    className="network-card"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="network-content">
      <img src={`/assets/images/${image}`} alt={name} className="network-logo" />
      <h4>{name}</h4>
      <div className="network-buttons">
        <a href={explorer} className="btn">Explorer</a>
        <a href={stake} className="btn primary">Stake</a>
        <button className="btn icon">
          <span role="img" aria-label="settings">⚙️</span>
        </button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-block">
          <h2>Supported <span className="gradient-text">Mainnets</span></h2>
          <p>Mainnet networks actively supported by WHTech</p>
          <div className="networks-grid">
            {networks.Mainnet.map(net => (
              <NetworkCard key={net.id} {...net} />
            ))}
          </div>
        </div>

        <div className="section-block">
          <h2>Supported <span className="gradient-text">Testnets</span></h2>
          <p>Testnet networks currently under support and monitoring</p>
          <div className="networks-grid">
            {networks.Testnet.map(net => (
              <NetworkCard key={net.id} {...net} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
