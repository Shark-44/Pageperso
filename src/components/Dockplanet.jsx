import "./Dockplanet.css"
import Jupiter from "../assets/space/Jupiter.webp"
import Mars from "../assets/space/Mars.webp"
import Mercure from "../assets/space/Mercure.webp"
import Saturne from "../assets/space/Saturne.webp"
import Terre from "../assets/space/Terre.webp"
import Venus from "../assets/space/Venus.webp"
import Soleil from "../assets/space/Soleil.webp"
import Uranus from "../assets/space/Uranus.webp"
import Neptune from "../assets/space/Neptune.webp"
import Pluton from "../assets/space/Pluton.webp"
function Dockplanet() {
    const planetImages =[Soleil, Mercure, Venus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune, Pluton ]

    const handleInfo = (i) => {
        console.info(i)
    } 
    return(
        <div className="contenairdock">
            {planetImages.map((imagePath, i) => {
                const imageName = imagePath.split('/').pop().split('.')[0];

            return (
                <div key={i} className={`Cardplanets n${i + 1}`} >
                     <p className="plantname">{imageName}</p> 
                    <img src={imagePath} alt={imageName} onClick={() => handleInfo(i)}/>
                </div>
        );
      })}
        </div>
    )

}
export default Dockplanet