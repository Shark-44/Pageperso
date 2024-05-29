import "./MouseTracker.css";
import { useState, useEffect } from 'react';
import Thesvg from './Thesvg';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('');
  const [speed, setSpeed] = useState('');
  const [lastTime, setLastTime] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  /* Pour cacher la scroolbar*/
  useEffect(() => {
    document.body.classList.add('hide-scrollbar');
    return () => {
      document.body.classList.remove('hide-scrollbar');
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const now = Date.now();
      const timeDiff = now - lastTime;
      const distX = x - position.x;
      const distY = y - position.y;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

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
      } else {
        setSpeed(''); // Reset speed if timeDiff is 0
      }

      const newTimeoutId = setTimeout(() => {
        setDirection('');
        setSpeed('');
      }, 100); // Adjust the delay as needed

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener('mousemove', handleMouseMove);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [position, lastTime, timeoutId]);

  return (
    <div className='ListenMouse'>

      <Thesvg direction={direction} speed={speed} />
    </div>
  );
};

export default MouseTracker;
