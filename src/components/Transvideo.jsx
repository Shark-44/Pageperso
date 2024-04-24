import "./Transvideo.css"
import aquarium from "../assets/images/aquarium.webp"

import Videotrans from "./Videotrans";

import  { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Transvideo () {
    const containerTRef = useRef(null);
    const [scaleValue, setScaleValue] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const scaleValue = window.innerWidth * 0.6 / 100;
        setScaleValue(scaleValue);

        gsap.set(".transt1", { scale: 1 });
        gsap.set(".transt2", { y: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerTRef.current,
                toggleActions: "restart reverse play reverse",
                start: "top -20px",
                end: "bottom 20px",
                scrub: true,
                pin: true,
            }
        });


        tl.from(".transt1", {scale: scaleValue});
        tl.to(".transt2", {y: -725});

    }, []);

    return (
        <div className="transition" ref={containerTRef} >
            <div className="transt1">
                <Videotrans />
            </div>
            <div className="transt2" ><img src={aquarium} alt="" style={{ width: `${scaleValue}px` }}/></div>
        </div>

    )

}
export default Transvideo;