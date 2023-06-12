import React from "react";
import { FaWindows, FaLinux, FaAppStore, FaAndroid } from "react-icons/fa";

import hero from "../../images/illustrations/hero.png";
import PrimaryButton from "../buttons/PrimaryButton";

import BlueCircleParticle from "../particles/BlueCircleParticle";
import OrangeCircleParticle from "../particles/OrangeCircleParticle";
import StarParticle from "../particles/StarParticle";
import PurpleCircleParticle from "../particles/PurpleCircleParticle";

export default function HeroSection() {
  return (
    <section className="relative px-5 bg-primary pt-[140px] bg-opacity-5 pb-24">
      <span className="absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-gradient-to-br from-primary to-secondary -right-0 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />

      <div className="container px-4 mx-auto grid md:grid-cols-2">
        <div className="flex items-center">
          <div className="relative">
            <StarParticle className="absolute top-0 right-0" />
            <PurpleCircleParticle className="absolute bottom-0 -left-12" />

            <p className="text-primary">BYE-BYE MCA DEBT</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">
              You're paying <br />
              <span className="text-blue-gradient">too much</span>
            </h1>
            {/* ====== */}
            <div className="mt-4 mb-8">
              <p className="text-gray">
                Experience peace of mind and regain control of your business
                finances today!
              </p>
              {/* <p className="text-gray">Your Financial Potential with Professional Loan Consultancy Services.</p> */}
            </div>

            {/* ====== */}
            <div className="col-span-2 lg:flex gap-4 lg:mb-12">
              <a href="/">
                <PrimaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                  Get a quote
                </PrimaryButton>
              </a>
              {/* <DropdownButton name="Download App" className="w-full lg:w-auto">
                <a href="/download/windows" target="_blank" className="w-full hover:bg-primary px-6 pt-4 pb-2 block hover:text-white">
                  <FaWindows className='inline mr-2' /> Windows
                </a>
                <a href="/download/linux" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaLinux className='inline mr-2' /> Linux
                </a>
                <a href="/download/android" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaAndroid className='inline mr-2' /> Android
                </a>
                <a href="/download/ios" target="_blank" className="w-full hover:bg-primary px-6 pb-4 pt-2 block hover:text-white">
                  <FaAppStore className='inline mr-2' /> IOS
                </a>
              </DropdownButton> */}
            </div>
          </div>
        </div>
        <div className="relative -top-10 hidden md:block">
          <BlueCircleParticle className="absolute top-0 left-11 duration-[5s]" />
          <OrangeCircleParticle className="absolute bottom-1/4 right-0" />
          <img src={hero} alt="Globe" />
        </div>
      </div>
    </section>
  );
}
