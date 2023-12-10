import "./SystemSolar.css"
import Navbar from "../components/Navbar"
import SolarSystem from "../components/SolarSystem"
import Horloge from "../components/Horloge"

function SystemSolar () {
    return (
        <div className="contenairSolar">
            <Navbar />
            <SolarSystem />
            <div className="infoplanets">
                <Horloge />
            </div>
        </div>
    )

}

export default SystemSolar