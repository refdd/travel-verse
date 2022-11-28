import React from 'react'
import { useState } from 'react'

function ApproximateSection() {
  const month =[" January" ," February" ,"March" , "April" , "April"  , "May" , "June" , "July" , "July" ,  "August"  ,     "September" , "October",  "November",  "November"  ,"Decembe"  ]
  const approx =["Give me a suggestion "," Less than a week 1 ", " week 2" ,  "weeks 3" , "weeks More than 3 weeks"  ]
 const [idEle , setIdEle]= useState(null)
 const [idEleapprox , setIdEleapprox]= useState(null)
 const handleClick =(id) =>{
  setIdEle(id)
 } 
 const handleClickApprox =(id) =>{
  setIdEleapprox(id)
 } 
  return (
    <div className='container mx-auto pt-10 md:w-[50%]'>
     <div className='flex flex-col gap-5 md:flex-row'>
     <div className='flex flex-col gap-4 '>
        <p className='text-lg text-gray-500 font-Roboto  md:text-center'>Which month?</p>
              <div className='flex flex-wrap gap-4 justify-center'>
                {month && month.map((item , index) => {
                  return  <p key={index} onClick={()=> handleClick(index)} className={idEle == index ? 'text-xl  font-Roboto capitalize font-medium text-[#F5A31B] cursor-pointer ' 
                  :'text-xl text-gray-500 font-Roboto capitalize font-medium hover:text-[#09415D] cursor-pointer underline ' } >
                     {item} </p>
                } )}
              </div>
       </div>

       <div className=' flex flex-col gap-4 '>
        <p className='text-lg text-gray-500 font-Roboto text-center '>How long (approx)?</p>
        <div className='flex flex-wrap gap-4 justify-center'>
          {approx && approx.map((item , index) =>{
             return (
              <div key={index}  onClick={()=> handleClickApprox(index)} className='flex justify-center items-center'>
             <p className={idEleapprox == index ? 'text-xl text-gray-600 border rounded-lg py-2 px-6 hover:scale-90 bg-[#F5A31B] ' :
               'text-xl text-gray-600 border rounded-lg py-2 px-6 hover:scale-90 '
            }>{item}</p>
             </div>
             )
          })}
           
          
        </div>
         </div>   
      </div>   

    </div>
  )
}

export default ApproximateSection