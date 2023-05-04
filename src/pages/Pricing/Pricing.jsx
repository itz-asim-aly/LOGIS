import React, { useEffect } from 'react'
import "./Pricing.css"
import Breadcrumb from "react-bootstrap/Breadcrumb";
import PricingTab from '../../component/pricingTab/PricingTab';
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineArrowUp } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";


const Pricing = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <>
      <div className="parent-picing">
        <div className="Pricing-hero">
          <div className="Pricing-hero-content">
            <h1>Pricing</h1>
            <p>
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </p>
          </div>
        </div>
        <div className="Pricing-BreadCrumb">
          <Breadcrumb className="container">
            <Breadcrumb.Item className="Breadcrumb-Item" href="/">
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item className="Breadcrumb-Item" active>
              Pricing
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <PricingTab />

        {/* /////// */}
        <div className="horizontal-pricing-tab">
          <div className="horizontal-pricing-tab-heading" data-aos="fade-up">
            <span className="horizontal-pricing-shadow">Pricing</span>
            <h2>
              PRICING
              <span className="blue-line"></span>
            </h2>
          </div>
          <div class="horizontal-free-tab" data-aos="fade-up">
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
              <li class="na">
                <i>
                  <RxCross2 />
                </i>
                <del>Massa ultricies mi quis hendrerit</del>
              </li>
            </ul>
            <a href="#" class="horizontal-buy-btn">
              Buy Now
            </a>
          </div>
          <div className="horizontal-pro-tab" data-aos="fade-up">
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
                Massa ultricies mi quis hendrerit
              </li>
            </ul>
            <a href="#" class="horizontal-pro-buy-btn">
              Buy Now
            </a>
          </div>
          <div className="horizontal-premium-tab" data-aos="fade-up">
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
            </ul>
            <a href="#" class="horizontal-buy-btn">
              Buy Now
            </a>
          </div>
        </div>
        <a
          href="#"
          class="scroll-top d-flex align-items-center justify-content-center active"
        >
          <i class="bi bi-arrow-up-short">
            <AiOutlineArrowUp />
          </i>
        </a>
      </div>
    </>
  );
}

export default Pricing