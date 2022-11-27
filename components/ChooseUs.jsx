import Image from 'next/image'
import React from 'react'
import imagesettin from "../public/assets/images/setting.png"
function ChooseUs() {
  return (
    <div className='pt-5 container md:w-[90%]  mx-auto md:pt-20 '>
         <div className='flex flex-col gap-5 md:flex-row '>
            <div className=' wrapper group flex gap-3 items-center py-3 px-3 border shadow-lg rounded-lg'>
                {/* lauput hover */}
                <div className=' PrefectCard absolute bottom-0 right-0 w-full  bg-[#00397994] rounded-lg z-10'></div>
                {/* image  */}
                <div>
                    <Image
                    src={imagesettin}
                    width={60}
                    height={60}
                    layout="intrinsic"
                    loading='lazy'
                    className='rounded-full z-20'
                    />
                </div>
                {/* content */}
                <div className='flex flex-col gap-2'>
                  <h1 className='text-xl  md:text-[20px] delay-200 z-20  group-hover:text-white text-gray-900 font-bold md:font-normal font-serif capitalize'>Free Cancelation</h1>
                  <p className='text-lg md:text-[16px] delay-200 z-20 text-[#777] group-hover:text-white font-medium md:font-normal font-serif capitalize'>cencel any time and receve a full refund</p>
                </div>
            </div>
            <div className=' wrapper group flex gap-3 items-center py-3 px-3 border shadow-lg rounded-lg'>
                {/* lauput hover */}
                <div className=' PrefectCard absolute bottom-0 right-0 w-full  bg-[#00397994] rounded-lg z-10'></div>
                {/* image  */}
                <div>
                    <Image
                    src={imagesettin}
                    width={60}
                    height={60}
                    layout="intrinsic"
                    loading='lazy'
                    className='rounded-full z-20'
                    />
                </div>
                {/* content */}
                <div className='flex flex-col gap-2'>
                  <h1 className='text-xl  md:text-[20px] delay-200 z-20  group-hover:text-white text-gray-900 font-bold md:font-normal font-serif capitalize'>Free Cancelation</h1>
                  <p className='text-lg md:text-[16px] delay-200 z-20 text-[#777] group-hover:text-white font-medium md:font-normal font-serif capitalize'>cencel any time and receve a full refund</p>
                </div>
            </div>
            <div className=' wrapper group flex gap-3 items-center py-3 px-3 border shadow-lg rounded-lg'>
                {/* lauput hover */}
                <div className=' PrefectCard absolute bottom-0 right-0 w-full  bg-[#00397994] rounded-lg z-10'></div>
                {/* image  */}
                <div>
                    <Image
                    src={imagesettin}
                    width={60}
                    height={60}
                    layout="intrinsic"
                    loading='lazy'
                    className='rounded-full z-20'
                    />
                </div>
                {/* content */}
                <div className='flex flex-col gap-2'>
                  <h1 className='text-xl  md:text-[20px] delay-200 z-20  group-hover:text-white text-gray-900 font-bold md:font-normal font-serif capitalize'>Free Cancelation</h1>
                  <p className='text-lg md:text-[16px] delay-200 z-20 text-[#777] group-hover:text-white font-medium md:font-normal font-serif capitalize'>cencel any time and receve a full refund</p>
                </div>
            </div>
           
         </div>
    </div>
  )
}

export default ChooseUs