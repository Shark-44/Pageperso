
import  { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Horiscroll from "../components/Horiscroll";
import Transvideo from "../components/Transvideo";
import "./Nature.css";

function Nature() {
    const alphabetUIRef = useRef();

    useEffect(() => {

        const createScrollTriggers = () => {
            gsap.registerPlugin(ScrollTrigger);

            const listItems = document.querySelectorAll(".inner_listing");

            listItems.forEach((item) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 50%",
              end: "bottom 60%",

                    onEnter: () => {
                        const text = item.getAttribute('data-text');
                        gsap.set(alphabetUIRef.current, { textContent: text });
                    },
                    onEnterBack: () => {
                        const text = item.getAttribute('data-text');
                        gsap.set(alphabetUIRef.current, { textContent: text });
                    },
                });
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contenairtest",
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                },
            });
    
            tl.to(".alphabet_ui", { opacity: 0, duration: 0.2 });
        };


       
        const timeoutId = setTimeout(() => {
            createScrollTriggers();
        }, 80);


        return () => clearTimeout(timeoutId);
        
    }, []);

    return (
        <div className="contenairEffet">
            <Navbar />
            <div className="contenairimage">
                <h4 className="alphabet_ui" ref={alphabetUIRef}></h4>
                <div className="listop">
                    <div className="inner_listing" id="b1" data-text="Dauphin"></div>
                    <div className="inner_listing" id="b2" data-text="Tortue"></div>
                    <div className="inner_listing" id="b3" data-text="Poisson"></div>
                </div>
            </div>
            <div className="contenairtest">
                <h2>Cette page</h2>
                <p>Comme la page <a href="https://www.apple.com/fr/apple-tv-4k/" target="_blank" rel="noreferrer" >Apple TV 4K </a>, j&apos;ai voulu travailler sur une section a travers GSAP Scrolltrigger. Je n&apos;ai pas enclenché de vidéo mais joué sur des textes.<br />
                Ainsi de comprendre des mécanismes et continuer a développer. Actualiser la page pour que les effets fonctionnent, je cherche une solution</p>
                <Horiscroll />
                <p> 2iéme effet Je n&apos;ai pas ajouté d&apos;images mais je les ai symbolisées par des rectangles</p>
            </div>
            <div className="contenairevideotrans">
            <p>Je travaille sur ce 3ieme effet de la video diminuant et que je vais passer par une image</p>
                <Transvideo />
                
            </div>
        </div>
    );
}

export default Nature;