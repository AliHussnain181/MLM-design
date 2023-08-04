import Image from 'next/image'
import React from 'react'
import { MdPersonAddAlt1 } from "react-icons/md"
import { BsPersonCheckFill } from "react-icons/bs"
import { FaExchangeAlt } from "react-icons/fa"

const Started = () => {
  return (
    <div className='bg-white mt-16 lg:flex lg:flex-row-reverse'>
      <div className='mt-16 lg:my-40 w-[94%] sm:w-[90%] md:w-[80%] mx-auto'>
        <Image className='object-center mx-auto' src='/start.png' alt='start' width={500} height={500} />
      </div>
      <div className='mt-11 lg:my-40 w-[94%] sm:w-[90%] md:w-[80%]  mx-auto xl:mx-24'>
        <div className='w-[94%] sm:w-[90%] mx-auto'>
          <h1 className='text-[#d5a953] text-[18px]'>How To Get Started_______</h1>
          <h2 className='text-[#3D065F] sm:font-[500] sm:text-[39px] text-[26px] mt-2 overflow-hidden'>We have some easy steps!</h2>
          <p className='opacity-80 mt-1' >Deserunt hic consequatur ex placeat! atque repellendus inventore quisquam, perferendis, eum reiciendis quia nesciunt fuga magni.</p>
        </div>
        <div className='mt-6 space-y-6  '>
          <div className='flex'>
            <div className='w-48' >
              <MdPersonAddAlt1 className='bg-[#d5a953] px-[18px] mx-auto  flex justify-center items-center text-[69px] text-white rounded-md' />
            </div>
            <div>
              <h1 className='text-[#d5a953] text-[20px] leading-6'>Create Account</h1>
              <p className='text-sm opacity-80'>Repellendus consequuntur vel nam numquam labore reiciendis rem neque eveniet, dicta molestias.</p>
            </div>
          </div>
          <div className='flex '>
            <div className='w-48' >
              <BsPersonCheckFill className='bg-[#d5a953] px-[18px] mx-auto  flex justify-center items-center text-[69px] text-white rounded-md' />
            </div>
            <div>
              <h1 className='text-[#d5a953] text-[20px] leading-6'>Purchase Investment Plan</h1>
              <p className='text-sm opacity-80'>Repellendus consequuntur vel nam numquam labore reiciendis rem neque eveniet, dicta molestias.</p>
            </div>
          </div>
          <div className='flex  '>
            <div className='w-48' >
              <FaExchangeAlt className='bg-[#d5a953] px-[22px] mx-auto  flex justify-center items-center text-[69px] text-white rounded-md' />
            </div>
            <div>
              <h1 className='text-[#d5a953] text-[20px] leading-6'>Get Profit</h1>
              <p className='text-sm opacity-80'>Repellendus consequuntur vel nam numquam labore reiciendis rem neque eveniet, dicta molestias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Started