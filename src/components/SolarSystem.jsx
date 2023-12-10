import Sun from './Sun';
import Planet from './Plantes';
import "./SolarSystem.css"

const SolarSystem = () => {
  
  return (
    <div className="solar-system">
      <Sun />
      <Planet name="Mercure" orbitRadius={50} rotationSpeed={1} />
      <Planet name="Venus" orbitRadius={100} rotationSpeed={1.6} />
      <Planet name="Terre" orbitRadius={150} rotationSpeed={4} />
      <Planet name="Mars" orbitRadius={200} rotationSpeed={8} />
      <Planet name="Jupiter" orbitRadius={250} rotationSpeed={48} />
      <Planet name="Saturne" orbitRadius={300} rotationSpeed={120} />
               
    </div>
  );
};

export default SolarSystem