import "./TreeD.css";

import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Navbar from "../components/Navbar";
 import Terre from "../assets/space/Terre.webp"

/* mesh permet la forme avec la structure */
const TexturedSphere = (props) => {
  const Texture = useLoader(THREE.TextureLoader, Terre);

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 32, 32]} /> {/* eslint-disable-line react/no-unknown-property */}
      <meshStandardMaterial map={Texture} /> {/* eslint-disable-line react/no-unknown-property */}
    </mesh>
  );
}

const TreeD = () => {
  return (
    <div className="contenaire3D">
    <Navbar />
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} /> {/* eslint-disable-line react/no-unknown-property */}
      <TexturedSphere position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
    </div>
  );
}

export default TreeD;
