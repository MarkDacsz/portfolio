"use client"

import { useCallback } from "react";

const Download = () => {
  const onButtonClick = useCallback(() => {
    const pdfUrl = "Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    link.click();
  }, []);

  return (
    <>
      <center>
        <button className="bg-white hover:bg-red-300 text-black font-bold py-2 px-4 rounded cursor-pointer" onClick={onButtonClick}>Download CV</button>
      </center>
    </>
  );
};

export default Download;