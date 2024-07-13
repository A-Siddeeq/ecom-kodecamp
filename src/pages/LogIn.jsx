import React, {useState} from 'react'
import image from '../assets/image.png'
import googlelogo from '../assets/google.svg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {

    const navigate = useNavigate();
    const [generalError, setGeneralError] = useState('');
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const validationSchema = Yup.object().shape({
          email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required')
      });

      const { login } = useAuth();
      async function handleSubmit(values) {
       try {
           setUserData(values);
           await login(values.email, values.password);
           navigate('/Home')
       } catch (error) {
         if (error.response && error.response.status === 401) {
           setGeneralError('Invalid email or password');
         } else {
           setGeneralError('An Unexpected error occurred, Please Try again');
         }
       }
   }

  return (
    <>
    <Nav />
    <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2'>
            <img src={image} alt=""/>
        </div>

        <div className='flex flex-col w-1/2 justify-center gap-y-2 mt-4 xl:mt-0'>
            <div className='w-[350px] text-left self-center'>
                <h1 className='font-Inter font-medium text-[36px] leading-[30px] mb-3'>Log in to Exclusive</h1>
                <p className='font-Poppins font-normal text-[16px] leading-[24px] mt-3'>Enter your details below</p>
            </div>
            <div className='w-[350px] text-center self-center my-6'>
            <Formik initialValues={userData} validationSchema={validationSchema} onSubmit={handleSubmit} >
                <Form className='flex flex-col gap-y-4'>
                    <Field name='email' type="email || number" placeholder='Email or Phone Number' className='border-b-2 font-Poppins font-normal text-[16px] leading-[24px] opacity-40 py-2'/>
                    <Field name='password' type="password" placeholder='Password' className='border-b-2 font-Poppins font-normal text-[16px] leading-[24px] opacity-40 py-2'/>

                    {generalError && <div className="text-red-500 mb-4">{generalError}</div>}

                    <div className='flex items-center justify-between'>
                     <button className='font-Poppins font-medium text-[16px] leading-[24px] rounded px-[20px] py-[16px] bg-[#DB4444] text-white' type='submit'>Log in</button>
                     <p className='font-Poppins font-normal text-[16px] text-[#DB4444] leading-[24px]'>Forgot Password?</p>
                    </div>
                </Form>
            </Formik>
            </div>

        </div>
    </div>
    <Footer />
    </>
  )
}

export default LogIn