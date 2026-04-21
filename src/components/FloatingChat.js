import React, { useState, useEffect } from 'react';
import { 
  IoChatbubbleEllipsesOutline, 
  IoClose, 
  IoChevronDown, 
  IoWallet, 
  IoArrowBack,
  IoCalendar,
  IoShieldCheckmark 
} from 'react-icons/io5';
import './FloatingChat.css';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [view, setView] = useState('faq');

  // Listen for footer button click
  useEffect(() => {
    const handleOpenPolicy = () => {
      setIsOpen(true);
      setView('policy');
    };
    
    window.addEventListener('openPaymentPolicy', handleOpenPolicy);
    return () => window.removeEventListener('openPaymentPolicy', handleOpenPolicy);
  }, []);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "I specialize in full-stack web development, including React.js, Node.js, and modern UI/UX design with responsive, interactive interfaces."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timeline varies by scope, but most projects range from 2-6 weeks. I provide detailed estimates after our initial consultation."
    },
    {
      question: "Do you work with specific technologies?",
      answer: "Yes, I primarily work with React.js, Next.js, TypeScript, Tailwind CSS, Node.js, and various databases. I'm always open to discussing the best tech stack for your specific needs."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach me via this chat, email, or WhatsApp at +234 902 723 5106. I typically respond within 24 hours."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setView('faq');
      setOpenQuestion(null);
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="floating-chat-btn"
        aria-label="Open FAQ"
      >
        <IoChatbubbleEllipsesOutline className="chat-icon" />
        
        {showTooltip && (
          <span className="chat-tooltip animate-tooltip">
            Need help?
          </span>
        )}
      </button>

      {isOpen && (
        <div className="chat-overlay animate-fade-in" onClick={handleClose}>
          <div className="chat-modal animate-slide-up" onClick={(e) => e.stopPropagation()}>
            
            <div className="chat-header">
              <div className="chat-header-text">
                {view === 'policy' && (
                  <button 
                    className="chat-back-btn"
                    onClick={() => setView('faq')}
                    aria-label="Back to FAQ"
                  >
                    <IoArrowBack />
                  </button>
                )}
                <h2>{view === 'faq' ? 'FAQ' : 'Payment Policy'}</h2>
                <p>
                  {view === 'faq' 
                    ? 'Click a question to see the answer' 
                    : 'Flexible payment plans for your project'}
                </p>
              </div>
              <button 
                className="chat-close-btn"
                onClick={handleClose}
                aria-label="Close"
              >
                <IoClose className="close-icon" />
              </button>
            </div>
            
            <div className="chat-body">
              
              {view === 'faq' ? (
                <>
                  <div className="faq-list">
                    {faqData.map((faq, index) => (
                      <div key={index} className="faq-item">
                        <button
                          className={`faq-question ${openQuestion === index ? 'active' : ''}`}
                          onClick={() => toggleQuestion(index)}
                          aria-expanded={openQuestion === index}
                        >
                          <span className="faq-num">{index + 1}</span>
                          <span className="faq-q-text">{faq.question}</span>
                          <IoChevronDown className={`faq-arrow ${openQuestion === index ? 'rotate' : ''}`} />
                        </button>
                        
                        <div className={`faq-answer-box ${openQuestion === index ? 'open' : ''}`}>
                          <p className="faq-answer-text">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="policy-trigger">
                    <p>Wondering about pricing?</p>
                    <button 
                      className="policy-trigger-btn"
                      onClick={() => setView('policy')}
                    >
                      <IoWallet className="policy-trigger-icon" />
                      View Payment Options
                    </button>
                  </div>
                  
                  <div className="chat-cta">
                    <p className="chat-cta-text">Still have questions?</p>
                    <a 
                      href="https://wa.me/2349027235106?text=Hello%20Dave,%20I%20have%20some%20questions%20about%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chat-whatsapp-btn"
                    >
                      <IoChatbubbleEllipsesOutline className="whatsapp-icon" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="policy-content">
                    <p className="policy-intro">
                      Every project is unique. I offer structured payment plans to make 
                      quality web development accessible for Nigerian businesses.
                    </p>

                    <div className="installment-options">
                      <div className="install-card">
                        <div className="install-header">
                          <IoCalendar className="install-icon" />
                          <h3>2-Payment Plan</h3>
                        </div>
                        <ul>
                          <li><strong>50% upfront</strong> — Required before project start</li>
                          <li><strong>50% on completion</strong> — due before website launch</li>
                        </ul>
                        <span className="install-badge">Most Popular</span>
                      </div>

                      <div className="install-card">
                        <div className="install-header">
                          <IoCalendar className="install-icon" />
                          <h3>3-Payment Plan</h3>
                        </div>
                        <ul>
                          <li><strong>40% upfront</strong> — required before project begins</li>
                          <li><strong>35% mid-project</strong> — due before development continues</li>
                          <li><strong>25% on delivery</strong> — due before Final delivery</li>
                        </ul>
                      </div>

                      <div className="install-card">
                        <div className="install-header">
                          <IoCalendar className="install-icon" />
                          <h3>Monthly Plan</h3>
                        </div>
                        <ul>
                          <li><strong>Spread over 3-6 months</strong></li>
                          <li>Small setup fee to begin</li>
                          <li>Includes hosting & maintenance</li>
                        </ul>
                        <span className="install-badge premium">Premium Projects</span>
                      </div>
                    </div>

                    <div className="policy-guarantees">
                      <div className="guarantee">
                        <IoShieldCheckmark />
                        <span>Fee for Hosting and Domain is included</span>
                      </div>
                      <div className="guarantee">
                        <IoShieldCheckmark />
                        <span>No hidden fees — all costs discussed upfront</span>
                      </div>
                      <div className="guarantee">
                        <IoShieldCheckmark />
                        <span>Bank transfer, USSD, or Paystack accepted</span>
                      </div>
                    </div>

                    <div className="policy-cta">
                      <p>Ready to discuss your project budget?</p>
                      <a 
                        href="https://wa.me/2349027235106?text=Hello%20good%20day,%20I%27d%20like%20to%20get%20a%20quotation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chat-whatsapp-btn"
                      >
                        <IoChatbubbleEllipsesOutline className="whatsapp-icon" />
                        Get Custom Quote
                      </a>
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;