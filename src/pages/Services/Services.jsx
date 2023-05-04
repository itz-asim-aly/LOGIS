import React, { useEffect } from "react";
import "./Services.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ServicesCompo1 from "../../component/servicesCompo1/ServicesCompo1";
// import ServicesCompo from "../../component/servicesCompo1/ServicesCompo";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import MoreData from "../index/MoreData";
import ServicesCompo2 from "../../component/servicesCompo2/servicesCompo2";
import Faqs from "../../component/FAQs/Faqs";
import { AiOutlineArrowUp } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  return (
    <>
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Services</h1>
          <p>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
        </div>
      </div>
      <div className="services-BreadCrumb">
        <Breadcrumb className="container">
          <Breadcrumb.Item className="Breadcrumb-Item" href="/">
            Home
          </Breadcrumb.Item>

          <Breadcrumb.Item className="Breadcrumb-Item" active>
            Services
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="more">
        {MoreData.map((el) => {
          return (
            <>
              <div className="read-more" data-aos="fade-up">
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
      <ServicesCompo1 />
      <ServicesCompo2 />
      <Faqs />
      <a
        href="#"
        class="scroll-top d-flex align-items-center justify-content-center active"
      >
        <i class="bi bi-arrow-up-short">
          <AiOutlineArrowUp />
        </i>
      </a>
      {/* <ServicesCompo1/> */}
    </>
  );
};

export default Services;
