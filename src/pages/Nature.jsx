import "./Nature.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Nature() {
    function changeH4Content(boxIndex) {
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
    
          ScrollTrigger.create({
            trigger: box,
            markers: true,
            start: "top 30%",
            /*end: "top 50%",*/
            onEnter: () => changeH4Content(index + 1),
            onLeaveBack: () => {
              if (index - 1 >= 1) {
                changeH4Content(index - 1);
              }
              },
            });
          });
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
    </>
  );
}

export default Nature;
