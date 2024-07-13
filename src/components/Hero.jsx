import React from 'react'
import apple from '../assets/apple.svg'
import heroframe from '../assets/heroframe.png'
import arrowright from '../assets/arrowright.svg'

const Hero = () => {

  return (
    <div className='my-12'>
        <div className='flex flex-col-reverse md:flex-row xl:ml-20 xl:pr-36 items-center gap-2 justify-between my-4'>
            <ul className='flex flex-col font-Poppins gap-y-3 justify-center xl:pr-12 xl:w-[200px] border-r-2'>
                <li className='flex gap-x-4 font-normal text-[16px] leading-[24px]'>Woman's Fashion  <img src={arrowright} alt="" /></li>
                <li className='flex gap-x-10 font-normal text-[16px] leading-[24px]'>Men's Fashion <img src={arrowright} alt="" /></li>
                <li className='font-normal text-[16px] leading-[24px]'>Electronics</li>
                <li className='font-normal text-[16px] leading-[24px]'>Home & Lifestyle</li>
                <li className='font-normal text-[16px] leading-[24px]'>Medicine</li>
                <li className='font-normal text-[16px] leading-[24px]'>Sports & Outdoor</li>
                <li className='font-normal text-[16px] leading-[24px]'>Baby's & Toys</li>
                <li className='font-normal text-[16px] leading-[24px]'>Groceries & Pets</li>
                <li className='font-normal text-[16px] leading-[24px]'>Health & Beauty</li>
            </ul>
            <hr />

            <div className='w-full'>
                <div className='flex bg-black text-white'>
                    <div className='w-1/2'>
                     <div className='flex flex-col items-center justify-center gap-y-3 h-[350px]'>
                        <div className='flex items-center gap-x-4'>
                            <img src={apple} alt="" className='h-full'/>
                            <p className='font-Poppins font-normal text-[16px] leading-[24px] text-center text-[#FAFAFA]'>iPhone 14 Series</p>
                        </div>
                        <div>
                            <h1 className='font-Inter font-semibold text-[48px] leading-[60px] text-[#FAFAFA]'>Up to 10% <br /> off Voucher</h1>
                        </div>
                        <div className='flex'>
                            <p className='font-Poppins font-medium text-[16px] leading-[24px] text-center underline text-[#FAFAFA]'>Shop Now </p>
                        </div>
                     </div>
                    </div>
                    <div className='w-1/2'>
                     <img src={heroframe} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero