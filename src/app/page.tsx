"use client"

import { useEffect, useState } from 'react';

const Home = () => {
    const [start, setStart] = useState(false);
    const [text, setText] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
        setTimeout(() => {
            setStart(true)
        }, 100)
        setTimeout(() => {
            setText(true)
        }, 1100)
      }, []);
      
  return (
    <section className="w-[100svw] h-[100svh] flex items-center">
        <div className="panel w-full bg-[#272727] overflow-hidden flex items-center justify-end">
            <p className={`px-2 font-semibold duration-500 translate-x-[${text ? "0%" : "100%"}]`}>Jarot</p>
        </div>
        <div className={`${start ? "h-[3em]" : "h-[0em]"} transition-all duration-1000 w-[2px] text-[1vw] bg-white`}></div>
        <div className="panel w-full bg-[#272727] overflow-hidden flex items-center justify-start">
            <p className={`px-2 font-semibold duration-500 translate-x-[${text ? "0%" : "-100%"}]`}>Setiawan</p>
        </div>
    </section>
  )
}

export default Home