import Link from "next/link";
import Image from "next/image";

interface CardSnippetProps {
  title?: string;
  description?: string;
  link?: string;
}

const CardSnippet = ({
  title = "Next.js Starter",
  description = "A dead-simple starter boilerplate for Next.js projects.",
  link = "#",
}: CardSnippetProps) => {
  return (
    <Link
      href={link}
      className="bg-[#323443] rounded-[1.25em] pt-[1.5em] px-[2.5em] relative min-h-[10em] md:min-h-[17.625em] pb-[5.625em] block hover:bg-[#3b3d4f] transition-colors"
    >
      <p className="text-[1.25em] md:text-[1.75em] leading-[257%] font-bold text-[#DEDEDE]">
        {title}
      </p>
      <p className="text-[.875em] md:text-[1.125em] text-[#DEDEDE]">
        {description}
      </p>
      <div className="absolute bottom-[1.5em] left-[2.5em] right-[2.5em] flex justify-between items-center">
        <div className="flex gap-4">
          <Image
            src="/react-icon.svg"
            alt="React"
            width={40}
            height={40}
            className="w-[2.5em] h-[2.5em]"
          />
          <Image
            src="/tailwind-icon.svg"
            alt="Tailwind CSS"
            width={40}
            height={40}
            className="w-[2.5em] h-[2.5em]"
          />
        </div>
      </div>
    </Link>
  );
};

export default CardSnippet;