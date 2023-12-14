import "./Dockplanet.css"
import Jupiter from "../assets/space/Jupiter.webp"
import Mars from "../assets/space/Mars.webp"
import Mercure from "../assets/space/Mercure.webp"
import Terre from "../assets/space/Terre.webp"
import Venus from "../assets/space/Venus.webp"
import Soleil from "../assets/space/Soleil.webp"
import Uranus from "../assets/space/Uranus.webp"
import Neptune from "../assets/space/Neptune.webp"
import Pluton from "../assets/space/Pluton.webp"
import Saturne from "../assets/space/Saturne.webp"
function Dockplanet() {
    const planetImages =[
        {name:"Soleil",
        src: Soleil,},
        {name: "Mercure",
        src: Mercure,},
        {name: "Venus", 
        src: Venus,},
        {name: "Terre", 
        src: Terre,},
        {name: "Mars",
        src: Mars,},
        {name: "Jupiter",
        src: Jupiter,},
        {name: "Saturne",
        src: Saturne,},
        {name: "Uranus",
        src: Uranus,},
        {name: "Neptune",
        src: Neptune,},
        {name: "Pluton",
        src: Pluton,}
    ]

    const handleInfo = (i) => {
        console.info(i)
    } 
    return(
        <div className="contenairdock">
            {planetImages.map((planete, i) => {
                return (
                <div key={i} className={`Cardplanets n${i + 1}`} >
                     <p className="plantname">{planete.name}</p> 
                    <img src={planete.src} alt={planete.src} onClick={() => handleInfo(i)}/>
                </div>
        );
      })}
        </div>
    )

}
export default Dockplanet