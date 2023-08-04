"use client"
import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { PiUsersThree } from "react-icons/pi"
import {SlWallet} from "react-icons/sl"
import {AiFillDollarCircle} from "react-icons/ai"
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='py-12 mx-[10px] sm:w-[80%] md:w-[60%] sm:mx-auto lg:flex lg:flex-row-reverse lg:gap-x-10 lg:w-[84%]'>
            <div className='w-[100%]'>
                <h1 className='text-[#D6AE68] lg:text-lg'>Who We Are_____</h1>
                <h2 className='text-[#3d065f] pt-2 text-2xl lg:text-5xl overflow-hidden font-semibold'>Know About Us</h2>
                <p className='text-sm pt-8 opacity-70 lg:text-[16px]'>Eius modi soluta, sunt nulla odio deserunt aliquam tenetur commodi esse eveniet repellendus culpa neque? Molestiae officia architecto laborum ipsam.
                </p>
                <p className='text-sm pt-8 opacity-70 lg:text-[16px]'>Quis debitis at dolorem dolorum quae? Cum possimus natus esse molestias quaerat quo tempore harum, velit doloremque, facere labore assumenda sed explicabo. Temporibus illum, aliquid, voluptatem sint culpa fugit consequuntur in animi magni rerum distinctio sed ut libero incidunt sapiente.</p>
                <div className='py-5 bg-white'>
                    <button className='flex items-center bg-[#D5A953] text-sm font-medium py-2 px-3 border-[#D5A953] border-2 hover:bg-white hover:text-[#D5A953] rounded-md text-white '>Read More <HiArrowNarrowRight className='text-[white] bg-[#836b1c] mx-3 rounded-full w-6 h-6 p-1' /></button>
                </div>
                <hr />
                <div className='grid grid-cols-1 sm:grid-cols-3 my-8 space-y-5 sm:space-y-0'>
                    <div className='flex space-x-2 text-[#d5a953] mx-auto w-40 '>
                        <PiUsersThree className='text-5xl' />
                        <div>
                            <p className='text-[#3d065f]'>58K</p>
                            <p >Happy Users</p>
                        </div>
                    </div>
                    <div className='flex space-x-2 text-[#d5a953] mx-auto w-40'>
                        <SlWallet className='text-5xl'  />
                        <div>
                            <p className='text-[#3d065f]'>30+</p>
                            <p>Total Wallet</p>
                        </div>
                    </div>
                    <div className='flex space-x-2 text-[#d5a953] mx-auto w-40'>
                        <AiFillDollarCircle className='text-5xl'  />
                        <div>
                            <p className='text-[#3d065f]'>235m</p>
                            <p>Deposit</p>
                        </div>
                    </div>
                </div>
            </div>
                <Image src="/about2.png" className='w-[90%] mx-auto border-[#d5a953] border-2 rounded-md p-5 lg:h-[90%] lg:my-auto' alt='img' width={400} height={400} />
        </div>
    )
}

export default About