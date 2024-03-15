import Image from "next/image";
import Link from "next/link";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
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
  );
}

export default Footer;
