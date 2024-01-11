import "./Page1.css"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import Navbar from "../components/Navbar"
function Page1() {
    document.body.style.backgroundColor = 'black'
    return(
        <motion.div
        className="container"
        initial={{ WebkitClipPath: "circle(-20%)" }}
        animate={{ WebkitClipPath: "circle(100%)" }}
        transition={{ duration: 5}}>
    
            <div className="Contenairpage1">
                <div className="cercle">
                    <Navbar />
                    <Link id="test" to="/Page2">vers page 2</Link>  
                </div>
            </div>
        </motion.div>
    )
}
export default Page1