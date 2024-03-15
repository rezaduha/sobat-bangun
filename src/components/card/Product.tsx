import Image from "next/image";

import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import Badge from "../Badge";

interface Detail {
  type: string
  dimension: string
  wide: string
  floor: number
  bedroom: number
  price: string
  consultationPrice: string
}

interface Studio {
  profile: string
  name: string
}

interface Product {
  name: string
  image: string
  studio: Studio
  detail: Detail
}

const CardProduct = ({ name, image, studio, detail } : Product) => {
  return(
    <div className="flex flex-col space-y-4 p-4 border rounded-lg">
      <Image src={image} className="rounded mb-2 w-full" width={500} height={200} alt=""/>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-wrap flex-2 gap-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <Badge label={detail.type} />
        </div>
        <div className="flex items-center gap-1">
          <Image src={studio.profile} width={28} height={28} className="border border-gray-200 rounded-full" alt="" />
          <span className="text-sm">{detail.type}</span>
        </div>
      </div>
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
      <div className="flex flex-col gap-2">
        <h4 className="text-sm">Harga Design</h4>
        <h5 className="text-2xl font-semibold">{detail.price}</h5>
        <span className="text-sm text-[#808080]">Harga konstruksi mulai dari {detail.consultationPrice}</span>
      </div>
      <button className="rounded-md px-4 py-2 border border-[#F94355] hover:bg-[#F94355] text-[#F94355] hover:text-white transition-all">
        <span className="text-sm font-semibold">Lihat Detail</span>
      </button>
    </div>
  )
}

export default CardProduct