import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import ApproximateSection from "./ApproximateSection";
import ExactDateSection from "./ExactDateSection";

function TravelTime() {
  const { handleDate,date,setDate} =useStateContext();
  const [ExactDate , setExactDate]=useState(false)
  const [Approximate , setApproximate]=useState(false)
  const handleOnChange = () => {
    if(Approximate){
      setApproximate(false)
    }
    setExactDate(!ExactDate);
  };
  const handleOnChangeDAte = () => {
    if(ExactDate){
      setExactDate(false)
    }
    setApproximate(!Approximate);
  };
  return (
    <div className={ExactDate || Approximate ? "container mx-auto pt-10 " : "container mx-auto pt-10 md:w-[60%]"}>
      <h1 className="text-2xl text-[#09415d] text-center font-Roboto font-bold">
        When will you travel?
      </h1>
      <div className="flex flex-col gap-3 pt-20 md:items-center md:flex-row md:justify-center ">
       <div className={Approximate ? "flex flex-col gap-4 " : "flex flex-col gap-4 " }>

       <div class="flex items-center mb-4  gap-3   ">
          <input
            id="default-checkbox"
            type="checkbox"
            onChange={handleOnChange}
            checked={ExactDate}
            class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
           <p className="text-xl text-gray-700 font-Roboto font-medium capitalize"> I know the exact dates of my trip</p>
        </div>
        <div class="flex items-center mb-4  gap-3  ">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={Approximate}
            onChange={handleOnChangeDAte}
            class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
           <p className="text-xl text-gray-700 font-Roboto font-medium capitalize"> 
 I have approximate dates.</p>
        </div>

       </div>
      
          {ExactDate && <ExactDateSection/>}
          {Approximate && <ApproximateSection/>}
        
      </div>
      <hr />
         
         <div className="flex gap-2 pt-7 justify-around  items-center ">
             <button className="text-xl text-gray-500 border rounded-lg px-7 py-2  ">
              <Link href={"/Destaintion"}>
              Back
              </Link>
             </button>
             <button className="text-xl text-white bg-[#09415D] px-7 py-2 rounded-lg  ">
             <Link href={"/FromInquire"}>
             Next Step
              </Link>
              
             </button>
         </div>
    </div>
  );
}

export default TravelTime;
