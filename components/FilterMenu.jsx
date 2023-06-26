"use client"
import Image from "next/image"
import { useState } from "react"
import close from "@assets/icons/filter/closesquare.svg"
import Slider from "@mui/material/Slider";
import check from '@assets/icons/filter/check.svg'
import { styled } from '@mui/material/styles';

export const FilterMenu = ({filters, applyFilters, handleToggleFilter}) => {

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

  return (
    <div className='absolute bg-white rounded-lg shadow-lg shadow-black/20 w-[570px] h-[544px] top-44 right-0 z-[999]'>
        <div className="flex justify-between items-center m-3">
            <div></div>
            <h2 className='font-bold text-purple-dark text-center text-lg select-none'>Filters</h2>
            <button onClick={handleToggleFilter} className='cursor-pointer hover:brightness-150'> <Image src={close} alt="" /> </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <SelectMenu title="Timings" applyFilters={applyFilters} filters={filters}/>
            <SelectMenu title="Type" applyFilters={applyFilters} filters={filters}/>
            <SliderBar title="Duration (Months)" update={updateDuration} mks={[{value: 1,},{value: 2,},{value: 3,},{value: 4,},{value: 5,},{value: 6,}]} def={filters?.duration}/>
            <SliderBar title="Stipend" update={updateStipend} mks={[{value: 0,},{value: 1,},{value: 5,},{value: 10,},{value: 20,},{value: 40,}]} def={[1,3]}/>
            <SliderBar title="Applicants" update={updateApplication} mks={[{value: 0,},{value: 10,},{value: 25,},{value: 50,},{value: 100,},{value: 250,}]} def={[1,3]}/>
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
  
