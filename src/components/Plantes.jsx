import PropTypes from 'prop-types';
import "./Plantes.css"

const Plantes = ({ name, orbitRadius, rotationSpeed} ) => {
    const planetStyle = {
        position: 'fixed',
        left: '50%',
        top: '50%',
        animation: `orbit-${name} ${rotationSpeed}s linear infinite`,
          }
      const axerotation = {
        width: `${orbitRadius * 3}px`, 
        height: `${orbitRadius * 2}px`,
        border: '1px solid aqua',
        borderRadius: '50%',
        position: 'fixed',
      }
      const test = {
        color: 'white',
        width: '30px',
        height: '30px',
        margin: '-50%',
        borderRadius:'50%',
        animation: `rotate-${name} ${rotationSpeed}s linear infinite`,
      }
      const urlimg = `../assets/space/${name}.webp`
  return (
    <div className="contenairplantes">
    <div style={axerotation} >
    <div style={planetStyle} className="plants">
      <p style={test} className="nameplants"><img src={urlimg} alt={name} /></p>
    </div>
    </div>
    </div>
  );
};


Plantes.propTypes = {
    name: PropTypes.string.isRequired,
    orbitRadius: PropTypes.number.isRequired,
    rotationSpeed: PropTypes.number.isRequired
};

export default Plantes;