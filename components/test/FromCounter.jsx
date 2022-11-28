import React from 'react'
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FromCounter() {
    
  const [aduitsNumber, setAduitsNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [InfantsNumber, setInfantsNumber] = useState(0);
  const hanbleIncrement = (type) => {
    if (type == "aduits") {
      setAduitsNumber((curent) => curent + 1);
    }
    if (type == "children") {
      setChildrenNumber((curent) => curent + 1);
    }
    if (type == "Infants") {
        setInfantsNumber((curent) => curent + 1);
    }
  };
  const hanbleDesIncriment = (type) => {
    if (aduitsNumber >= 1 && type == "aduits") {
      setAduitsNumber((curent) => curent - 1);
    }

    if (childrenNumber >= 1 && type == "children") {
      setChildrenNumber((curent) => curent - 1);
    }
  };
  return (
    <div className="flex flex-col  container mx-auto gap-7 justify-center md:flex-row md:flex-wrap   ">
                <div className=" flex flex-col gap-2 md:w-[45%]">
                  <h1 className="text-sm text-[#777]">Adults(+12)</h1>
                  <div className="flex justify-center items-center border bg-white rounded-lg py-3 ">
                    <div
                      onClick={() => hanbleIncrement("aduits")}
                      className="w-3/6 bg-white cursor-pointer  flex justify-center items-center"
                    >
                      <AiOutlinePlus size={24} color="#777" />
                    </div>
                    <p className="w-3/6 text-center border-x  bg-white text-2xl text-[#777] ">
                      {aduitsNumber}
                    </p>
                    <div
                      onClick={() => hanbleDesIncriment("aduits")}
                      className="w-3/6 bg-white cursor-pointer  flex justify-center items-center  "
                    >
                      <AiOutlineMinus size={24} color="#777" />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 md:w-[45%] ">
                  <h1 className="text-sm text-[#777]"> children(+12)</h1>
                  <div className="flex justify-center items-center border bg-white rounded-lg py-3">
                    <div
                      onClick={() => hanbleIncrement("children")}
                      className="w-3/6 bg-white  cursor-pointer   flex justify-center items-center "
                    >
                      <AiOutlinePlus size={24} color="#777" />
                    </div>
                    <p className="w-3/6 text-center border-x  bg-white text-2xl text-[#777]  ">
                      {childrenNumber}
                    </p>
                    <div
                      onClick={() => hanbleDesIncriment("children")}
                      className="w-3/6 bg-white cursor-pointer  flex justify-center items-center  "
                    >
                      <AiOutlineMinus size={24} color="#777" />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 flex-1 ">
                  <h1 className="text-sm text-[#777]"> Infants</h1>
                  <div className="flex justify-center items-center border bg-white rounded-lg py-3">
                    <div
                      onClick={() => hanbleIncrement("children")}
                      className="w-3/6 bg-white  cursor-pointer   flex justify-center items-center "
                    >
                      <AiOutlinePlus size={24} color="#777" />
                    </div>
                    <p className="w-3/6 text-center border-x  bg-white text-2xl text-[#777]  ">
                      {InfantsNumber}
                    </p>
                    <div
                      onClick={() => hanbleDesIncriment("Infants")}
                      className="w-3/6 bg-white cursor-pointer  flex justify-center items-center  "
                    >
                      <AiOutlineMinus size={24} color="#777" />
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default FromCounter