import "./Navbar.css"
import { NavLink } from "react-router-dom"
import Dropdown from "./Dropdown"
function Navbar () {
return(
    <nav className="navGlobal">
        <ul className="navul">
          <NavLink className="nav-item" to="/Accueil">
            Accueil
          </NavLink>
          <NavLink className="nav-item" to="/SystemSolar">
            systeme Solaire
          </NavLink>
        </ul>
        <h1> Joanny BERNARDEAU : WEB DEVELOPPEUR</h1>
        <Dropdown />
</nav>
)
}
export default Navbar;