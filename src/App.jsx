
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Accueil from "./pages/Accueil"
import HappyEnd from "./pages/HappyEnd"
import SystemSolar from "./pages/SystemSolar"
import PdfViewer from "./pages/PdfViewer"
import Infopage from "./pages/Infopage"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import StarWars from "./pages/StarWars"
import Nature from "./pages/Nature"
import Effets from "./pages/Effets"
import TreeD from "./pages/TreeD"
import Cubes from "./pages/Cubes"

import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={
      location.pathname
    }>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/HappyEnd" element={<HappyEnd />} />
        <Route path="/SystemSolar" element={<SystemSolar />} />
        <Route path="/CvPDF" element={<PdfViewer />} />
        <Route path="/Infopage" element={<Infopage />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/StarWars" element={<StarWars />} />
        <Route path="/Nature" element={<Nature />} />
        <Route path="/Effets" element={<Effets />} />
        <Route path="/3D" element={<TreeD />} />
        <Route path="/Cubes" element={<Cubes />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
