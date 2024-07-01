import "./TreeD.css";
import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar";
import Terre from "../assets/space/Terre.webp";
import Lune from "../assets/space/moon.webp";

const TexturedSphere = (props) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, Terre);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[1, 32, 32]} /> {/* eslint-disable-line react/no-unknown-property */}
      <meshStandardMaterial map={texture} /> {/* eslint-disable-line react/no-unknown-property */}
    </mesh>
  );
};

const OrbitMoon = ({ radius, speed, center }) => {
  const meshRef = useRef();
  const [angle, setAngle] = useState(0);
  const textureM = useLoader(THREE.TextureLoader, Lune);

  useFrame((state, delta) => {
    setAngle(prevAngle => prevAngle - speed * delta); 
    meshRef.current.position.x = center[0] + radius * Math.cos(angle);
    meshRef.current.position.z = center[2] + radius * Math.sin(angle);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} /> {/* eslint-disable-line react/no-unknown-property */}
      <meshStandardMaterial map={textureM} /> {/* eslint-disable-line react/no-unknown-property */}
    </mesh>
  );
};

OrbitMoon.propTypes = {
  radius: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const TreeD = () => {
  return (
    <div className="contenaire3D">
      <Navbar />
      <h2>Utilisez la molette pour zoomer et click gauche maintenu pour tourner la planète</h2>
      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <pointLight position={[1000, 1000, 0]} /> {/* eslint-disable-line react/no-unknown-property */}
        <TexturedSphere position={[0, 0, 0]} />
        <OrbitMoon radius={2} speed={1} center={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default TreeD;
