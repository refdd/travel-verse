import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/assets/images/setting163264951061504126eaf41.png"
import {FiMenu} from "react-icons/fi"
import { useState } from 'react'
import { ListGroup } from 'flowbite-react'
function NavBar() {
  const [showMenu  , setShowMenu ] = useState(false)
  return (
    <div className=' relative bg-white '>
        <div className=' container md:w-[90%] mx-auto '>
        <div className='flex items-center justify-between py-3 '>
          
     {/* image */}
     <div > 
     <Image
     src={logo}
     width={180}
     height={35}
     />
     </div>
     {/* icon */}
    <div 
    
    className='md:hidden cursor-pointer '>
      <FiMenu
      onClick={()=> setShowMenu(!showMenu)}
      className='cursor-pointer'
      size={30}  />
    </div>
     {/* links */}
     <ul className=' gap-7 items-center hidden md:flex '>
  <li className='text-lg font-Roboto capitalize hover:text-[#00AEFF] '>
    <Link href={"/Destaintion"}>
        home
    </Link>
  </li>
  <li className='text-lg font-Roboto capitalize hover:text-[#00AEFF] '>
    <Link href={"/"}>
        destination
    </Link>
  </li>
  <li className='text-lg font-Roboto capitalize hover:text-[#00AEFF] '>
    <Link href={"/"}>
        About Us
    </Link>
  </li>
  <li className='text-lg font-Roboto capitalize hover:text-[#00AEFF] '>
    <Link href={"/"}>
       Contect Us
    </Link>
  </li>
  <li className='text-lg font-Roboto capitalize hover:text-[#00AEFF] '>
    <Link href={"/"}>
        Blog
    </Link>
  </li>
     </ul>
     {/*login and Register  */}
     <div className=' gap-4  hidden md:flex'>
       <button className='py-1 px-4  font-Roboto bg-[#00AEFF] rounded-lg  text-white '>Login</button> 
       <button className='py-1 px-4  font-Roboto bg-white rounded-lg border'>Register</button> 
     </div> 
     
        </div> 
        {/* menu bar  */}
     <div className={ showMenu ? 'relative md:hidden transition-all duration-700 delay-200' :'relative md:hidden h-0  transition-all duration-700'}>
      <div 
      style={{ borderWidth:"17px", borderStyle: "solid", borderColor: " transparent  transparent #e6eef5  transparent "}}
      className='absolute top-[-30px] right-0 '></div>
      <ListGroup
      className='bg-[#e6eef5] divide-y-2 divide-gray-500'
      >
    <ListGroup.Item>
     Home
    </ListGroup.Item>
    <ListGroup.Item>
    Destination
    </ListGroup.Item>
    <ListGroup.Item>
    About Us
    </ListGroup.Item>
    <ListGroup.Item>
    Contect Us
    </ListGroup.Item>
    <ListGroup.Item>
    Blog
    </ListGroup.Item>
  </ListGroup>
     </div>
        </div>

    </div>
  )
}

export default NavBar