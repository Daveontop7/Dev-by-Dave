import React, { useState, useEffect, useRef } from 'react';
import "./Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const viewportRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) setCardsPerView(1);
      else if (window.innerWidth <= 968) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 useEffect(() => {
  const maxIndex = Math.ceil(reviews.length / cardsPerView) - 1;

  if (currentIndex > maxIndex) {
    setCurrentIndex(maxIndex);

    if (viewportRef.current) {
      viewportRef.current.scrollTo({
        left: maxIndex * viewportRef.current.offsetWidth,
        behavior: 'auto'
      });
    }
  }
}, [cardsPerView, currentIndex, reviews.length]);

  const handleScroll = () => {
    if (viewportRef.current) {
      const scrollLeft = viewportRef.current.scrollLeft;
      const width = viewportRef.current.offsetWidth;
      const maxIndex = Math.ceil(reviews.length / cardsPerView) - 1;
      const newIndex = Math.min(Math.round(scrollLeft / width), maxIndex);
      setCurrentIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: viewportRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const goToPrev = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: -viewportRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const goToPage = (index) => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo({ left: index * viewportRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          <span className="half-left">★</span>
          <span className="half-right">☆</span>
        </span>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    return stars;
  };

  const reviews = [
    { name: "Jennifer Martinez", role: "CEO, TechStart Inc.", text: "Dev by Dave transformed our outdated website into a modern, high-converting machine. Our online sales increased by 150% within the first quarter. Absolutely incredible work!", rating: 5, initials: "JM", color: "#3b82f6" },
    { name: "Robert Kim", role: "Founder, DesignHub", text: "Working with Dave was a breeze. He understood our vision perfectly and delivered a website that exceeded all expectations. Professional, timely, and incredibly talented.", rating: 5, initials: "RK", color: "#8b5cf6" },
    { name: "Sarah Lee", role: "CTO, Innovate Corp", text: "Dave built us a complex web application that streamlined our entire workflow. The code quality is exceptional, and he's always available for support. Highly recommend!", rating: 5, initials: "SL", color: "#6366f1" },
    { name: "Oluwaseun Adeyemi", role: "CEO, NaijaTech Solutions", text: "Dave's expertise in React and modern web technologies is unmatched. He delivered our platform ahead of schedule and the performance is outstanding.", rating: 4.5, initials: "OA", color: "#10b981" },
    { name: "Chiamaka Okonkwo", role: "Founder, Lagos Fashion Hub", text: "From concept to launch, Dave handled our e-commerce platform with incredible skill. Sales are up and our customers love the new experience.", rating: 5, initials: "CO", color: "#f59e0b" },
    { name: "Emmanuel Thompson", role: "Director, Thompson Logistics", text: "Dave created a custom logistics tracking system that revolutionized how we manage deliveries. Real-time updates and clean UI made all the difference.", rating: 4, initials: "ET", color: "#ef4444" },
    { name: "Ngozi Obi", role: "CTO, HealthFirst Africa", text: "Our telemedicine platform required complex real-time features. Dave implemented video consultations and patient records flawlessly. Truly impressive work.", rating: 5, initials: "NO", color: "#ec4899" },
    { name: "David Mitchell", role: "Product Manager, CloudScale", text: "Dave's full-stack capabilities saved us from hiring multiple developers. He built our SaaS dashboard end-to-end with React, Node, and PostgreSQL.", rating: 4.5, initials: "DM", color: "#06b6d4" },
    { name: "Abdulrahman Ibrahim", role: "Founder, HalalPay", text: "We needed a payment gateway compliant with Islamic finance principles. Dave researched the requirements and built a secure, compliant solution.", rating: 5, initials: "AI", color: "#84cc16" },
    { name: "Victoria Chen", role: "Marketing Director, GlobalBrands", text: "Dave redesigned our corporate website and the results speak for themselves. Bounce rate dropped by 40% and lead generation doubled in two months.", rating: 4, initials: "VC", color: "#a855f7" },
    { name: "Olumide Bakare", role: "CEO, EduTech Nigeria", text: "Our learning management system handles 50,000+ students thanks to Dave's scalable architecture. Zero downtime during peak exam periods.", rating: 4.5, initials: "OB", color: "#14b8a6" },
    { name: "Grace Wellington", role: "Operations Head, SwiftRetail", text: "Dave integrated our inventory system with Shopify, Amazon, and our physical stores. Inventory sync happens in real-time across all channels.", rating: 5, initials: "GW", color: "#f97316" },
  ];

  const maxIndex = Math.ceil(reviews.length / cardsPerView) - 1;

  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="testimonials-tag">
            <span className="line"></span>
            <span className="text">TESTIMONIALS</span>
            <span className="line"></span>
          </div>
          <h2>What Clients <span>Say</span></h2>
          <p>Don't just take my word for it — here's what my clients have to say about working with me.</p>
        </div>

        <div className="testimonials-carousel">
          <button 
            className="carousel-arrow prev" 
            onClick={goToPrev} 
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          
          <div 
            className="carousel-viewport" 
            ref={viewportRef}
            onScroll={handleScroll}
          >
            <div className="carousel-track">
              {reviews.map((review, i) => (
                <div className="review-card" key={i}>
                  <div className="review-card-inner">
                    <div className="review-stars">{renderStars(review.rating)}</div>
                    <p className="review-text">"{review.text}"</p>
                    <div className="review-author">
                      <div className="author-avatar" style={{ backgroundColor: review.color }}>
                        {review.initials}
                      </div>
                      <div className="author-details">
                        <strong>{review.name}</strong>
                        <span>{review.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-arrow next" 
            onClick={goToNext} 
            disabled={currentIndex >= maxIndex}
          >
            ›
          </button>
        </div>

        <div className="carousel-pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button 
              key={i} 
              className={`pagination-dot ${currentIndex === i ? 'active' : ''}`} 
              onClick={() => goToPage(i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;