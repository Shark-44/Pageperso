import { Link } from "react-router-dom"
import "./Footer.css"
import gitHub from "../assets/github.png"
import Linkedin from "../assets/Linkedin.png"
import CV from "../assets/CV.png"
const Footer = () => {
  return (
    <div className="footer">
     
        <p>By Joanny BERNARDEAU</p>
        <a
          className="lien"
          href="https://github.com/Shark-44"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="imgfooter"
            src={gitHub}
            alt="lien github"
          />
        </a>
        <a
          className="lien"
          href="https://fr.linkedin.com/in/joanny-bernardeau-6a9b51bb"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="imgfooter"
            src={Linkedin}
            alt="lien Linkedin"
          />
        </a>
        <Link
          className="lien"
         to="/CvPDF"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="imgfooter"
            src={CV}
            alt="CV"
          />
        </Link>

      
    </div>
  )
}

export default Footer
