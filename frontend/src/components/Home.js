import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to SmartShea</h1>
        <p className="hero-text">
          Your personal AI-powered skin analysis tool that recommends the perfect naturally sourced
          shea butter products for your unique skin needs.
        </p>
        <div className="hero-buttons">
          <Link to="/skin-tester" className="primary-button">
            Try Skin Analyzer
          </Link>
          <Link to="/about" className="secondary-button">
            Learn More
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📷</div>
            <h3>Take a Photo</h3>
            <p>Upload or capture a photo of your skin in natural lighting</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>AI Analysis</h3>
            <p>Our advanced algorithm analyzes your skin characteristics</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Get Results</h3>
            <p>Receive your skin type assessment and detailed analysis</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛍️</div>
            <h3>Shea Butter Recommendations</h3>
            <p>Discover the perfect shea butter products for your skin</p>
          </div>
        </div>
      </div>
      
      <div className="benefits-section">
        <h2>The Power of Natural Shea Butter</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Deeply Moisturizing</h3>
            <p>Rich in vitamins A, E, and F, providing essential fatty acids and nutrients for your skin</p>
          </div>
          <div className="benefit-card">
            <h3>Anti-Inflammatory</h3>
            <p>Natural properties help reduce skin inflammation and soothe irritated skin</p>
          </div>
          <div className="benefit-card">
            <h3>Antioxidant Protection</h3>
            <p>Protects your skin from free radicals and environmental damage</p>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to find your perfect shea butter match?</h2>
        <Link to="/skin-tester" className="primary-button">
          Start Skin Analysis
        </Link>
      </div>
    </div>
  );
};

export default Home;