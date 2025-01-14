"use client"

import { useEffect, useState } from 'react';

const LoadingSection = ({setEndLoading}:{setEndLoading(endLoading: boolean): void}) => {
    const [panel, setPanel] = useState(false);
    const [text, setText] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [display, setDisplay] = useState(true);
    const [progress, setProgress] = useState(0);

    const openPanel = () => {
        setText(false)
        setTimeout(() => {
            setPanel(false)
        }, 1000)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        setTimeout(() => {
            setDisplay(false)
            setEndLoading(true)
        }, 3000)
    }

    useEffect(() => {
        setTimeout(() => {
            setPanel(true)
            setProgress(100)
        }, 100)
        setTimeout(() => {
            setText(true)
        }, 1100)
        setTimeout(() => {
            openPanel()
        }, 5000)
    }, []);
    
  return (
    <section className={`${display ? "" : "hidden"} w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden ${isLoading ? "bg-[white]" : "bg-[none]"}`}>
        <div className={`panel w-full h-full bg-[white] overflow-hidden flex items-center justify-end transition-transform duration-1000 ${isLoading ? "-translate-x-[0%]" : "-translate-x-[100%]"}`}>
            <p className={`text-[#272727] px-2 font-semibold duration-500 ${text ? "translate-x-[0%]" : "translate-x-[100%]"}`}>JA7CA</p>
        </div>
        <div className={`${panel ? "h-[6em]" : "h-[0em]"} absolute transition-[height] duration-1000 w-[2px] text-[1vh] bg-[#272727]`}></div>
        <div className={`panel w-full h-full bg-[white] overflow-hidden flex items-center justify-start transition-transform duration-1000 ${isLoading ? "translate-x-[0%]" : "translate-x-[100%]"}`}>
            <p className={`text-[#272727] px-2 font-semibold duration-500 ${text ? "-translate-x-[0%]" : "translate-x-[-100%]"}`}>Web Developer</p>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 ${progress >= 100  ? 'w-full' : 'w-[0%]'} ease-in-out duration-[5000ms] transition-all`}>
            <div className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] h-2"></div>
        </div>
    </section>
  )
}

export default LoadingSection