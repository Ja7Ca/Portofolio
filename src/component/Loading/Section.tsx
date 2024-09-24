"use client"

import { useEffect, useState } from 'react';
import LoadingButton from './Button';

const LoadingSection = () => {
    const [panel, setPanel] = useState(false);
    const [text, setText] = useState(false);
    const [button, setButton] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [display, setDisplay] = useState(true);

    const openPanel = () => {
        setText(false)
        setButton(false)
        setTimeout(() => {
            setPanel(false)
        }, 1000)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        setTimeout(() => {
            setDisplay(false)
        }, 3000)
    }

    useEffect(() => {
        setTimeout(() => {
            setPanel(true)
        }, 100)
        setTimeout(() => {
            setText(true)
        }, 1100)
        setTimeout(() => {
            setButton(true)
        }, 1600)
      }, []);
      
  return (
    <section className={`${display ? "" : "hidden"} w-[100svw] h-[100svh] flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden ${isLoading ? "bg-[white]" : "bg-[none]"}`}>
        <div className={`panel w-full h-full bg-[white] overflow-hidden flex items-center justify-end transition-transform duration-1000 ${isLoading ? "-translate-x-[0%]" : "-translate-x-[100%]"}`}>
            <p className={`text-[#272727] px-2 font-semibold duration-500 ${text ? "translate-x-[0%]" : "translate-x-[100%]"}`}>JA7CA</p>
        </div>
        <div className={`${panel ? "h-[6em]" : "h-[0em]"} absolute transition-[height] duration-1000 w-[2px] text-[1svh] bg-[#272727]`}></div>
        <div className={`panel w-full h-full bg-[white] overflow-hidden flex items-center justify-start transition-transform duration-1000 ${isLoading ? "translate-x-[0%]" : "translate-x-[100%]"}`}>
            <p className={`text-[#272727] px-2 font-semibold duration-500 ${text ? "-translate-x-[0%]" : "translate-x-[-100%]"}`}>Web Developer</p>
        </div>
        <div className={`absolute bottom-[20svh] overflow-hidden`}>
            <LoadingButton onClick={openPanel} className={`relative duration-500 transition-opacity translate${button ? " opacity-100" : " opacity-0"}`}/>
        </div>
    </section>
  )
}

export default LoadingSection