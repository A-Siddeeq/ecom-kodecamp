import React from 'react'
import bookshelf from '../assets/bookshelf.png'
import cpucooler from '../assets/cpucooler.png'
import bag from '../assets/bag.png'
import Item from './Item'
import console from '../assets/console.png'

const BestSelling = () => {
  return (
    <div className='my-12'>
    <div className="flex flex-col ml-12 gap-y-12">

<div className='flex items-center gap-x-4'>
    <div className="bg-[#DB4444] h-[40px] w-[20px] rounded"></div>
    <p className='font-Poppins font-semibold text-[16px] text-[#DB4444] leading-[20px]'>This Month</p>
</div>

<div className='flex justify-between'>
    <div className='flex'>
     <h1 className='font-Inter font-semibold text-[36px] leading-[48px]'>Best Selling Products</h1>
    </div>
    <div className='flex gap-x-4 mr-12'>
    <button className='font-Poppins font-medium text-[16px] leading-[24px] rounded px-[36px] py-[16px] bg-[#DB4444] text-white w-[160px] h-[50px]' type='submit'>View All</button>
    </div>
</div>

<div className='flex flex-col md:flex-row items-center gap-x-4'>
    <Item
     img={console}
     alt='Gamepad'
     name='HAVIT HV-G92 Gamepad'
     newPrice='$120'
     oldPrice='$160'
     discount='40%'
     ratings='88'/>
    <Item
     img={bag}
     alt='Gucci bag'
     name='Gucci duffle bag'
     newPrice='$960'
     oldPrice='$1160'
     ratings='65'/>

    <Item
     img={cpucooler}
     alt='CPU Cooler'
     name='RGB liquid CPU Cooler'
     newPrice='$160'
     oldPrice='$170'
     discount='40%'
     ratings='65'/>

    <Item
     img={bookshelf}
     alt='Book shelf'
     name='Small BookShelf'
     newPrice='$360'
     ratings='65'/>

</div>

</div>
    </div>
  )
}

export default BestSelling