import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai"
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi"
import Link from 'next/link'
import Navbar from './Navbar'

const Header = () => {

    const categories = [
        'PK',
        'INR',
        'BDT',
        'USA'
    ]
    const languages = [
        'EN',
        'UR',
        'AR',
    ]


    return (
        <div className='w-[100%]'>
            <div className='bg-[#410971] h-[5.8rem] md:h-10 lg:h-[4rem] py-3 md:py-1 overflow-hidden md:flex md:justify-between '>
                <div className='flex justify-center gap-x-3'>
                    <div className='flex text-3xl overflow-hidden md:mx-20 lg:my-auto '>
                        <BiLogoLinkedin className='w-[26px] h-[26px]  text-blue-600 bg-transparent  mx-[2px] border-gray-500 border-[1px] px-[3px]' />
                        <AiOutlineTwitter className='w-[26px] h-[26px]  text-blue-400 bg-transparent mx-[2px] border-gray-500 border-[1px] px-[3px] ' />
                        <BiLogoFacebook className='w-[26px] h-[26px]  text-blue-600 bg-transparent  mx-[2px] border-gray-500 border-[1px] px-[3px]' />
                    </div>
                    <select className='bg-[#410971] px-[3px] border-[1px] h-7 w-[57px] border-gray-600 text-white outline-0 text-[13px] md:hidden' name='item' id='item'>
                        {categories.map((item) =>
                            <option className='bg-[#f5f5f7] text-black' key={item} value="">{item}</option>
                        )}
                    </select>
                </div>
                <div className='text-white text-[13px] flex justify-center gap-x-2 py-[7px] md:py-0 md:my-auto overflow-hidden md:mx-14'>
                    <p>+0123456789</p>
                    <Link className='border-gray-600 border-l-[1px] border-r-[1px] px-2 h-6' href="" >admin@geniusocean.com</Link>
                    <select className='bg-[#410971] px-[3px] border-[1px] h-7 md:h-6 w-[57px] border-gray-600 text-white outline-0 text-[13px] ' name='item' id='item'>
                        {languages.map((item) =>
                            <option className='bg-[#f5f5f7] text-black' key={item} value="">{item}</option>
                        )}
                    </select>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Header