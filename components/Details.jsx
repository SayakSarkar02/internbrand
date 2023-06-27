"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import calendar from '@assets/icons/details/calendar.svg'
import clip from '@assets/icons/details/clipboardclose.svg'
import loc from '@assets/icons/details/location.svg'
import ptu from '@assets/icons/details/profile2user.svg'
import ranking from '@assets/icons/details/ranking.svg'
import timer from '@assets/icons/details/timer.svg'
import usrt from '@assets/icons/details/usertick.svg'
import wallet from '@assets/icons/details/walletmoney.svg'

const Details = ({title, company, logo, link, category, aboutUs, requirements, responsibilities, techStacks, openPositions, location, experience, duration, stipend, applicants, endDate, posted}) => {
  
    const [remainingDays, setRemainingDays] = useState(0);
    const [daysElapsed, setDaysElapsed] = useState(0);

    useEffect(()=>{
        const calculateDaysRemaining = () => {
            const currentDate = new Date();
            const endDateParsed = new Date(endDate);
            const timeDifference = endDateParsed?.getTime() - currentDate.getTime();
            const postedParsed = new Date(posted);
            const timeDifference2 = currentDate.getTime() - postedParsed.getTime();
            const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            const daysSincePosted = Math.floor(timeDifference2 / (1000 * 60 * 60 * 24));
            setRemainingDays(daysRemaining-30);
            setDaysElapsed(daysSincePosted+30);
        };
        calculateDaysRemaining();
    }, [])

    return (
        <div className='bg-white rounded-xl w-[95%] ml-6 min-h-screen p-10 relative overflow-clip'>
        
        {/* Category */}
        <div className="bg-purple-light text-purple-dark font-bold text-xl absolute top-0 right-0 py-4 px-8 pl-12 rounded-bl-full">{category}</div>
        
        {/* Header */}
        <div className="flex flex-row justify-start gap-8 items-center w-full">
            <div className="">
                <Image src={logo} className="w-16" width={1000} height={1000} alt="logo" />
            </div>
            <div className="flex flex-col">
                <h3 className='text-black text-base font-bold'>{title}</h3>
                <h4 className='text-pw-gray-dark text-sm font-semibold'>{company}</h4>
            </div>
        </div>

        {/* Detail Grid */}
        <div>
        <div className="grid grid-cols-4 gap-3 items-center divide-black/10 divide-x-[1px] mt-12">
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center">
                <div className="flex flex-row items-center w-32 gap-3">
                    <Image src={timer} alt="" />
                    <h3 className="leading-none">{duration} months <br /> <span className="font-normal"> Duration </span></h3>
                </div>
            </div>
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center justify-center">
                <div className="flex flex-row items-center w-32 gap-3">
                <Image src={ranking} alt="" />
                <h3 className="leading-none">{experience} <br /> <span className="font-normal"> Experience </span></h3>
                </div>
            </div>
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center justify-center">
                <div className="flex flex-row items-center w-44 gap-3">
                <Image src={wallet} alt="" />
                <h3 className="leading-none">{stipend[0]>0 && stipend[1]>0? ("₹" + stipend[0]+ " - " + "₹" + stipend[1]): "Unpaid"} <br /> <span className="font-normal"> Stipend </span></h3>
                </div>
            </div>
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center justify-center">
                <div className="flex flex-row items-center w-40 gap-3">
                <Image src={loc} alt="" />
                <h3 className="leading-none">{location} <br /> <span className="font-normal"> Location </span></h3>
                </div>
            </div>
        </div>

        <div className="w-[85%] h-[1px] bg-black/10 mx-auto ml-4 my-3"></div>

        <div className="grid grid-cols-4 gap-3 mt-3 items-center divide-black/10 divide-x-[1px]">
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center">
                <div className="flex flex-row items-center w-32 gap-3">
                <Image src={calendar} alt="" />
                <h3 className="leading-none">{daysElapsed} Days Ago <br /> <span className="font-normal"> Posted </span></h3>
                </div>
            </div>
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center justify-center">
                <div className="flex flex-row items-center w-32 gap-3">
                <Image src={clip} alt="" />
                <h3 className="leading-none">{remainingDays} Days <br /> <span className="font-normal"> Ends in </span></h3>
                </div>
            </div>
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center justify-center">
                <div className="flex flex-row items-center w-44 gap-3">
                <Image src={usrt} alt="" />
                <h3 className="leading-none">{openPositions} <br /> <span className="font-normal"> Open Positions </span></h3>
                </div>
            </div>
            <div className="flex flex-row gap-2 text-sm font-semibold text-black items-center justify-center">
                <div className="flex flex-row items-center w-40 gap-3">
                <Image src={ptu} alt="" />
                <h3 className="leading-none">{applicants} <br /> <span className="font-normal"> Total Applicants </span></h3>
                </div>
            </div>
        </div>
        </div>

        {/* Tech Stacks */}
        <div className="w-[70%] flex flex-row gap-x-5 gap-y-4 flex-wrap mt-12">
            {
                techStacks?.map((techStack, index) => (
                    <div key={index} className="h-7 bg-pw-gray-md rounded-full text-black font-normal text-sm flex items-center justify-center px-5">{techStack}</div>
                ))
            }
        </div>

        {/* Description */}
        <p className="mt-12">
            <span className="text-black text-[15px] font-bold">About Us</span>
            <br />
            <span className="font-normal">{aboutUs}</span>
            <br />
            <br />
            <span className="text-black text-[15px] font-bold">Requirements</span>
            <ul className=" list-disc">
            {
                requirements?.map((requirement, index) => (
                    <li key={index} className="font-normal ml-6">{requirement}</li>
                ))
            }
            </ul>
            <br />
            <span className="text-black text-[15px] font-bold">Responsibilities</span>
            <ul className=" list-disc">
            {
                responsibilities?.map((responsibility, index) => (
                    <li key={index} className="font-normal ml-6">{responsibility}</li>
                ))
            }
            </ul>
        </p>

        {/* Visit Website Link */}
        <div className="mt-10 text-purple-dark font-bold cursor-pointer text-sm">
            <a href={link} target="_blank" rel="noopener noreferrer" >Visit Website</a>
        </div>

        {/* Apply Now Button */}
        <div className="w-full flex items-center justify-center">
        <div className="mt-12 bg-purple-dark hover:bg-purple-mid transition duration-300 ease-in text-white text-center w-40 py-2 rounded-full font-bold cursor-pointer text-lg">
            <a href="#" target="_blank" rel="noopener noreferrer" >Apply Now</a>
        </div>
        </div>
        </div>)
}

export default Details