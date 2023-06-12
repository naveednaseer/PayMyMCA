import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

import gift from "../../images/illustrations/gift.png";
import { Fade } from "react-reveal";

export default function Benefits() {
  return (
    <section id="benefits" className="container mx-auto px-10 py-10">
      <div className="grid md:grid-cols-2">
        <div className="-top-10">
          <Fade up>
            <img src={gift} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
            <span className="text-blue-gradient">Benefits</span> to you
            </h2>
            <ul className="my-6">
              <li className="mb-6 text-xl">
                <span className="font-black">
                  <RiNumber1 className="text-primary  inline mr-2" />
                  Eliminate &nbsp;
                </span>
                excessive daily or weekly payments
              </li>
              <br></br>

              <li className="mb-6 text-xl">
                <span className="font-black">
                  <RiNumber2 className="text-primary inline mr-2" />
                  Improve &nbsp;
                </span>
                cash flow by up to 80%
              </li>
              <br></br>

              <li className="mb-6 text-xl">
                <span className="font-black">
                  <RiNumber3 className="text-primary inline mr-2" />
                  Save time  &nbsp;
                </span>
                and focus on your business growth
              </li>
              <br></br>

              <li className="mb-6 text-xl">
                <span className="font-black">
                  <RiNumber4 className="text-primary inline mr-2" />
                  Escape &nbsp;
                </span>
                  bankruptcy!
              </li>
              <br></br>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
