"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Logo from "@/components/Logo";
import CloudIcon from "@/components/ui/CloudIcon";
import EnvelopeIcon from "@/components/ui/EnvelopeIcon";
import { UserContext } from "../Contexts/AuthenticationContexts"; 

const AttendeeDetails = () => {
  const {
    formData,
    handleAvatarChange,
    handleFormChange,
    fileInputRef,
    errors,
    isUploading,
    handleBack,
    handleNext,
  } = useContext(UserContext);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (
        e.key === "Enter" &&
        e.target.tagName !== "BUTTON" &&
        e.target.tagName !== "INPUT"
      ) {
        e.preventDefault();
        e.target.click();
      }
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);

  const [dragActive, setDragActive] = useState(false);

  
  const handleFile = (file) => {
    if (file) {
      const syntheticEvent = { target: { files: [file] } };
      handleAvatarChange(syntheticEvent);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <main className="bg-cover bg-center bg-no-repeat min-h-screen p-4">
      <header className="absolute top-5 left-1/2 xl:w-[1200px] xl:h-[76px] xs:w-[320px] xs:h-[68px] items-center -translate-x-1/2 bg-[rgba(5,37,44,0.4)] border border-[#197686] backdrop-blur-sm xl:rounded-3xl xs:rounded-xl p-3 flex justify-between">
        <Link href="/">
          <Logo className="flex items-center space-x-2 hover:cursor-pointer" />
        </Link>

        <nav className=" absolute left-[390.9px] top-[21px] flex gap-4 w-[341px] h-[34px] xs:hidden xl:block">
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
                  xl:w-[700px] xl:h-[1083px] xs:w-[335px] xs:h-[1059px]
                  xl:bg-[#041E23] xs:bg-[#08252B]
                  border border-[#0E464F] 
                  xl:rounded-[32px] xs:rounded-[32px]
                  flex-none order-0 flex-grow-0"
          >
            <header className="flex flex-col justify-center items-center p-0 gap-3 xl:w-[604px] xl:h-12 xl:mt-5 absolute xl:top-[150px] xl:left-[322px] xs:left-50 xs:top-[140px] xs:w-[287px] xs:h-[40px]">
              <div className="flex xl:flex-row xl:items-center xl:w-[604px] xl:h-8 p-0 gap-3 xs:w-[287px] xs:h-[24px]">
                <div className="flex flex-col items-center p-0 gap-4 w-[531px] h-8 xs:gap-4 xs:w-[214px] xs:h-[24px] xl:flex-grow xs:flex-grow">
                  <h1 className="xl:w-[531px] xl:h-8 font-jeju font-normal xl:text-[32px] xl:leading-8 xs:w-[214px] xs:h-[24px] xs:text-[24px] xs:leading-6 text-white">
                    Attendee Details
                  </h1>
                  <p className="hidden w-[464px] h-12 font-roboto font-normal text-base leading-[150%] text-center text-[#FAFAFA]"></p>
                </div>
                <span className="w-[61px] xl:h-6 font-roboto font-normal text-base leading-[150%] xs:h-[24px] text-[#FAFAFA]">
                  Step 2/3
                </span>
              </div>
              <div className="relative xl:w-[604px] h-1 xs:w-[287px]">
                <div className="w-full h-1 bg-[#0E464F] rounded-[5px]"></div>
                <div className="absolute left-0 top-0 bottom-0 xl:w-[326px] xs:w-[232px] bg-[#24A0B5] rounded-[5px]"></div>
              </div>
            </header>
            <div
              className="
    box-border
    flex flex-col justify-start items-center
    p-4 xs:p-6 xl:p-8
     xs:gap-4 xl:gap-6 xl:mt-[73px] xs:mt-10
     xs:h-full xl:w-[604px]
     xs:w-hidden xl:h-[907px] 
     xl:bg-[#08252B]
     xl:border border-[#0E464F]
    rounded-[24px] xl:rounded-[32px]
  "
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                noValidate
              >
                <div
                  className="flex flex-col items-start p-6 gap-8 rounded-3xl border border-[#07373F] bg-[#052228] 
      xl:w-[556px] xl:h-[328px] xs:w-[287px] xs:h-[328px]"
                >
                  <label
                    htmlFor="avatar-upload"
                    className="w-[147px] h-[24px] text-center text-[#FAFAFA] font-roboto font-normal text-[16px] leading-[150%]"
                  >
                    Upload Profile Photo
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) =>
                      e.key === "Enter" && fileInputRef.current?.click()
                    }
                    role="button"
                    tabIndex={0}
                    aria-label="Click to upload profile photo"
                    className="flex flex-row justify-center items-center gap-2 bg-black bg-opacity-20 
        xl:w-[508px] xl:h-[200px] xs:w-[239px] xs:h-[200px] cursor-pointer"
                  >
                    <div className="relative group">
      <div
        className={`flex flex-col justify-center items-center p-6 gap-4 rounded-[32px] border-4 border-[#24A0B5]/50 bg-[#0E464F] w-[240px] h-[240px] ${
          dragActive ? "border-dashed border-white" : ""
        }`}
        style={
          formData.avatar
            ? {
                backgroundImage: `url(${formData.avatar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!formData.avatar && (
          <>
            <CloudIcon className="w-8 h-8 text-white" />
            <div className="w-48 h-12 text-center text-white text-lg font-roboto">
              Drag &amp; drop or click to upload
            </div>
            <input
              type="file"
              onChange={handleFileInputChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              ref={fileInputRef}
            />
          </>
        )}
      </div>

      {formData.avatar && (
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-[32px]">
          <CloudIcon className="w-8 h-8 text-white" />
          <div className="w-48 h-12 text-center text-white text-lg font-roboto">
            Drag &amp; drop or click to upload
          </div>
          <input
            type="file"
            onChange={handleFileInputChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
            ref={fileInputRef}
          />
        </div>
      )}
    </div>

                  </div>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    className="hidden"
                    aria-label="Upload profile photo"
                  />
                  {errors.avatar && (
                    <p className="text-red-500 -mt-4 text-sm" role="alert">
                      {errors.avatar}
                    </p>
                  )}
                  {isUploading && (
                    <p className="text-white -mt-4 text-sm" role="status">
                      Uploading...
                    </p>
                  )}
                </div>
                <div
                  className="
        flex-none self-stretch grow-0 h-[4px] bg-[#07373F]
        xl:w-[556px] xs:w-[287px]
        xl:order-1 xs:order-2 mt-7 
      "
                />
                <div
                  className="
        flex flex-col items-start p-0 gap-2 
        xl:w-[556px] xl:h-[80px] xs:w-[287px] xs:h-[80px]
        order-2 self-stretch flex-none mt-6
      "
                >
                  <label
                    htmlFor="name"
                    className="
          order-0 self-stretch 
          xl:w-[556px] xs:w-[287px] h-[24px]
          font-roboto font-normal text-[16px] leading-[150%] text-[#FAFAFA] 
        "
                  >
                    Enter your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="
          p-3 
          xl:w-[556px] xs:w-[287px] h-[48px] 
          border border-[#0E464F]  rounded-[12px]
          font-roboto font-normal text-[16px] leading-[150%] text-white bg-[#07373F]
          focus:outline-none
        "
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-red-500 text-sm -mt-2"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div
                  className="
        flex flex-col items-start p-0 gap-2 
        xl:w-[556px] xl:h-[80px] xs:w-[287px] xs:h-[80px]
        order-2 self-stretch flex-none mt-6
      "
                >
                  <label
                    htmlFor="email"
                    className="
          order-0 self-stretch 
          xl:w-[556px] xs:w-[287px] h-[24px]
          font-roboto font-normal text-[16px] leading-[150%] text-[#FAFAFA] 
        "
                  >
                    Enter your email*
                  </label>

                  <div
                    className="
          relative flex flex-row items-center p-3 gap-2
          xs:w-[287px] xl:w-[556px] h-[48px]
          border border-[#0E464F] rounded-[12px] bg-[#07373F]
          order-1 self-stretch
        "
                  >
                    <EnvelopeIcon
                      className="
            absolute left-[16px] top-[11px]
            w-[24px] h-[24px] bg-white
            flex-none
          "
                    />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      placeholder="hello@avioflagos.io"
                      className="
            xs:w-[287px] xl:w-[556px] h-[24px]
            bg-[#07373F] border-none outline-none
            text-[#FFFFFF] font-roboto font-normal text-[16px] leading-[150%] 
            placeholder:text-white
            order-1 flex-grow
          "
                    />
                  </div>
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-red-500 absolute text-sm mt-20"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div
                  className="
        flex flex-col items-start p-0 gap-2 flex-none self-stretch
        xl:w-[556px] xl:h-[159px] xl:order-4
        xs:w-[287px] xs:h-[159px] xs:order-5 mt-6
      "
                >
                  <label
                    htmlFor="project"
                    className="
          order-0 self-stretch 
          xl:w-[556px] xs:w-[287px] h-[24px]
          font-roboto font-normal text-[16px] leading-[150%] text-[#FAFAFA] 
        "
                  >
                    Special Request?
                  </label>

                  <div
                    className="
          flex flex-row items-start p-3 gap-2 flex-none order-1 self-stretch
          xl:w-[556px] xl:h-[127px]
          xs:w-[287px] xs:h-[150px]
          border border-[#0E464F] rounded-[12px] bg-[#083C46]
        "
                  >
                    <input
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleFormChange}
                      placeholder="Textarea"
                      className="
            order-0 flex-grow
            xl:w-[532px] xs:w-[263px] h-[24px]
            font-roboto font-normal text-[16px] leading-[150%] text-white
            bg-inherit border-none outline-none
          "
                    />
                  </div>
                  {errors.project && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.project}
                    </p>
                  )}
                </div>
                <div className="flex xs:flex-col xl:flex-row absolute xl:mt-[50px] xs:pt-[58px] xl:justify-start xl:items-end xs:items-start w-full xs:w-[287px] xl:w-[556px] xs:h-28 xl:h-12 xs:gap-4 xl:gap-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex justify-center items-center px-6 py-3 gap-2 xs:w-full xl:w-[266px] h-12 border border-[#24A0B5] rounded-lg xs:order-2 xl:order-1"
                  >
                    <span className="font-jeju text-base font-normal leading-6 text-[#24A0B5]">
                      Back
                    </span>
                  </button>
                  <button
                    type="submit"
                    onClick={handleNext}
                    className="flex justify-center items-center px-6 py-3 gap-2 xs:w-full xl:w-[266px] h-12 bg-[#24A0B5] rounded-lg xs:order-1 xl:order-2"
                  >
                    <span className="font-jeju text-base font-normal leading-6 text-white">
                      Get My Free Ticket
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AttendeeDetails;
