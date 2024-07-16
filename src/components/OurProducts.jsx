import React from 'react'
import arrowleftfill from '../assets/arrowleftfill.svg'
import arrowrightfill from '../assets/arrowrightfill.svg'
import Item from './Item'
import dogfood from '../assets/dogfood.png'
import camera from '../assets/camera.png'
import laptop from '../assets/laptop.png'
import cream from '../assets/cream.png'
import kidscar from '../assets/laptop.png'
import soccerboots from '../assets/laptop.png'
import gp11console from '../assets/laptop.png'
import jacket from '../assets/laptop.png'


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
                 img={dogfood}
                 alt='Dog food'
                 name='Breed Dry Dog Food'
                 newPrice='$100'
                 ratings='88'/>
                <Item
                 img={camera}
                 alt='Camera'
                 name='CANON EOS DSLR Camera'
                 newPrice='$360'
                 ratings='95'/>

                <Item
                 img={laptop}
                 alt='ASUS FHD Gaming Laptop'
                 name='ASUS FHD Gaming Laptop'
                 newPrice='$700'
                 ratings='325'/>

                <Item
                 img={cream}
                 alt='cream'
                 name='Curology Product Set'
                 newPrice='$500'
                 ratings='145'/>

                <Item
                 img={kidscar}
                 alt='Kids car'
                 name='Kids Electric Car'
                 newPrice='$960'
                 ratings='88'/>

                <Item
                 img={soccerboots}
                 alt='Soccer boots'
                 name='Jr. Zoom Soccer Cleats'
                 newPrice='$1160'
                 ratings='35'/>

                <Item
                 img={gp11console}
                 alt='Gamepad'
                 name='G11 Shooter USB Gamepad'
                 newPrice='$960'
                 ratings='55'/>

                 <Item
                 img={jacket}
                 alt='Jacket'
                 name='Quilted Satin Jacket'
                 newPrice='$660'
                 ratings='55'/>
            </div>

            <div className='self-center justify-self-center'>
             <button className='font-Poppins font-medium text-[16px] leading-[24px] rounded px-[48px] py-[16px] bg-[#DB4444] text-white' type='submit'>View All Products</button>
            </div>
        </div>
    </div>
  )
}

export default OurProducts