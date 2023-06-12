import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';


import Jeremy from '../../images/illustrations/Jeremy.jfif';
import Ryan from '../../images/illustrations/Ryan.png';
import Katie from '../../images/illustrations/Katie.jfif';

import { Fade } from 'react-reveal';



export default function StepSection() {
  return (
    <section id='clients' className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
          Client <span className="text-blue-gradient">success</span> stories
          </h2>
          <div className="md:flex justify-center gap-20">
            <Fade up>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={Jeremy} className="mb-4 mt-16 mx-auto w-44 rounded-full hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  {/* <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" /> */}
                </div>
                <h3 className="text-2xl font-bold mb-4">Ryan T.</h3>
                <p className="text-gray max-w-sm">
                  <span className='text-xl font-bold'><ImQuotesLeft /></span>
                    The expertise and personalized approach of the loan consultancy team at PMM impressed me. They provided tailored loan solutions that fueled our business expansion. Highly recommended for their professional guidance.                
                </p>

                <h4 className="text-blue-gradient font-black mt-20">Ryan saved 29% on his debt</h4>
                  
              </div>
            </Fade>
            <Fade up delay={500}>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={Ryan} className="mb-4 mt-16 mx-auto w-44 rounded-full hover:-translate-y-6  hover:scale-105 transition-all duration-300" alt="" />
                  {/* <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" /> */}
                </div>
                <h3 className="text-2xl font-bold mb-4">Adam S.</h3>
                <p className="text-gray max-w-sm">
                  <span className='text-xl font-bold'><ImQuotesLeft /></span>
                  I was amazed by the extensive lender network that the loan consultancy team at PMM has. They secured competitive rates for my loan and provided excellent guidance. Highly recommend their expertise.                
                </p>

                <h4 className="text-blue-gradient font-black mt-20">Ryan saved 29% on his debt</h4>

              </div>
            </Fade>
            <Fade up delay={1000}>
              <div className="text-center relative px-4">
                <img src={Katie} className="mb-4 mt-16 mx-auto w-44 rounded-full hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <h3 className="text-2xl font-bold mb-4">Katie L.</h3>
                <p className="text-gray max-w-sm">
                <span className='text-xl font-bold'><ImQuotesLeft /></span>
                The loan consultancy services provided by the team at PMM made securing a business loan easy. Their industry knowledge and strong lender relationships were invaluable. Highly recommend their professional service.
                </p>

                <h4 className="text-blue-gradient font-black mt-20">Ryan saved 29% on his debt</h4>

              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}