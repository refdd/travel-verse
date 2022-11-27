import React, { useRef, useState } from "react";
import {
    MdArrowBackIosNew,
    MdArrowForwardIos,
} from "react-icons/md";
// import CardPackageTypes from "./CardPackageTypes";
import Link from "next/link";
import MainCard from "./MainCard";
function    GroupPackage({packages , type}) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
console.log(clientWidth)
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    
    }
  };

  return (
    <div className="h-full space-y-0.5 md:space-y-2  mt-4 ">
    
      <div className="group  relative md:ml-2 ">
        <MdArrowBackIosNew
        
          className={`md:hidden absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
           cursor-pointer  transition hover:scale-125 text-gray-400  ${
             !isMoved && " hidden"
           }`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex  items-center gap-5 overflow-x-scroll  scrollbar-hide  md:flex-wrap md:gap-1 md:justify-between md:w-[90%] md:mx-auto "
        >
        <MainCard packages={packages}/>
        </div>
        <MdArrowForwardIos
        

          className="md:hidden  absolute top-0 bottom-0   right-2 z-40 m-auto h-9 w-9
            cursor-pointer  transition hover:scale-125 text-gray-400"
          onClick={() => handleClick("right")}
        />
      </div>
      <div className="  group w-full pt-10  md:pt-7 flex justify-center items-center  ">
        <Link href={`/`}>
        <button className=" wrapper w-[50%] md:w-60 group-hover:text-white md:text-xl md:py-1 bg-[#00AEFF] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                 <span className="absolute w-0 top-0 left-0 b-b-width bg-blue-700 -z-10 h-full"></span>
                  View All
                  </button>
        </Link>
              
            </div>
    </div>
  );
}

export default GroupPackage;
