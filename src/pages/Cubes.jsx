import "./Cubes.css"
import Navbar from "../components/Navbar"
import CubeComp from "../components/Cubecomponent"
function Cubes (){
    return(
        <div className="contenairCube">
        <Navbar />
        <CubeComp/>
        </div>
    )
}
export default Cubes;