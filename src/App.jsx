
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
      </Routes>
    </AnimatePresence>
  )
}

export default App
