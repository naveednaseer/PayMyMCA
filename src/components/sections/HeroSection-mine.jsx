import React from "react";
import globoCrypto from "../../images/illustrations/globe.png";
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import {BsChevronDown} from 'react-icons/bs'



export default function HeroSection() {
  return (
    <section className='relative container  pt-[140px] bg-opacity-5 pb-24'>
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <div>
            <p className="text-primary">GET A QUOTE TODAY</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">
              The World’s <br />
              <span className="text-blue-gradient">Fastest Growing</span> <br />
              Consulting Agency
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni incidunt ad! Cumque impedit culpa ipsum porro fugit dicta commodi ipsam optio molestias facilis, non sapiente ipsa maiores nisi ullam.
              </p>
              <p className="text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, error.
              </p>


              <PrimaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                Get Started
              </PrimaryButton>

              <SecondaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                Contact
                <BsChevronDown className='inline ml-2' />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div>
          <img src={globoCrypto} alt="Globe" />
        </div>
      </div>
    </section>
  );
}
