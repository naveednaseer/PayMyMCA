import React, { useState } from "react";
import { Fade } from "react-reveal";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import form_asset2 from "../../images/illustrations/form_asset2.png";
import Menus from "../Navbar/Menus";

const HomeForm = () => {
  const [step, setStep] = useState(1);
  const [formFilled, setFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    debtAmount: 10000,
  });

  // Form input change handler
  const inputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Next button click handler
  const nextStep = () => {
    console.log(formData);
    const form = document.querySelector("form");
    if (form.reportValidity()) {
      setStep(step + 1);
    }
  };

  // Submit button click handler
  const submitStep = () => {
    console.log(formData);
  };

  // Previous button click handler
  const prevStep = () => {
    setStep(step - 1);
  };

  // Form submit handler
  const formHandler = (e) => {
    e.preventDefault();
    // https://sheetdb.io/api/v1/xgzpyun4r2nvn

    fetch("https://sheetdb.io/api/v1/f1071gwgu1a9a", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: formData,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setFormFilled(true);
  };

  return (
    <div id="homeform">
      <div className="container mx-auto py-32">
        <h2 className="font-bold text-4xl mb-6 leading-normal">
          Get a quote <span className="text-blue-gradient">today!</span>
        </h2>
        <div className="grid md:grid-cols-2 flex gap-10">
          <div className="flex items-center justify-center">
            <div className="max-w-xl w-full">
              {formFilled ? (
                <div>
                  <h2 className="font-bold text-4xl mb-6 leading-normal">
                    Thanks{" "}
                    <span className="text-blue-gradient">
                      {" "}
                      {formData.firstname}
                    </span>{" "}
                    for submiting a request to get an initial quote!
                  </h2>
                  <PrimaryButton className="font-bold">
                    Please book a time
                  </PrimaryButton>
                </div>
              ) : (
                <form onSubmit={formHandler}>
                  <div>
                    <div className="flex justify-between gap-4 md:gap-6 mb-6">
                      <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                        <div className="border-r border-primary pr-4 md:pr-6">
                          <small className="text-primary">First Name</small>
                        </div>
                        <input
                          type="text"
                          name="firstname"
                          placeholder="Enter Your First Name"
                          onChange={inputChangeHandler}
                          value={formData.firstname}
                          required
                          className="text-right outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-4 md:gap-6 mb-6">
                      <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                        <div className="border-r border-primary pr-4 md:pr-6">
                          <small className="text-primary">Last Name</small>
                        </div>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Enter Your Last Name"
                          onChange={inputChangeHandler}
                          value={formData.lastname}
                          required
                          className="text-right outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-4 md:gap-6 mb-6">
                      <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                        <div className="border-r border-primary pr-4 md:pr-6">
                          <small className="text-primary">Email</small>
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          onChange={inputChangeHandler}
                          value={formData.email}
                          required
                          className="text-right outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-4 md:gap-6 mb-6">
                      <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                        <div className="border-r border-primary pr-4 md:pr-6">
                          <small className="text-primary">Phone</small>
                        </div>
                        <input
                          type="tel"
                          pattern="[0-9]{10}"
                          maxlength="10"
                          title="Ten digits phone number"
                          name="number"
                          placeholder="Enter Your Number"
                          onChange={inputChangeHandler}
                          value={formData.number}
                          required
                          className="text-right outline-none w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between gap-4 md:gap-6 mb-6">
                        <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                          <div className="border-primary  pr-4 md:pr-6">
                            <small className="text-primary">Amount</small>
                          </div>
                          <input
                            required
                            type="range"
                            min="10000"
                            max="5000000"
                            step="1000"
                            name="debtAmount"
                            value={formData.debtAmount}
                            onChange={inputChangeHandler}
                            className="text-right outline-none w-full"
                          />
                        </div>
                      </div>
                      <div className="text-center border-primary">
                        <p className="text-primary text-3xl font-bold">
                          $
                          {formData.debtAmount == 5000000
                            ? formData.debtAmount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+"
                            : formData.debtAmount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-evenly gap-4 md:gap-6 mt-6">
                      <PrimaryButton onClick={nextStep}>Next</PrimaryButton>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="row-start-1 md:col-start-2 ">
            <Fade up>
              <img src={form_asset2} alt="image" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
