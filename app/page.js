"use client"
import Navbar from "@components/Navbar"
import Subbar from "@components/Subbar"
import Card from "@components/Card"
import { useState, useEffect } from "react"
import Details from "@components/Details"

export default function Home() {

  const [type, setType] = useState("popular");
  const [apply, setApply] = useState(true);
  const [selected, setSelected] = useState(-1);
  const [search, setSearch] = useState();

  const reApply = () => {
    setApply(prev=>!prev);
  }

  const [filters, setFilters] = useState(
    {
      category: [],
      skills: [],
      timings: {
        parttime: true,
        fulltime: true,
      },
      type: {
        workfromhome: true,
        inoffice: true
      },
      duration: [1,6],
      location: [],
      stipend: [0,40000],
      applicants: [0, 250]
    }
  );

  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch('/api/getDetails');
      const {data} = await response.json();
      console.log("response: ",data);
      setDataList(data);
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false);
    }
  }


  useEffect(()=>{
    fetchData()
  },[])

  function filterDataList() {
    return dataList.filter((data) => {

      //Search filter
      if(search?.length>0){
        return data?.title.toLowerCase().includes(search?.toLowerCase());
      }


      // Check category filter
      const dataCategories = data?.category?.toLowerCase().split(" ");
      if (filters?.category?.length > 0 && !filters.category.some(filter => dataCategories.includes(filter.toLowerCase()))) {
        return false;
      }

      // Check skills filter
      const dataSkills = data?.techStacks?.map(stack => stack.toLowerCase());
      const dataSkillsFilter = filters.skills.map(skills => skills.toLowerCase());
      if (filters?.skills?.length > 0 && !dataSkills.some(skills => dataSkillsFilter.includes(skills.toLowerCase()))) {
        return false;
      }


      // Check location filter
      const dataLocation = data.location.toLowerCase().split(" ");
      if (filters?.location?.length > 0 && !filters.location.some(filter => dataLocation.includes(filter.toLowerCase()))) {
        return false;
      }

      // Check duration filter
      if (filters.duration[1] === 6) {
        if (data.duration < filters.duration[0]) {
          return false;
        }
      } else {
        if (data.duration < filters.duration[0] || data.duration > filters.duration[1]) {
          return false;
        }
      }


      // Check stipend filter
      if (filters.stipend[1] === 40000) {
        if (data.stipend[0] < filters.stipend[0] || data.stipend[1] < filters.stipend[0]) {
          return false;
        }
      } else {
        if (data.stipend[0] < filters.stipend[0] ||  data.stipend[1] > filters.stipend[1]) {
          return false;
        }
      }


      // Check applicants filter
      if (filters.applicants[1] === 250) {
        if (data.applicants < filters.applicants[0]) {
          return false;
        }
      } else {
        if (data.applicants < filters.applicants[0] || data.applicants > filters.applicants[1]) {
          return false;
        }
      }


  
      // Check timings filter
      if(filters.timings.parttime && filters.timings.fulltime){
        if(filters.type.workfromhome && filters.type.inoffice){
          return true;
        }
        if (filters.type.workfromhome && !filters.type.inoffice){
          if(data.type.inoffice){
            return false;
          }
        }
        if (!filters.type.workfromhome && filters.type.inoffice){
          if(data.type.workfromhome){
            return false;
          }
        }
        if (!filters.type.workfromhome && !filters.type.inoffice){
          return false;
        }

        return true;
      }
      else if (filters.timings.parttime && !filters.timings.fulltime){
        if(data.timings.fulltime){
          return false;
        }
        if(filters.type.workfromhome && filters.type.inoffice){
          return true;
        }
        if (filters.type.workfromhome && !filters.type.inoffice){
          if(data.type.inoffice){
            return false;
          }
        }
        if (!filters.type.workfromhome && filters.type.inoffice){
          if(data.type.workfromhome){
            return false;
          }
        }
        if (!filters.type.workfromhome && !filters.type.inoffice){
          return false;
        }
      }
      else if (!filters.timings.parttime && filters.timings.fulltime){
        if(data.timings.parttime){
          return false;
        }
        if(filters.type.workfromhome && filters.type.inoffice){
          return true;
        }
        if (filters.type.workfromhome && !filters.type.inoffice){
          if(data.type.inoffice){
            return false;
          }
        }
        if (!filters.type.workfromhome && filters.type.inoffice){
          if(data.type.workfromhome){
            return false;
          }
        }
        if (!filters.type.workfromhome && !filters.type.inoffice){
          return false;
        }
      }
      else {
        return false;
      }



      // Check type filter
      

      

      return true;
    });
  }

  useEffect(() => {
  }, [apply]);
  

  const handleSetType = (type) => {
    setType(type);
  }

  const applyFilters = (filters) => {
    setFilters(filters);
  }

  const updateSearchValue = (value) => {
    setSearch(value);
  }

  if(loading) return ( <main className="w-screen min-h-screen flex items-center justify-center text-3xl animate-pulse font-bold text-purple-mid">Loading</main> )
  

  return (
    <main className="">
      <Navbar/>
      <Subbar handleSetType={handleSetType} search={search} updateSearchValue={updateSearchValue} reRender={reApply} type={type} filters={filters} applyFilters={applyFilters}/>
      <div className="my-8 flex flex-row ">
        <div className="w-1/3 flex flex-col gap-4">
          {
            filterDataList().map((data, index)=>(
              <div key={data?.id} onClick={()=>{setSelected(dataList[data?.id-1])}} >
                <Card title={data?.title} isSelected={index===selected.id-1} company={data?.company} logo={data?.logo} techStacks={data?.techStacks} duration={data?.duration} stipend={data?.stipend} applicants={data?.applicants} endDate={data?.endDate}/>
              </div>
            ))
          }
          {
            filterDataList(dataList, filters).length===0 && <h3 className="text-center font-semibold text-xl text-purple-mid mt-10">No results found</h3>
          }
        </div>
        <div className="w-2/3">
            {selected!==-1 ? <Details title={selected?.title} category={selected?.category} company={selected?.company} openPositions={selected?.openPositions} aboutUs={selected?.aboutUs} requirements={selected?.requirements} responsibilities={selected?.responsibilities} link={selected?.link} location={selected?.location} experience={selected?.experience} logo={selected?.logo} techStacks={selected?.techStacks} duration={selected?.duration} stipend={selected?.stipend} applicants={selected?.applicants} posted={selected?.posted} endDate={selected?.endDate}/>: <h3 className="text-center font-semibold text-xl text-purple-mid mt-10">Select an option</h3>}
        </div>
      </div>
    </main>
  )
}
