"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import bookmark from "@assets/icons/cards/bookmark.svg"
import timer from "@assets/icons/cards/timer.svg"
import clip from "@assets/icons/cards/clipboardclose.svg"
import wallet from "@assets/icons/cards/walletmoney.svg"
import puser from "@assets/icons/cards/profile2user.svg"

const Card = ({title, company, logo, techStacks, duration, stipend, applicants, endDate, isSelected}) => {

    const [remainingDays, setRemainingDays] = useState(0);

    useEffect(()=>{
        const calculateDaysRemaining = () => {
            const currentDate = new Date();
            const endDateParsed = new Date(endDate);
            const timeDifference = endDateParsed?.getTime() - currentDate.getTime();
            const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            setRemainingDays(daysRemaining-30);
        };
        calculateDaysRemaining();
    }, [])
    

  return (
    <div>
        <div className={`bg-white shadow-lg px-4 py-3 cursor-pointer shadow-black/10 rounded-xl w-[90%] font-semibold text-purple-mid mx-auto flex flex-col justify-between gap-2 ${isSelected && " shadow-purple-mid"}`}>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col gap-1">
                    <h3 className='text-black text-base font-bold'>{title}</h3>
                    <h4 className='text-pw-gray-dark text-sm font-semibold'>{company}</h4>
                </div>
                <div className="flex items-center justify-center border-[1px] w-10 h-10 cursor-pointer hover:bg-black/5 border-black/10 rounded-lg">
                    <Image src={bookmark} alt="bookmark" />
                </div>
            </div>
            <div className="flex flex-row justify-between my-2">
                <img src={logo} alt="logo" className="w-[10%]" />
                <div className="bg-pw-gray-md shadow-md shadow-black/10 px-3 h-8 items-center rounded-full flex flex-row border-[1px] border-black/10">
                    {
                        techStacks?.slice(0,3).map((stack, index)=>(
                            <div key={index}>
                                <div className="text-black text-sm font-semibold px-2 py-1.5 border-r-[1px] text-center border-black/10">{stack}</div>
                                <div className=" "></div>
                            </div>
                        ))
                        
                    }
                    <div>
                        <h3 className="text-purple-dark text-sm font-semibold pl-1">+{techStacks?.length-3}</h3>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3 -ml-1">
                <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center">
                    <Image src={timer} alt="" />
                    {duration} Months
                </div>
                <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center">
                    <Image src={wallet} alt="" />
                    {stipend[0]>0 && stipend[1]>0? (stipend[0]+ " - " + stipend[1]): "Unpaid"}
                </div>
                <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center">
                    <Image src={puser} alt="" />
                    {applicants}<span className="font-normal">Applicants</span>
                </div>
                <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center">
                    <Image src={clip} alt="" />
                    <span className="font-normal">Ends in</span> {remainingDays} days
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card