"use client"
import Navbar from "@components/Navbar"
import Subbar from "@components/Subbar"
import Card from "@components/Card"
import { useState } from "react"
import Details from "@components/Details"

export default function Home() {

  const [type, setType] = useState("popular");
  const [selected, setSelected] = useState(-1);
  const [filters, setFilters] = useState(
    {
      category: [],
      skills: [],
      timings: {
        parttime: false,
        fulltime: false,
      },
      type: {
        workfromhome: false,
        inoffice: false
      },
      duration: [3,5],
      location: [],
      stipend: [0,5],
      applicants: [0, 250]
    }
  );

  const handleSetType = (type) => {
    setType(type);
  }

  const applyFilters = (filters) => {
    setFilters(filters);
  }

  const dataList = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Tata Consultancy Services Pvt Ltd",
      category: "IT Services",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687722945/logo_2_g2pqzu.png",
      duration: 3, //in months
      experience: "Intermediate",
      stipend: [20000, 30000],
      location: "Noida",
      posted: new Date(2023, 6, 20),
      endDate: new Date(2023, 6, 29),
      openPositions: 10,
      applicants: 327,
      techStacks: ["Javascript", "ReactJS", "ExpressJS", "MongoDB", "Clean Architecture"],
      aboutUs: `We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.`,
      requirements: [
      "Someone who can work in a fast-paced startup environment",
      "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
      "Good communication is a must-have for this role",
      "Hardworking & Curious to learn/implement new things is what I prefer personally" ],
      responsibilities:["Write clean, manageable code and follow standard coding practices",
      "Write quality code with a clean UI/UX view",
      "Work with the tech & non-tech teams to create a meaningful product for users",
      "Capable to build a feature, testing, and deploying a feature on the production server"],

    },
    {
      id: 2,
      title: "Motion Graphics Designer",
      company: "Xapo Visuals",
      category: "IT Services",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687728682/image_4_iios8f.png",
      duration: 1, //in months
      experience: "Intermediate",
      stipend: [],
      location: "Noida",
      posted: new Date(2023, 6, 20),
      endDate: new Date(2023, 7, 1),
      openPositions: 10,
      applicants: 123,
      techStacks: ["Photoshop", "After Effects", "Blender", "Canva", "Z-Brush"],
      aboutUs: `We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.`,
      requirements: [
      "Someone who can work in a fast-paced startup environment",
      "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
      "Good communication is a must-have for this role",
      "Hardworking & Curious to learn/implement new things is what I prefer personally" ],
      responsibilities:["Write clean, manageable code and follow standard coding practices",
      "Write quality code with a clean UI/UX view",
      "Work with the tech & non-tech teams to create a meaningful product for users",
      "Capable to build a feature, testing, and deploying a feature on the production server"],
    },
    {
      id: 3,
      title: "Motion Graphics Designer",
      company: "Xapo Visuals",
      category: "IT Services",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687728682/image_4_iios8f.png",
      duration: 1, //in months
      experience: "Intermediate",
      stipend: [],
      location: "Noida",
      posted: new Date(2023, 6, 20),
      endDate: new Date(2023, 7, 1),
      openPositions: 10,
      applicants: 123,
      techStacks: ["Photoshop", "After Effects", "Blender", "Canva", "Z-Brush"],
      aboutUs: `We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.`,
      requirements: [
      "Someone who can work in a fast-paced startup environment",
      "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
      "Good communication is a must-have for this role",
      "Hardworking & Curious to learn/implement new things is what I prefer personally" ],
      responsibilities:["Write clean, manageable code and follow standard coding practices",
      "Write quality code with a clean UI/UX view",
      "Work with the tech & non-tech teams to create a meaningful product for users",
      "Capable to build a feature, testing, and deploying a feature on the production server"],
    },
    {
      id: 4,
      title: "Motion Graphics Designer",
      company: "Xapo Visuals",
      category: "IT Services",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687728682/image_4_iios8f.png",
      duration: 1, //in months
      experience: "Intermediate",
      stipend: [],
      location: "Noida",
      posted: new Date(2023, 6, 20),
      endDate: new Date(2023, 7, 1),
      openPositions: 10,
      applicants: 123,
      techStacks: ["Photoshop", "After Effects", "Blender", "Canva", "Z-Brush"],
      aboutUs: `We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.`,
      requirements: [
      "Someone who can work in a fast-paced startup environment",
      "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
      "Good communication is a must-have for this role",
      "Hardworking & Curious to learn/implement new things is what I prefer personally" ],
      responsibilities:["Write clean, manageable code and follow standard coding practices",
      "Write quality code with a clean UI/UX view",
      "Work with the tech & non-tech teams to create a meaningful product for users",
      "Capable to build a feature, testing, and deploying a feature on the production server"],
    },
    {
      id: 5,
      title: "Motion Graphics Designer",
      company: "Xapo Visuals",
      category: "IT Services",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687728682/image_4_iios8f.png",
      duration: 1, //in months
      experience: "Intermediate",
      stipend: [],
      location: "Noida",
      posted: new Date(2023, 6, 20),
      endDate: new Date(2023, 7, 1),
      openPositions: 10,
      applicants: 123,
      techStacks: ["Photoshop", "After Effects", "Blender", "Canva", "Z-Brush"],
      aboutUs: `We are a mobile and web development company. We're a professional, individualistic one-stop shop providing strategic brand consulting, experience and customer journey design, mobile app design and development, website and software development, and just about everything else which has to do anything with digital technology.`,
      requirements: [
      "Someone who can work in a fast-paced startup environment",
      "Good understanding of ReactJs, HTML, SCSS (styling is important), Javascript",
      "Good communication is a must-have for this role",
      "Hardworking & Curious to learn/implement new things is what I prefer personally" ],
      responsibilities:["Write clean, manageable code and follow standard coding practices",
      "Write quality code with a clean UI/UX view",
      "Work with the tech & non-tech teams to create a meaningful product for users",
      "Capable to build a feature, testing, and deploying a feature on the production server"],
    }
  ]

  return (
    <main className="">
      <Navbar/>
      {/* <h3>{filters?.duration[0] + " : "  + filters?.duration[1]}</h3> */}
      <Subbar handleSetType={handleSetType} type={type} filters={filters} applyFilters={applyFilters}/>
      <div className="my-8 flex flex-row ">
        <div className="w-1/3 flex flex-col gap-4">
          {
            dataList?.map((data, index)=>(
              <div key={data?.id} onClick={()=>{setSelected(dataList[index])}} >
                <Card title={data?.title} isSelected={index===selected.id-1} company={data?.company} logo={data?.logo} techStacks={data?.techStacks} duration={data?.duration} stipend={data?.stipend} applicants={data?.applicants} endDate={data?.endDate}/>
              </div>
            ))
          }
        </div>
        <div className="w-2/3">
            {selected!==-1 ? <Details title={selected?.title} category={selected?.category} company={selected?.company} openPositions={selected?.openPositions} aboutUs={selected?.aboutUs} requirements={selected?.requirements} responsibilities={selected?.responsibilities} link={selected?.link} location={selected?.location} experience={selected?.experience} logo={selected?.logo} techStacks={selected?.techStacks} duration={selected?.duration} stipend={selected?.stipend} applicants={selected?.applicants} posted={selected?.posted} endDate={selected?.endDate}/>: <h3 className="text-center font-semibold text-xl text-purple-mid mt-10">Select an option</h3>}
        </div>
      </div>
    </main>
  )
}
