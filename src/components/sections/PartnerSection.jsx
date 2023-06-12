import React from "react";

import partner1 from "../../images/partners/partner1.png";
import partner2 from "../../images/partners/partner2.png";
import partner3 from "../../images/partners/partner3.png";
import partner4 from "../../images/partners/partner4.png";
import { Fade } from "react-reveal";

export default function PartnerSection() {
  return (
    <div>
      <h2 className="mt-6 text-center font-bold text-4xl leading-normal">
        Lending products we{" "}
        <span className="text-blue-gradient">specialize</span> in
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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                officia nobis laboriosam eaque officiis, autem provident ipsum
                molestias itaque debitis quas, quasi deleniti reiciendis
                consequatur. Atque inventore facilis ratione eveniet?
              </p>
            </div>
          </div>

          {/* -------------2nd card---------- */}
          <div className="img_card">
            <div className="img_box">
              <img src={partner2} />
            </div>
            <div className="img_content">
              <h2>Product 2</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                officia nobis laboriosam eaque officiis, autem provident ipsum
                molestias itaque debitis quas, quasi deleniti reiciendis
                consequatur. Atque inventore facilis ratione eveniet?
              </p>
            </div>
          </div>

          {/* -------------3rd card---------- */}
          <div className="img_card">
            <div className="img_box">
              <img src={partner4} />
            </div>
            <div className="img_content">
              <h2>Product 3</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                officia nobis laboriosam eaque officiis, autem provident ipsum
                molestias itaque debitis quas, quasi deleniti reiciendis
                consequatur. Atque inventore facilis ratione eveniet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
