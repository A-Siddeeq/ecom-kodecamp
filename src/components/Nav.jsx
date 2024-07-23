    import React from 'react'
    import search from '../assets/search.svg'
    import like from '../assets/like.svg'
    import cart from '../assets/cart.svg'
    import user from '../assets/user.svg'
    import { Link } from 'react-router-dom'
    import { useSelector } from 'react-redux'

    const Nav = (props) => {
        const cartItems = useSelector(state=> state.cart.cart)
        const wishlistItems = useSelector(state=> state.wishlist.wishlist)
    return (
        <div className='border-b-2'>
        <div className='font-Poppins flex justify-center items-center gap-2 bg-black'>
            <div className='flex items-center gap-2 h-[48px]'>
                <p className='text-[#FAFAFA] text-[14px] font-normal leading-[21px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <p className='text-[#FAFAFA] text-[14px] text-center underline font-semibold leading-[24px]'>ShopNow</p>
            </div>
            <div>
                <select name="lang" id="lang" className=' text-white bg-black text-[14px] font-normal leading-[21px]'>
                    <option value="Eng" defaultValue={'value'}>English</option>
                </select>
            </div>
        </div>


        <div className='flex flex-col md:flex-row gap-y-2 md:gap-y-0 items-center justify-around gap-x-2 py-6'>
            <div>
                <h1 className='text-black font-Inter font-bold text-[24px] leading-[24px]'>Exclusive</h1>
            </div>

            <div>
                <ul className='flex justify-between items-center gap-x-6'>
                    <Link to='/' className='text-Poppins font-normal text-[16px] leading-[24px] text-center hover:border-b-2 cursor-pointer'>Home</Link>
                    <li className='text-Poppins font-normal text-[16px] leading-[24px] text-center hover:border-b-2 cursor-pointer'>Contact</li>
                    <li className='text-Poppins font-normal text-[16px] leading-[24px] text-center hover:border-b-2 cursor-pointer'>About</li>
                    <Link to='/register' className='text-Poppins font-normal text-[16px] leading-[24px] text-center hover:border-b-2 cursor-pointer'>SignUp</Link>
                </ul>
            </div>

            <div className='flex gap-x-4'>
            <input type="text" className='xl:w-[250px] h-[38px] rounded px-[7px] pr-[12px] pl-[20px] gap-2.5 bg-[#F5F5F5]' placeholder='What are you looking for?'/>
            <img src={search} alt="" className='absolute  ml-[180px] xl:ml-[220px] mt-[12px] '/>
    
            <Link to='/wishlist' className='relative'>
            <img src={like} alt="wishlist" width={'32px'} className='hover:cursor-pointer hover:bg-[#DB4444] hover:rounded-full p-1'/>
            <p className='absolute top-0 right-0 rounded-full text-white px-0.5 bg-[#DB4444]'>{wishlistItems.length}</p>
            </Link>
            <Link to='/cart' className='relative'>
             <img src={cart} alt="cart" width={'32px'} className='hover:cursor-pointer hover:bg-[#DB4444] hover:rounded-xl'/>
             <p className='absolute top-0 right-0 rounded-full text-white px-0.5 bg-[#DB4444]'>{cartItems.length}</p>
            </Link>
            <div className='group'>
             <img src={user} alt="account" width={'32px'} className='hover:cursor-pointer hover:bg-[#DB4444] hover:rounded-full'/>
             <ul className='bg-gray-50 absolute flex flex-col rounded gap-2 p-2 opacity-0 group-hover:opacity-100'>
                <li>Manage My Account</li>
                <li>My Order</li>
                <li>My Cancellations</li>
                <li>My Reviews</li>
                <li>Logout</li>
             </ul>
            </div>
            </div>
        </div>
        
        </div>
    )
    }

    export default Nav