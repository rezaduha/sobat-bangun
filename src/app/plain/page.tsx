"use client"

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CheckIcon from '@mui/icons-material/Check';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


// This is a page without turning parts into reusable components
export default function Plain() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const images = [
    "/image-home-1.jpg",
    "/image-home-2.jpg",
    "/image-home-3.jpg",
    "/image-home-4.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main>
      {/* header */}
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
            <button className="bg-[#F5333F] rounded-md px-4 py-[10px]">
              <span className="text-semibold text-white">Masuk</span>
            </button>
          </div>
        </nav>
      </header>

      {/* breadcrumbs */}
      <div className="container mx-auto py-6 px-4 sm:px-0">
        <ul className="flex gap-2 items-center">
          <li className="text-sm font-semibold">
            <span className="text-[#F5333F] mr-2">Home</span>
            <KeyboardArrowRightIcon className="text-[#C5C7D0]" />
          </li>
          <li className="text-sm font-semibold">
            <span className="text-[#F5333F] mr-2">Layanan Design</span>
            <KeyboardArrowRightIcon className="text-[#C5C7D0]" />
          </li>
          <li className="text-sm font-semibold">
            <span className="text-[#999999]">Omah Apik 3</span>
          </li>
        </ul>
      </div>

      {/* slider */}
      <section className="relative h-[552px]">
        {images.map((image, index) => (
          <Image fill sizes="100vw"
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        <button className="absolute top-1/2 left-11 -translate-y-1/2 w-12 h-12 bg-white border border-[#F5333F]" onClick={prevImage}><KeyboardArrowLeftIcon /></button>
        <button className="absolute top-1/2 right-11 -translate-y-1/2 w-12 h-12 bg-white border border-[#F5333F]" onClick={nextImage}><KeyboardArrowRightIcon /></button>
      </section>

      {/* article */}
      <section className="container flex flex-col lg:flex-row gap-9 mx-auto pt-6 pb-12 lg:pb-24 px-4 sm:px-0">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Tampilan Rumah</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-6 rounded-lg p-4 border">
              <Image width={500} height={200} className="rounded" src="/image-room-1.jpg" alt="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Ruang Keluarga</h3>
                <span className="text-sm">2.0 x 2.9</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-lg p-4 border">
              <Image width={500} height={200} className="rounded" src="/image-room-2.jpg" alt="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Kamar tidur</h3>
                <span className="text-sm">4.0 x 3.4</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-lg p-4 border">
              <Image width={500} height={200} className="rounded" src="/image-room-3.jpg" alt="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Ruang Makan & Dapur</h3>
                <span className="text-sm">3.0 x 2.9</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-lg p-4 border">
              <Image width={500} height={200} className="rounded" src="/image-room-1.jpg" alt="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Ruang Kerja</h3>
                <span className="text-sm">2.0 x 2.9</span>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-lg p-4 border">
              <Image width={500} height={200} className="rounded" src="/image-room-2.jpg" alt="" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Kamar tidur</h3>
                <span className="text-sm">4.0 x 3.4</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 p-6 border rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Omah Apik 3</h3>
              <div className="flex items-center gap-1">
                <Image src="/studio-sae.png" width={28} height={28} className="border border-gray-200 rounded-full" alt="" />
                <span className="text-sm">Studio SAe</span>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 grid-flow-row-dense gap-2 justify-items-start text-sm">
              <h4 className="text-[#4D4D4D]">Jenis Rumah</h4>
              <span className="col-span-2">Scandinavian</span>
              <h4 className="text-[#4D4D4D]">Tipe Desain</h4>
              <div className="col-span-2">
                <CheckIcon className="bg-[#F5333F] text-white rounded-full text-xl p-1 inline-block" />&nbsp;
                <span className="text-[#F5333F]">Dapat Di modifikasi</span>
              </div>
            </div>
            <hr className="h-px bg-[#E6E6E6]" />
            <div className="flex justify-between text-center">
              <div className="flex flex-col items-center">
                <OpenInFullIcon className="text-[#F5333F] rotate-45" />
                <h4 className="text-xs text-[#808080]">Dimensi Tanah</h4>
                <span className="text-sm">15 x 8m</span>
              </div>
              <div className="flex flex-col items-center">
                <SquareFootIcon className="text-[#F5333F]" />
                <h4 className="text-xs text-[#808080]">Luas Bangunan</h4>
                <span className="text-sm">112m2</span>
              </div>
              <div className="flex flex-col items-center">
                <StairsOutlinedIcon className="text-[#F5333F]" />
                <h4 className="text-xs text-[#808080]">Lantai</h4>
                <span className="text-sm">2</span>
              </div>
              <div className="flex flex-col items-center">
                <BedroomParentOutlinedIcon className="text-[#F5333F]" />
                <h4 className="text-xs text-[#808080]">Kamar Tidur</h4>
                <span className="text-sm">4</span>
              </div>
            </div>
            <hr className="h-px bg-[#E6E6E6]" />
            <div className="flex flex-col gap-1">
              <h4 className="text-sm">Harga Design</h4>
              <h5 className="text-2xl font-semibold">Rp. 32.500.000</h5>
              <span className="text-sm text-[#808080]">Harga konstruksi mulai dari Rp 560.000.000</span>
            </div>
            <button className="rounded-md px-4 py-[14px] bg-[#F94355] w-full">
              <span className="text-sm text-white font-semibold">Konsultasi Sekarang</span>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Testimoni</h3>
            <div className="flex items-start gap-4">
              <Image src="/profile.svg" width={44} height={44} alt="" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <h4 className="inline">Budi Setiadi</h4>
                  <span className="h-4 w-px bg-[#C5C7D0] inline-block"></span>
                  <div className="flex gap-1">
                    <Image className="pb-0.5" src="/star.svg" width={20} height={20} alt="" />
                    <span className="text-sm text-[#4A5568] align-top">4.5</span>
                  </div>
                </div>
                <p className="text-[#666666]">Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image src="/profile.svg" width={44} height={44} alt="" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <h4 className="inline">Budi Setiadi</h4>
                  <span className="h-4 w-px bg-[#C5C7D0] inline-block"></span>
                  <div className="flex gap-1">
                    <Image className="pb-0.5" src="/star.svg" width={20} height={20} alt="" />
                    <span className="text-sm text-[#4A5568] align-top">4.5</span>
                  </div>
                </div>
                <p className="text-[#666666]">Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image src="/profile.svg" width={44} height={44} alt="" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <h4 className="inline">Budi Setiadi</h4>
                  <span className="h-4 w-px bg-[#C5C7D0] inline-block"></span>
                  <div className="flex gap-1">
                    <Image className="pb-0.5" src="/star.svg" width={20} height={20} alt="" />
                    <span className="text-sm text-[#4A5568] align-top">4.5</span>
                  </div>
                </div>
                <p className="text-[#666666]">Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* others */}
      <section className="container mx-auto py-[42px] px-4 sm:px-0">
        <h2 className="text-2xl font-semibold leading-5 mb-6">Desain Lainnya oleh Studio SAe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex flex-col space-y-4 p-4 border rounded-lg">
              <Image src="/image-home-1.jpg" className="rounded mb-2" width={500} height={200} alt=""/>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-wrap flex-2 gap-2">
                  <h3 className="text-xl font-bold">Omah Apik {i+1}</h3>
                  <span className="text-sm px-3 py-1 bg-[#F1F1F1] rounded-full h-max">Scandinavian</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/studio-sae.png" width={28} height={28} className="border border-gray-200 rounded-full" alt="" />
                  <span className="text-sm">Studio SAe</span>
                </div>
              </div>
              <div className="flex justify-between text-center">
                <div className="flex flex-col items-center">
                  <OpenInFullIcon className="text-[#F5333F] rotate-45" />
                  <h4 className="text-xs text-[#808080]">Dimensi Tanah</h4>
                  <span className="text-sm">15 x 8m</span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFootIcon className="text-[#F5333F]" />
                  <h4 className="text-xs text-[#808080]">Luas Bangunan</h4>
                  <span className="text-sm">112m2</span>
                </div>
                <div className="flex flex-col items-center">
                  <StairsOutlinedIcon className="text-[#F5333F]" />
                  <h4 className="text-xs text-[#808080]">Lantai</h4>
                  <span className="text-sm">2</span>
                </div>
                <div className="flex flex-col items-center">
                <BedroomParentOutlinedIcon className="text-[#F5333F]" />
                  <h4 className="text-xs text-[#808080]">Kamar Tidur</h4>
                  <span className="text-sm">4</span>
                </div>
              </div>
              <hr className="h-px bg-[#E6E6E6]" />
              <div className="flex flex-col gap-2">
                <h4 className="text-sm">Harga Design</h4>
                <h5 className="text-2xl font-semibold">Rp. 32.500.000</h5>
                <span className="text-sm text-[#808080]">Harga konstruksi mulai dari Rp 560.000.000</span>
              </div>
              <button className="rounded-md px-4 py-2 border border-[#F94355]">
                <span className="text-sm text-[#F94355] font-semibold">Lihat Detail</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="bg-[#012846] text-white">
        <div className="container m-auto py-10 px-4 sm:px-0">
          <section className="flex flex-col lg:flex-row gap-4 lg:gap-36">
            <div className="flex flex-col gap-4 lg:w-1/2">
              <Image src="/brand-grayscale.svg" width={170} height={48} alt="" />
              <div className="flex flex-col gap-2">
                <p className="my-4">SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.</p>
                <a href="#">
                  <MailOutlineIcon />
                  <span className="underline ml-2">sobat@sobatbangum.com</span>
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <h4>Sosial media:</h4>
                <div className="flex gap-6">
                  <a href="#" className="p-4 bg-white hover:bg-[#2C373E] text-[#333333] hover:text-white rounded-full">
                    <InstagramIcon className="block text-lg" />
                  </a>
                  <a href="#" className="p-4 bg-white hover:bg-[#2C373E] text-[#333333] hover:text-white rounded-full">
                    <FacebookIcon className="block text-lg" />
                  </a>
                  <a href="#" className="p-4 bg-white hover:bg-[#2C373E] text-[#333333] hover:text-white rounded-full">
                    <YouTubeIcon className="block text-lg " />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:w-1/2">
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-xl">Produk & Layanan</h4>
                <ul className="flex flex-col gap-2">
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Renovasi</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Bangun Rumah</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Layanan Desain</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Teknologi Tambahan</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Beli Material</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-xl">Tentang Kami</h4>
                <ul className="flex flex-col gap-2">
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Tentang Sobat Bangun</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Kebijakan Dan Privasi</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Syarat Dan Ketentuan</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">FAQ</Link>
                  </li>
                  <li className="w-fit hover:text-[#F5333F]">
                    <Link href="#">Daftar Menjadi Mitra</Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 lg:grid-cols-4 my-11">
            <div className="flex flex-col flex-wrap gap-1">
              <h4 className="font-semibold">Kredit Bangun Rumah</h4>
              <div className="flex justify-start flex-wrap gap-6">
                <Image src="/partner-1.png" width={56} height={56} alt="" />
                <Image src="/partner-2.png" width={56} height={56} alt="" />
                <Image src="/partner-3.png" width={56} height={56} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold">Tunai Via Bank Transfer</h4>
              <div className="flex justify-start flex-wrap gap-6">
                <Image src="/partner-1.png" width={56} height={56} alt="" />
                <Image src="/partner-4.png" width={56} height={56} alt="" />
                <Image src="/partner-3.png" width={56} height={56} alt="" />
                <Image src="/partner-5.png" width={56} height={56} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold">Kartu Kredit</h4>
              <div className="flex justify-start flex-wrap gap-6">
                <Image src="/partner-6.png" width={56} height={56} alt="" />
                <Image src="/partner-7.png" width={56} height={56} alt="" />
                <Image src="/partner-8.png" width={56} height={56} alt="" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="font-semibold">Rekan Teknologi Tambahan</h4>
              <div className="flex justify-start flex-wrap gap-6">
                <Image src="/partner-9.png" width={56} height={56} alt="" />
                <Image src="/partner-10.png" width={56} height={56} alt="" />
                <Image src="/partner-11.png" width={56} height={56} alt="" />
                <Image src="/partner-12.png" width={56} height={56} alt="" />
              </div>
            </div>
          </section>
          <section className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex items-end gap-4">
              <span>Powered by :</span>
              <Image src="/brand-sig.svg" width={72} height={42} alt="" />
            </div>
            <span className="text-sm">Copyright © 2023 SobatBangun. All rights reserved.</span>
          </section>
        </div>
      </footer>
    </main>
  );
}
