import React from 'react'
import bin from '../assets/bin.svg'
import cart from '../assets/cartlight.svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Cart</h1>
      {
        cartItems.map((item, index) => {
          return (
            <div key={index} className='flex items-center justify-between'>
              <div className='relative'>
                <div className='w-[40px] text-center absolute left-0 top-0 mt-2 rounded font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] leading-[18px]'>
                  <p>-{item.discount}</p>
                </div>
                <img src={item.img} alt={item.alt} className='bg-[#F5F5F5] w-full h-[270px] p-4' />
                <div 
                  className='absolute right-0 top-0 p-2 flex flex-col gap-y-2' 
                  onClick={() => dispatch(removeFromCart({ index }))}
                >
                  <img src={bin} alt="remove from cart" width={'34px'} className='rounded-full bg-white p-2' />
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
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
