import { useState } from 'react';
import PropTypes from 'prop-types'
import './Accelerator.css';

function Accelerator({currentIndex, setCurrentIndex, vitesse}) {
  const [animationIndex, setAnimationIndex] = useState(3);


  const handleUpClick = () => {
    if (animationIndex > 1) {
      setAnimationIndex(animationIndex - 1);
    }
    setCurrentIndex((currentIndex + 1) % vitesse.length)
  };

  const handleDownClick = () => {
    if (animationIndex < 5) {
      setAnimationIndex(animationIndex + 1);
    }
    setCurrentIndex((currentIndex - 1 + vitesse.length) % vitesse.length);
  };

  return (
    <div className="contenairaccelerator">
      <div className="up" onClick={handleUpClick}></div>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`indicator n${i + 1} ${animationIndex === i + 1 ? 'active' : ''}`}
        >
          {String.fromCharCode(97 + i)} {/* 'a' + i */}
        </div>
      ))}
      <div className="down" onClick={handleDownClick}></div>
    </div>
  );
}

Accelerator.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    setCurrentIndex: PropTypes.func.isRequired,
    vitesse: PropTypes.array.isRequired,
  }

export default Accelerator;
