import Image from "next/image";


interface CardShowcaseProps {
  image: string
  label: string
  dimension: string
}

const CardShowcase = ({ image, label, dimension } : CardShowcaseProps) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg p-4 border">
      <Image width={500} height={200} className="rounded" src={image} alt="" />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{label}</h3>
        <span className="text-sm">{dimension}</span>
      </div>
    </div>
  )
}

export default CardShowcase;
