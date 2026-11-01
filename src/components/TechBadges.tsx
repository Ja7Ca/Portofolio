import Image from "next/image";

const dataTag: Record<string, string> = {
  nextjs:
    "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  reactjs:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  tailwindcss:
    "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  expressjs:
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  socketio:
    "https://img.shields.io/badge/socket-io?style=flat-square&logo=Socket.io&logoColor=white",
  nextauth:
    "https://img.shields.io/badge/next--auth?style=flat-square",
  typescript:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  cloudflare:
    "https://img.shields.io/badge/cloudflare-%23F38020.svg?style=for-the-badge&logo=cloudflare&logoColor=white",
  webrtc:
    "https://img.shields.io/badge/webrtc-%23333333.svg?style=for-the-badge&logo=webrtc&logoColor=white",
  laravel:
    "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
  redis:
    "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
  sqlite:
    "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
};

interface TechBadgesProps {
  icon: string[];
  className?: string;
}

const TechBadges = ({ icon, className = "" }: TechBadgesProps) => {
  return (
    <div className={`flex gap-2 flex-wrap ${className}`}>
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
  );
};

export default TechBadges;
