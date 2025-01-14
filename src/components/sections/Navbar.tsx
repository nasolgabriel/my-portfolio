"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useThemeContext } from "@/contexts/ThemeProvider";
import { assets, Brightness4, MenuIcon } from "@/assets/assets";
import { Button } from "@mui/material";
import closeUpPic from "../../assets/gab-Photoroom.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[40] w-full h-[90px] bg-white flex justify-between items-center md:px-20 text-stone-600 text-lg shadow-lg">
      <div className="flex items-center gap-2 px-2">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-transparent">
          <Image src={closeUpPic} alt="my picture" />
        </div>
        <span className="text-lg font-bold">GABRIEL NASOL</span>
      </div>
      <ul className="hidden md:flex justify-items-center gap-10 font-bold tracking-wide">
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT </Link>
        <Link href="#">PROJECTS</Link>
        <Link href="#">CONTACT</Link>
        <Brightness4 className="cursor-pointer" />
      </ul>

      {/* ------hamburger menu------ */}
      <div className="space-y-1 group md:hidden ml-3">
        <Button>
          <MenuIcon fontSize="large" sx={{ color: "#4B5563" }} />
        </Button>
      </div>
      {/* ---menu--- */}
      <ul className="flex flex-col bg-white w-screen pb-10 absolute left-0 top-0 transition-all duration-300 ease-in-out space-y-4 justify-end items-center">
        <Link className="flex items-center justify-center w-full h-full hover:bg-slate-200" href="#">HOME</Link>
        <Link className="flex items-center justify-center w-full h-full hover:bg-slate-200" href="#">ABOUT</Link>
        <Link className="flex items-center justify-center w-full h-full hover:bg-slate-200" href="#">PROJECTS</Link>
        <Link className="flex items-center justify-center w-full h-full hover:bg-slate-200" href="#">CONTACT</Link>
        <Brightness4 className="cursor-pointer" />
      </ul>


    </nav>
  );
};

export default Navbar;