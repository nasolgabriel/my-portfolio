"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Brightness4 } from "@/assets/assets";
import closeUpPic from "../../assets/gab-Photoroom.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 z-[40] w-full h-[90px] bg-white flex justify-between items-center md:px-20 text-stone-600 text-lg shadow-lg pr-3">
      <div className="flex items-center gap-2 px-2">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-transparent">
          <Image src={closeUpPic} alt="my picture" />
        </div>
        <span className="text-lg font-bold">GABRIEL NASOL</span>
      </div>

      <ul className="hidden lg:flex justify-items-center gap-10 font-bold tracking-wide">
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">PROJECTS</Link>
        <Link href="#">CONTACT</Link>
        {/* <Brightness4 className="cursor-pointer" /> */}
      </ul>

      {/* Hamburger MMenu Icon */}
      <div
        id="nav-icon3"
        className={`relative w-10 h-10 cursor-pointer lg:hidden ${
          menuOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        <span className="absolute block w-full h-1 rounded transition-all duration-300 ease-in-out top-0 left-0"></span>
        <span className="absolute block w-full h-1 rounded transition-all duration-300 ease-in-out top-[10px] left-0"></span>
        <span className="absolute block w-full h-1 rounded transition-all duration-300 ease-in-out top-[10px] left-0"></span>
        <span className="absolute block w-full h-1 rounded transition-all duration-300 ease-in-out top-[20px] left-0"></span>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`flex flex-col bg-white w-screen pb-10 absolute left-0 transition-all duration-300 ease-in-out space-y-4 justify-end items-center ${
          menuOpen ? "top-[90px]" : "top-[-250%]"
        }`}
      >
        <Link
          className="flex items-center justify-center w-full h-full "
          href="#"
        >
          HOME
        </Link>
        <Link
          className="flex items-center justify-center w-full h-full "
          href="#"
        >
          ABOUT
        </Link>
        <Link
          className="flex items-center justify-center w-full h-full "
          href="#"
        >
          PROJECTS
        </Link>
        <Link
          className="flex items-center justify-center w-full h-full"
          href="#"
        >
          CONTACT
        </Link>
        <Brightness4 className="cursor-pointer" />
      </ul>
    </nav>
  );
};

export default Navbar;
