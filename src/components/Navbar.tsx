"use client"

import { useState } from "react";

import Image from "next/image";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="relative container mx-auto py-12 px-6 sm:px-0 flex justify-between items-center">
        <Image src="/brand.svg" width={148} height={42} alt="" />
        <button className="lg:hidden flex-1" onClick={() => toggleMenu()}>
          { !isMenuOpen ? <MenuIcon className="block ml-8" /> : <CloseIcon className="block ml-8" /> }
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-full left-0 lg:block w-full lg:w-max bg-white rounded-b-xl lg:mt-0 p-8 lg:p-0`}>
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8">
            <li className="cursor-pointer flex gap-2 items-center font-semibold leading-9 hover:text-[#F5333F]">Tentang Kami <KeyboardArrowDownIcon /></li>
            <li className="cursor-pointer flex gap-2 items-center font-semibold leading-9 hover:text-[#F5333F]">Product & Layanan <KeyboardArrowDownIcon /></li>
            <li className="cursor-pointer flex gap-2 items-center font-semibold leading-9 hover:text-[#F5333F]">Blog</li>
            <li className="cursor-pointer flex gap-2 items-center font-semibold leading-9 hover:text-[#F5333F]">FAQ</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="rounded-md hover:bg-gray-100 px-4 py-[10px]">
            <span className="text-semibold">Daftar</span>
          </button>
          <button className="bg-[#F5333F] hover:bg-red-600 rounded-md px-4 py-[10px] transition-all">
            <span className="text-semibold text-white">Masuk</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
