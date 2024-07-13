import React from 'react'
import like from '../assets/like.svg'
import eyeicon from '../assets/eyeicon.svg'
import cart from '../assets/cartlight.svg'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { addToWishlist } from '../redux/slices/wishlistSlice'

const Item = (props) => {
  const dispatch = useDispatch()
  
  const { index, img, alt, discount, name, newPrice, oldPrice, ratings } = props

  return (
    <div className='h-[350px] w-[270px]'>
      <div className='relative'>
        <div className='w-[40px] text-center absolute left-0 top-0 mt-2 rounded font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] leading-[18px]'>
          <p>-{discount}</p>
        </div>
        <div className='relative group'>
          <img src={img} alt={alt} className='bg-[#F5F5F5] w-full h-[270px] p-4' />
          <div className='absolute right-0 top-5 flex flex-col gap-y-2'>
            <img src={like} alt="add to wishlist" width={'34px'} className='rounded-full bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer' onClick={() => dispatch(addToWishlist({ index }))}/>
            <img src={eyeicon} alt="view details" width={'34px'} className='rounded-full bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer' />
          </div>
          <div className='absolute bottom-0 w-full h-[41px] flex gap-x-2 justify-center items-center text-center bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer' onClick={() => dispatch(addToCart({ index, ...props }))}>
            <img src={cart} alt="Add to cart" />
            <p className='font-Poppins font-normal text-[12px] leading-[18px] text-white'>Add To Cart</p>
          </div>
        </div>
      </div>
      <div>
        <p className='font-Poppins font-medium text-[16px] leading-[24px]'>{name}</p>
        <div className='flex gap-x-6'>
          <p className='font-Poppins font-medium text-[16px] text-[#DB4444] leading-[24px]'>{newPrice}</p>
          <p className='font-Poppins font-medium text-[16px] leading-[24px] opacity-50 line-through'>{oldPrice}</p>
        </div>
      </div>
      <div className='flex gap-x-2'>
        <p>stars</p>
        <p className='font-Poppins font-semibold text-[14px] leading-[21px] opacity-50'>{`(${ratings})`}</p>
      </div>
    </div>
  )
}

export default Item
