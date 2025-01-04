"use client"

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropsProject {
    title?: string,
    tag?: string,
    description?: string,
    link?: string,
    image?: string,
    icon?: []
}

const dataTag = {
    "nextjs": "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
    "expressjs": "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    "socketio": "https://img.shields.io/badge/Socket.io?style=flat-square&logo=Socket.io&logoColor=white",
    "nextauth": "https://img.shields.io/badge/next--auth?style=flat-square"
}

const CardProject: FC<PropsProject> = (props) => {
    const {
        title= "Bolder Landingpage",
        tag= "Web Development",
        description= "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision. Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
        link= "/#",
        image= "/project.png",
        icon= []
    } = props
    const [hover, setHover] = useState(false)

    const mouseEnter = () => setHover(true)
    const mouseLeave = () => setHover(false)

    return (
        <div className="grid grid-cols-1 md:grid-cols-project gap-2 md:gap-7 items-center">
            <div className="relative bg-[#323443] max-h-[282px] w-full md:w-[555px] px-[52px] pt-20 overflow-hidden">
                <Link target={link ? "_blank" : "_self"} href={link} className="w-9 h-9 flex justify-center items-center rounded-lg bg-[#3F4152] absolute top-3 right-3" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <Image src="/arow-up.png" alt="arrow-up" width={20} height={20} className={`${ hover ? 'rotate-45' : 'rotate-90' } transition-transform duration-200`}/>
                </Link>
                <div className="flex gap-2 mb-4">
                    {/* <Image src="/react-icon.png" alt="tag-image-react" width={16} height={16}/> */}
                    {icon.map(el => (
                        <Image src={dataTag[el]} alt="tag-image-react" width={16} height={16}/> 
                    ))}
                </div>
                <Image src={image} alt="Project" width={451} height={297}/>
            </div>
            <div>
                <p className="font-bold text-lg text-[#DEDEDE] mb-5">{tag}</p>
                <h1 className="text-3xl md:text-5xl text-white font-bold mb-7">{title}</h1>
                <p className="text-[#D4D4D4] text-lg line-clamp-3">{description}</p>
            </div>
        </div>
    )
};

export default CardProject;
