"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ChevronIcon from "@/components/ui/ChevronIcon";

const TICKET_TYPES = {
  REGULAR: {
    name: "REGULAR ACCESS",
    price: "Free",
    totalSeats: 52,
    availableSeats: 20,
  },
  VIP: {
    name: "VIP ACCESS",
    price: "$150",
    totalSeats: 52,
    availableSeats: 20,
  },
  VVIP: {
    name: "VVIP ACCESS",
    price: "$150",
    totalSeats: 52,
    availableSeats: 20,
  },
};


const Home = () => {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTicket = localStorage.getItem("selectedTicket");
    const savedCount = localStorage.getItem("ticketCount");
    if (savedTicket) setSelectedTicket(savedTicket);
    if (savedCount) setTicketCount(parseInt(savedCount));
  }, []);

  useEffect(() => {
    if (selectedTicket) {
      localStorage.setItem("selectedTicket", selectedTicket);
    }
    localStorage.setItem("ticketCount", ticketCount.toString());
  }, [selectedTicket, ticketCount]);

  const handleTicketSelect = (ticketType) => {
    setSelectedTicket(ticketType);
    setError("");
  };

  const handleTicketCountChange = (count) => {
    const newCount = Math.max(1, Math.min(count, 5));
    setTicketCount(newCount);
    setShowDropdown(false);
  };

  const handleNext = () => {
    if (!selectedTicket) {
      setError("Please select a ticket type");
      return;
    }

    const ticketData = {
      type: selectedTicket,
      count: ticketCount,
      price: TICKET_TYPES[selectedTicket]?.price,
    };

    localStorage.setItem("ticketData", JSON.stringify(ticketData));
    router.push("/attendee-details");
  };

  const handleCancel = () => {
    setSelectedTicket(null);
    setTicketCount(1);
    localStorage.removeItem("selectedTicket");
    localStorage.removeItem("ticketCount");
    localStorage.removeItem("ticketData");
    router.push("/");
  };

  const TicketOption = ({ type, price, name, available, total }) => (
    <div
      className={`flex flex-col items-start p-3 hover:bg-[#2C545B] cursor-pointer gap-3 border-2 
        ${selectedTicket === type ? "bg-[#2C545B] border-[#197686]" : "border-[#197686]"} 
        rounded-[12px] xl:w-[158px] xl:h-[110px] xs:w-[255px] xs:h-[110px]`}
      onClick={() => handleTicketSelect(type)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleTicketSelect(type)}
      aria-label={`Select ${name} ticket for ${price}`}
    >
      <button className="text-white font-roboto text-[24px] font-semibold leading-[110%]">
        {price}
      </button>
      <div className="flex flex-col justify-center items-start p-0 w-[134px] h-[45px] xl:w-[134px] xl:h-[45px] xs:w-[231px] xs:h-[45px]">
        <button className="w-[133px] h-[24px] text-left text-[16px] leading-[150%] uppercase text-[#FAFAFA] font-roboto font-normal">
          {name}
        </button>
        <button className="w-[38px] h-[21px] text-[14px] leading-[150%] text-[#D9D9D9] font-roboto font-normal">
          {available}/{total}
        </button>
      </div>
    </div>
  );

  return (
    <main className="bg-cover bg-center bg-no-repeat min-h-screen p-4">
      <header className="absolute top-5 left-1/2 xl:w-[1200px] xl:h-[76px] xs:w-[320px] xs:h-[68px] items-center -translate-x-1/2 bg-[rgba(5,37,44,0.4)] border border-[#197686] backdrop-blur-sm xl:rounded-3xl xs:rounded-xl p-3 flex justify-between">
        <Link href="/">
          <Logo className="flex items-center space-x-2 hover:cursor-pointer" />
        </Link>

        <nav className=" absolute left-[390.9px] top-[21px ]flex gap-4 w-[341px] h-[34px] xs:hidden xl:block">
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
            className="flex flex-col items-center justify-center p-12 
                  xl:w-[700px] xl:h-[858px] xs:w-[335px] xs:h-[1165px]
                  xl:bg-[#041E23] xs:bg-[#08252B]
                  border border-[#0E464F] 
                  xl:rounded-[32px] xs:rounded-[32px]
                  flex-none order-0 flex-grow-0"
          >
            <header
              className="flex flex-col justify-center items-center p-0 gap-3 
                   xl:w-[604px] xl:h-12 xl:mt-5 absolute xl:top-[150px] xl:left-[322px] xs:left-50 xs:top-32
                   xs:w-[287px] xs:h-[76px]"
            >
              <div
                className="flex xl:flex-row xl:items-center 
                  xl:w-[604px] xl:h-8 p-0 gap-3
                  xs:flex-col  xs:items-start 
                  xs:w-[287px] xs:h-[60px]"
              >
                <div
                  className="flex flex-col items-center p-0 
                    gap-4 w-[531px] h-8 
                    xs:gap-4 xs:w-[287px] xs:h-6 
                    xl:flex-grow xs:flex-grow-0"
                >
                  <h1
                    className="xl:w-[531px] xl:h-8 
                     font-jeju font-normal 
                     xl:text-[32px] xl:leading-8 
                     xs:w-[287px] xs:h-6 
                     xs:text-[24px] xs:leading-6 
                     text-white"
                  >
                    Ticket Selection
                  </h1>
                  <p
                    className="hidden w-[464px] h-12 
                    font-roboto font-normal text-base leading-[150%] 
                    text-center text-[#FAFAFA]"
                  ></p>
                </div>

                <span
                  className="w-[61px] xl:h-6 
                     font-roboto font-normal text-base leading-[150%] 
                     xs:h-6 
                     text-[#FAFAFA]"
                >
                  Step 1/3
                </span>
              </div>
              <div className="relative xl:w-[604px] h-1 xs:w-[287px]">
                <div className="w-full h-1 bg-[#0E464F] rounded-[5px]"></div>
                <div
                  className="absolute left-0 top-0 bottom-0 
                    w-[232px] 
                    bg-[#24A0B5] rounded-[5px]"
                ></div>
              </div>
            </header>
            <div
              className="
    box-border
    flex flex-col justify-start items-center
    p-4 xs:p-6 xl:p-8
     xs:gap-4 xl:gap-6 xl:mt-[73px] xs:mt-14
     xs:h-full xl:w-[604px]
     xs:w-hidden xl:h-[682px] 
     xl:bg-[#08252B]
     xl:border border-[#0E464F]
    rounded-[24px] xl:rounded-[32px]
  "
            >
              <div
                className="
        flex flex-col items-center gap-2
        xs:w-[287px] xs:h-[243px] xs:p-4 xs:px-6 xs:justify-between xs:order-1
        xl:w-[556px] xl:h-[200px] xl:p-6 xl:order-0 xl:-ml-2
        border-x-2 border-b-2 border-[#07373F] rounded-2xl backdrop-blur-sm
        flex-none self-stretch flex-grow-0
      "
                style={{
                  background:
                    "radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%), rgba(10, 12, 17, 0.1)",
                }}
              >
                <div
                  className="
        flex flex-col items-center gap-2
        xs:w-[239px] xs:h-[119px] xs:mx-auto 
        xl:w-[508px] xl:h-[118px]
      "
                >
                  <h1
                    className="
          text-[#FAFAFA] text-center font-roadRage font-[400] 
          xs:w-[246px] xs:h-[48px] xs:text-[48px] xs:leading-[100%]
          xl:w-[508px] xl:h-[62px] xl:text-[62px] xl:leading-[100%]
          
        "
                  >
                    Techember Fest &quot;25
                  </h1>
                  <p
                    className="
          text-[#FAFAFA] text-center font-roboto font-[400]
          xs:w-[239px] xs:h-[63px] xs:text-[14px] xs:leading-[150%]
          xl:w-[340px] xl:h-[48px] xl:text-[16px] xl:leading-[150%]
        "
                  >
                    Join us for an unforgettable experience at [Event Name]!
                    Secure your spot now.
                  </p>
                </div>
                <div
                  className="
        flex items-start gap-4
        xs:flex-col xs:justify-center xs:items-center xs:w-[181px] xs:h-[52px] xs:gap-1
        xl:flex-row xl:w-[359px] xl:h-[24px] xl:gap-4
      "
                >
                  <p className="text-[#FAFAFA] font-roboto font-normal text-[16px] leading-[150%] xs:w-[134px] xs:h-[24px] xl:w-[134px] xl:h-[24px]">
                    📍 [Event Location]
                  </p>
                  <p className="text-[#FAFAFA] font-roboto font-normal text-[16px] leading-[150%] xs:hidden xl:block xl:w-[12px] xl:h-[24px]">
                    | |
                  </p>
                  <p className="text-[#FAFAFA] font-roboto font-normal text-[16px] leading-[150%] xs:w-[181px] xs:h-[24px] xl:w-[181px] xl:h-[24px]">
                    March 15, 2025 | 7:00PM
                  </p>
                </div>
              </div>
            </div>
            <div
              className="
      absolute xl:left-[350px] xl:top-[520px] xs:left-[65px] xs:top-[512px]
        bg-[#07373F] h-[4px]
        xs:w-[287px] xs:order-2
        xl:w-[556px] xl:order-1
      "
            />
           <div className="flex flex-col items-start absolute xl:mt-36 xs:mt-40 gap-2 xl:w-[556px] xl:h-[174px] xs:w-[287px] xs:h-[442px]">
              <label className="text-[#FAFAFA] text-[16px] leading-[150%] font-roboto">
                Select Ticket Type:
              </label>
              {error && (
                <p className="text-red-500 text-sm mb-2" role="alert">
                  {error}
                </p>
              )}
              <div className="flex flex-col justify-center items-center p-4 gap-4 bg-[#052228] border border-[#07373F] rounded-[24px] xl:w-[556px] xl:h-[142px] xs:w-[287px] xs:h-[410px]">
                <div className="flex flex-wrap justify-between items-start gap-6 xl:w-[524px] xl:h-[110px] xs:flex-col xs:w-[255px] xs:h-[378px]">
                  {Object.entries(TICKET_TYPES).map(([type, details]) => (
                    <TicketOption
                      key={type}
                      type={type}
                      price={details.price}
                      name={details.name}
                      available={details.availableSeats}
                      total={details.totalSeats}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col absolute xl:-mb-[460px] xs:-mb-[750px] items-end gap-2 w-full xs:w-[287px] xl:w-[556px] h-20">
              <label
                className="w-full xs:w-[287px] xl:w-[556px] h-6 text-base font-normal leading-6 text-[#FAFAFA] font-roboto"
                id="ticketCountLabel"
              >
                Number of Tickets
              </label>
              <div
                className="relative flex flex-row items-center w-full xs:w-[287px] xl:w-[556px] h-12 p-3 gap-2 border border-[#07373F] rounded-xl cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
                onKeyDown={(e) => e.key === "Enter" && setShowDropdown(!showDropdown)}
                tabIndex={0}
                role="button"
                aria-labelledby="ticketCountLabel"
                aria-haspopup="listbox"
                aria-expanded={showDropdown}
              >
                <span className="flex-1 h-6 text-base font-normal leading-6 text-white font-roboto">
                  {ticketCount}
                </span>
                <ChevronIcon className="w-6 h-6 flex-none text-white" />
                
                {showDropdown && (
                  <div className="absolute top-full left-0 w-full bg-[#052228] border border-[#07373F] rounded-xl mt-1 z-10">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div
                        key={num}
                        className="p-2 hover:bg-[#2C545B] cursor-pointer text-white"
                        onClick={() => handleTicketCountChange(num)}
                        onKeyPress={(e) => e.key === "Enter" && handleTicketCountChange(num)}
                        role="option"
                        aria-selected={ticketCount === num}
                        tabIndex={0}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex xs:flex-col absolute xl:-mb-[660px] xs:-mb-[1000px] xl:flex-row xl:justify-end xl:items-end xs:items-start w-full xs:w-[287px] xl:w-[556px] xs:h-28 xl:h-12 xs:gap-4 xl:gap-6">
              <button
                onClick={handleCancel}
                className="flex justify-center items-center px-6 py-3 gap-2 xs:w-full xl:w-[266px] h-12 border border-[#24A0B5] rounded-lg"
              >
                <span className="font-jeju text-base font-normal leading-6 text-[#24A0B5]">
                  Cancel
                </span>
              </button>
              <button
                onClick={handleNext}
                className="flex justify-center items-center px-6 py-3 gap-2 xs:w-full xl:w-[266px] h-12 bg-[#24A0B5] rounded-lg"
              >
                <span className="font-jeju text-base font-normal leading-6 text-white">
                  Next
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </main>
  );
};

export default Home;
