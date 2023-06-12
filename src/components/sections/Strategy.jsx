import React from "react";
import question_work from "../../images/illustrations/question_work.png";
import { Fade } from "react-reveal";

export default function Strategy() {
  return (
    <section id="strategy" className="px-6">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="lg:row-start-1 max-w-lg">
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                Our<span className="text-blue-gradient"> Strategy</span>
              </h2>

              <div className="mb-6">
                <p className="text-gray">
                  Conquer business debts with our winning strategy!
                </p>
                <br></br>
                <p className="text-gray">
                  Achieve a debt-free future with our proven strategies. Say
                  goodbye to bankruptcy fears, legal battles, and attorney fees.
                  Embrace a straightforward business approach that eliminates
                  debt effectively, ensuring financial freedom and success.
                </p>
                <br></br>
                <p className="text-gray">
                  Act now and take control of your future!
                </p>
              </div>
            </div>
            <div className="row-start-1 mb-8">
              <Fade up>
                <img src={question_work} alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
