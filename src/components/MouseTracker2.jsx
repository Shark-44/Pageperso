import "./MouseTracker.css"
import { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('');
  const [speed, setSpeed] = useState('');
  const [lastTime, setLastTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const now = Date.now();
      const timeDiff = now - lastTime;
      const distX = x - position.x;
      const distY = y - position.y;

      if (timeDiff > 0) {
        const distance = Math.sqrt(distX ** 2 + distY ** 2);
        const currentSpeed = distance / timeDiff;

        if (currentSpeed < 0.05) {
          setSpeed('slow');
        } else if (currentSpeed < 0.2) {
          setSpeed('medium');
        } else {
          setSpeed('fast');
        }

        if (Math.abs(distX) > Math.abs(distY)) {
          setDirection(distX > 0 ? 'right' : 'left');
        } else {
          setDirection(distY > 0 ? 'down' : 'up');
        }

        setPosition({ x, y });
        setLastTime(now);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [position, lastTime]);

  return (
    <div className='ListenMouse'>
      <p>Direction: {direction}</p>
      <p>Speed: {speed}</p>
    </div>
  );
};

export default MouseTracker;
