import "./Transvideo.css";
import aquarium from "../assets/images/aquarium.webp";
import Videotrans from "./Videotrans";
import { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Transvideo() {
    const containerTRef = useRef(null);

    useEffect(() => {
        const createScrollTriggers = () => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.set(".transt1", { scale: 0.6 });
            gsap.set(".transt2", { yPercent: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerTRef.current,
                    toggleActions: "restart reverse play reverse",
                    start: "top -20px",
                    end: "bottom 20%",
                    scrub: true,
                    pin: true,
                }
            });

            tl.from(".transt1", { scale: 1 });
            tl.to(".transt2", { yPercent: -130 });
        };

        
        const timeoutId = setTimeout(() => {
            createScrollTriggers();
        }, 80);


        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="transition" ref={containerTRef}>
            <div className="transt1">
                <Videotrans />
            </div>
            <div className="transt2"><img src={aquarium} alt="" /></div>
        </div>
    );
}

export default Transvideo;
