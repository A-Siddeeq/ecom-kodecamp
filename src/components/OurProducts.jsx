import React from 'react'
import arrowleftfill from '../assets/arrowleftfill.svg'
import arrowrightfill from '../assets/arrowrightfill.svg'
import Item from './Item'
import console from '../assets/console.png'

const OurProducts = () => {
  return (
    <div className='my-12'>
        <div className="flex flex-col ml-12 gap-y-12">

            <div className='flex items-center gap-x-4'>
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className='font-Poppins font-semibold text-[16px] text-[#DB4444] leading-[20px]'>Our Products</p>
            </div>

            <div className='flex justify-between'>
                <div className='flex'>
                 <h1 className='font-Inter font-semibold text-[36px] leading-[48px]'>Explore Our Products</h1>
                </div>
                <div className='flex gap-x-4 mr-12'>
                    <div className='flex justify-center bg-[#F5F5F5] rounded-full w-[46px] h-[46px] cursor-pointer'>
                    <img src={arrowleftfill} alt="scroll left" width={'16px'}/>
                    </div>
                    <div className='flex justify-center bg-[#F5F5F5] rounded-full w-[46px] h-[46px] cursor-pointer'>
                    <img src={arrowrightfill} alt="scroll right"  width={'16px'}/>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4'>
                <Item
                 img={console}
                 alt='Gamepad'
                 name='HAVIT HV-G92 Gamepad'
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>
                <Item
                 img={console}
                 alt='Gamepad'
                 name='AK-900 Wired Keyboard'
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>

                <Item
                 img={console}
                 alt='Gamepad'
                 name='IPS LCD Gaming Monitor'
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>

                <Item
                 img={console}
                 alt='Gamepad'
                 name='S-Series Comfort Chair '
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>

                <Item
                 img={console}
                 alt='Gamepad'
                 name='S-Series Comfort Chair '
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>

                <Item
                 img={console}
                 alt='Gamepad'
                 name='S-Series Comfort Chair '
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>

                <Item
                 img={console}
                 alt='Gamepad'
                 name='S-Series Comfort Chair '
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>

                 <Item
                 img={console}
                 alt='Gamepad'
                 name='S-Series Comfort Chair '
                 newPrice='$120'
                 oldPrice='$160'
                 discount='40%'
                 ratings='88'/>
            </div>

            <div className='self-center justify-self-center'>
             <button className='font-Poppins font-medium text-[16px] leading-[24px] rounded px-[48px] py-[16px] bg-[#DB4444] text-white' type='submit'>View All Products</button>
            </div>
        </div>
    </div>
  )
}

export default OurProducts