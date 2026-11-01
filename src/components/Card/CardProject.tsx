"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TechBadges from "@/components/TechBadges";
import type { Project } from "@/data/projects";

const external = { target: "_blank", rel: "noopener noreferrer" };

const CardProject: FC<Project> = (props) => {
  const { title, tag, description, image, icon = [], liveUrl, slug } = props;
  const [hover, setHover] = useState(false);

  const detailHref = slug ? `/projects/${slug}` : undefined;
  // The corner arrow opens the write-up when there is one, else the live site.
  const primaryHref = detailHref ?? liveUrl;

  return (
    <div className="grid grid-cols-1 md:grid-cols-project gap-4 md:gap-7 items-center">
      <div className="relative bg-[#323443] max-h-[282px] w-full md:w-[555px] px-[20px] md:px-[52px] pt-12 overflow-hidden rounded-xl">
        {primaryHref && (
          <Link
            {...(detailHref ? {} : external)}
            href={primaryHref}
            aria-label={detailHref ? `Read details of ${title}` : `View ${title}`}
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
        )}
        <TechBadges icon={icon} className="mb-4" />
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
        {primaryHref && (
          <div className="flex flex-wrap gap-3 mt-6">
            {detailHref && (
              <Link
                href={detailHref}
                className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#3BF686] text-[#272727] hover:opacity-90 transition-opacity"
              >
                Read details <span aria-hidden="true">→</span>
              </Link>
            )}
            {liveUrl && (
              <Link
                {...external}
                href={liveUrl}
                className="px-5 py-2.5 rounded-lg font-semibold text-sm border border-[#4D4D4D] text-white hover:border-[#3BF686]/60 hover:text-[#3BF686] transition-colors"
              >
                Live site <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProject;
