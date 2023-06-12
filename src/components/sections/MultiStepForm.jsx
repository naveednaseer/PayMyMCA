import React, { useState } from "react";
import { Fade } from "react-reveal";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Menus from "../Navbar/Menus";
import pmmlogo from "../../images/pmmlogo.svg";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formFilled, setFormFilled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    DOB: "",
    debtAmount: 10000,
  });

  const states = [
    { label: "", value: "" },
    { label: "Alabama", value: "Alabama" },
    { label: "Alaska", value: "Alaska" },
    { label: "Arizona", value: "Arizona" },
    { label: "Arkansas", value: "Arkansas" },
    { label: "California", value: "California" },
    { label: "Colorado", value: "Colorado" },
    { label: "Connecticut", value: "Connecticut" },
    { label: "Delaware", value: "Delaware" },
    { label: "Florida", value: "Florida" },
    { label: "Georgia", value: "Georgia" },
    { label: "Hawaii", value: "Hawaii" },
    { label: "Idaho", value: "Idaho" },
    { label: "Illinois", value: "Illinois" },
    { label: "Indiana", value: "Indiana" },
    { label: "Iowa", value: "Iowa" },
    { label: "Kansas", value: "Kansas" },
    { label: "Kentucky", value: "Kentucky" },
    { label: "Louisiana", value: "Louisiana" },
    { label: "Maine", value: "Maine" },
    { label: "Maryland", value: "Maryland" },
    { label: "Massachusetts", value: "Massachusetts" },
    { label: "Michigan", value: "Michigan" },
    { label: "Minnesota", value: "Minnesota" },
    { label: "Mississippi", value: "Mississippi" },
    { label: "Missouri", value: "Missouri" },
    { label: "Montana", value: "Montana" },
    { label: "Nebraska", value: "Nebraska" },
    { label: "Nevada", value: "Nevada" },
    { label: "New Hampshire", value: "New Hampshire" },
    { label: "New Jersey", value: "New Jersey" },
    { label: "New Mexico", value: "New Mexico" },
    { label: "New York", value: "New York" },
    { label: "North Carolina", value: "North Carolina" },
    { label: "North Dakota", value: "North Dakota" },
    { label: "Ohio", value: "Ohio" },
    { label: "Oklahoma", value: "Oklahoma" },
    { label: "Oregon", value: "Oregon" },
    { label: "Pennsylvania", value: "Pennsylvania" },
    { label: "Rhode Island", value: "Rhode Island" },
    { label: "South Carolina", value: "South Carolina" },
    { label: "South Dakota", value: "South Dakota" },
    { label: "Tennessee", value: "Tennessee" },
    { label: "Texas", value: "Texas" },
    { label: "Utah", value: "Utah" },
    { label: "Vermont", value: "Vermont" },
    { label: "Virginia", value: "Virginia" },
    { label: "Washington", value: "Washington" },
    { label: "West Virginia", value: "West Virginia" },
    { label: "Wisconsin", value: "Wisconsin" },
    { label: "Wyoming", value: "Wyoming" },
    { label: "American Samoa", value: "American Samoa" },
    { label: "Guam", value: "Guam" },
    { label: "Northern Mariana Islands", value: "Northern Mariana Islands" },
    { label: "Puerto Rico", value: "Puerto Rico" },
    { label: "U.S. Virgin Islands", value: "U.S. Virgin Islands" },
  ];

  // Form input change handler
  const inputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Next button click handler
  const nextStep = () => {
    const form = document.querySelector("form");
    if (form.reportValidity()) {
      setStep(step + 1);
    }
  };

  // Submit button click handler
  const submitStep = () => {
    console.log(formData);
    // https://sheet.best/api/sheets/f17b5b82-f132-4e2a-9cfa-33f69e8758d9
  };

  // Previous button click handler
  const prevStep = () => {
    setStep(step - 1);
  };

  // Form submit handler
  const formHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setFormFilled(true);
    }, 6000);



    fetch("https://sheetdb.io/api/v1/smkx04szpwcx3", {
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
  };

  return (
    <section>
      <nav className="flex items-center justify-around p-4 bg-gray-200">
        <div className="flex top-0 items-center">
          <a href="/home">
            <img src={pmmlogo} alt="Logo" className="h-10 mt-1 mr-4" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-medium">&#9743; &nbsp;</span>
          <p className="mr-2 font-bold"> 123-456-7890</p>
        </div>
      </nav>
      {isLoading ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <Fade up>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border border-gray-300  p-40 rounded-xl shadow-xl text-center">
              <div className="mb-20">
                <div className="animate-ping  rounded-full h-20 w-20 border-8 border-blue-500 mx-auto"></div>
              </div>
              <p className="text-xl font-bold">Please stand by...</p>
              <p className="mt-8">Evaluating best options</p>
            </div>
          </Fade>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      <div className="container mx-auto ">
        <div className="w-full pt-20 flex justify-center">
          {step > 1 && (
            <div className="relative ">
              <div className="absolute top-1/2 left-0 right-0 h-1"></div>

              <div className="flex items-center">
                {step === 2 && (
                  <div className="flex items-center">
                    <div className="font-bold mx-2 text-3xl text-secondary">
                      &#x2780;
                    </div>
                    <div className="h-1 w-32 bg-black"></div>
                    <div className="font-bold mx-2 text-3xl">&#x2781;</div>
                    <div className="flex items-center">
                      <div className="h-1 w-32 bg-black"></div>
                      <div className="font-bold mx-2 text-3xl">&#x2782;</div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex items-center">
                    <div className="font-bold mx-2 text-3xl text-secondary">
                      &#x2780;
                    </div>
                    <div className="h-1 w-32 bg-primary"></div>
                    <div className="font-bold mx-2 text-3xl text-secondary">
                      &#x2781;
                    </div>
                    <div className="flex items-center">
                      <div className="h-1 w-32 bg-black"></div>
                      <div className="font-bold mx-2 text-3xl">&#x2782;</div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="flex items-center">
                    <div className="font-bold mx-2 text-3xl text-secondary">
                      &#x2780;
                    </div>
                    <div className="h-1 w-32 bg-primary"></div>
                    <div className="font-bold mx-2 text-3xl text-secondary">
                      &#x2781;
                    </div>
                    <div className="flex items-center">
                      <div className="h-1 w-32 bg-primary"></div>
                      <div className="font-bold mx-2 text-3xl text-secondary">
                        &#x2782;
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="grid pb-32 gap-10">
          <div className="flex justify-center items-center">
            <div className="max-w-xl w-full">
              {formFilled ? (
                // {isLoading}
                <div class="flex items-center justify-center">
                  <div class="p-4 rounded shadow-lg ring ring-indigo-600/50">
                    <div class="flex flex-col items-center space-y-2">
                      <svg
                        className="w-20 h-20"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-green-600 w-32 h-28"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h1 class="text-4xl text-blue-gradient text-center font-bold">
                        Success!
                      </h1>
                      <p class="text-center">
                        Your form has been processed. We look forward to
                        speaking with you soon.
                      </p>
                      <a
                        href="/home"
                        class="inline-flex items-center px-4 py-2 text-white bg-primary  rounded rounded-full hover:bg-secondary focus:outline-none focus:ring"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 h-3 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                          />
                        </svg>
                        <PrimaryButton class="text-sm font-medium">
                          Book a meeting
                        </PrimaryButton>
                      </a>
                      <small class="text-center">
                        Please take a moment to schedule a 20 minute call with
                        us using the calendar link above.
                      </small>
                    </div>
                  </div>
                </div>
              ) : (
                <form>
                  {step === 1 && (
                    <div>
                      <h2 className="font-bold text-center text-4xl mb-6 leading-normal">
                        Enter your debt amount
                      </h2>
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
                      <div className="flex justify-center gap-4 md:gap-6 mb-6">
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
                      <div className="justify-center flex">
                        <PrimaryButton onClick={nextStep}>
                          Continue
                        </PrimaryButton>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="font-bold text-center text-4xl mb-6 leading-normal">
                        What state do you live in?
                      </h2>
                      <div className="text-center border-primary">
                        <p className="text-primary text-3xl font-bold">
                          &nbsp;
                        </p>
                      </div>

                      <div className="flex justify-between gap-4 md:gap-6 mb-6">
                        <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                          <div className="border-r border-primary pr-4 md:pr-6">
                            <small className="text-primary">State</small>
                          </div>
                          <select
                            className="text-right outline-none w-full"
                            name="state"
                            id="state"
                            onChange={inputChangeHandler}
                            value={formData.state}
                          >
                            {states.map((obj) => (
                              <option
                                name="state"
                                onChange={inputChangeHandler}
                                className="text-left outline-none w-full"
                                key={obj.label}
                                value={obj.value}
                              >
                                {obj.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {formData.state == "" ? (
                        <div className="justify-center flex">
                          <PrimaryButton disabled onClick={nextStep}>
                            Continue
                          </PrimaryButton>
                        </div>
                      ) : (
                        <div className="justify-center flex">
                          <PrimaryButton
                            className="justify-center flex"
                            onClick={nextStep}
                          >
                            Continue
                          </PrimaryButton>
                        </div>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="font-bold text-center text-4xl mb-6 leading-normal">
                        Please fill this form to continue
                      </h2>
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
                            <small className="text-primary">Number</small>
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
                      <small className="text-center leading-3">
                        By providing your phone number above, and clicking on
                        the ‘Continue’ button, you are consenting to receive
                        calls, texts, and recorded messages in the manner
                        described below.
                      </small>
                      <div className="justify-center my-3 flex">
                        <PrimaryButton onClick={nextStep}>
                          Continue
                        </PrimaryButton>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h2 className="font-bold text-center text-4xl mb-6 leading-normal">
                        Please verify your address
                      </h2>
                      <div className="text-center border-primary">
                        <p className="text-primary text-3xl font-bold">
                          &nbsp;
                        </p>
                      </div>
                      <div className="flex justify-between gap-4 md:gap-6 mb-6">
                        <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                          <div className="border-r border-primary pr-4 md:pr-6">
                            <small className="text-primary">Address</small>
                          </div>
                          <input
                            type="text"
                            name="address"
                            placeholder="Enter Your Address"
                            onChange={inputChangeHandler}
                            value={formData.address}
                            className="text-right outline-none w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between gap-4 md:gap-6 mb-6">
                        <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                          <div className="border-r border-primary pr-4 md:pr-6">
                            <small className="text-primary">City</small>
                          </div>
                          <input
                            type="text"
                            name="city"
                            placeholder="Enter your City"
                            onChange={inputChangeHandler}
                            value={formData.city}
                            className="text-right outline-none w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between gap-4 md:gap-6 mb-6">
                        <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                          <div className="border-r border-primary pr-4 md:pr-6">
                            <small className="text-primary">State</small>
                          </div>
                          <input
                            disabled
                            type="text"
                            name="state"
                            placeholder="Enter your State"
                            onChange={inputChangeHandler}
                            value={formData.state}
                            className="text-right outline-none w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between gap-4 md:gap-6 mb-6">
                        <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                          <div className="border-r border-primary pr-4 md:pr-6">
                            <small className="text-primary">Zip</small>
                          </div>
                          <input
                            type="tel"
                            pattern="[0-9]{5}"
                            maxLength="5"
                            name="zip"
                            placeholder="Enter your Zip Code"
                            onChange={inputChangeHandler}
                            value={formData.zip}
                            className="text-right outline-none w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between gap-4 md:gap-6 mb-6">
                        <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                          <div className="border-r border-primary pr-4 md:pr-6">
                            <small className="text-primary">D.O.B</small>
                          </div>
                          <input
                            type="date"
                            name="DOB"
                            placeholder="Enter your D.O.B"
                            onChange={inputChangeHandler}
                            value={formData.DOB}
                            className="text-right outline-none w-full"
                            required
                            style={{ color: "#aca3b7" }}
                          />
                        </div>
                      </div>
                      <div className="justify-center flex">
                        <PrimaryButton onClick={formHandler}>
                          Submit
                        </PrimaryButton>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* ==========IMG RIGHT SIDE=============== */}
            {/* <div className="row-start-1 md:col-start-2">
          <Fade up>
            <img src={form_img} alt="" />
          </Fade>
        </div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-evenly gap-4 px-10 md:gap-6 mt-6">
        {step <= 2 ||
          (step === 4 && (
            <div className="text-xs">
              *Our estimates are based on prior results, which will vary
              depending on your specific enrolled creditors and your individual
              program terms, Not all clients are able to complate their program
              for various reasons, including their ability to save sufficient
              funds. We do not guarantee that your debts will be resolved for a
              specific amount or percentage or within a specific period of time.
              We do not assume your debts, make monthly payments to creditors or
              provide tax, bankruptcy, accounting or legal advice or credit
              repair services. Dur service is not available in all US
              territones, and our foes vary from state to state. Please contact
              a tax professional to discuss potential tax consequences of less
              than full balance debt resolution. Read and understand all program
              materials prior to enrollment The use of debt settlement services
              may or may not affect your creditworthiness, may or may not result
              in you being subject to collections or being used by creditors or
              collectors and may or may not increase the outstanding balances of
              your enrolled accounts due to the accrual of fees and interests.
              However, negotiated settlements we obtain on your behalf resolve
              the entire account, including ed accrued fees and interest C.P.D.
              Reg. No. 1.5.12-03825
            </div>
          ))}
        {step == 3 && (
          <div className="text-xs">
            I consent to receive calls and text messages, including marketing
            and promotional messages, from Pay My Advance, and its related or
            affiliated companies and/or Service Providers, including through the
            use of an automatic telephone dialing system or an artificial or
            prerecorded voice, at any telephone number I provide. Msg and data
            rates may apply. Consent is not a condition for purchase. For text
            messages, reply STOP to cancel. If you choose not to consent, you
            may call us at (123) 456-7890 to continue your inquiry.
          </div>
        )}
      </div>
    </section>
  );
}
