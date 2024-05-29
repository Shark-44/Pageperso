import "./Thesvg.css";
import { useState, useEffect } from 'react';
import coreauxImage from '../assets/images/coreaux.jpg';
import PropTypes from 'prop-types';

function Thesvg({ direction, speed }) {
  const [isRect, setIsRect] = useState(false);
  const [isRect2, setIsRect2] = useState(false);
  const [isRect3, setIsRect3] = useState(false);
  const [isRect4, setIsRect4] = useState(false);

  useEffect(() => {
    if (!direction || !speed) {
      setIsRect(false);
      setIsRect2(false);
      setIsRect3(false);
      setIsRect4(false);
    } else {
      if (direction === 'up') {
        setIsRect2(true);
        setIsRect(false);
        setIsRect3(false);
        setIsRect4(false);
      } else if (direction === 'down') {
        setIsRect(true);
        setIsRect2(false);
        setIsRect3(false);
        setIsRect4(false);
      } else if (direction === 'left') {
        setIsRect3(true);
        setIsRect(false);
        setIsRect2(false);
        setIsRect4(false);
      } else if (direction === 'right') {
        setIsRect4(true);
        setIsRect(false);
        setIsRect2(false);
        setIsRect3(false);
      }
    }
  }, [direction, speed]);

  let clipPathClass = 'clip-path';
  if (isRect) {
    clipPathClass += ' rect';
  } else if (isRect2) {
    clipPathClass += ' rect2';
  } else if (isRect3) {
    clipPathClass += ' rect3';
  } else if (isRect4) {
    clipPathClass += ' rect4';
  }

  return (
    <div className="thesvg">

      <svg width="260" height="540" viewBox="0 0 260 540">
        <defs>
          <clipPath id="clipPath">
            <path
              className={clipPathClass}
              d="M20 90 Q125 90, 230 90  Q230 270, 230 450 C125 450, 20 450, 20 450 Q20 270, 20 90 Z"
            />
          </clipPath>
          <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="260" height="540">
          <image href={coreauxImage} x="0" y="0" width="260" height="540" />
          </pattern>
        </defs>
        <rect
          width="260"
          height="540"
          style={{ clipPath: 'url(#clipPath)', fill: 'url(#imagePattern)' }}
        />
      </svg>
    </div>
  );
}

Thesvg.propTypes = {
  direction: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
};

export default Thesvg;
