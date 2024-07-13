import React from 'react'
import JustForYou from '../components/JustForYou'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import bin from '../assets/bin.svg'
import cart from '../assets/cart.svg'

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist.wishlist)
  const dispatch = useDispatch()
  return (
    <div>
        {  wishlistItems.map((item, index) => {
                return( 
          <div className='h-[320px] w-[270px]' key={index}>

        <div className='relative'>
            <div className='w-[40px] text-center absolute left-0 top-0 mt-2 rounded font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] leading-[18px]'>
            <p>-{item.discount}</p>
            </div>
        <img src={item.img} alt={item.alt} className='bg-[#F5F5F5] w-full h-[270px] p-4'/>
        <div className='absolute right-0 top-0 p-2 flex flex-col gap-y-2'  onClick={() => dispatch(removeFromWishlist({ index }))}>
            <img src={bin} alt="add to wishlist" width={'34px'} className='rounded-full bg-white p-2'/>
        </div>
        <div className='absolute bottom-0 flex gap-x-2 justify-center items-center text-center w-full bg-black rounded h-[41px]'>
            <img src={cart} alt="Add to cart" />
            <p className='font-Poppins font-normal text-[12px] leading-[18px] text-white'>Add To Cart</p>
        </div>
        </div>

        <div>
            <p className='font-Poppins font-medium text-[16px] leading-[24px]'>{item.name}</p>
            <div className='flex gap-x-6'>
                <p className='font-Poppins font-medium text-[16px] text-[#DB4444] leading-[24px]'>{item.newPrice}</p>
                <p className='font-Poppins font-medium text-[16px] leading-[24px] opacity-50 line-through'>{item.oldPrice}</p>
            </div>
        </div>

        <div className='flex gap-x-2'>
            <p>stars</p>
            <p className='font-Poppins font-semibold text-[14px] leading-[21px] opacity-50'>{`(${item.ratings})`}</p>
        </div>
        </div>)
              }
              )}
        <JustForYou />
    </div>
  )
}

export default Wishlist