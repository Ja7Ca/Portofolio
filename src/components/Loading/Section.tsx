"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface LoadingSectionProps {
  setEndLoading(endLoading: boolean): void;
}

const LoadingSection = ({ setEndLoading }: LoadingSectionProps) => {
  const [panel, setPanel] = useState(false);
  const [text, setText] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState(true);
  const [progress, setProgress] = useState(0);

  const hasFinishedRef = useRef(false);

  const completeLoadingFlow = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    setText(false);

    setTimeout(() => {
      setPanel(false);
    }, 500);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setTimeout(() => {
      setDisplay(false);
      setEndLoading(true);
      document.body.style.overflow = "";
    }, 1500);
  }, [setEndLoading]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const minDuration = 2500;

    const t1 = setTimeout(() => {
      setPanel(true);
      setProgress(100);
    }, 100);

    const t2 = setTimeout(() => {
      setText(true);
    }, 400);

    const checkAndComplete = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        completeLoadingFlow();
      }, remaining);
    };

    if (document.readyState === "complete") {
      checkAndComplete();
    } else {
      const handleLoad = () => {
        checkAndComplete();
      };
      window.addEventListener("load", handleLoad);

      const safetyTimeout = setTimeout(() => {
        window.removeEventListener("load", handleLoad);
        checkAndComplete();
      }, 4000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(safetyTimeout);
        window.removeEventListener("load", handleLoad);
        document.body.style.overflow = "";
      };
    }
  }, [completeLoadingFlow]);

  return (
    <section
      aria-label="Loading Screen"
      className={`${display ? "" : "hidden"
        } fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${isLoading ? "bg-white" : "bg-transparent pointer-events-none"
        }`}
    >
      {/* Left Panel */}
      <div
        className={`panel w-full h-full bg-white overflow-hidden flex items-center justify-end transition-transform duration-700 ease-in-out ${isLoading ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <p
          className={`text-[#272727] text-2xl md:text-5xl px-4 font-extrabold tracking-wider transition-transform duration-700 ease-out ${text ? "translate-x-0" : "translate-x-full"
            }`}
        >
          JA7CA
        </p>
      </div>

      {/* Center Line Divider */}
      <div
        className={`${panel ? "h-32" : "h-0"
          } absolute transition-[height] duration-700 w-[3px] bg-[#272727]`}
      ></div>

      {/* Right Panel */}
      <div
        className={`panel w-full h-full bg-white overflow-hidden flex items-center justify-start transition-transform duration-700 ease-in-out ${isLoading ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <p
          className={`text-[#272727] text-2xl md:text-5xl px-4 font-extrabold tracking-wider transition-transform duration-700 ease-out ${text ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          Web Developer
        </p>
      </div>

      {/* Progress Bar Line */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${progress >= 100 ? "w-full" : "w-0"
          } ease-in-out duration-1000 transition-all`}
      >
        <div className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] h-2"></div>
      </div>
    </section>
  );
};

export default LoadingSection;