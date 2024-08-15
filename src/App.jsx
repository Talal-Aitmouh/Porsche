import React from 'react';
import imageSrc from './assets/logo.png';
import './App.css';

const CarShowcase = () => {
  return (
    <div className="car-showcase">
      <header className="header">
        <img src={imageSrc} alt="Porsche Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li>Highlights</li>
            <li>Design</li>
            <li>Performance</li>
            <li>Charging</li>
            <li>Configure</li>
          </ul>
        </nav>
        <button className="test-drive-button">Test Drive</button>
      </header>

      <div className="hero-section">
        <h1 className="model-name">TAYCAN</h1>
        <img src="https://via.placeholder.com/1200x600" alt="Porsche Taycan" className="car-image" />
      </div>

      <div className="details-section">
        <div className="car-info">
          <h2>Porsche</h2>
          <h3>TAYCAN Turbo S</h3>
        </div>
        <div className="performance-info">
          <div className="performance-item">
            <span className="label">WLTP</span>
            <span className="value">412km</span>
          </div>
          <div className="performance-item">
            <span className="label">0-100Km/h</span>
            <span className="value">2.8s</span>
          </div>
          <div className="performance-item">
            <span className="label">HP</span>
            <span className="value">560</span>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <img src="https://via.placeholder.com/200x150" alt="Gallery Image 1" className="gallery-image" />
        <img src="https://via.placeholder.com/200x150" alt="Gallery Image 2" className="gallery-image" />
        <img src="https://via.placeholder.com/200x150" alt="Gallery Image 3" className="gallery-image" />
      </div>
    </div>
  );
};

export default CarShowcase;
