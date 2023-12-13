import PropTypes from 'prop-types'
import Sun from './Sun'
import Planet from './Plantes'
import "./SolarSystem.css"
import Jupiter from "../assets/space/Jupiter.webp"
import Mars from "../assets/space/Mars.webp"
import Mercure from "../assets/space/Mercure.webp"
import Saturne from "../assets/space/Saturne.webp"
import Terre from "../assets/space/Terre.webp"
import Venus from "../assets/space/Venus.webp"


const SolarSystem = ({vitesse}) => {
  
  return (
    <div className="solar-system">
      <Sun />
      <Planet name="Mercure" orbitRadius={50} rotationSpeed={1 * vitesse} urlimg={Mercure} />
      <Planet name="Venus" orbitRadius={100} rotationSpeed={1.6 * vitesse} urlimg={Venus}/>
      <Planet name="Terre" orbitRadius={150} rotationSpeed={4 * vitesse} urlimg={Terre}/>
      <Planet name="Mars" orbitRadius={200} rotationSpeed={8 * vitesse} urlimg={Mars}/>
      <Planet name="Jupiter" orbitRadius={250} rotationSpeed={48 * vitesse} urlimg={Jupiter}/>
      <Planet name="Saturne" orbitRadius={300} rotationSpeed={120 * vitesse} urlimg={Saturne}/>        
    </div>
  );
};
SolarSystem.propTypes = {
  vitesse: PropTypes.number.isRequired,
}

export default SolarSystem