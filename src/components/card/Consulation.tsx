import Image from "next/image";

import CheckIcon from '@mui/icons-material/Check';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';

interface Studio {
  profile: string
  name: string
}

interface Detail {
  type: string
  isModified: boolean
  dimension: string
  wide: string
  floor: number
  bedroom: number
  price: string
  consultationPrice: string
}

interface CardConsultationProps {
  name: string
  studio: Studio
  detail: Detail
}


const CardConsultation = ({ name, studio, detail } : CardConsultationProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 border rounded-2xl">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex items-center gap-1">
          <Image src={studio.profile} width={28} height={28} className="border border-gray-200 rounded-full" alt="" />
          <span className="text-sm">{studio.name}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 grid-flow-row-dense gap-2 justify-items-start text-sm">
        <h4 className="text-[#4D4D4D]">Jenis Rumah</h4>
        <span className="col-span-2">{detail.type}</span>
        <h4 className="text-[#4D4D4D]">Tipe Desain</h4>
        { detail.isModified ?
          <div className="col-span-2">
            <CheckIcon className="bg-[#F5333F] text-white rounded-full text-xl p-1 inline-block" />&nbsp;
            <span className="text-[#F5333F]">Dapat Di modifikasi</span>
          </div>
          :
          <span>-</span>
        }
      </div>
      <hr className="h-px bg-[#E6E6E6]" />
      <div className="flex justify-between text-center">
        <div className="flex flex-col items-center">
          <OpenInFullIcon className="text-[#F5333F] rotate-45" />
          <h4 className="text-xs text-[#808080]">Dimensi Tanah</h4>
          <span className="text-sm">{detail.dimension}</span>
        </div>
        <div className="flex flex-col items-center">
          <SquareFootIcon className="text-[#F5333F]" />
          <h4 className="text-xs text-[#808080]">Luas Bangunan</h4>
          <span className="text-sm">{detail.wide}<sup>2</sup></span>
        </div>
        <div className="flex flex-col items-center">
          <StairsOutlinedIcon className="text-[#F5333F]" />
          <h4 className="text-xs text-[#808080]">Lantai</h4>
          <span className="text-sm">{detail.floor}</span>
        </div>
        <div className="flex flex-col items-center">
          <BedroomParentOutlinedIcon className="text-[#F5333F]" />
          <h4 className="text-xs text-[#808080]">Kamar Tidur</h4>
          <span className="text-sm">{detail.bedroom}</span>
        </div>
      </div>
      <hr className="h-px bg-[#E6E6E6]" />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm">Harga Design</h4>
        <h5 className="text-2xl font-semibold">{detail.price}</h5>
        <span className="text-sm text-[#808080]">Harga konstruksi mulai dari {detail.consultationPrice}</span>
      </div>
      <button className="rounded-md px-4 py-[14px] bg-[#F94355] w-full hover:bg-red-600 transition-all">
        <span className="text-sm text-white font-semibold">Konsultasi Sekarang</span>
      </button>
    </div>
  )
}

export default CardConsultation;