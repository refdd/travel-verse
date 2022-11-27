import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import { PackageS } from "../data/dammyData";
import image1 from "../public/assets/images/packageShortImage15942006035f05921b2d1cd.jpg";

function MainCard() {
  const { handleClick, isClicked, setIsClicked } = useStateContext();
  const [singelPackage, setSingelPackage] = useState(null);
  useEffect(() => {
    const fliterPackageByCountry = PackageS.filter((item) =>
      item.night.includes(isClicked.type)
    );
    setSingelPackage(fliterPackageByCountry);
  }, [isClicked]);
  console.log(singelPackage);
  return (
    <>
      {singelPackage &&
        singelPackage.map((item, index) => {
          return (
            <div className="min-w-[350px] md:min-w-0 md:w-[24%] mx-auto px-2 py-1 md:px-0 md:mx-0 mt-5">
              <div className="flex flex-col gap-2 py-1 px-2 border-2 shadow-xl rounded-lg md:px-0 md:shadow-none md:border-none ">
                {/* image and countary*/}
                <div key={index} className="relative overflow-hidden h-44  ">
                  <Image
                    src={item.imageUrl}
                    width={500}
                    height={400}
                    layout={"intrinsic"}
                    loading={"lazy"}
                    className={"rounded-lg "}
                  />
                  <div className="absolute top-0 left-0 w-full h-[98%] bg-[#00000040] rounded-t-lg md:h-full cu"></div>
                  <div className="absolute top-[16px] left-[22px] w-44 h-autp bg-[#00b1ff99] rounded-xl py-1">
                    <p className="text-white text-lg font-serif capitalize text-center my-auto">
                      {item.night}
                    </p>
                  </div>
                </div>
                {/* content */}
                <div className="container flex flex-col gap-2">
                  <h1 className="text-xl text-gray-800 font-serif font-semibold capitalize ">
                    {item.type}
                  </h1>
                  <p className="text-lg text-gray-700 font-serif font-medium capitalize">
                    {item.start}
                  </p>
                </div>
                {/* price and days  */}
                <div className="container flex flex-col gap-2">
                  {/* days and reate */}
                  <div className="flex  justify-between  ">
                    <p className=" text-xl text-gray-700 font-mono font-semibold md:font-normal md:text-lg capitalize">
                      {item.days} / 10 Night
                    </p>
                    <p className="text-xl text-gray-700 text-right font-serif font-medium capitalize">
                      from{" "}
                    </p>
                  </div>
                  {/* price */}
                  <div className="flex justify-between">
                    <p className="flex gap-1 ">
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                    </p>

                    <p className="text-3xl text-[#00AEFF] font-mono font-semibold md:font-normal md:text-xl ">
                      <span className="text-xl md:text-sm">$</span>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default MainCard;
