import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import pmmlogo from '../../images/pmmlogo.svg';
import PrimaryButton from '../buttons/PrimaryButton'
import { FaRegHandScissors } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer>
      <div className="container px-2 border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-6 xl:dflex md:justify-between xl:border-r border-lightgray">
            <div className='mb-6'>
              <img src={pmmlogo} alt="" />
            </div>
            {/* <ul>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 1</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 2</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 3</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 4</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 5</a>
              </li>
            </ul> */}
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Instagram</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Twitter</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Facebook</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Linkedin</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Youtube</a>
              </li>
            </ul>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 1</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 2</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 3</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 4</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Link 5</a>
              </li>
            </ul>
          </div>
          {/* <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className='text-gray'>Newsletter</span>
            <p className='text-gray font-thin'>Wanna join our newsletter?</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full" placeholder="Enter your email" />
              </div>
              <div>
                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color='white' />
                </PrimaryButton>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">© Copyright 2023 Pay My MCA LLC. All rights reserved</p>
      
      </div>
    </footer>
  );
}


