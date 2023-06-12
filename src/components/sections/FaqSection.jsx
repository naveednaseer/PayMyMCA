import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

import speech_bubble from '../../images/illustrations/speech_bubble.png';
import { Fade } from 'react-reveal';

const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div className='flex justify-end'>

        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div> 
    </div>
  );
};

export default function FaqSection() {
  return (
    <section className="container faq_pad mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <Fade up duration={1000}>
            <img src={speech_bubble} alt="FAQ" />
          </Fade> 
        </div>
        <div className="flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
              
              <FaqItem open={false} title="Why should I choose PMM ?">
                You should choose PMM for your loan consulting needs because we bring a wealth of expertise and experience to the table. With our deep industry knowledge and extensive network of lenders, we can provide you with a wide range of financing options tailored to your specific requirements. Our personalized approach ensures that we understand your unique financial goals and challenges, allowing us to offer customized solutions. We prioritize transparency, trust, and excellent customer service, aiming to simplify the loan process and help you secure the best possible terms. By choosing PMM, you gain a reliable partner who is dedicated to your financial success.              
              </FaqItem>
              
              <FaqItem open={false} title="How secure is PMM ?">
              At PMM, we take the security and confidentiality of our clients' information seriously. We have implemented robust security measures to safeguard your data from unauthorized access, loss, or theft. Our systems and processes comply with industry standards and regulations to ensure the highest level of protection. We prioritize data encryption, secure storage, and restricted access to sensitive information. Additionally, our team members undergo regular training on data privacy and security best practices. With PMM, you can trust that your information is handled with the utmost care and security.              
              </FaqItem>



              <FaqItem open={false} title="How do you ensure transparency and keep me informed throughout the loan process ?">
                You should choose PMM for your loan consulting needs because we bring a wealth of expertise and experience to the table. With our deep industry knowledge and extensive network of lenders, we can provide you with a wide range of financing options tailored to your specific requirements. Our personalized approach ensures that we understand your unique financial goals and challenges, allowing us to offer customized solutions. We prioritize transparency, trust, and excellent customer service, aiming to simplify the loan process and help you secure the best possible terms. By choosing PMM, you gain a reliable partner who is dedicated to your financial success.              
              </FaqItem>
              
              <FaqItem open={false} title="What is your experience and expertise in the loan industry ?">
              At PMM, we bring a wealth of experience and expertise to the loan industry. With years of operation, we have built a solid foundation of knowledge and a deep understanding of the loan landscape. Our team consists of seasoned professionals who have worked extensively in various aspects of the industry, including loan origination, underwriting, and financial analysis. We have successfully assisted numerous clients in securing loans for diverse purposes, such as business expansion, real estate acquisitions, and personal financing. Our track record and industry knowledge position us to navigate the complexities of the loan industry effectively, ensuring that our clients receive the best possible guidance and outcomes for their loan needs.              
              </FaqItem>




              
              {/* <FaqItem open={false} title="How do you ensure transparency and keep me informed throughout the loan process ?">
              At PMM, transparency and client communication are at the core of our approach. We ensure transparency and keep you informed throughout the loan process by maintaining clear and open communication channels, conducting detailed loan assessments, explaining loan options thoroughly, providing regular progress updates, disclosing fees and charges upfront, offering transparent documentation and contracts, and valuing client feedback and reviews. Our commitment to transparency ensures that you have a comprehensive understanding of the loan process, enabling you to make informed decisions and feel confident in our services.              
              </FaqItem> */}
              
              {/* <FaqItem open={false} title="What is your experience and expertise in the loan industry?">
              At PMM, we bring a wealth of experience and expertise to the loan industry. With years of operation, we have built a solid foundation of knowledge and a deep understanding of the loan landscape. Our team consists of seasoned professionals who have worked extensively in various aspects of the industry, including loan origination, underwriting, and financial analysis. We have successfully assisted numerous clients in securing loans for diverse purposes, such as business expansion, real estate acquisitions, and personal financing. Our track record and industry knowledge position us to navigate the complexities of the loan industry effectively, ensuring that our clients receive the best possible guidance and outcomes for their loan needs.              
              </FaqItem> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}