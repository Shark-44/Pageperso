import "./Page2.css"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import Navbar from "../components/Navbar"
function Page2() {
    return(
        <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
        >
            <div className="ContenairPage2">
            <Navbar />
                <div className="divpage2">
                    <Link to="/Page1">VERS PAGE 1</Link>
                </div>
            </div>
        </motion.div>
    )
}
export default Page2