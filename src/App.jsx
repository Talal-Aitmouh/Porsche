import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import imageSrc from './assets/logo.png';
import Porsche from './assets/porsche1.png';
import back from './assets/back.jpeg';
import inter from './assets/inter.jpg';
import road from './assets/road.jpg';
import './App.css';


const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = targetNumber / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(counter);
        start = targetNumber;
      }
      setCount(Math.round(start));
    }, 10);

    return () => clearInterval(counter);
  }, [targetNumber]);

  return <span className="value">{count}</span>;
};


Counter.propTypes = {
  targetNumber: PropTypes.number.isRequired, 
};



const CarShowcase = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, duration: 1 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, type: 'spring', stiffness: 50 }
    })
  };

  const galleryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.3, duration: 1, ease: 'easeInOut' }
    })
  };

  return (
    <div className="car-showcase">
      <header className="header">
        <motion.img
          src={imageSrc}
          alt="Porsche Logo"
          className="logo"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        />
        <nav className="nav">
          <ul>
            {['Highlights', 'Design', 'Performance', 'Charging', 'Configure'].map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
        <button className="test-drive-button">Test Drive</button>
      </header>

      <div className="hero-section">
        <div className="gallery-section">
          {[road, inter, back].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
              custom={index}
              variants={galleryVariants}
              initial="hidden"
              animate="visible"
            />
          ))}
        </div>
        <motion.img
          src={Porsche}
          alt="Porsche Taycan"
          className="car-image"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        />
      </div>

      <div className="details-section">
      <div className="car-info">
        <h2>Porsche</h2>
        <h3>TAYCAN Turbo S</h3>
      </div>
      <div className="performance-info">
        <div className="performance-item">
          <span className="label">WLTP</span>
          <Counter targetNumber={412} />
          <span>km</span>
        </div>
        <div className="performance-item">
          <span className="label">0-100Km/h</span>
          <Counter targetNumber={2.8} />
          <span>s</span>
        </div>
        <div className="performance-item">
          <span className="label">HP</span>
          <Counter targetNumber={560} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CarShowcase;
