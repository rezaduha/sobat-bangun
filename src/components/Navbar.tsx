"use client"

import { useState } from "react";

import Image from "next/image";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hoveredMenu, setHoveredMenu] = useState(0);

  const menuItems = [
    { id: 1, label: 'Tentang Kami', subMenus: ['sub menu 1', 'sub menu 2'] },
    { id: 2, label: 'Product & Layanan', subMenus: ['sub menu 1', 'sub menu 2'] },
    { id: 3, label: 'Blog', subMenus: [] },
    { id: 4, label: 'FAQ', subMenus: [] },
  ];

  const handleMouseEnter = (menuId: number) => {
    setHoveredMenu(menuId);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="relative container mx-auto py-12 px-6 sm:px-0 flex justify-between items-center">
        <Image src="/brand.svg" width={148} height={42} alt="" />
        <button className="lg:hidden" onClick={() => toggleMenu()}>
          { !isMenuOpen ? <MenuIcon className="block ml-4" /> : <CloseIcon className="block ml-4" /> }
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-full left-0 lg:flex justify-between w-full bg-white rounded-b-xl lg:mt-0 p-8 lg:p-0`}>
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 justify-center lg:flex-1 lg:items-center">
            {menuItems.map(menu => (
              menu.subMenus.length ? 
              <li key={menu.id} className="relative cursor-pointer font-semibold leading-9 hover:text-[#F5333F]" onMouseEnter={() => handleMouseEnter(menu.id)} onMouseLeave={() => handleMouseLeave()}>
                <div className="flex gap-2 items-center">
                  <span>{menu.label}</span>
                  <KeyboardArrowDownIcon className={`${hoveredMenu === menu.id ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
                </div>
                <div className={`${hoveredMenu === menu.id ? 'block' : 'hidden'} lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 w-max lg:w-48 pt-2`}>
                  <ul className="bg-white lg:shadow rounded px-4 py-2 text-black hover:[&>li]:text-[#F5333F]">
                    {menu.subMenus.map((sub, index) => (
                      <li key={index}>{sub}</li>
                    ))}
                  </ul>
                </div>
              </li>
              : <li key={menu.id} className="cursor-pointer flex gap-2 items-center font-semibold leading-9 hover:text-[#F5333F]">{menu.label}</li>
            ))}
          </ul>
          <div className="flex flex-col lg:flex-row gap-4 mt-8 lg:mt-0">
            <button className="rounded-md hover:bg-gray-100 px-4 py-[10px] border lg:border-none">
              <span className="font-semibold">Daftar</span>
            </button>
            <button className="bg-[#F5333F] hover:bg-red-600 rounded-md px-4 py-[10px] transition-all">
              <span className="font-semibold text-white">Masuk</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
