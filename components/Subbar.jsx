"use client"
import Image from "next/image"
import search from "@assets/icons/search.svg"
import filter from "@assets/icons/filter.svg"
import { FilterMenu } from "@components/FilterMenu"
import { useState } from "react"

const Subbar = ({type, handleSetType, filters, applyFilters}) => {

    const selected = " bg-purple-dark text-white font-bold"

    const [isFilterOpen, setIsFilterOpen] = useState(true);

    const handleToggleFilter = () => {
        setIsFilterOpen((prev)=>!prev)
    }



  return (
    <div className="my-8 flex flex-row ">
        <div className="w-1/3">
            <div className="bg-white rounded-xl w-[90%] h-[50px] p-1 font-semibold text-purple-mid mx-auto flex flex-row justify-between gap-1">
                <div onClick={()=>{handleSetType("popular")}} className={(type==="popular" && selected) + "  basis-1/3 py-2 rounded-lg text-center cursor-pointer"}>Popular</div>
                <div onClick={()=>{handleSetType("newest")}} className={(type==="newest" && selected) + " basis-1/3 py-2 rounded-lg text-center cursor-pointer"}>Newest</div>
                <div onClick={()=>{handleSetType("bookmarks")}} className={(type==="bookmarks" && selected) + " basis-1/3 py-2 rounded-lg text-center cursor-pointer"}>Bookmarks</div>
            </div>
        </div>
        <div className="w-2/3">
            <div className="flex flex-row justify-center items-center gap-5">
            <div className="flex w-[90%] flex-row rounded-xl border-[1px] border-black/10">
                <input type="text" className="grow rounded-l-xl outline-2 -outline-offset-1 outline-purple-mid text-purple-dark px-5" />
                <button className="bg-purple-dark w-[70px] h-[50px] flex items-center justify-center rounded-r-xl"> <Image src={search} alt="search" /> </button>
            </div>
            <button onClick={handleToggleFilter}>
                <Image src={filter} alt="filter" />
            </button>
                {isFilterOpen && <FilterMenu filters={filters} applyFilters={applyFilters} handleToggleFilter={handleToggleFilter}/>}
            </div>
        </div>
    </div>
  )
}

export default Subbar