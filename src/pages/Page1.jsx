import "./Page1.css"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
function Page1() {
    const circleVariants = {
        initial: { scale: 0 },
        animate: { scale: 10},
      };
    return(
        <motion.div
        className="container"
        initial="initial"
        animate="animate"
        variants={circleVariants}
        transition={{ duration: 5 }}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <div className="Contenairpage1">
           <div className="cercle">
              <Link to="/Page2">vers page 2</Link>  
            </div>
        </div>
        </motion.div>
    )
}
export default Page1