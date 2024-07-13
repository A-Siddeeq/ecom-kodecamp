import React, {useState} from 'react'
import image from '../assets/image.png'
import googlelogo from '../assets/google.svg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import LogIn from '../pages/LogIn'


const SignUp = () => {

    const navigate = useNavigate();
    const [generalError, setGeneralError] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })


        const validationSchema = Yup.object().shape({
            name: Yup.string()
              .min(2,'Name must be at least 2 characters')
              .required('Name is required'),
              email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(8, 'Password must be at least 8 characters')
              .required('Password is required')
          });

              const { signup } = useAuth();
           async function handleSubmit(values) {
            try {
                setUserData(values);
                await signup(values.email, values.password);
                navigate('/login')
            } catch (error) {
              if (error.response && error.response.status === 401) {
                setGeneralError('Invalid email or password');
              } else {
                setGeneralError('User exists, proceed to login');
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
                <h1 className='font-Inter font-medium text-[36px] leading-[30px] mb-3'>Create an account</h1>
                <p className='font-Poppins font-normal text-[16px] leading-[24px] mt-3'>Enter your details below</p>
            </div>
            <div className='w-[350px] text-center self-center my-6'>
                <Formik initialValues={userData} validationSchema={validationSchema} onSubmit={handleSubmit} >
                <Form className='flex flex-col gap-y-4'>
                    <Field name='name' type="text" placeholder='Name' className='border-b-2 font-Poppins font-normal text-[16px] leading-[24px] opacity-40 py-2'/>
                    <Field name='email' type="email || number" placeholder='Email or Phone Number' className='border-b-2 font-Poppins font-normal text-[16px] leading-[24px] opacity-40 py-2'/>
                    <Field name='password' type="password" placeholder='Password' className='border-b-2 font-Poppins font-normal text-[16px] leading-[24px] opacity-40 py-2'/>

                    {generalError && <div className="text-red-500 mb-4">{generalError}</div>}

                    <button className='font-Poppins font-medium text-[16px] leading-[24px] rounded px-[36px] py-[16px] bg-[#DB4444] text-white' type='submit'>Create Account</button>
                    <div className='border border-black rounded px-[36px] py-[16px]'>
                        <img src={googlelogo} alt="google" className='absolute'/>
                     <button className='font-Poppins font-normal text-[16px] leading-[24px]'>Sign up with Google</button>
                    </div>
                </Form>
                </Formik>
            </div>

            <div className='w-max md:w-full self-center pb-4'>
                <p className='flex justify-center font-Poppins font-normal text-[16px] leading-[24px]'>Already have an account? 
                    <Link to="/login" className='font-medium px-2'>Log in</Link>
                </p>
            </div>

        </div>
    </div>
    <Footer />
    </>
  )
}

export default SignUp