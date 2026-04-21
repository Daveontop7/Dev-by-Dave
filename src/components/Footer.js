import React from 'react';
import "./Footer.css";
import { 
  FaTiktok,
  FaInstagram, 
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWallet
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-col logo-col">
            <div className="logo">
              <img src="/logo.png" alt="Logo" className="logo-img" />
            </div>
            <p className="footer-tagline">Building powerful web experiences that drive results.</p>
            <div className="footer-social">
              <a href="https://wa.me/2349027235106" className="social-link"><FaWhatsapp /></a>
              <a href="https://www.tiktok.com/@devby_dave" className="social-link"><FaTiktok /></a>
              <a href="https://www.linkedin.com/in/dev-by-dave-30998b349" className="social-link"><FaLinkedin /></a>
              <a href="https://www.instagram.com/devbydave.ng?igsh=Y280MGx1bzYyb2sy" className="social-link"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links no-hover">
              <li><span>Web Development</span></li>
              <li><span>UI/UX Design</span></li>
              <li><span>E-Commerce</span></li>
              <li><span>SEO Optimization</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><div className="contact-icon mail"><FaEnvelope /></div><span>realdavedev@gmail.com</span></li>
              <li><div className="contact-icon phone"><FaPhone /></div><span>+234 902 723 5106</span></li>
              <li><div className="contact-icon location"><FaMapMarkerAlt /></div><span>Lagos, Nigeria</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Dev by Dave. All rights reserved.</p>
          
          <button 
            className="footer-policy-btn"
            onClick={() => window.dispatchEvent(new CustomEvent('openPaymentPolicy'))}
          >
            <FaWallet />
            Payment Policy
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;