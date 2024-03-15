import Image from "next/image";


interface CardTestimoniProps {
  profile: string;
  name: string;
  rate: string;
  testimonial: string
}

const CardTestimoni = ({ profile, name, rate, testimonial } : CardTestimoniProps) => {
  return (
    <div className="flex items-start gap-4">
      <Image src={ profile } width={44} height={44} alt="" />
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <h4 className="inline">{name}</h4>
          <span className="h-4 w-px bg-[#C5C7D0] inline-block"></span>
          <div className="flex gap-1">
            <Image className="pb-0.5" src="/star.svg" width={20} height={20} alt="" />
            <span className="text-sm text-[#4A5568] align-top">{rate}</span>
          </div>
        </div>
        <p className="text-[#666666]">{testimonial}</p>
      </div>
    </div>
  )
}

export default CardTestimoni;