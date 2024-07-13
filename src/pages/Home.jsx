import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FlashSales from '../components/FlashSales'
import Categories from '../components/Categories'
import BestSelling from '../components/BestSelling'
import Ad from '../components/Ad'
import OurProducts from '../components/OurProducts'
import Featured from '../components/Featured'
import Benefits from '../components/Benefits'
import { useSelector } from 'react-redux'

const Home = () => {
  const cartItems = useSelector(state=> state.cart.cart)
  const wishlistItems = useSelector(state=> state.wishlist.wishlist)
  return (
    <div className='w-full overflow-hidden'>
         <Nav tobuy={cartItems.length} wish={wishlistItems.length}/>
        <Hero /> 
        <FlashSales /> 
        <Categories /> 
        <BestSelling /> 
        <Ad /> 
        <OurProducts /> 
        <Featured /> 
        <Benefits />
         <Footer /> 
    </div>
  )
}

export default Home