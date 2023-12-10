import PropTypes from 'prop-types';
import "./Plantes.css"

const Plantes = ({ name, orbitRadius, rotationSpeed} ) => {
    const planetStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        animation: `orbit-${name} ${rotationSpeed}s linear infinite`,
          }
      const axerotation = {
        width: `${orbitRadius * 3}px`, 
        height: `${orbitRadius * 2}px`,
        border: '1px solid aqua',
        borderRadius: '50%',
        position: 'relative',
        margin: '20px',
        top: '40%',
        left:'30%',
      }
      const test = {
        
        width: '20px',
        height: '20px',
        margin: '-50%',
        borderRadius:'50%',
        background: 'aqua',
        animation: `rotate-${name} ${rotationSpeed}s linear infinite`,
      }
  return (
    <div style={axerotation} >
    <div style={planetStyle} className="plants">
      <p style={test} className="nameplants">1</p>
    </div>
    </div>
  );
};

// Définissez les propTypes pour valider les types de vos props
Plantes.propTypes = {
    name: PropTypes.string.isRequired,
    orbitRadius: PropTypes.number.isRequired,
    rotationSpeed: PropTypes.number.isRequired
};

export default Plantes;