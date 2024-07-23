import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import bin from '../assets/bin.svg'
import cart from '../assets/cartlight.svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <Nav />
      <div className='ml-12'>
      <table className='flex flex-col justify-around my-2'>
        <thead>
        <tr className='flex items-center justify-around'>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
        </thead>
      {
        cartItems.map((item, index) => {
          return (
            <tbody>
            <tr key={index} className='flex items-center justify-around'>

              <td className='relative flex items-center'>
                <img src={item.img} alt={item.alt} className='bg-[#F5F5F5] w-16 h-16 p-3' />
                <div 
                  className='absolute left-0 top-0 p-2 flex flex-col gap-y-2' 
                  onClick={() => dispatch(removeFromCart({ index }))}
                >
                  <p className='flex items-center justify-center rounded-full text-white bg-red-500 text-[8px] w-6 h-6 p-1'>X</p>
                </div>
                <p className='text-[12px]'>{item.name}</p>
              </td>

              <td className='font-Poppins font-medium text-[16px] leading-[24px]'>
                {item.newPrice}
              </td>

              <td className='font-Poppins font-semibold text-[14px] leading-[21px] opacity-50'>
                1
              </td>

              <td className='font-Poppins font-semibold text-[14px] leading-[21px] opacity-50'>
                {item.newPrice}
              </td>
            </tr>
            </tbody>
          )
        })
      }
      </table>
      <div className='flex justify-between my-2'>
                <button className="border-2 rounded p-2 bg-transparent">Return To Shop</button>
                <button className="border-2 rounded p-2 bg-transparent">Update Cart</button>
      </div>
      <div className='flex justify-between my-2'>
                <div>
                  <input type="text" placeholder='Coupon code' className="border-2 rounded p-2 bg-transparent"/>
                  <button className=' text-white bg-[#DB4444] px-10 py-2 m-1'>Apply Coupon</button>
                </div>


                <div className="flex flex-col gap-y-2 border-2 p-2">
                  <h1>Cart Total</h1>
                  <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p>$itemtotal</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Shipping</p>
                    <p>$0</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Total</p>
                    <p>$sumtotal</p>
                  </div>

                  <button className=' text-white bg-[#DB4444] px-10 py-2 m-1'>Proceed to checkout</button>
                </div>
      </div>
      </div>


      <Footer />
    </div>
  )
}

export default Cart
