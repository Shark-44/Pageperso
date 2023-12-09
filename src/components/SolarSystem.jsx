import Sun from './Sun';
import Planet from './Plantes';
import "./SolarSystem.css"

const SolarSystem = () => {
  // Implement the logic for planet positioning and rotation
  return (
    <div className="solar-system">
      <Sun />
      <Planet name="Mercure" orbitRadius={50} rotationSpeed={3} />
      
      {/* Add other planets with their respective properties */}
    </div>
  );
};

export default SolarSystem