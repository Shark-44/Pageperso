import "./SystemSolar.css"
import Navbar from "../components/Navbar"
import SolarSystem from "../components/SolarSystem"
import Horloge from "../components/Horloge"
import Accelerator from "../components/Accelerator"

function SystemSolar () {
    return (
        <div className="contenairSolar">
            <Navbar />
            <div className="accelerator">
            <Accelerator />
            </div>
            <SolarSystem />
            <div className="infoplanets">
                <Horloge />
            </div>
        </div>
    )

}

export default SystemSolar