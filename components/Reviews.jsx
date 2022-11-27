import React from 'react'
import image1 from '../public/assets/images/testimonial.png'
import HeaderSection from './HeaderSection'
import SliderReviews from './SliderReviews'
function Reviews() {
  return (
    <div className='pt-10'>
        <div style={{ backgroundImage: `url(${image1.src})` }}
    className=" w-full bg-no-repeat  bg-cover bg-[#e6eef5] ">
          <HeaderSection title={"Recent Reviews"} disce={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
        </div>
        <SliderReviews/>
    </div>
  )
}

export default Reviews