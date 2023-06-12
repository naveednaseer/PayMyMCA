import React from "react";

import partner1 from "../../images/partners/partner1.png";
import partner2 from "../../images/partners/partner2.png";
import partner3 from "../../images/partners/partner3.png";
import partner4 from "../../images/partners/partner4.png";
import { Fade } from "react-reveal";

export default function PartnerSection() {
  return (
    // <section className="px-6">
    //   <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
    //     <div className="container mx-auto">
    //       <div className="text-center mb-4">
    //         <h2 className="text-3xl font-bold mb-4">Trusted Partners Worldwide</h2>
    //         <p className='text-gray'>We're partners with countless major organisations around the globe</p>
    //       </div>
    //       <div className="mx-4">
    //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    //           <Fade up >
    //             <img src={partner1} className="basis-1/2" alt="" />
    //           </Fade>
    //           <Fade up delay={200}>
    //             <img src={partner2} className="basis-1/2" alt="" />
    //           </Fade>
    //           <Fade up delay={400}>
    //             <img src={partner3} className="basis-1/2" alt="" />
    //           </Fade>
    //           <Fade up delay={600}>
    //             <img src={partner4} className="basis-1/2" alt="" />
    //           </Fade>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div>
                <h2 className="mt-6 text-center font-bold text-4xl leading-normal">
                Lending products we <span className='text-blue-gradient'>specialize</span> in
          </h2>
      <div>
        <div className="img_container">
          {/* -------------1st card---------- */}
        <div className="img_card">
          <div className="img_box">
            <img src={partner1} />
          </div>
          <div className="img_content">
            <h2>Product 1</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non officia nobis laboriosam eaque officiis, autem provident ipsum molestias itaque debitis quas, quasi deleniti reiciendis consequatur. Atque inventore facilis ratione eveniet?</p>
          </div>
        </div>


          {/* -------------2nd card---------- */}
        <div className="img_card">
          <div className="img_box">
            <img src={partner2} />
          </div> 
          <div className="img_content">
            <h2>Product 2</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non officia nobis laboriosam eaque officiis, autem provident ipsum molestias itaque debitis quas, quasi deleniti reiciendis consequatur. Atque inventore facilis ratione eveniet?</p>
          </div>
        </div>

          {/* -------------3rd card---------- */}
        <div className="img_card">
          <div className="img_box">
            <img src={partner4} />
          </div>
          <div className="img_content">
            <h2>Product 3</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non officia nobis laboriosam eaque officiis, autem provident ipsum molestias itaque debitis quas, quasi deleniti reiciendis consequatur. Atque inventore facilis ratione eveniet?</p>
          </div>
        </div>






      </div>
      </div>
    </div>
  );
}
