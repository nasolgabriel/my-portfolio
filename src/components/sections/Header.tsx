"use client";

import { Button } from "@mui/material";
import React from "react";
import "../../app/styles/globals.css";
const Header = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center background-pattern px-5">
      <div className=" text-center lg:px-20">
        <h1 className="font-Sans font-bold text-[#111] text-[40px] md:text-[25px] lg:text-[50px] leading-[1.3] mb-2">
          HELLO THERE, I'M GAB
        </h1>
        <p className="font-Sans leading-[1.5] lg:text-[20px]">
          A dedicated and enthusiastic person, eager to kickstart my career
          in tech, driven by continuous learning and innovation, with a passion
          for <span className="font-bold">solving problems—one line at a time.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
