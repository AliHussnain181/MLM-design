"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { BsCheckCircle } from "react-icons/bs"
import Deposit from './Deposit'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Started from './Started'

const Plans = () => {

    const categories = [
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" },
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" },
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" },
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" },
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" },
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" },
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" },
        { name: "Orbit", pct: "9%", profit: "Every Week", rpt: "30 Times", invest: "30000" }
    ]

    const images = [
        "https://product.geniusocean.com/genius-hyip-light/assets/images/c6lRCwhW1649489630.png",
        "https://product.geniusocean.com/genius-hyip-light/assets/images/c6lRCwhW1649489630.png",
        "https://product.geniusocean.com/genius-hyip-light/assets/images/iCNPpAfs1649489626.png",
        "https://product.geniusocean.com/genius-hyip-light/assets/images/FCqczG9Y1649489623.png",
        "https://product.geniusocean.com/genius-hyip-light/assets/images/YQdx4Anl1649489620.png",
        "https://product.geniusocean.com/genius-hyip-light/assets/images/d0Skf6Cg1649489615.png",
        "https://product.geniusocean.com/genius-hyip-light/assets/images/LL6ZfKxN1649489611.png",

    ]


    const galleryRef = useRef(null);
    const [scrollEnabled, setScrollEnabled] = useState(true);

    const scrollLeft = () => {
        galleryRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        galleryRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    };




    return (
        <div id='plan' className='bg-[#F3F9FF] overflow-hidden'>
            <div className='text-center my-7'>
                <h1 className='text-[#D6AE68]'>Profit Calculator______</h1>
                <p className='text-[#3d065f] text-[23px]'>Best Investment Packages</p>
                <p className='opacity-70 text-[16px] mx-auto text-center w-[80%] md:w-[63%] xl:w-[51%]'>Deserunt hic consequatur ex placeat! atque repellendus inventore quisquam, perferendis, eum reiciendis quia nesciunt fuga magni.</p>
            </div>
            <div className='space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-y-4 md:grid-cols-3 xl:grid-cols-4 lg:mx-24'>
                {categories.map((i) =>
                    <div key={i} className='bg-[#ffff] w-[90%] mx-auto rounded-md hover:bg-[#3d065f] hover:text-white '>
                        <div className='flex justify-between mx-4 my-5 border-[#536479] border-b-[1px] pb-7'>
                            <div className='my-2'>
                                <h1 className='text-[#D6AE68] text-lg'>{i.name}</h1>
                                <p className='text-sm'>Most Popular</p>
                            </div>
                            <div className='bg-[#e5e7eb] py-3 px-3 rounded-sm'>
                                <p className='text-[#D6AE68] text-xl text-center'>{i.pct}</p>
                                <h1 className='text-sm text-black'>Return</h1>
                            </div>
                        </div>
                        <div className='my-5 space-y-3'>
                            <div className='flex items-center justify-between mx-5'>
                                <div className='flex items-center'>
                                    <BsCheckCircle className='text-[#D6AE68]' />
                                    <span className='px-1 text-sm'>Profit</span>
                                </div>
                                <p className='text-[15px]'>{i.profit}</p>
                            </div>
                            <div className='flex justify-between mx-5'>
                                <div className='flex items-center'>
                                    <BsCheckCircle className='text-[#D6AE68] ' />
                                    <p className='px-1 text-sm' >Capital will back</p>
                                    <p className='bg-[#0C67A3] rounded-3xl text-[11px] text-white py-[2px] px-2'>yes</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-between mx-5'>
                                <div className='flex items-center'>
                                    <BsCheckCircle className='text-[#D6AE68]' />
                                    <span className='px-1 text-sm'>Repeatable</span>
                                </div>
                                <p className='text-[15px]'>{i.rpt}</p>
                            </div>
                        </div>
                        <div className='mx-auto text-center space-y-6 my-5'>
                            <h1 className='text-[#D6AE68] text-lg'>{i.invest}RS</h1>
                            <button className='text-white bg-[#D5A953] w-[88%] px-2 py-[15px] text-sm rounded-md '>Invest Now</button>
                        </div>
                    </div>
                )}
            </div>
            <div className='text-center my-12'>
                <button className='text-[#D6AE68] border-[#D6AE68] border-2 text-sm rounded-md bg-transparent py-3 px-6 hover:bg-[#D5A953] hover:text-white'>All Packages</button>
            </div>
            <div className='flex justify-center w-[94%] sm:w-[80%] lg:w-[72%] overflow-hidden  mx-auto'>
                <div
                    className={`flex ${scrollEnabled ? 'overflow-x-auto' : ''} scrollb`}
                    ref={galleryRef}
                >
                    {images.map((image, index) => (
                        <div key={index} className='flex-none h-[9.22rem]'>
                            <Image
                                src={image}
                                className='w-40 bg-white m-2 sm:m-5 py-4 px-2 border-gray-200 border-[2px] rounded-sm'
                                alt='imp'
                                width={300}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center w-12 h-6 mx-auto overflow-hidden'>
                {scrollEnabled && (
                    <div className='flex justify-between'>
                        <button
                            onClick={scrollLeft}
                            className='flex justify-center mb-4 mx-auto w-5 hover:border-[#D6AE68] hover:border-[2px] rounded-full py-[6px]'
                        >
                            <button className='bg-[#D6AE68] w-[6px] h-[6px] rounded-full'></button>
                        </button>
                        <button
                            onClick={scrollRight}
                            className='flex justify-center mb-4 mx-auto w-5 hover:border-[#D6AE68] hover:border-[2px] rounded-full py-[6px]'
                        >
                            <button className='bg-[#D6AE68] w-[6px] h-[6px] rounded-full'></button>
                        </button>
                    </div>
                )}
            </div>
            <div className='mt-12 lg:mt-20 text-center text-white flex flex-col items-center gap-y-5 sm:gap-y-0 sm:flex-row sm:justify-center sm:space-x-6 '>
                <button className='bg-[#D5A953] rounded-md text-[15px] w-52 py-3'>Deposit Log</button>
                <button className='rounded-md text-[#D5A953] text-[15px] w-52 py-[10px] bg-transparent border-[#D5A953] border-[2px]'>Withdraw Log</button>
            </div>
            <Deposit />
            <Started/>
        </div>
    )
}

export default Plans