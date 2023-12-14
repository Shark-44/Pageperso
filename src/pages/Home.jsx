import { useNavigate } from "react-router"
import Video from '../components/Video'
import "./Home.css"
import fleche from "../assets/Enter.png"
function Home () {
    const navigate = useNavigate()
    const changePage = () =>{
        navigate("/Accueil")
    }
    return (
        <div className="contenairHome">
            <Video />
            <h1>Joanny BERNARDEAU</h1>
            <img id="fleche-entree" src={fleche} alt="fleche entrée" onClick={changePage}/>
        </div>
    )
}
export default Home