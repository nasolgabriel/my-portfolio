"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useThemeContext } from "@/contexts/ThemeProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const ManualColorToggle = () => {
  const [color, setColor] = useState("#000000"); // Default color (light mode)

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "#000000" ? "#ffffff" : "#000000"));
  };
};

const Navbar = () => {
  return (
    <nav className=" fixed top-0 z-[40] w-full h-[100px] bg-white flex justify-between items-center px-10 md:px-20 text-stone-600 text-lg">
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-purple-500"></div>
        <span className="text-lg font-bold">GABRIEL NASOL</span>
      </div>
      <ul className="flex justfiy-items-center gap-10 font-bold tracking-wide">
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT </Link>
        <Link href="#">PROJECTS</Link>
        <Link href="#">CONTACT</Link>
        <Brightness4Icon className="cursor-pointer" />
      </ul>
    </nav>
  );
};

export default Navbar;
