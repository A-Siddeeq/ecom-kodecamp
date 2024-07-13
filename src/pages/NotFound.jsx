import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Nav />
      <div className='flex flex-col gap-y-6 justify-center items-center my-12'>
        <h1 className='font-Inter font-medium text-[80px] md:text-[110px] leading-[115px] pb-6 text-center'>404 Not Found</h1>
        <p className='font-Poppins font-normal text-16px] leading-[24px] pb-12 text-center'>Your Visited page not found. You may go home page.</p>
        <Link to='/' className='font-Poppins font-medium text-[16px] leading-[24px] rounded px-[48px] py-[16px] bg-[#DB4444] text-white'>Back to home page</Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound