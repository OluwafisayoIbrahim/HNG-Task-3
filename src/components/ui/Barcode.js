import React, { useEffect, useRef, useState } from "react";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";
import Image from "next/image";
import BarCodeXl from "../../components/BarcodeXl.png"

const BarcodePNG = ({ value }) => {
  const barcodeRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (barcodeRef.current) {
      html2canvas(barcodeRef.current, {
        scale: 2, 
      }).then((canvas) => {
        const pngUrl = canvas.toDataURL("image/png");
        setImgSrc(pngUrl);
      });
    }
  }, [value]);

  return (
    <div>
      {imgSrc ? (
        <Image src={BarCodeXl} alt="Barcode PNG" />
      ) : (
        <div style={{ position: "", left: "-9999px" }} ref={barcodeRef}>
          <Barcode value={value} />
        </div>
      )}
    </div>
  );
};

export default BarcodePNG;
