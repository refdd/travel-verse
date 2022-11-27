import React from 'react'
import { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import {CATEGORY} from "../data/dammyData"
function SelectedCountry() {
    const {handleClick , isClicked, setIsClicked } = useStateContext()
useEffect(()=>{
    setIsClicked({Asia:true, type:"Asia" })
},[])
  return (
    <div className='container mx-auto '>
      <ul className='flex gap-3 flex-wrap py-3'>
        <li onClick={()=>handleClick("Asia")} className={isClicked.Asia ? ' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] ' 
                    :' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] '          
    }>
           <p className='text-xl font-serif font-medium capitalize  px-2  decoration-[#F7F8FA] ' >Asia </p>
        </li>
        <li onClick={()=>handleClick("Africa")}className={isClicked.Africa
 ? ' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] ' 
                    :' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] '          
    }>
           <p className='text-xl text-center font-serif font-medium capitalize  px-2  decoration-[#F7F8FA] ' > Africa</p>
        </li> 
        <li onClick={()=>handleClick("Europe")}className={isClicked.Europe
 ? ' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] ' 
                    :' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] '          
    }>
           <p className='text-xl text-center font-serif font-medium capitalize  px-2  decoration-[#F7F8FA] '> Europe</p>
        </li>
        <li onClick={()=>handleClick("Latin")} className={isClicked.Latin
 ? ' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] ' 
                    :' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] '          
    }>
            <p className='text-xl text-center font-serif font-medium capitalize  px-2  decoration-[#F7F8FA] '>latin America</p>
        </li>
        <li onClick={()=>handleClick("Multi")} className={isClicked.Multi
 ? ' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] ' 
                    :' flex justify-center items-center flex-1 border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] '          
    }>
            <p className='text-xl text-center font-serif font-medium capitalize  px-2  decoration-[#F7F8FA] '>Multi Destinations</p> 
        </li>
      </ul>
    </div>
  )
}

export default SelectedCountry