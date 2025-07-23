import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/projects.scss';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'project1.jpg',
    description: 'A full-featured online store with payment integration.'
  },
  {
    id: 2,
    title: 'Fitness Mobile App',
    category: 'Mobile Development',
    image: 'project2.jpg',
    description: 'Workout tracking and nutrition planning application.'
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Development',
    image: 'project3.jpg',
    description: 'Modern corporate website with CMS integration.'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    category: 'Web Development',
    image: 'project4.jpg',
    description: 'Analytics dashboard for social media managers.'
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    category: 'Web Development',
    image: 'project5.jpg',
    description: 'Patient management system for healthcare providers.'
  },
  {
    id: 6,
    title: 'AR Shopping App',
    category: 'Mobile Development',
    image: 'project6.jpg',
    description: 'Augmented reality shopping experience.'
  }
];

const categories = ['All', 'Web Development', 'Mobile Development'];

const ProjectCard = ({ project, index }) => {
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
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        {!imageError ? (
          <img 
            src={`/assets/images/${project.image}`} 
            alt={project.title}
            onError={handleImageError}
          />
        ) : (
          <div className="placeholder-image">
            <div className="placeholder-content">
              <h4>{project.title}</h4>
              <span>{project.category}</span>
            </div>
          </div>
        )}
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <span>{project.category}</span>
        </div>
      </div>
      <div className="project-info">
        <p>{project.description}</p>
        <button className="view-btn">View Project</button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our <span className="gradient-text">Projects</span></h2>
          <p>Explore our portfolio of successful digital solutions.</p>
        </motion.div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          className="projects-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;