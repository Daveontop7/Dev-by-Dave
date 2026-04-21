import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return React.createElement('div', 
    { className: `preloader ${isExiting ? 'exit' : ''}` },
    React.createElement('div', { className: 'preloader-content' },
      // Logo spinner
      React.createElement('div', { className: 'logo-spinner' },
        React.createElement('img', { 
          src: '/logo.png', 
          alt: 'Dev by Dave',
          className: 'spinner-logo-img'
        }),
        React.createElement('svg', 
          { 
            className: 'spinner-ring-svg',
            viewBox: '0 0 100 100'
          },
          React.createElement('circle', {
            className: 'spinner-ring',
            cx: '50',
            cy: '50',
            r: '45',
            fill: 'none',
            stroke: 'url(#gradient)',
            strokeWidth: '3',
            strokeLinecap: 'round',
            strokeDasharray: '283',
            strokeDashoffset: 283 - (283 * progress) / 100
          }),
          React.createElement('defs', null,
            React.createElement('linearGradient', {
              id: 'gradient',
              x1: '0%',
              y1: '0%',
              x2: '100%',
              y2: '100%'
            },
              React.createElement('stop', { offset: '0%', stopColor: '#3b82f6' }),
              React.createElement('stop', { offset: '100%', stopColor: '#8b5cf6' })
            )
          )
        )
      ),
      // Loading text
      React.createElement('div', { className: 'loading-text' },
        React.createElement('span', null, 'Loading'),
        React.createElement('span', { className: 'dots' },
          React.createElement('span', null, '.'),
          React.createElement('span', null, '.'),
          React.createElement('span', null, '.')
        )
      ),
      // Progress bar
      React.createElement('div', { className: 'progress-bar' },
        React.createElement('div', {
          className: 'progress-fill',
          style: { width: `${Math.min(progress, 100)}%` }
        })
      ),
      // Progress text
      React.createElement('span', { className: 'progress-text' }, 
        `${Math.min(Math.round(progress), 100)}%`
      )
    ),
    // Background glow
    React.createElement('div', { className: 'bg-glow' })
  );
};

export default Preloader;