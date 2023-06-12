import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import SecondaryButton from '../buttons/SecondaryButton'

import creditCard from "../../images/illustrations/credit-card.png";
import flying_rocket from "../../images/illustrations/flying_rocket.png";

import { Fade } from 'react-reveal';

export default function CreditCardSection() {
  return (
    <section id='about' className="container mx-auto px-10 py-28">
      <div className="grid md:grid-cols-2 gap-6">
        <div className=" px-4 md:px-4">
          <Fade up>
            <img src={flying_rocket} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Why <span className="text-blue-gradient"> Us?</span>
            </h2>

            <ul className="my-6">
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                <span className="text-blue-gradient font-bold">Expertise and Experience: </span> Our 10+ years of industry
                knowledge positions us above all others in achieving
                results.
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                <span className="text-blue-gradient font-bold">Better Repayment Terms: </span> 
                 We anticipate aggressive
                tactics to secure favorable terms, like lower interest rates
                or reduced debt.
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                <span className="text-blue-gradient font-bold">Time and Stress Savings: </span> Leaving the negotiations to us
                  saves you time and reduces stress, allowing you to focus
                  on business growth.
              </li>
            </ul>
{/* 
            <SecondaryButton>
              Join the waitlist
            </SecondaryButton> */}
          </div>
        </div>
      </div>
    </section>
  );
}