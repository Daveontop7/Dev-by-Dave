import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import "./Contact.css";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaLinkedin, 
  FaCheckCircle,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = 'service_zugqsl2';
    const TEMPLATE_ID = 'template_u2rg6s6';
    const PUBLIC_KEY = 'l3Ds89x-MAqUbIOLJ';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
          icon: '✅',
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '14px',
            fontWeight: '500',
          },
        });
        setFormData({ name: '', email: '', service: '', budget: '', message: '' });
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Failed to send message. Please try again.', {
          duration: 5000,
          icon: '❌',
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '14px',
            fontWeight: '500',
          },
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <div className="contact-tag">
            <span></span> GET IN TOUCH <span></span>
          </div>
          <h2>Let's Build Something <span>Amazing</span></h2>
          <p>Ready to start your project? Fill out the form below and I'll get back to you within 24 hours.</p>
        </div>

        <div className="contact-grid">
          {/* LEFT - Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Service Interested In</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="seo">SEO Optimization</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Budget</label>
                <select 
                  name="budget" 
                  value={formData.budget} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select your budget range</option>
                  <option value="below-100k">₦0 - ₦100,000</option>
                  <option value="100k-300k">₦100,000 - ₦300,000</option>
                  <option value="300k-700k">₦300,000 - ₦700,000</option>
                  <option value="700k-1.5m">₦700,000 - ₦1,500,000</option>
                  <option value="1.5m+">₦1,500,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Details</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? (
                  <span className="btn-spinner" aria-hidden="true"></span>
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </button>

              <p className="response-time">I typically respond within 24 hours</p>
            </form>
          </div>

          {/* RIGHT - Info Cards */}
          <div className="contact-info-container">
            <div className="info-card">
              <h3>Quick Contact</h3>
              
              <div className="info-item">
                <div className="info-icon email"><FaEnvelope /></div>
                <div className="info-text">
                  <span>Email Me</span>
                  <strong>realdavedev@gmail.com</strong>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon phone"><FaPhone /></div>
                <div className="info-text">
                  <span>Call Me</span>
                  <strong>+234 902 723 5106</strong>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon location"><FaMapMarkerAlt /></div>
                <div className="info-text">
                  <span>Location</span>
                  <strong>Lagos, Nigeria</strong>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/davebydave.ng?igsh=Y280MGx1bzYyb2sy" className="social-icon"><FaInstagram /></a>
                <a href="https://www.tiktok.com/@devbydave.ng" className="social-icon"><FaTiktok /></a>
                <a href="https://www.linkedin.com/in/dev-by-dave-30998b349?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="social-icon"><FaLinkedin/></a>
              </div>
            </div>

            <div className="available-card">
              <div className="available-icon"><FaCheckCircle /></div>
              <h3>Available for Projects</h3>
              <p>Let's discuss your next big idea!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;