import { useState } from 'react'
import { LiaHandPointRightSolid } from "react-icons/lia"
import "./SystemSolar.css"
import Navbar from "../components/Navbar"
import SolarSystem from "../components/SolarSystem"
import Horloge from "../components/Horloge"
import Accelerator from "../components/Accelerator"
import Dockplanet from '../components/Dockplanet'
import Infoplant from './Infoplant'

function SystemSolar () {
    const vitesse =[20, 10, 1, 0.5, 0.3]
    const [currentIndex, setCurrentIndex] = useState(2)
    const [infoIndex, setInfoIndex] = useState()

    return (
        <div className="contenairSolar">
            <Navbar />
            <div className="accelerator">
                <Accelerator currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} vitesse={vitesse}/>
            </div>
            <SolarSystem vitesse={vitesse[currentIndex]}/>
            <div className="infoplanets">
                <Horloge />
                <div className="panel">
                    <Infoplant infoIndex={infoIndex} />
                </div>
            </div>
            <h4>Choisissez et cliquez</h4>
            <LiaHandPointRightSolid style={{position: 'absolute', bottom: '20px', left: '27%', color: 'white'}} />
            <div className="dock">
                <Dockplanet setInfoIndex={setInfoIndex} />
            </div>
        </div>
    )

}

export default SystemSolar