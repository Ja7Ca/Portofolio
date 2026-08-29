"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropsProject {
  title?: string;
  tag?: string;
  description?: string;
  link?: string;
  image?: string;
  icon?: string[];
}

const dataTag: Record<string, string> = {
  nextjs:
    "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  expressjs:
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  socketio:
    "https://img.shields.io/badge/Socket.io?style=flat-square&logo=Socket.io&logoColor=white",
  nextauth:
    "https://img.shields.io/badge/next--auth?style=flat-square",
};

const CardProject: FC<PropsProject> = (props) => {
  const {
    title = "Modern Landing Page",
    tag = "Web Development",
    description = "A responsive landing page designed to effectively showcase product features, value propositions, and key information.",
    link = "#",
    image = "/landingpage.png",
    icon = [],
  } = props;
  const [hover, setHover] = useState(false);

  const isExternalLink = link && link !== "#";

  return (
    <div className="grid grid-cols-1 md:grid-cols-project gap-4 md:gap-7 items-center">
      <div className="relative bg-[#323443] max-h-[282px] w-full md:w-[555px] px-[20px] md:px-[52px] pt-12 overflow-hidden rounded-xl">
        <Link
          target={isExternalLink ? "_blank" : "_self"}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
          href={link}
          aria-label={`View ${title}`}
          className="w-9 h-9 flex justify-center items-center rounded-lg bg-[#3F4152] absolute top-3 right-3 z-10 hover:bg-[#4F5268] transition-colors"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src="/arow-up.png"
            alt="External Link Arrow"
            width={20}
            height={20}
            className={`${
              hover ? "rotate-45" : "rotate-90"
            } transition-transform duration-200`}
          />
        </Link>
        <div className="flex gap-2 mb-4 flex-wrap">
          {icon.map((el, index) =>
            dataTag[el] ? (
              <Image
                key={`${el}-${index}`}
                src={dataTag[el]}
                alt={el}
                width={70}
                height={20}
                unoptimized
                className="h-5 w-auto"
              />
            ) : null
          )}
        </div>
        <Image
          src={image}
          alt={title}
          width={451}
          height={297}
          className="object-cover rounded-t-lg w-full"
        />
      </div>
      <div>
        <p className="font-bold text-lg text-[#3BF686] mb-2">{tag}</p>
        <h2 className="text-3xl md:text-5xl text-white font-bold mb-4">
          {title}
        </h2>
        <p className="text-[#D4D4D4] text-lg leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardProject;
