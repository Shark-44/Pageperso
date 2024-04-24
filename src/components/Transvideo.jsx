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

        gsap.set(".transt1", { scale: 0.6});
        gsap.set(".transt2", { y: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerTRef.current,
                toggleActions: "restart reverse play reverse",
                start: "top -10px",
                end: "bottom 20px",
                scrub: true,
                pin: true,
                markers:true,
            }
        });


        tl.from(".transt1", {scale: 1});
        tl.to(".transt2", {y: -725});

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