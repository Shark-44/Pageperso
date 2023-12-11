import { useNavigate } from "react-router"
import Video from '../components/Video'
import "./Home.css"
function Home () {
    const navigate = useNavigate()
    const changePage = () =>{
        navigate("/Accueil")
    }
    return (
        <div className="contenairHome">
               <Video />
      <h1>Joanny BERNARDEAU</h1>
      <img id="fleche-entree" src="src/assets/fleche.png" alt="fleche entrée" onClick={changePage}/>
        </div>
    )
}
export default Home