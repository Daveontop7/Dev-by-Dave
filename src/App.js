import React, { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('preloaderSeen');
    
    if (!hasSeenPreloader) {
      setIsLoading(true);
      sessionStorage.setItem('preloaderSeen', 'true');
    }
  }, []);

  return (
    <div className="app">
      
      <Helmet>
  <title>Dev by Dave | Frontend Developer</title>

  <meta
    name="description"
    content="Dev by Dave is a frontend developer building fast, responsive, and visually engaging React web applications."
  />

  <meta property="og:title" content="Dev by Dave | Frontend Developer" />
  <meta
    property="og:description"
    content="I build fast, modern, and responsive web applications using React."
  />
  <meta property="og:image" content="/logo.png" />
  <meta
    property="og:url"
    content="https://your-project-name.vercel.app"
  />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dev by Dave | Frontend Developer" />
  <meta
    name="twitter:description"
    content="Frontend developer building modern React applications."
  />
  <meta name="twitter:image" content="/logo.png" />
</Helmet>

      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}
      
      <div className={`main-content ${!isLoading ? 'visible' : 'hidden'}`}>
        <Navbar />
        <Hero isLoading={isLoading} />
        <About />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      
      {!isLoading && <FloatingChat />}
      
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 80,
          right: 20,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '16px 20px',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#3b82f6',
              secondary: '#0f172a',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#0f172a',
            },
          },
        }}
      />
    </div>
  );
}

export default App;