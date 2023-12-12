import "./HappyEnd.css"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import langue from "../assets/langue.png"

function HappyEnd() {
  const [mousePos, setMousePos] = useState({})
  const [stylelang, setStylelang] = useState("hidden")

  useEffect(() => {
    const handleMouseMove = (event) => {
      const yAdjusted = (event.clientY - window.innerHeight / 2) * (40 / 50)
      const clampedY = Math.min(Math.max(yAdjusted, -50), 50)

      const xAdjusted = (event.clientX - window.innerWidth / 2) * (40 / 50)
      const clampedX = Math.min(Math.max(xAdjusted, -50), 50)

      setMousePos({ x: clampedX, y: clampedY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  /* variable de style sur valeur calculée */
  const eyeStyle = {
    top: `${((mousePos.y + 50) / 100) * 40 + 5}px`,
  }

  const centerEyeStyle1 = {
    left: `${((mousePos.x + 50) / 100) * 40 + 60}px`,
  }

  const centerEyeStyle2 = {
    left: `${((mousePos.x + 50) / 100) * 40 + 260}px`,
  }
  const toggle = () => {
    setStylelang((prevStylelang) =>
      prevStylelang === "visible" ? "hidden" : "visible"
    )
  }

  const visible = {
    opacity: stylelang === "visible" ? 1 : 0,
    transition: "opacity 0.2s ease",
  }
  return (
    <>
     <Navbar />
      <div className="containerTest">
        <div className="head">
          <div className="eyes">
            <div className="eye left">
              <div
                className="centereye"
                style={Object.assign({}, eyeStyle, centerEyeStyle1)}
              ></div>
            </div>
            <div className="eye right">
              <div
                className="centereye"
                style={Object.assign({}, eyeStyle, centerEyeStyle2)}
              ></div>
            </div>
          </div>
          <div className="mouth"></div>
          <div className="langue" style={visible}>
            <img
              className="langueimg"
              src={langue}
              alt=""
            />
          </div>
        </div>
        <div className="switchzone">
          <label className="switch">
            <input type="checkbox" onChange={toggle} />
            <span></span>
          </label>
        </div>
      </div>
    </>
  )
}

export default HappyEnd
