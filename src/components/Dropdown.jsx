import { useState } from "react"
import { useNavigate } from "react-router"
import "./Dropdown.css"

function Dropdown() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleOpen = () => {
        setOpen(!open);
      };
      const handleMenuOne = () => {
        navigate("/HappyEnd")
        setOpen(false);
      };
    
      const handleMenuTwo = () => {
        navigate("/Infopage")
        setOpen(false);
      };
      const handleMenuThree = () => {
        navigate("/Page1")
        setOpen(false);
      };
      const handleMenuFour = () => {
        navigate("/StarWars")
        setOpen(false);
      };
      const handleMenuFive = () => {
        navigate("/Nature")
        setOpen(false);
      };
      const handleMenuSix = () => {
        navigate("/Effets")
        setOpen(false);
      };
      const handleMenuSeven = () => {
        navigate("/3D")
        setOpen(false);
      };
      const handleMenuEight = () => {
        navigate("/Cubes")
        setOpen(false);
      };
      return (
        <div>
          <button onClick={handleOpen}>Mes essais</button>
         
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleMenuOne}> Le Smiley </button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuThree}>Framer motion</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuFour}>Star Wars</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuFive}>Travail avec GSAP</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuSix}>Travail effets d&apos;un site</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuSeven}>Essais 3D Three.js</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuEight}>Cubes sauteurs</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuTwo}>Info Ma page</button>
          </li>
        </ul>
      ) : null}
        </div>
      );
    }

export default Dropdown