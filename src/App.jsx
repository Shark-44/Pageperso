
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Accueil from "./pages/Accueil"
import HappyEnd from "./pages/HappyEnd"
import SystemSolar from "./pages/SystemSolar"
import PdfViewer from "./pages/PdfViewer"
// import html2canvas from 'html2canvas'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Accueil" element={<Accueil />} />
      <Route path="/HappyEnd" element={<HappyEnd />} />
      <Route path="/SystemSolar" element={<SystemSolar />} />
      <Route path="/CvPDF" element={<PdfViewer />} />
    </Routes>
  )
}

export default App
