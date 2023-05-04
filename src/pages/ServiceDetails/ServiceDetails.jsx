import React, { useEffect } from "react";
import "./ServiceDetails.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiOutlineArrowUp } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
     useEffect(() => {
       Aos.init({ duration: 1000 });
     }, []);
  return (
    <>
      <div className="ServiceDetails-hero">
        <div className="ServiceDetails-hero-content">
          <h1>ServiceDetails</h1>
          <p>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
        </div>
      </div>
      <div className="ServiceDetails-BreadCrumb">
        <Breadcrumb className="container">
          <Breadcrumb.Item className="Breadcrumb-Item" href="/">
            Home
          </Breadcrumb.Item>

          <Breadcrumb.Item className="Breadcrumb-Item" active>
            ServiceDetails
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="ServiceDetails-main">
        <div className=""></div>
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
};

export default ServiceDetails;
