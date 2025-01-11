"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { useThemeContext } from "@/contexts/ThemeProvider";
import { assets, Brightness4, MenuIcon } from "@/assets/assets";
import { Button } from "@mui/material";
import closeUpPic from "../../assets/gab-Photoroom.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[40] w-full h-[90px] bg-white flex justify-between items-center md:px-20 text-stone-600 text-lg shadow-lg">
      <div className="flex items-center gap-2 px-2">
        <div className="w-[60] h-[60] rounded-full overflow-hidden border-2 border-transparent">
          <Image src={closeUpPic} alt="my picture"/>
        </div>
        <span className="text-lg font-bold">GABRIEL NASOL</span>
      </div>
      <ul className="hidden md:flex justfiy-items-center gap-10 font-bold tracking-wide">
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT </Link>
        <Link href="#">PROJECTS</Link>
        <Link href="#">CONTACT</Link>
        <Brightness4 className="cursor-pointer" />
      </ul>
      <div className="block md:hidden ml-3">
        <Button>
          <MenuIcon fontSize="large" sx={{ color: "#4B5563" }} />
        </Button>
      </div>
      {/* ------------mobile view------------ */}
    </nav>
  );
};

export default Navbar;
