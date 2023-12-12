
// import PropTypes from 'prop-types';
import { Viewer, Worker} from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import mypdf from "../PDF/CVJoanny.pdf"
import '../styles/index.css'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={mypdf}></Viewer>
      </Worker>
        </div>
  );
};

export default PdfViewer;
