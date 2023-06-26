"use client"
import Image from "next/image"
import { useState } from "react"
import close from "@assets/icons/filter/closesquare.svg"
import Slider from "@mui/material/Slider";
import check from '@assets/icons/filter/check.svg'
import cross from '@assets/icons/filter/cross.svg'
import { styled } from '@mui/material/styles';

export const FilterMenu = ({filters, applyFilters, handleToggleFilter, reRender}) => {

    const updateDuration = (value) => {
        const filter = filters;
        console.log(filter);
        filter.duration = value;
        applyFilters(filter)
    }

    const updateStipend = (value) => {
        const filter = filters;
        filter.stipend = convertStipend(value);
        applyFilters(filter)
        console.log(filter);
    }

    const updateApplication = (value) => {
        const filter = filters;
        filter.applicants = convertApplicants(value);
        applyFilters(filter);
        console.log(filter);
    }

    const convertStipend = (arr) => {
        const mapping = {
          1: 0,
          2: 1,
          3: 5,
          4: 10,
          5: 20,
          6: 40,
        };
        const convertedArr = arr.map((value) => mapping[value]);
        return convertedArr;
    };

    const convertApplicants = (arr) => {
        const mapping = {
          1: 0,
          2: 10,
          3: 25,
          4: 50,
          5: 100,
          6: 250,
        };
        const convertedArr = arr.map((value) => mapping[value]);
        return convertedArr;
    };

    const clearAll = () => {
        const filter = filters;
        filter.category = [];
        filter.skills = [];
        filter.location = [];
        filter.type = [];
        filter.duration = [1,6];
        filter.stipend = [0,40];
        filter.applicants = [0,250];
        applyFilters(filter);
        reRender();
    }

  return (
    <div className='absolute bg-white rounded-lg shadow-lg shadow-black/20 w-[570px] h-[544px] top-44 right-0 z-[999] pr-8'>
        <div className="flex justify-between items-center m-3">
            <div></div>
            <h2 className='font-bold text-purple-dark text-center text-lg select-none'>Filters</h2>
            <button onClick={handleToggleFilter} className='cursor-pointer hover:brightness-150'> <Image src={close} alt="" /> </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <SearchFilter title="Category" applyFilters={applyFilters} filters={filters}/>
            <SearchFilter title="Skills" applyFilters={applyFilters} filters={filters}/>
            <SelectMenu title="Timings" applyFilters={applyFilters} filters={filters}/>
            <SelectMenu title="Type" applyFilters={applyFilters} filters={filters}/>
            <SliderBar title="Duration (Months)" update={updateDuration} mks={[{value: 1,},{value: 2,},{value: 3,},{value: 4,},{value: 5,},{value: 6,}]} def={filters?.duration}/>
            <SearchFilter title="Location" applyFilters={applyFilters} filters={filters}/>
            <SliderBar title="Stipend" update={updateStipend} mks={[{value: 0,},{value: 1,},{value: 5,},{value: 10,},{value: 20,},{value: 40,}]} def={[1,3]}/>
            <SliderBar title="Applicants" update={updateApplication} mks={[{value: 0,},{value: 10,},{value: 25,},{value: 50,},{value: 100,},{value: 250,}]} def={[1,3]}/>
        </div>
        <div className="px-10 flex flex-row items-center justify-between absolute py-2 rounded-t-[10px] shadow-custom bottom-0 left-0 w-full">
            <h3 onClick={()=>{clearAll()}} className="cursor-pointer font-bold text-sm text-purple-dark">Clear All</h3>
            <button onClick={()=>{reRender();handleToggleFilter();}} className="w-[110px] h-[35px] text-white rounded-[10px] bg-purple-dark">Apply</button>
        </div>
    </div>
  )
}

function valuetext(value) {
    return `${value}`;
}
const marks = [{value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6}];
const CustomSlider = styled(Slider)(({theme})=>({
    color: "#6938ef",
    height: 3,
    '& .MuiSlider-thumb': {
        height: 10,
        width: 10,
        backgroundColor: '#6938ef',
        boxShadow: '0 0 0 8px rgba(105, 56, 239, 0.4)',

    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
    '& .MuiSlider-track': {
        border: 'none',
      },
      '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
      },
      '& .MuiSlider-mark': {
        backgroundColor: '#bfbfbf',
        height: 10,
        width: 10,
        margin: '0 -4px',
        borderRadius: '50%',
        '&.MuiSlider-markActive': {
          opacity: 1,
          backgroundColor: 'currentColor',
        },
      },
}))


const SliderBar = ({title, mks, def, update}) => {
    const [value, setValue] = useState(def);
        const handleChange = (event, newValue, activeThumb) => {
            if (!Array.isArray(newValue)) {
            return;
        }

        

        const minDistance = 1;
    
        if (newValue[1] - newValue[0] < minDistance) {
          if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setValue([clamped, clamped + minDistance]);
            update([clamped, clamped + minDistance])
          } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue([clamped - minDistance, clamped]);
            update([clamped - minDistance, clamped])
          }
        } else {
          setValue(newValue);
          update(newValue);
        }
      };
      
    return (<div className="flex flex-col">
    <h3 className="text-base font-bold ml-10 mb-2"> {title} </h3>
    <div className="text-black overflow-hidden h-16 relative p-4 mx-8 -mt-3 -mb-4">
        <CustomSlider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value}
        step={1}
        color="secondary"
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
        marks={marks}
        min={1}
        disableSwap
        max={6}
      />
    </div>
    <h4 className={`text-[12px] font-normal ml-10 flex flex-row justify-between ${title=="Duration (Months)" && " pr-9 pl-1 "} ${title=="Stipend" && " pr-6 pl-1.5"} ${title=="Applicants" && " pl-1.5 pr-6 "}`}> 
        {
            mks?.map((mark, index)=>(
                <div>{mark.value}{title==="Stipend" && index!==0 && "K"}{index===marks.length-1 && "+"}</div>
            ))
        }
    </h4>
    </div>
    );
      
}

const SelectMenu = ({title, applyFilters, filters}) => {

    const [checkBox1, setCheckBox1] = useState(false);
    const [checkBox2, setCheckBox2] = useState(false);

    const toggleCheckBox1 = () => {
        setCheckBox1(prev=>!prev);
        const filter = filters;
        if(title==="Timings"){
            filter.timings.parttime = !checkBox1;
        }
        else{
            filter.type.workfromhome = !checkBox1;
        }
        applyFilters(filter);
        // console.log(filter);
    }

    const toggleCheckBox2 = () => {
        setCheckBox2(prev=>!prev);
        const filter = filters;
        if(title==="Timings"){
            filter.timings.fulltime = !checkBox2;
        }
        else{
            filter.type.inoffice = !checkBox2;
        }
        applyFilters(filter);
        // console.log(filter);
    }
      
    const [value, setValue] = useState(title==="Timings"? ["Part time", "Full time"]: ["Work from Home", "In Office"]);

    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-base font-bold ml-10 mb-2"> {title} </h3>
            <div className="flex ml-10 flex-row items-center text-xs font-normal">
                <div onClick={toggleCheckBox1} className={` cursor-pointer select-none rounded-lg ${!checkBox1? " border-[2px] w-6 h-6": "  "} border-[#D0D5DD]`}><Image className={ !checkBox1 && "hidden" } src={check} width={25} height={25} alt="" /></div>
                <label className="ml-2 text-purple-dark w-[140px] h-[30px] flex items-center justify-center text-center rounded-lg bg-purple-light">{value[0]}</label>
            </div>
            <div className="flex ml-10 flex-row items-center text-xs font-normal">
                <div onClick={toggleCheckBox2} className={` cursor-pointer select-none rounded-lg ${!checkBox2? " border-[2px] w-6 h-6": "  "} border-[#D0D5DD]`}><Image className={ !checkBox2 && "hidden" } src={check} width={25} height={25} alt="" /></div>
                <label className="ml-2 text-purple-dark w-[140px] h-[30px] flex items-center justify-center text-center rounded-lg bg-purple-light">{value[1]}</label>
            </div>
            
        </div>
    )
}

const SearchFilter = ({title, applyFilters, filters}) => {

    const [words, setWords] = useState([title==="Category"?filters.category:title==="Skills"?filters.skills:filters.location]);

    const addWord = (e) => {
        const word = e.target.value.trim();
        if (word !== '') {
          setWords((prevWords) => [...prevWords, word]);
          e.target.value = '';
        }
        const filter = filters;
        if(title==="Category"){
            filter.category = [...words, word];
            applyFilters(filter);
        }
        else if(title==="Skills"){
            filter.skills = [...words, word];
            applyFilters(filter);
        }
        else {
            filter.location = [...words, word];
            applyFilters(filter);
        }
      };
      
      const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          addWord(e);
          e.preventDefault(); // Prevent form submission if inside a form element
        } else if (e.key === 'Backspace' && e.target.value === '') {
          e.preventDefault(); // Prevent browser navigation on Backspace
          setWords((prev) => prev.slice(0, prev.length - 1));
          const filter = filters;
            if(title==="Category"){
                filter.category = [...words].slice(0, [...words].length - 1);
                applyFilters(filter);
            }
            else if(title==="Skills"){
                filter.skills = [...words].slice(0, [...words].length - 1);
                applyFilters(filter);
            }
            else {
                filter.location = [...words].slice(0, [...words].length - 1);
                applyFilters(filter);
            }
        }
      };

      const removeWord = (index) => {
        setWords((prevWords) => {
          const updatedWords = [...prevWords];
          updatedWords.splice(index, 1);
          return updatedWords;
        });
        const filter = filters;
            if(title==="Category"){
                filter.category = [...words].splice(index, 1);
                applyFilters(filter);
            }
            else if(title==="Skills"){
                filter.skills = [...words].splice(index, 1);
                applyFilters(filter);
            }
            else {
                filter.location = [...words].splice(index, 1);
                applyFilters(filter);
            }
      };
      
    return (
        <div className="flex flex-col">
            <h3 className="text-base font-bold ml-10 mb-2"> {title} </h3>
            <div className="w-[240px] h-[40px] border-[1px] border-black/10 noscr rounded-[10px] ml-8 flex flex-row gap-1 items-center overflow-scroll px-1">
                {words.map((word, index)=>(
                <div className=" flex w-full flex-row items-center pr-2 py-0.5 bg-purple-light rounded-lg text-purple-dark">
                    <svg className="cursor-pointer" onClick={()=>{removeWord(index)}} xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 22 20"><g><path fill="#6938EF" d="M12.27 10l3.739-3.575a.82.82 0 00.255-.592.82.82 0 00-.255-.591.893.893 0 00-.618-.245.893.893 0 00-.617.245l-3.73 3.583-3.731-3.583a.893.893 0 00-.617-.245.893.893 0 00-.618.245.82.82 0 00-.255.591.82.82 0 00.255.592L9.818 10l-3.74 3.575a.803.803 0 000 1.183.873.873 0 00.618.247.903.903 0 00.617-.247l3.73-3.583 3.73 3.583a.873.873 0 00.618.247.902.902 0 00.618-.247.83.83 0 00.257-.591.802.802 0 00-.257-.592L12.269 10z"></path></g></svg>
                    <h3>{word}</h3>
                </div>
                ))}
                <input onKeyDown={handleKeyDown} type="text" className="w-full min-w-fit h-full outline-none rounded-[10px] px-2 mr-10" />
            </div>
        </div>
    )
}