import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function BottomInquire() {
  const [showBottom , setshowBottom] = useState(true)
 
  const handleShowBottom = () =>{
    setshowBottom(false)
  }
  
  return (
    <div className={ showBottom ? 'md:hidden fixed bottom-0 container mx-auto z-50  ': " hidden" }>
      <Link href={"#nextStep"}>
      <div
      onClick={handleShowBottom}
      className='twark flex justify-center items-center py-2 bg-[#09415D] rounded-lg   '>
            <button className='text-2xl text-white font-Poppins '>
                next Step
            </button>
        </div>
      </Link>
        
    </div>
  )
}

export default BottomInquire