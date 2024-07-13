import React from 'react'
import ad from '../assets/adpic.png'

const Ad = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-around bg-black m-12 p-6'>
        <div>
            <div className='flex flex-col h-full gap-4 justify-between'>
                <p className='font-Poppins font-semibold text-[16px] leading-[20px] text-[#00FF66]'>Categories</p>
                <h1 className='font-Inter font-semibold text-[#FAFAFA] text-[48px] leading-[60px]'>Enhance Your <br /> Music Experience</h1>
                <div className='flex gap-2'>
                    <div className='flex flex-col items-center justify-center rounded-full bg-white w-[62px] h-[62px]'>
                        <p className='font-Poppins font-semibold text-[16px] leading-[20px]'>23</p>
                        <p className='font-Poppins font-normal text-[11px] leading-[18px]'>hours</p>
                    </div>
                    <div className='flex flex-col items-center justify-center rounded-full bg-white w-[62px] h-[62px]'>
                        <p className='font-Poppins font-semibold text-[16px] leading-[20px]'>05</p>
                        <p className='font-Poppins font-normal text-[11px] leading-[18px]'>Days</p>
                    </div>
                    <div className='flex flex-col items-center justify-center rounded-full bg-white w-[62px] h-[62px]'>
                        <p className='font-Poppins font-semibold text-[16px] leading-[20px]'>59</p>
                        <p className='font-Poppins font-normal text-[11px] leading-[18px]'>Minutes</p>
                    </div>
                    <div className='flex flex-col items-center justify-center rounded-full bg-white w-[62px] h-[62px]'>
                        <p className='font-Poppins font-semibold text-[16px] leading-[20px]'>35</p>
                        <p className='font-Poppins font-normal text-[11px] leading-[18px]'>Seconds</p>
                    </div>
                </div>
    
                 <button className='rounded py-[16px] bg-[#00FF66] font-Poppins font-medium text-[16px] text-[#FAFAFA] leading-[24px] w-[170px]'>Buy Now!</button>

            </div>
        </div>

        <div className='self-center'>
            <img src={ad} alt="Ad" width={'600px'}/>
        </div>
    </div>
  )
}

export default Ad