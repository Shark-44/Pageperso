
import "./NavBar.css"
import { NavLink } from "react-router-dom"
function Navbar () {
return(
    <nav className="navGlobal">

        <ul >
          <NavLink className="nav-item" to="/Accueil">
            Accueil
          </NavLink>
          <NavLink className="nav-item" to="/SystemSolar">
            systeme Solaire
          </NavLink>

        </ul>
        <h1> Joanny BERNARDEAU WEB DEVELLOPEUR</h1>
</nav>
)
}
export default Navbar;