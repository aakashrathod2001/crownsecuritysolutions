'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './CoolWebsite.module.scss';

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CoolWebsite: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mouseParticles, setMouseParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  // Initialize background particles
  useEffect(() => {
    const backgroundParticles: Particle[] = [];
    for (let i = 0; i < 10; i++) {
      backgroundParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    setParticles(backgroundParticles);
  }, []);

  // Handle mouse move for interactive particles
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newParticle: Particle = {
      id: particleIdRef.current++,
      x,
      y,
    };

    setMouseParticles(prev => [...prev, newParticle]);

    // Remove particle after animation
    setTimeout(() => {
      setMouseParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
  };

  const handleStartBuilding = () => {
    alert('Ready to build something amazing!');
  };

  const words = ["Let's", "Develop", "The", "Cool", "Website"];

  return (
    <div 
      className={styles.container} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background particles */}
      <div className={styles.particles}>
        {particles.map((particle, index) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              animationDelay: `${index}s`,
              animationDuration: `${8 + (index % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follow particles */}
      <div className={styles.mouseParticles}>
        {mouseParticles.map(particle => (
          <div
            key={particle.id}
            className={styles.mouseParticle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.mainText}>
          {words.map((word, index) => (
            <span
              key={index}
              className={styles.word}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        
        <p className={styles.subtitle}>
          Transform your ideas into digital reality
        </p>
        
        <button 
          className={styles.ctaButton}
          onClick={handleStartBuilding}
          type="button"
        >
          Start Building
        </button>
      </div>

      {/* Optional: Add a gradient overlay for better text readability */}
      <div className={styles.gradientOverlay} />
    </div>
  );
};

export default CoolWebsite;