
// import PropTypes from 'prop-types';
import "./PdfViewer.css"
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import mypdf from "../PDF/CVJoanny.pdf"



const PdfViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div style={{ height: '750px' }}>
            <Viewer
                fileUrl={mypdf}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
  );
};

export default PdfViewer;
