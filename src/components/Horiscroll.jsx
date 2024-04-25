import "./Horiscroll.css"

import  { useRef, useEffect } from 'react';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Horiscroll () {
    const containerRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.to(containerRef.current.querySelector('.z1'), {
        x:-700,
        duration:3,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "restart reverse play reverse",
          start: "top 30%",
          end: "bottom -30px",
          scrub: true,
     
        }
      });
      gsap.to(containerRef.current.querySelector('.z3'), {
        x:-750,
        duration:3,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "restart reverse play reverse",
          start: "top 30%",
          end: "bottom -30px",
          scrub: true,
         
        }
      });
      gsap.to(containerRef.current.querySelector('.z2'), {
        x: 1400,
        duration: 3,
        scrollTrigger: {
            trigger: containerRef.current,
            toggleActions: "restart reverse play reverse",
            start: "top 30%",
            end: "bottom -30px",
            scrub: true,
      
        }
    });
  
 
    }, []);
    return (
        <div className="contenairehoriz" ref={containerRef}>
            <div className="zone z1" >
                <div className="zoneimage zi1">A</div>
                <div className="zoneimage zi2">B</div>
                <div className="zoneimage zi3">C</div>
                <div className="zoneimage zi4">D</div>
                <div className="zoneimage zi5">E</div>
                <div className="zoneimage zi6">F</div>
                <div className="zoneimage zi7">G</div>
                <div className="zoneimage zi8">H</div>
                <div className="zoneimage zi9">I</div>
                <div className="zoneimage zi10">J</div>
            </div>
            <div className="zone z2">
            <div className="zoneimage zi1">1</div>
                <div className="zoneimage zi2">2</div>
                <div className="zoneimage zi3">3</div>
                <div className="zoneimage zi4">4</div>
                <div className="zoneimage zi5">5</div>
                <div className="zoneimage zi6">6</div>
                <div className="zoneimage zi7">7</div>
                <div className="zoneimage zi8">8</div>
                <div className="zoneimage zi9">9</div>
                <div className="zoneimage zi10">10</div>
            </div>
            <div className="zone z3">
            <div className="zoneimage zi1"></div>
                <div className="zoneimage zi2"></div>
                <div className="zoneimage zi3"></div>
                <div className="zoneimage zi4"></div>
                <div className="zoneimage zi5"></div>
                <div className="zoneimage zi6"></div>
                <div className="zoneimage zi7"></div>
                <div className="zoneimage zi8"></div>
                <div className="zoneimage zi9"></div>
                <div className="zoneimage zi10">10</div>
            </div>
        </div>
    )
}
export default Horiscroll