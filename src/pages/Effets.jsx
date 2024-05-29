import './Effets.css';
import { useState } from "react";
import Navbar from "../components/Navbar";

import MouseTracker from '../components/MouseTracker';

function Effets() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const updateMousePosition = (event) => {
    if (isHovered) {
      const currentMouseX = event.clientX;
      const currentMouseY = event.clientY;
      const currentTime = Date.now();

      if (mousePosition.x !== currentMouseX && mousePosition.y !== currentMouseY) {
         setMousePosition({ x: currentMouseX, y: currentMouseY, timestamp: currentTime });
      }
    }
  };


  return (
    <div className="contenairEffets">
      <Navbar />
      <div className="zone1">
      <p> A travers un site <a href="https://lanouvelle.agency/" target="_blank" rel="noreferrer">la nouvelle agency </a> je tente de travailler sur des effets. 
          <br /> Le premier effet est celui de faire apparaitre une image derrière un texte, puis que cette image suive le pointeur. 
          <br />j&apos;ai préféré commencer avec une zone hover + bordure pour avoir un repère. 
          <br />je ne mets pas d&apos;image mais un background color fait l&apos;affaire et un zindex pour être derrière la zone hover
          <br />onmouseenter et onmouseleave active une variable d&apos;état pour ma ternaire d&apos;affichage 
          <br /> et la condition pour enclencher le calcul de position de l&apos;image
          <br /> Enfin il y a un effet de déformation de l&apos;image suivant le sens de déplacement. Pour l&apos;instant j&apos;ai vu comment faire une bordure convexe,  
          <br /> mais une bordure concave serait une superposition d&apos;une ellipse. Utiliser clip-path? ou une fonction que je ne connais pas? 
          <br />Le SVG semble une solution, oui créer un composant SVG et tester les modifications de valeurs
      </p>

      <div
        className="zoneHover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={updateMousePosition}
      >ZONE HOVER
        
      </div>
      
      {isHovered && (
        <div
          className="imagehover"
          style={{
            top: mousePosition.y, 
            left: mousePosition.x,
          }}
        >
          <MouseTracker />
        </div>
      )}
      </div>       
    </div>
  );
}

export default Effets;

