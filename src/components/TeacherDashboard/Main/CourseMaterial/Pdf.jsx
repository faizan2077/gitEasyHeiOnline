import React ,{useState} from "react";
import { Document, Page } from 'react-pdf';

import "./Instructions.scss";

const Pdf = ({
  title = "MOCK TEST JEE - 3",
  questions = "75",
  duration = 3,
}) => {
  const instructions = [
    "Exam will start once you click begin.",
    "When the countdown timer at the top reaches zero, the examination will end by itself.",
    "The examination will end exactly in 3 hours, from the time when you click begin.",
    "Once you “Finish” the test, you cannot resume the test again.",
  ]; const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="instructions">
      <section class="publishAssignment__ctaRow">
      <input type="file" name="file"  />
        <button class="publishAssignment__ctaRow__publish">Submit Pdf</button>
      </section>
      <Document file="paf11.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      </div>
  );
};

export default Pdf;
