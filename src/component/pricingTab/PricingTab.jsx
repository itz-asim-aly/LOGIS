import React, { useEffect } from "react";
import "./PricingTab.css";
import { GrFormCheckmark } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const PricingTab = () => {
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  return (
    <>
      <div className="pricing-tab">
        <div class="free-tab" data-aos="fade-up">
          <h3>Free Plan</h3>
          <h4>
            <sup>$</sup>0<span> / month</span>
          </h4>
          <ul>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Quam adipiscing vitae proin
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Nec feugiat nisl pretium
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Nulla at volutpat diam uteera
            </li>
            <li class="na">
              <i className="checkIcon">
                <RxCross2 />
              </i>
              <del>Pharetra massa massa ultricies</del>
            </li>
            <li class="na">
              <i>
                <RxCross2 />
              </i>
              <del>Massa ultricies mi quis hendrerit</del>
            </li>
          </ul>
          <a href="#" class="buy-btn">
            Buy Now
          </a>
        </div>
        <div className="pro-tab" data-aos="fade-up">
          <h3>Business Plan</h3>
          <h4>
            <sup>$</sup>29<span> / month</span>
          </h4>
          <ul>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Quam adipiscing vitae proin
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Nec feugiat nisl pretium
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Nulla at volutpat diam uteera
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Pharetra massa massa ultricies
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Massa ultricies mi quis hendrerit
            </li>
          </ul>
          <a href="#" class="pro-buy-btn">
            Buy Now
          </a>
        </div>
        <div className="premium-tab"data-aos="fade-up">
          <h3>Developer Plan</h3>
          <h4>
            <sup>$</sup>59<span> / month</span>
          </h4>
          <ul>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Quam adipiscing vitae proin
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Nec feugiat nisl pretium
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Nulla at volutpat diam uteera
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Pharetra massa massa ultricies
            </li>
            <li>
              <i>
                <BsCheckLg />
              </i>
              Massa ultricies mi quis hendrerit
            </li>
          </ul>
          <a href="#" class="buy-btn">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default PricingTab;
