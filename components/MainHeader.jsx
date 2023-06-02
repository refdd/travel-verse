// import { Carousel } from 'flowbite-react'
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import image1 from "../public/assets/images/1.webp";
import image2 from "../public/assets/images/3.webp";
function MainHeader() {
  return (
    <div className=" relative h-screen ">
      <div className="absolute top-0 left-0 h-full w-full bg-[#0000003b] z-20"></div>
      <div className="flex flex-col md:justify-center md:items-center gap-5 z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className=" text-center text-2xl md:text-6xl text-white font-Roboto  capitalize  ">
          Bast Travel Agent{" "}
        </h1>
        <p className="text-white text-lg md:text-xl font-Roboto  capitalize text-center">
          Discaver And bool Amazing Things to bo al Exclusive Prices
        </p>
        <button className="text-white uppercase text-2xl font-Roboto  py-1 px-7 rounded-2xl hover:scale-95 bg-[#0039797a]">
          Explore
        </button>
      </div>
      <Carousel slideInterval={5000}>
        <div
          style={{ backgroundImage: `url(${image1.src})` }}
          className="   w-full h-screen  bg-no-repeat  bg-cover bg-right-top	   "
        ></div>
        <div
          style={{ backgroundImage: `url(${image2.src})` }}
          className="   w-full h-screen  bg-no-repeat  bg-cover bg-right-top	   "
        ></div>
        <div
          style={{ backgroundImage: `url(${image1.src})` }}
          className="   w-full h-screen  bg-no-repeat  bg-cover bg-right-top	   "
        ></div>
        <div
          style={{ backgroundImage: `url(${image2.src})` }}
          className="   w-full h-screen  bg-no-repeat  bg-cover bg-right-top	   "
        ></div>
        <div
          style={{ backgroundImage: `url(${image1.src})` }}
          className="   w-full h-screen  bg-no-repeat  bg-cover bg-right-top	   "
        ></div>
      </Carousel>
    </div>
  );
}

export default MainHeader;
