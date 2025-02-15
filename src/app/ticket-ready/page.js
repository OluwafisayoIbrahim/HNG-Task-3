"use client";
import React, {  useEffect,useRef } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import Ticket from "@/components/ui/Ticket";
import jsPDF from "jspdf";
import html2canvas from "html2canvas"



const TicketReady = () => {
  
  const ticketRef = useRef(null);

  useEffect(() => {
    console.log("ticketRef.current:", ticketRef.current);
  }, []);

  const resetForm = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("selectedTicket");
    window.location.href = "/";
  };

  const downloadTicket = async () => {
    if (!ticketRef.current) {
      console.error("Ticket element not found");
      return;
    }

    try {
      const originalWidth = ticketRef.current.offsetWidth;
      const originalHeight = ticketRef.current.offsetHeight;

      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
        logging: true,
        windowWidth: originalWidth,
        windowHeight: originalHeight
      });

      const widthInMM = (originalWidth * 25.4) / 96;
      const heightInMM = (originalHeight * 25.4) / 96;

      const pdf = new jsPDF({
        orientation: widthInMM > heightInMM ? "landscape" : "portrait",
        unit: "mm",
        format: [widthInMM, heightInMM]
      });

      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        widthInMM,
        heightInMM
      );

      pdf.save("ticket.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <main className="bg-cover bg-center bg-no-repeat min-h-screen p-4">
      <header className="absolute top-5 left-1/2 xl:w-[1200px] xl:h-[76px] xs:w-[320px] xs:h-[68px] items-center -translate-x-1/2 bg-[rgba(5,37,44,0.4)] border border-[#197686] backdrop-blur-sm xl:rounded-3xl xs:rounded-xl p-3 flex justify-between">
        <Link href="/">
          <Logo className="flex items-center space-x-2 hover:cursor-pointer" />
        </Link>

        <nav className="absolute left-[390.9px] top-[21px] flex gap-4 w-[341px] h-[34px] xs:hidden xl:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="flex justify-center items-center px-2.5 py-[10px] gap-2 w-[74px] h-[34px] text-[#B3B3B3] hover:text-white text-[18px] font-normal leading-[18px] font-jeju"
              >
                Events
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center px-2.5 py-[10px] gap-2 w-[108px] h-[34px] text-[#B3B3B3] hover:text-white text-[18px] font-normal leading-[18px] font-jeju"
              >
                My Tickets
              </a>
            </li>
            <li>
              <a
                href="/about-project"
                className="flex justify-center items-center px-2.5 py-[10px] gap-2 w-[127px] h-[34px] text-[#B3B3B3] hover:text-white text-[18px] font-normal leading-[18px] font-jeju"
              >
                About Project
              </a>
            </li>
          </ul>
        </nav>
        <Button>My Tickets</Button>
      </header>

      <div className="min-h-screen w-full flex justify-center">
        <div className="xl:mt-[130px] xs:mt-[89px]">
          <div
            className="flex flex-col items-center justify-center p-12 xs:px-6 xs:py-8
                  xl:w-[700px] xl:h-[1025px] xs:w-[335px] xs:h-[1056px]
                  xl:bg-[#041E23] xs:bg-[#08252B]
                  border border-[#0E464F] 
                  xl:rounded-[32px] xs:rounded-[32px]
                  flex-none order-0 flex-grow-0"
          >
            <header className="flex flex-col justify-center items-center p-0 gap-3 xl:w-[604px] xl:h-12 xl:mt-5 absolute xl:top-[150px] xl:left-[322px] xs:left-50 xs:top-[140px] xs:w-[287px] xs:h-[40px]">
              <div className="flex xl:flex-row xl:items-center xl:w-[604px] xl:h-8 p-0 gap-3 xs:w-[287px] xs:h-[24px]">
                <div className="flex flex-col items-center p-0 gap-4 w-[531px] h-8 xs:gap-4 xs:w-[214px] xs:h-[24px] xl:flex-grow xs:flex-grow">
                  <h1 className="xl:w-[531px] xl:h-8 font-jeju font-normal xl:text-[32px] xl:leading-8 xs:w-[214px] xs:h-[24px] xs:text-[24px] xs:leading-6 text-white">
                    Ready
                  </h1>
                  <p className="hidden w-[464px] h-12 font-roboto font-normal text-base leading-[150%] text-center text-[#FAFAFA]"></p>
                </div>
                <span className="w-[61px] xl:h-6 font-roboto font-normal text-base leading-[150%] xs:h-[24px] text-[#FAFAFA]">
                  Step 3/3
                </span>
              </div>
              <div className="relative xl:w-[604px] h-1 xs:w-[287px]">
                <div className="w-full h-1 bg-[#0E464F] rounded-[5px]"></div>
                <div
                  className="absolute left-0 top-0 bottom-0 
                    w-full 
                    bg-[#24A0B5] rounded-[5px]"
                ></div>
              </div>
            </header>

            <div className="flex flex-col items-center justify-center p-0 gap-[12px] w-[287px] h-[94px] xl:gap-[16px] xl:w-[604px] xl:h-[81px] absolute -mt-[730px]">
              <h1 className="w-[287px] h-[34px] text-center text-[#FAFAFA] xs:font-roboto font-bold text-[24px] leading-[140%] xl:w-[604px] xl:h-[41px] xl:font-alatsi xl:font-normal xl:text-[32px] xl:leading-[41px]">
                Your Ticket is Booked!
              </h1>
              <p className="block xl:hidden w-[287px] h-[48px] text-center text-[#FAFAFA] font-roboto font-normal text-[16px] leading-[150%]">
                You can download or check your email for a copy.
              </p>
              <p className="hidden xl:block w-[604px] h-[24px] text-center text-[#FAFAFA] font-roboto font-normal text-[16px] leading-[150%]">
                Check your email for a copy or you can{" "}
                <span className="font-bold">download</span>
              </p>
            </div>



            <div className="flex xs:flex-col xl:flex-row absolute xl:-mb-[870px] xs:-mb-[880px] xl:justify-center xl:items-end xs:items-start w-full xs:w-[287px] xl:w-[604px] xs:h-28 xl:h-12 xs:gap-4 xl:gap-6">              <button
                onClick={resetForm}
                type="button"
                className="flex justify-center items-center px-6 py-3 gap-2 xs:w-full xl:w-[290px] h-12 border border-[#24A0B5] rounded-lg xs:order-2 xl:order-1"
              >
                <span className="font-jeju text-base font-normal leading-6 text-[#24A0B5]">
                  Book Another Ticket
                </span>
              </button>
              <button
                onClick={downloadTicket}
                type="submit"
                className="flex justify-center items-center px-6 py-3 gap-2 xs:w-full xl:w-[290px] h-12 bg-[#24A0B5] rounded-lg xs:order-1 xl:order-2"
              >
                <span className="font-jeju text-base font-normal leading-6 text-white">
                  Download Ticket
                </span>
              </button>
            </div>
          </div>
          <div ref={ticketRef} className="relative z-30 xl:-mt-[800px] xs:-mt-[825px]">
            <Ticket />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TicketReady;
