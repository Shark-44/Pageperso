import "./Nature.css";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Horiscroll from "../components/Horiscroll";
import Transvideo from "../components/Transvideo";

gsap.registerPlugin(ScrollTrigger);

function Nature() {
    function changeH4Content(boxIndex) {
        console.log(boxIndex);
        let newText = "";
        switch (boxIndex) {
            case 1:
                newText = "Dauphin";
                break;
            case 2:
                newText = "Tortue";
                break;
            case 3:
                newText = "Poisson";
                break;
            default:
                newText = "Dauphin";
        }
        document.querySelector(".box h4.text").textContent = newText;
    }

    useEffect(() => {
        changeH4Content(1);
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box, index) => {
            box.setAttribute("data-index", index + 1);

            ScrollTrigger.create({
                trigger: box,
                start: "top 40%",
                onEnter: () => {
                    const boxIndex = parseInt(box.getAttribute("data-index"));
                    changeH4Content(boxIndex);
                },
                onLeaveBack: () => {
                    const boxIndex = parseInt(box.getAttribute("data-index"));
                    if (boxIndex !== 1) {
                        changeH4Content(boxIndex - 1);
                    }
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

        tl.to(".text", { opacity: 0, duration: 0.2 });
    }, []);

    return (
        <>
            <Navbar />
            <div className="contenairimage">
                <div className="box b1">
                    <h4 className="text"></h4>
                </div>
                <div className="box b2"></div>
                <div className="box b3"></div>
            </div>
            <div className="contenairtest">
                <h2>Cette page</h2>
                <p>Comme la page <a href="https://www.apple.com/fr/apple-tv-4k/" target="_blank" rel="noreferrer" >Apple TV 4K </a>, j&apos;ai voulu travailler sur une section a travers GSAP Scrolltrigger. Je n&apos;ai pas enclenché de vidéo mais joué sur des textes.<br />
                Ainsi de comprendre des mécanismes et continuer a développer  </p>
              <Horiscroll />
              <p> 2iéme effet Je n&apos;ai pas ajouté d&apos;images mais je les ai symbolisées par des rectangles</p>
            </div>
            <div className="contenairevideotrans">
                <Transvideo />
            </div>
        </>
    );
}

export default Nature;
