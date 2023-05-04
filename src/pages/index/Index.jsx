import React, { useEffect } from "react";
import "./Index.css";
import CountUp from "react-countup";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import MoreData from "./MoreData";
import PricingTab from "../../component/pricingTab/PricingTab";
import Faqs from "../../component/FAQs/Faqs";
import Slider from "../../component/Slider/Slider";
import AboutCompo from "../../component/aboutCop/AboutCompo";
import ServicesCompo1 from "../../component/servicesCompo1/ServicesCompo1";
import ServicesCompo2 from "../../component/servicesCompo2/servicesCompo2";
import { AiOutlineArrowUp } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css"

const Index = () => {
  useEffect(() => {
    Aos.init({duration : 1000})
  }, [])

  
  return (
    <>
      {/* hero section */}
      <div className="header">
        <div className="hero">
          <div className="hero-txt" data-aos="fade-up">
            <h2>Your Lightning Fast Delivery Partner</h2>
            <p>
              Facere distinctio molestiae nisi fugit tenetur repellat non
              praesentium nesciunt optio quis sit odio nemo quisquam. eius quos
              reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam
              occaecati odio est possimus vel reprehenderit
            </p>
            <div class="main-search-input ">
              <input
                className="header2-ip"
                type="text"
                placeholder="ZIP code or CitY"
              />
              <button class="main-search-button">Search</button>
            </div>
            <div className="counter" data-aos="fade-up">
              <div className="count">
                <h3>
                  <CountUp start={0} end={232} duration={2} delay={0} />
                  <span className="count-span"></span>
                </h3>
                <p>Clients</p>
              </div>
              <div className="count">
                <h3>
                  <CountUp start={0} end={521} duration={2} delay={0} />
                  <span className="about-count-span"></span>
                </h3>
                <p>Projects</p>
              </div>
              <div className="count">
                <h3>
                  <CountUp start={0} end={1453} duration={2} delay={0} />
                  <span className="about-count-span"></span>
                </h3>
                <p>Support</p>
              </div>
              <div className="count">
                <h3>
                  <CountUp start={0} end={32} duration={2} delay={0} />
                  <span className="about-count-span"></span>
                </h3>
                <p>Workers</p>
              </div>
            </div>
          </div>
          <div className="hero-img" data-aos="zoom-in"></div>
        </div>
        <div className="more" data-aos="fade-up">
          {MoreData.map((el) => {
            return (
              <>
                <div className="read-more">
                  <div className="more-icon">{el.logo}</div>
                  <div className="more-text">
                    <h4> {el.heading} </h4>
                    <p> {el.para} </p>
                    <a href="" className="more-link">
                      Learn More
                      <i>
                        <HiOutlineArrowNarrowRight />
                      </i>
                    </a>
                  </div>
                </div>
                ;
              </>
            );
          })}
        </div>
      </div>

      {/* about section */}
      <AboutCompo data-aos="fade-up" />
      <ServicesCompo1 />
      <div className="action-div">
        <div className="action-div-txt">
          <h3>Call To Action</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <a class="action-btn" href="#">
            Call To Action
          </a>
        </div>
      </div>
      <ServicesCompo2 />

      {/* Services section */}

      {/* pricing section */}
      <div className="pricing-main">
        <span className="pricing-shadow">Pricing</span>
        <h2>
          PRICING
          <span className="blue-line"></span>
        </h2>
        <PricingTab />
      </div>

      {/* slider component */}

      <div className="slider-main">
        <Slider />
      </div>
      {/* FREQUENTLY ASKED QUESTIONS */}

      <Faqs />
      <a
        href="#"
        class="scroll-top d-flex align-items-center justify-content-center active"
      >
        <i class="bi bi-arrow-up-short">
          <AiOutlineArrowUp />
        </i>
      </a>
    </>
  );
};

export default Index;
