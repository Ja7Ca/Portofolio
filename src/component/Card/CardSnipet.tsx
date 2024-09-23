import Link from "next/link"
import Image from "next/image"
import imgReact from "../../../public/react-icon.svg"
import imgTailwind from "../../../public/tailwind-icon.svg"

const CardSnipet = () => {
  return (
    <Link href={"#"} className="bg-[#323443] rounded-[1.25em] pt-[1.5em] px-[2.5em] relative min-h-[10em] md:min-h-[17.625em] pb-[5.625em]">
      <p className="text-[1.25em] md:text-[1.75em] leading-[257%] font-bold">Nextjs Starter</p>
      <p className="text-[.875em] md:text-[1.125em]">A dead simple for nextjs project.</p>
      <div className="absolute bottom-[1.5em] left-[2.5em] right-[2.5em] flex justify-between items-center">
        <div className="flex gap-4">
          <Image src={imgReact} alt="tag-image-react" className="w-[2.5em]"/>
          <Image src={imgTailwind} alt="tag-image-react" className="w-[2.5em]"/>
        </div>
      </div>
    </Link>
  )
}

export default CardSnipet