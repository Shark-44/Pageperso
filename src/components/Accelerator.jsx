import { useState } from 'react';
import './Accelerator.css';

function Accelerator() {
  const [animationIndex, setAnimationIndex] = useState(3);


  const handleUpClick = () => {
    if (animationIndex > 1) {
      setAnimationIndex(animationIndex - 1);
    }
  };

  const handleDownClick = () => {
    if (animationIndex < 5) {
      setAnimationIndex(animationIndex + 1);
    }
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

export default Accelerator;
