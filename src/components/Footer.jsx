import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <div className="logo">
              <FaRocket className="rocket-icon" />
              <span>ITRocket</span>
            </div>
            <p>Launching your digital presence to new heights with innovative solutions.</p>
            <div className="social-links">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">UI/UX Design</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form>
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ITRocket. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;