import React from 'react'

import {BsChevronDown} from 'react-icons/bs'
import logo from '../../images/logo.svg'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'





const Navbar = () => {
  return (
    <nav classname='bg-primary bg-opacity-5'>
    <div className='sticky top-0 py-8 flex justify-between items-center'>

        <div className='flex items-center'>
            <img src={logo} className='mr-6' alt='logo' />
            <div className='flex'>
                <a href='' className='mx-6 hover:text-primary'>Home</a>
                <a href='' className='mx-6 hover:text-primary'>About</a>
                <a href='' className='mx-6 hover:text-primary'>Contact</a>
                <a href='' className='mx-6 hover:text-primary'>Quote</a>
                <a href='' className='mx-6 hover:text-primary'>Service <BsChevronDown className='inline ml-2' /></a>
            </div>
        </div>

        <div className="container flex">
            <SecondaryButton className='mr-4'>
                Sign In
            </SecondaryButton>
            <PrimaryButton>
                Sign Up
            </PrimaryButton>
        </div>
    </div>
    </nav>
  )
}

export default Navbar