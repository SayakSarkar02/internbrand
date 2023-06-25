"use client"
import Navbar from "@components/Navbar"
import Subbar from "@components/Subbar"
import { useState } from "react"

export default function Home() {

  const [type, setType] = useState("popular");

  const handleSetType = (type) => {
    setType(type);
  }

  return (
    <main className="">
      <Navbar/>
      <Subbar handleSetType={handleSetType} type={type}/>
      <div className="my-8 flex flex-row ">
        <div className="w-1/3">
        </div>
        <div className="w-2/3">
            
        </div>
      </div>
    </main>
  )
}
