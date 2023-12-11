import PropTypes from 'prop-types'
import Sun from './Sun';
import Planet from './Plantes';
import "./SolarSystem.css"

const SolarSystem = ({vitesse}) => {
  
  console.info(vitesse)
  return (
    <div className="solar-system">
      <Sun />
      <Planet name="Mercure" orbitRadius={50} rotationSpeed={1 * vitesse} />
      <Planet name="Venus" orbitRadius={100} rotationSpeed={1.6 * vitesse} />
      <Planet name="Terre" orbitRadius={150} rotationSpeed={4 * vitesse} />
      <Planet name="Mars" orbitRadius={200} rotationSpeed={8 * vitesse} />
      <Planet name="Jupiter" orbitRadius={250} rotationSpeed={48 * vitesse} />
      <Planet name="Saturne" orbitRadius={300} rotationSpeed={120 * vitesse} />
               
    </div>
  );
};
SolarSystem.propTypes = {
  vitesse: PropTypes.array.isRequired,
}

export default SolarSystem