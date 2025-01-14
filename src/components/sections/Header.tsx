"use client";

import { Button } from "@mui/material";
import React from "react";
import "../../app/styles/globals.css";
import { MdOutlineFileDownload } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center background-pattern px-5">
      <div className=" text-center lg:px-20 text-[#111]">
        <h1 className="font-Sans font-bold text-[40px] md:text-[25px] lg:text-[55px] leading-[1.3] mb-2">
          HELLO THERE, I'M GAB
        </h1>
        <p className="font-Sans leading-[1.5] lg:text-[20px] pb-4">
          A dedicated and enthusiastic person, eager to kickstart my career in
          tech, driven by continuous learning and innovation, with a passion for{" "}
          <span className="font-bold">
            solving problems—one line at a time.
          </span>
        </p>
        <Button
          className="font-bold py-3 px-6 rounded-lg text-white transition 
           transform hover:-translate-y-0.5 hover:text-[white]"
          variant="contained"
          size="large"
          style={{
            borderRadius: "8px",
            backgroundColor: "#800000",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          my resume{" "}
          <MdOutlineFileDownload size={23} style={{ marginLeft: "3px", marginBottom:"2px" }} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
