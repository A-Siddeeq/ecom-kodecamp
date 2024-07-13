import React from 'react'
import arrowleftfill from '../assets/arrowleftfill.svg'
import arrowrightfill from '../assets/arrowrightfill.svg'
import phone from '../assets/phone.svg'
import computer from '../assets/computer.svg'
import smartwatch from '../assets/smartwatch.svg'
import camera from '../assets/camera.svg'
import headphone from '../assets/headphone.svg'
import gaming from '../assets/gaming.svg'

const Categories = () => {
  return (
    <div className='my-12'>
        <div>
        <div className="flex flex-col ml-12 gap-y-12">

            <div className='flex items-center gap-x-4'>
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className='font-Poppins font-semibold text-[16px] text-[#DB4444] leading-[20px]'>Today's</p>
            </div>

            <div className='flex justify-between'>
                <h1 className='font-Inter font-semibold text-[36px] leading-[48px]'>Browse By Category</h1>
                <div className='flex gap-x-4 mr-12'>
                    <div className='flex justify-center bg-[#F5F5F5] rounded-full w-[46px] h-[46px] cursor-pointer'>
                    <img src={arrowleftfill} alt="scroll left" width={'16px'}/>
                    </div>
                    <div className='flex justify-center bg-[#F5F5F5] rounded-full w-[46px] h-[46px] cursor-pointer'>
                    <img src={arrowrightfill} alt="scroll right"  width={'16px'}/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center md:flex-row justify-center gap-4'>
                <div className='flex flex-col items-center justify-center rounded w-[170px] h-[145px] border border-1 hover:bg-[#DB4444] cursor-pointer'>
                    <img src={phone} alt="phone" width={'56px'} height={'56px'} />
                    <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Phones</p>
                </div>
                <div className='flex flex-col items-center justify-center rounded w-[170px] h-[145px] border border-1 hover:bg-[#DB4444] cursor-pointer'>
                    <img src={computer} alt="Computers" width={'56px'} height={'56px'} />
                    <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Computers</p>
                </div>
                <div className='flex flex-col items-center justify-center rounded w-[170px] h-[145px] border border-1 hover:bg-[#DB4444] cursor-pointer'>
                    <img src={smartwatch} alt="smartwatches" width={'56px'} height={'56px'} />
                    <p className='font-Poppins font-normal text-[16px] leading-[24px]'>SnartWatch</p>
                </div>
                <div className='flex flex-col items-center justify-center rounded w-[170px] h-[145px] border border-1 hover:bg-[#DB4444] cursor-pointer'>
                    <img src={camera} alt="cameras" width={'56px'} height={'56px'} />
                    <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Camera</p>
                </div>
                <div className='flex flex-col items-center justify-center rounded w-[170px] h-[145px] border border-1 hover:bg-[#DB4444] cursor-pointer'>
                    <img src={headphone} alt="headphones" width={'56px'} height={'56px'} />
                    <p className='font-Poppins font-normal text-[16px] leading-[24px]'>HeadPhones</p>
                </div>
                <div className='flex flex-col items-center justify-center rounded w-[170px] h-[145px] border border-1 hover:bg-[#DB4444] cursor-pointer'>
                    <img src={gaming} alt="gaming" width={'56px'} height={'56px'} />
                    <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Gaming</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Categories