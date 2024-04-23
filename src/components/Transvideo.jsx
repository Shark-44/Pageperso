import "./Transvideo.css"

import Videotrans from "./Videotrans";

import  { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Transvideo () {
    const containerTRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  

      gsap.to(containerTRef.current.querySelector('.t1'), {
        scale: 0.5,
        duration: 3,
        scrollTrigger: {
            trigger: containerTRef.current,
            toggleActions: "restart reverse play reverse",
            start: "top -10%",
            end: "bottom -20%",
            scrub: true,
            markers: true,
            pin: true,
              
        }
    });
  
 
    }, []);
    return (
        <div className="transition" ref={containerTRef} >
            <div className="trans t1">
                <Videotrans />
            </div>
            <div className="trans t2" >Je travaille sur ce 3ieme effet de la video diminuant et que je vais passer par une image</div>
        </div>

    )

}
export default Transvideo;