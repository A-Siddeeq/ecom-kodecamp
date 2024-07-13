import React from 'react'
import ps5 from '../assets/ps5.png'
import woman from '../assets/woman.png'
import speaker from '../assets/speaker.png'
import perfume from '../assets/perfume.png'

const Featured = () => {
  return (
    <div className='my-12'>
        <div className="flex flex-col ml-12 gap-y-10">

            <div className='flex items-center gap-x-4'>
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className='font-Poppins font-semibold text-[16px] text-[#DB4444] leading-[20px]'>Featured</p>
            </div>

            <div className='flex'>
                 <h1 className='font-Inter font-semibold text-[36px] leading-[48px]'>New Arrival</h1>
            </div>

            <div className='flex my-4 gap-4'>
                <div className='relative w-1/2 h-[600px] bg-black'>
                <img src={ps5} alt="" className='h-full'/>
                 <div className='absolute bottom-0 flex flex-col gap-y-2 pl-6'>
                   <p className='font-Inter font-semibold text-[24px] leading-[24px] text-white'>PlayStation 5</p>
                   <p className='font-Poppins font-normal text-[14px] leading-[21px] text-white'>Black and White version of the PS5 <br />  coming out on sale</p>
                   <p className='font-Poppins font-medium text-[16px] leading-[24px] text-white underline'>Shop Now</p>
                 </div>
                </div>

                <div className='w-1/2 h-[600px] grid grid-cols-2 grid-rows-2 gap-4'>
                <div className='relative col-span-2 row-span-1 flex justify-end bg-black'>
                <img src={woman} alt="" className='h-full'/>
                 <div className='absolute left-0 bottom-0 flex flex-col gap-y-2 pl-6'>
                   <p className='font-Inter font-semibold text-[24px] leading-[24px] text-white'>Women's Collections</p>
                   <p className='font-Poppins font-normal text-[14px] leading-[21px] text-white'>Featured woman collections that<br /> give you another vibe.</p>
                   <p className='font-Poppins font-medium text-[16px] leading-[24px] text-white underline'>Shop Now</p>
                 </div>
                </div>

                <div className='relative row-span-1 bg-black'>
                <img src={speaker} alt="" className='h-full'/>
                 <div className='absolute bottom-0 flex flex-col gap-y-2 pl-6'>
                   <p className='font-Inter font-semibold text-[24px] leading-[24px] text-white'>Speakers</p>
                   <p className='font-Poppins font-normal text-[14px] leading-[21px] text-white'>Amazon wireless speakers</p>
                   <p className='font-Poppins font-medium text-[16px] leading-[24px] text-white underline'>Shop Now</p>
                 </div>
                </div>

                <div className='relative row-span-1 bg-black'>
                <img src={perfume} alt="" className='h-full'/>
                 <div className='absolute bottom-0 flex flex-col gap-y-2 pl-6'>
                   <p className='font-Inter font-semibold text-[24px] leading-[24px] text-white'>Perfume</p>
                   <p className='font-Poppins font-normal text-[14px] leading-[21px] text-white'>GUCCI INTENSE OUD EDP</p>
                   <p className='font-Poppins font-medium text-[16px] leading-[24px] text-white underline'>Shop Now</p>
                 </div>
                </div>

            </div>
            </div>

        </div>
    </div>
  )
}

export default Featured