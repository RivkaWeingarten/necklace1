import React from 'react'

import { useParams, Link } from "react-router-dom";
// import { useResizeObserver } from "@wojtekmaj/react-hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
// import { pdfjs, Document, Page } from "react-pdf";
import { useNavigate } from "react-router-dom";

function EachDiamond1 (){


const navigate = useNavigate();
const { id } = useParams();
function handleClick() {
  navigate(-1);
}

return (
  <>
    <Button
      onClick={handleClick}
      type="button"
      variant="primary"
      style={{ textDecoration: "none" }}
    >
      Go Back to Necklace
    </Button>

    <h1>Diamond Details</h1>

   
      <iframe
        title="PDF Viewer"
        width="100%"
        height="700"
        // src={`http://www.hasenfeld-stein.com/images/certificates/${id}.pdf`}
         src={`/certs/${id}.pdf`}
   
        allowFullScreen
      ></iframe>
 
  </>
);
}

export default EachDiamond1
