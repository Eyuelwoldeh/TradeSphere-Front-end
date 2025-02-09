import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Trade Platform</h1>
        <p className="hero-subtitle">
          Connect, Trade, and Manage your trades in one place. Get started today!
        </p>
        <a href="/login" className="cta-btn">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;