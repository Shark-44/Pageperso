import React, { useEffect, useRef } from 'react';
import "./Cubecomponent.css";

const CubeComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const zValues = [-3, -2, -1, 0, 1, 2, 3];
    const container = containerRef.current;

    // Assurer que le conteneur est vide 
    container.innerHTML = '';

    zValues.forEach(z => {
      const outerDiv = document.createElement('div');
      outerDiv.classList.add('cube');
      outerDiv.style.setProperty('--z', z);

      for (let x = -3; x <= 3; x++) {
        const innerDiv = document.createElement('div');
        innerDiv.style.setProperty('--x', x);
        innerDiv.style.setProperty('--y', 0);

        const span = document.createElement('span');
        span.style.setProperty('--i', 3);

        innerDiv.appendChild(span);
        outerDiv.appendChild(innerDiv);
      }

      container.appendChild(outerDiv);
    });

    function activeRandomCube() {
      const spans = document.querySelectorAll('.cube span');
      setInterval(() => {
        const randomIndex = Math.floor(Math.random() * spans.length);
        const randomSpan = spans[randomIndex];

        randomSpan.classList.add('active');

        setTimeout(() => {
          randomSpan.classList.remove('active');
        }, 2000);
      }, 500);
    }

    activeRandomCube(); 
  }, []); 

  return <div className="container" ref={containerRef}></div>;
};

export default CubeComponent;
