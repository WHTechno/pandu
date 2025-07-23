import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobile, FaChartLine, FaServer, FaPalette, FaShieldAlt } from 'react-icons/fa';
import '../styles/services.scss';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.'
  },
  {
    icon: <FaMobile />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: <FaChartLine />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business.'
  },
  {
    icon: <FaServer />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.'
  },
  {
    icon: <FaPalette />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed for engagement.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cyber Security',
    description: 'Protection against digital threats and vulnerabilities.'
  }
];

const ServiceCard = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our <span className="gradient-text">Services</span></h2>
          <p>We offer a comprehensive range of digital solutions to meet your business needs.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;