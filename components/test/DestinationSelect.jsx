import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import {FiCircle} from "react-icons/fi"
import {BsCheckLg} from "react-icons/bs"
import image1 from "../../public/assets/images/packageShortImage15942006035f05921b2d1cd.jpg"
import Link from 'next/link'
import { useEffect } from 'react'
function DestinationSelect() {
  const [chackShow , setChackShow] = useState(false);
  const [indexele , setindexele] = useState(false);
  const [allid , setAllId ]=useState([])
  useEffect(()=>{
    setindexele(null)
  },[])
  const handleClick = (id) => {
    if(allid.includes(id)){
      const reomveall =  allid.filter(item => item !== id)
      setAllId(reomveall)
    }else{
      setAllId([ ...allid , id])
    }
    
    setindexele(id)
  }
  const country = ["Egypt " , "Jordan" , "Dubai" , "Oman" , "morococo" ,"Turkey"]
  console.log(allid)
  return (
    <div className='container mx-auto pt-10 md:w-[60%]'>
      <h1 className='text-2xl text-[#09415d] font-Roboto  font-bold text-center'>chouse multi Destination?</h1>
       <div className='flex justify-center gap-3 flex-wrap md:gap-5 '>
         {country && country.map((item , index) =>{
          return (
            <div key={index} className='flex flex-col pt-14 mb-6 w-[40%] md:w-[25%] '>
            {/* image */}
            <div
            onClick={()=> handleClick(index)}
            className={allid.includes(index) ? ' cursor-pointer  bg-[#f5a31b] pb-8 rounded-t-full rounded-b-full ' : ' cursor-pointer  border-2 pb-8 rounded-t-full rounded-b-full '}>
              <Image
              src={image1}
              width={300}
              height={300}
              layout="intrinsic"
              className='rounded-full bg-[#2a2ae3d] '
              />
            <p className='  text-lg text-center font-Roboto  mt-6  '> {item} </p>
              {allid.includes(index)  ? <BsCheckLg size={24}  className="mx-auto mt-4 text-blue-500"/> :
              <FiCircle size={24} color='#777' className="mx-auto mt-4"/>
              }
            </div>

         </div>
          )
         } ) }
        
       </div>
       <div className='flex justify-center items-center pt-7 '>
     <button className='text-xl text-white font-Roboto capitalize px-6 py-1 w-48 rounded-lg bg-[#09415D]'>
      <Link href={"/Step2"}>
      Next Step
      </Link>
     </button>
       </div>
    </div>
  )
}

export default DestinationSelect