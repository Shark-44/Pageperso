
// import PropTypes from 'prop-types';
import "./PdfViewer.css"
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

import mypdf from "../PDF/CVJoanny.pdf"
import '../styles/index.css'



const PdfViewer = () => {
  

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div id="pdfviewer">
        <Viewer fileUrl={mypdf} /> 
    </div>
      </Worker>
        </div>
  );
};

export default PdfViewer;
