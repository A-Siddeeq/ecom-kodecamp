import React from 'react'
import laptop from '../assets/laptop.png'
import console from '../assets/console.png'
import tv from '../assets/tv.png'
import keyboard from '../assets/keyboard.png'
import Item from './Item'

const JustForYou = () => {
  return (
    <div>
     <div className="flex flex-col ml-12 gap-y-12">

        <div className='flex items-center justify-between gap-x-4'>
            <div className='flex items-center gap-x-2'>
                <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
                <p className='font-Poppins font-semibold text-[16px] leading-[20px]'>Just For You</p>
            </div>
        
     
            <button className='flex items-center font-Poppins font-medium text-[16px] leading-[24px] rounded px-[36px] py-[16px] mr-12 bg-transparent h-[50px] border' type='submit'>See All</button>
       
        </div>

        <div className='flex flex-col md:flex-row items-center gap-x-4'>
            <Item
            img={laptop}
            alt='Gamepad'
            name='ASUS FHD Gaming Laptop'
            newPrice='$960'
            oldPrice='$1160'
            discount='35%'
            ratings='65'/>
            <Item
            img={tv}
            alt='Gamepad'
            name='IPS LCD Gaming Monitor'
            newPrice='$1160'
            ratings='65'/>

            <Item
            img={console}
            alt='Gamepad'
            name='HAVIT HV-G92 Gamepad'
            newPrice='$560'
            ratings='65'/>

            <Item
            img={keyboard}
            alt='Gamepad'
            name='AK-900 Wired Keyboard'
            newPrice='$200'
            ratings='65'/>

        </div>

        </div>
    </div>
  )
}

export default JustForYou