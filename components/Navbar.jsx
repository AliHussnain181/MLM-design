"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai"
import Link from 'next/link'
import { ImCross } from "react-icons/im"
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-[#481175] text-white md:hidden'>
        <div className='flex justify-between items-center mx-2 h-14 '>
          <Image className='w-28 md:hidden' src="/logo1.png" width={200} height={200} alt='logo' />
          {
            isOpen ?
              <AiOutlineMenu size={27} className='cursor-pointer md:hidden ' onClick={toggleMenu} />
              :
              <RxCross1 size={27} className='cursor-pointer md:hidden ' onClick={toggleMenu} />
          }
        </div>
        <div className={`bg-[#3D065F] absolute top-0  h-[100vh] w-[19rem] flex flex-col py-4 px-5 text-[14.3px]  ${isOpen ? '-left-80' : 'left-0'} transition-all duration-300 `}>
          <ImCross className='relative top-1 left-60 text-red-600' onClick={toggleMenu} />
          <Link className='border-gray-700 border-b-[0.1rem] py-1.5' href="/">Home</Link>
          <Link className='border-gray-700 border-b-[0.1rem] py-1.5' href="/">About</Link>
          <Link className='border-gray-700 border-b-[0.1rem] py-1.5' href="/">Plans</Link>
          <Link className='border-gray-700 border-b-[0.1rem] py-1.5' href="/">Blog</Link>
          <Link className='border-gray-700 border-b-[0.1rem] py-1.5' href="/">Contact</Link>
          <button className='bg-[#FFFFFF] text-[#d5a953] px-1 w-24 py-1.5 my-2 rounded-md border-[#d5a953] border-2'>Login Now</button>
        </div>
      </div>
      <div className='bg-[#481175] h-2 md:h-16 flex justify-between items-center  px-20'>
        <div>
          <Image className='w-28 hidden md:block' src="/logo1.png" width={200} height={200} alt='logo' />
        </div>
        <div className='space-x-7 text-white hidden md:block'>
          <Link href="">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#plan">Plans</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact</Link>
          <button className='bg-[#d5a953] text-[#ffff] font-bold text-sm hover:bg-[#481379] px-1 w-24 py-1 my-2 rounded-md border-[#d5a953] border-2'>Login Now</button>
        </div>
      </div>
    </>
  )
}

export default Navbar