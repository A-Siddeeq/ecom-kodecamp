import React from 'react'
import delivery from '../assets/icondelivery.svg'
import customerservice from '../assets/iconcustomerservice.svg'
import secure from '../assets/iconsecure.svg'

const Benefits = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center text-center px-12 my-8'>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center rounded-full bg-[#F5F5F5] w-[80px] h-[80px]'>
             <img src={delivery} alt="" className='rounded-full bg-black w-[40px] h-[40px] p-1'/>
            </div>
            <h1 className=' font-Poppins font-semibold text-[20px] leading-[28px]'>FREE AND FAST DELIVERY</h1>
            <p className='font-Poppins font-normal text-[14px] leading-[21px]'>Free delivery for all orders over $140</p>
        </div>

        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center rounded-full bg-[#F5F5F5] w-[80px] h-[80px]'>
             <img src={customerservice} alt="" className='rounded-full bg-black w-[40px] h-[40px] p-1'/>
            </div>
            <h1 className=' font-Poppins font-semibold text-[20px] leading-[28px]'>24/7 CUSTOMER SERVICE</h1>
            <p className='font-Poppins font-normal text-[14px] leading-[21px]'>Friendly 24/7 customer support</p>
        </div>

        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center rounded-full bg-[#F5F5F5] w-[80px] h-[80px]'>
             <img src={secure} alt="" className='rounded-full bg-black w-[40px] h-[40px] p-1'/>
            </div>
            <h1 className=' font-Poppins font-semibold text-[20px] leading-[28px]'>MONEY BACK GUARANTEE</h1>
            <p className='font-Poppins font-normal text-[14px] leading-[21px]'>We return money within 30 days</p>
        </div>
    </div>
  )
}

export default Benefits