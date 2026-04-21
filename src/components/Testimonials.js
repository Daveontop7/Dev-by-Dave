import React, { useState } from 'react';
import "./Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    { name: "Jennifer Martinez", role: "CEO, TechStart Inc.", text: "Dev by Dave transformed our outdated website into a modern, high-converting machine...", rating: 5, initials: "JM", color: "#3b82f6" },
    { name: "Robert Kim", role: "Founder, DesignHub", text: "Working with Dave was a breeze. He understood our vision perfectly...", rating: 5, initials: "RK", color: "#8b5cf6" },
    { name: "Sarah Lee", role: "CTO, Innovate Corp", text: "Dave built us a complex web application that streamlined our entire workflow...", rating: 5, initials: "SL", color: "#6366f1" },
    { name: "Oluwaseun Adeyemi", role: "CEO, NaijaTech Solutions", text: "Dave's expertise in React and modern web technologies is unmatched...", rating: 4.5, initials: "OA", color: "#10b981" },
    { name: "Chiamaka Okonkwo", role: "Founder, Lagos Fashion Hub", text: "From concept to launch, Dave handled our e-commerce platform with incredible skill...", rating: 5, initials: "CO", color: "#f59e0b" },
    { name: "Emmanuel Thompson", role: "Director, Thompson Logistics", text: "Dave created a custom logistics tracking system that revolutionized how we manage deliveries...", rating: 4, initials: "ET", color: "#ef4444" },
    { name: "Ngozi Obi", role: "CTO, HealthFirst Africa", text: "Our telemedicine platform required complex real-time features...", rating: 5, initials: "NO", color: "#ec4899" },
    { name: "David Mitchell", role: "Product Manager, CloudScale", text: "Dave's full-stack capabilities saved us from hiring multiple developers...", rating: 4.5, initials: "DM", color: "#06b6d4" },
    { name: "Abdulrahman Ibrahim", role: "Founder, HalalPay", text: "We needed a payment gateway compliant with Islamic finance principles...", rating: 5, initials: "AI", color: "#84cc16" },
    { name: "Victoria Chen", role: "Marketing Director, GlobalBrands", text: "Dave redesigned our corporate website and the results speak for themselves...", rating: 4, initials: "VC", color: "#a855f7" },
    { name: "Olumide Bakare", role: "CEO, EduTech Nigeria", text: "Our learning management system handles 50,000+ students thanks to Dave's scalable architecture...", rating: 4.5, initials: "OB", color: "#14b8a6" },
    { name: "Grace Wellington", role: "Operations Head, SwiftRetail", text: "Dave integrated our inventory system with Shopify, Amazon, and our physical stores...", rating: 5, initials: "GW", color: "#f97316" },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.ceil(reviews.length / cardsPerView) - 1;

  const goToNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const goToPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="testimonials-tag">
            <span></span> TESTIMONIALS <span></span>
          </div>
          <h2>What Clients <span>Say</span></h2>
          <p>Don't just take my word for it — here's what my clients have to say.</p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-arrow prev" onClick={goToPrev} disabled={currentIndex === 0}>
            ‹
          </button>
          
          <div className="carousel-viewport">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
              {reviews.map((review, i) => (
                <div className="review-card" key={i}>
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
              ))}
            </div>
          </div>

          <button className="carousel-arrow next" onClick={goToNext} disabled={currentIndex >= maxIndex}>
            ›
          </button>
        </div>

        <div className="carousel-pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} className={`pagination-dot ${currentIndex === i ? 'active' : ''}`} onClick={() => setCurrentIndex(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;