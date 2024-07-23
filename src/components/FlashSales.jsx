import React from 'react'
import arrowleftfill from '../assets/arrowleftfill.svg'
import arrowrightfill from '../assets/arrowrightfill.svg'
import Item from './Item'
import console from '../assets/console.png'
import keyboard from '../assets/keyboard.png'
import tv from '../assets/tv.png'
import chair from '../assets/chair.png'

const FlashSales = () => {
  return (
    <div className='my-12'>
      <div className="flex flex-col ml-12 gap-y-12">
        <div className='flex items-center gap-x-4'>
          <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
          <p className='font-Poppins font-semibold text-[16px] text-[#DB4444] leading-[20px]'>Today's</p>
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-x-6'>
            <h1 className='font-Inter font-semibold text-[36px] leading-[48px]'>Flash Sales</h1>
            <div>days : hours : mins : secs</div>
          </div>
          <div className='flex gap-x-4 mr-12'>
            <div className='flex justify-center bg-[#F5F5F5] rounded-full w-[46px] h-[46px] cursor-pointer'>
              <img src={arrowleftfill} alt="scroll left" width={'16px'} />
            </div>
            <div className='flex justify-center bg-[#F5F5F5] rounded-full w-[46px] h-[46px] cursor-pointer'>
              <img src={arrowrightfill} alt="scroll right" width={'16px'} />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center md:flex-row gap-x-4'>
          <Item
            img={console}
            alt='Gamepad'
            name='HAVIT HV-G92 Gamepad'
            newPrice='$120'
            oldPrice='$160'
            discount='40%'
            ratings='88' />
          <Item
            img={keyboard}
            alt='keyboard'
            name='AK-900 Wired Keyboard'
            newPrice='$960'
            oldPrice='$1160'
            discount='35%'
            ratings='75' />
          <Item
            img={tv}
            alt='tv'
            name='IPS LCD Gaming Monitor'
            newPrice='$370'
            oldPrice='$400'
            discount='30%'
            ratings='99' />
          <Item
            img={chair}
            alt='chair'
            name='S-Series Comfort Chair '
            newPrice='$375'
            oldPrice='$400'
            discount='25%'
            ratings='99' />
          <Item
            img={chair}
            alt='chair'
            name='S-Series Comfort Chair '
            newPrice='$375'
            oldPrice='$400'
            discount='25%'
            ratings='99' />
        </div>

        <div className='self-center justify-self-center'>
          <button className='font-Poppins font-medium text-[16px] leading-[24px] rounded px-[48px] py-[16px] bg-[#DB4444] text-white' type='submit'>View All Products</button>
        </div>
      </div>
    </div>
  )
}

export default FlashSales
