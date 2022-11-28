import Link from "next/link";
import React from "react";
import bg from "../public/assets/images/tailor.jpg";
function DellorYourTrips() {
  return (
    <div className="pt-10">
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-no-repeat  bg-cover "
      >
        <div className="flex flex-col justify-center items-center w-full h-full gap-2  py-12 bg-[#003979c7]">
          <h1 className="text-2xl font-semibold font-Roboto text-white capitalize">
            Personalize Your Trip
          </h1>
          <p className=" md:text-lg text-[15px] text-white font-Roboto capitalize text-center  md:px-36">
            Personalize your trip now! We've prepared a selection of the best
            travel destinations all across the world to pick from. You'll find
            the best packages to Egypt, Jordan, Dubai, Morocco, Turkey, Greece,
            Kenya, Mexico, Peru, India, and many more suiting all tastes,
          
          </p>
          <div className="  group w-full md:mt-7  flex justify-center items-center  ">
            <Link href={`/`}>
              <button className=" wrapper w-[50%] md:w-60 group-hover:text-white md:text-xl md:py-1 bg-[#00AEFF] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                <span className="absolute w-0 top-0 left-0 b-b-width bg-blue-700 -z-10 h-full"></span>
                your Trip
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DellorYourTrips;
// <div
//   style={{ backgroundImage: `url(${bg.src})` }}
//   className="bg-no-repeat bg-cover bg-center w-full relative"
// >
//   {/* lauout */}
//   {/* content */}
//   <div className="">
//     <h3 className="text-xl text-white font-Roboto font-semibold capitalize text-center mb-5 z-20">
//       Dellor your Trips
//     </h3>
//     <p className="text-sm font-Roboto capitalize text-white font-medium  mb-5">
//       Personalize your trip now! We've prepared a selection of the best
//       travel destinations all across the world to pick from. You'll find the
//       best packages to Egypt, Jordan, Dubai, Morocco, Turkey, Greece, Kenya,
//       Mexico, Peru, India, and many more suiting all tastes, budgets, and
//       time schedules. But if you still can't find the right match, don't
//       worry; we can tailor your trip according to your preferences! We take
//       care of booking your accommodation, arranging your transportation,
//       ensuring that you are accompanied by the most professional tour
//       guides, along with all the other minor details that will make your
//       trip unforgettable. Come with us and let us show you a fantastic
//       adventure awaiting for you. Inquire Now!
//     </p>
//     {/* <div className="  group w-full pt-10  md:pt-16 flex justify-center items-center  ">
//     <Link href={`/`}>
//     <button className=" wrapper w-[50%] md:w-60 group-hover:text-white md:text-xl md:py-1 bg-[#00AEFF] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
//              <span className="absolute w-0 top-0 left-0 b-b-width bg-blue-700 -z-10 h-full"></span>
//               your Trip
//               </button>
//     </Link>

//         </div> */}

//   </div>
//   <div className="absolute top-0 left-0 w-full h-full bg-[#0000008c] z-10"></div>

// </div>
