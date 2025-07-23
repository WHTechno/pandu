import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/team.scss';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'team1.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    image: 'team2.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: 'team3.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'UI/UX Designer',
    image: 'team4.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const TeamMember = ({ member, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      ref={ref}
      className="team-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="team-image">
        {!imageError ? (
          <img 
            src={`/assets/images/${member.image}`} 
            alt={member.name}
            onError={handleImageError}
          />
        ) : (
          <div className="placeholder-avatar">
            <div className="avatar-initials">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        )}
        <div className="social-links">
          <a href={member.social.twitter}><FaTwitter /></a>
          <a href={member.social.linkedin}><FaLinkedin /></a>
          <a href={member.social.github}><FaGithub /></a>
        </div>
      </div>
      <div className="team-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our <span className="gradient-text">Team</span></h2>
          <p>Meet the talented individuals behind ITRocket's success.</p>
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;