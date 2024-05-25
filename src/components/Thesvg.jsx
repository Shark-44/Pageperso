
 import "./Thesvg.css"
 import  { useState } from 'react';
 function Thesvg () {
    const [isRect, setIsRect] = useState(false);
    const [isRect2, setIsRect2] = useState(false);
    const [isRect3, setIsRect3] = useState(false);
    const [isRect4, setIsRect4] = useState(false);
    const toggleClipPath = () => {
      setIsRect(!isRect);
    };
    const toggleClipPath2 = () => {
      setIsRect2(!isRect2);
    };
    const toggleClipPath3 = () => {
      setIsRect3(!isRect3);
    };
    const toggleClipPath4 = () => {
      setIsRect4(!isRect4);
    };
    var clipPathClass = 'clip-path';
    if (isRect) {
      clipPathClass += ' rect';
    } else if (isRect2) {
      clipPathClass += ' rect2';
    }
    else if (isRect3) {
      clipPathClass += ' rect3';
    }
    else if (isRect4) {
      clipPathClass += ' rect4';
    }
    return (
        <div className="thesvg">
                    <p>je continue mon travail sur le svg et cet approche me permet un resultat. Me reste a creer un composant svg qui sera à l&apos;ecoute du pointer <br />
        je veux intégrer une notion d&apos;arrêt et accéleration</p>
        <svg width="260" height="540" viewBox="0 0 260 540">
        <defs>
          <clipPath id="clipPath">
            <path
              className={clipPathClass}
              d="M20 90 Q125 90, 230 90  Q230 270, 230 450 C125 450, 20 450, 20 450 Q20 270, 20 90 Z"
              
            />
          </clipPath>
        </defs>
        <rect
          width="260"
          height="540"
          style={{ clipPath: 'url(#clipPath)', fill: 'lightblue' }}
        />
      </svg>
      <button onClick={toggleClipPath2}>Toggle Clip-Path up</button>
      <button onClick={toggleClipPath}>Toggle Clip-Path down</button>
      <button onClick={toggleClipPath3}>Toggle Clip-Path left</button>
      <button onClick={toggleClipPath4}>Toggle Clip-Path right</button>
      </div>
    )
 }
 export default Thesvg;