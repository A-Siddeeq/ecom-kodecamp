import React from 'react'
import WishlistItem from './WishlistItem'
import console from '../../assets/console.png'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../../redux/slices/wishlistSlice'


const WishlistItems = () => {
  const WishlistItems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  return (
    <div>
     <div className="flex flex-col ml-12 gap-y-12">

        <div className='flex items-center  justify-between gap-x-4'>
            <p className='font-Poppins font-semibold text-[16px] leading-[20px]'>Wishlist </p>
        

    
            <button className='flex items-center font-Poppins font-medium text-[16px] leading-[24px] rounded px-[36px] py-[16px] mr-12 bg-transparent h-[50px] border' type='submit'>Move All To Bag</button>

        </div>

        <div className='flex flex-col md:flex-row items-center gap-x-4'>
            <WishlistItem
            img={console}
            alt='Gamepad'
            name='HAVIT HV-G92 Gamepad'
            newPrice='$120'
            oldPrice='$160'
            discount='40%'
            ratings='88'/>
            <WishlistItem
            img={console}
            alt='Gamepad'
            name='AK-900 Wired Keyboard'
            newPrice='$120'
            oldPrice='$160'
            discount='40%'
            ratings='88'/>

            <WishlistItem
            img={console}
            alt='Gamepad'
            name='IPS LCD Gaming Monitor'
            newPrice='$120'
            oldPrice='$160'
            discount='40%'
            ratings='88'/>

            <WishlistItem
            img={console}
            alt='Gamepad'
            name='S-Series Comfort Chair '
            newPrice='$120'
            oldPrice='$160'
            discount='40%'
            ratings='88'/>

            <WishlistItem
            img={console}
            alt='Gamepad'
            name='S-Series Comfort Chair '
            newPrice='$120'
            oldPrice='$160'
            discount='40%'
            ratings='88'/>
        </div>

        </div>
    </div>
  )
}

export default WishlistItems