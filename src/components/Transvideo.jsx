import "./Transvideo.css"
import aquarium from "../assets/images/aquarium.webp"

import Videotrans from "./Videotrans";

import  { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Transvideo () {
    const containerTRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  

   gsap.to(containerTRef.current.querySelector('.transt1'), {
        scale: 0.5,
        duration: 3,
        scrollTrigger: {
            trigger: containerTRef.current,
            toggleActions: "restart reverse play reverse",
            start: "top -20px",
            end: "bottom 20px",
            scrub: true,
            pin: true,
        }
        });  
        gsap.to(containerTRef.current.querySelector('.transt2'), {
            y: -820,
            scrollTrigger: {
                trigger: containerTRef.current,
                start: "bottom 20px",
                end: "bottom 5px",
                scrub: true,
               }
            });  
 
    }, []);
    return (
        <div className="transition" ref={containerTRef} >
            <div className="transt1">
                <Videotrans />
            </div>
            <div className="transt2" ><img src={aquarium} alt="" /></div>
        </div>

    )

}
export default Transvideo;