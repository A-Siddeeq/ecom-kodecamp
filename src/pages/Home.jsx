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

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
        <Nav />
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