import React from 'react';
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      img: "/ecommerce.png",
      tag: "E-Commerce",
      color: "#3b82f6",
      link: "https://shofy-fashion-ecommerce-client.vercel.app/#",
      tech: ["React.js", "Express.js", "Stripe"],
      desc: "A full-stack shopping experience with secure Stripe payments, cart management, and real-time inventory tracking."
    },
    {
      title: "Hotel Booking",
      img: "/hotel.png",
      tag: "Hotel Booking",
      color: "#14b8a6",
      link: "https://sigmora-theta.vercel.app/",
      tech: ["React.js", "Node.js", "MongoDB"],
      desc: "A beach resort reservation system featuring room availability search, booking calendar, and automated confirmation flows."
    },
    {
      title: "Crypto Exchange",
      img: "/opapay.png",
      tag: "Exchange",
      color: "#10b981",
      link: "https://opapay-frontend.vercel.app",
      tech: ["Next.js", "Tailwind", "CMS"],
      desc: "A high-performance crypto trading interface with live price feeds, wallet integration, and CMS-driven content management."
    },
    {
      title: "Fast Food Website",
      img: "/shoe haven.png",
      tag: "Food Ordering",
      color: "#0f766e",
      link: "https://mealsprint.vercel.app/",
      tech: ["React.js", "Express.js", "MongoDB"],
      desc: "A streamlined food ordering platform with dynamic menus, custom order builder, and real-time delivery status updates."
    },
    {
      title: "Shoemaker Website",
      img: "/burger.png",
      tag: "Business Website",
      color: "#3b82f6",
      link: "https://shoe-haven.vercel.app",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      desc: "An elegant brand storefront showcasing artisan footwear collections with responsive design and smooth product browsing."
    },
    {
      title: "Admin Dashboard",
      img: "/admin.png",
      tag: "Dashboard",
      color: "#db2777",
      link: "https://react-admin-dashboard-public.vercel.app",
      tech: ["React.js", "Express.js", "MongoDB"],
      desc: "A comprehensive analytics dashboard with data visualization, user role management, and CRUD operations for backend control."
    },
  ];

  return (
    <section className="portfolio" id="projects">
      <div className="portfolio-inner">
        <div className="portfolio-header">
          <div className="portfolio-tag">
            <span></span> PORTFOLIO <span></span>
          </div>
          <h2>Featured <span>Projects</span></h2>
          <p>A selection of my recent work showcasing custom web development.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="portfolio-card-link"
              key={index}
            >
              <div className="portfolio-card">
                <div className="portfolio-card-image">
                  <img src={project.img} alt={project.title} />
                  <span
                    className="portfolio-badge"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.tag}
                  </span>
                </div>
                <div className="portfolio-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="portfolio-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <button className="portfolio-btn" style={{ color: project.color }}>
                    View Project →
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;