  import React from 'react'
  import send from '../assets/iconsend.svg'
  import qrcode from '../assets/qr.png'
  import applestore from '../assets/applestore.png'
  import fblogo from '../assets/fblogo.svg'
  import twitterlogo from '../assets/twitterlogo.svg'
  import instalogo from '../assets/instalogo.svg'
  import linkedinlogo from '../assets/linkedinlogo.svg'

  const Footer = () => {
    return (
      <div className=' w-full bg-black text-white'>
      <div className='flex flex-col justify-around items-center md:items-start md:flex-row md:py-4'>
        
        <div className='flex flex-col gap-y-4'>
          <h1 className='font-Inter font-bold text-[24px] leading-[24px]'>Exclusive</h1>
          <h2 className='font-Poppins font-medium text-[20px] leading-[28px]'>Subscribe</h2>
          <div className='flex flex-col gap-y-2'>
          <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Get 10% off your first order</p>
          <div className='relative flex gap-y-2 items-center'>
          <input type="text" placeholder='Enter your email' className='border rounded bg-transparent p-2 relative'/>
          <button><img src={send} alt="" className='absolute right-5 top-1 bottom-0 mt-[5px]'/></button>
          </div>
        </div>
        </div>

      <div className='flex flex-col gap-y-3'>
        <h2 className='font-Poppins font-medium text-[20px] leading-[28px]'>Support</h2>
        <p className='font-Poppins font-normal text-[16px] leading-[24px]'>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
        <p className='font-Poppins font-normal text-[16px] leading-[24px]'>exclusive@gmail.com</p>
        <p className='font-Poppins font-normal text-[16px] leading-[24px]'>+88015-88888-9999</p>
      </div>

      <div className='flex flex-col gap-y-3'>
        <h2 className='font-Poppins font-medium text-[20px] leading-[28px]'>Account</h2>
        <ul className='flex flex-col gap-y-2'>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>My Account</li>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>Login / Register</li>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>Cart</li>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>Wishlist</li>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>Shop</li>
        </ul>
      </div>

      <div className='flex flex-col gap-y-3'>
        <h2 className='font-Poppins font-medium text-[20px] leading-[28px]'>Quick Link</h2>
        <ul className='flex flex-col gap-y-2'>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>Privacy Policy</li>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>Terms Of Use</li>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>FAQ</li>
          <li className='font-Poppins font-normal text-[16px] leading-[24px]'>Contact</li>
        </ul>
      </div>

      <div className='flex flex-col items-center gap-y-3'>
        <h2 className='font-Poppins font-medium text-[20px] leading-[28px]'>Download App</h2>
        <div>
          <p className='font-Poppins font-normal text-[16px] leading-[24px]'>Save $3 with App New User Only</p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-y-1'>
          <img src={qrcode} alt="qr" className='row-span-2 h-[80px]'/>
          <div className='row-span-2'>
            <div className='row-span-1'>
              <img src={applestore} alt="" className='h-[40px]'/>
            </div>
            <div className='row-span-1'>
              <img src={applestore} alt="" className='h-[40px]'/>
            </div>
          </div>

          <div className='flex justify-around col-span-2 px-6 py-2'>
            <img src={fblogo} alt="facebook logo" />
            <img src={twitterlogo} alt="twitter logo" />
            <img src={instalogo} alt="instagram logo" />
            <img src={linkedinlogo} alt="linkedin logo" />
          </div>
        </div>
      </div>
      </div>

      <div className='flex w-[100vw] justify-center text-gray-400 py-4 border-t-2'>
        <p className='font-Poppins font-normal text-[16px] leading-[24px]'>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>

      </div>
    )
  }

  export default Footer