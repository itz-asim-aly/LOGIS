import React, { useEffect } from "react";
import "./ServicesCompo1.css";
// import { GrFormCheckmark } from "react-icons/gr";
// import { AiOutlineQuestionCircle } from "react-icons/ai";
// import { BsDiagram3, BsFullscreenExit, BsBroadcast } from "react-icons/bs";
// import CardData from "./ServicesCompoData1";
import CardData from "./ServicesCompo1Data";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesCompo1 = () => {
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  return (
    <>
      <div className="services">
        <div className="services-heading" data-aos="fade-up">
          <span className="Services-shadow">OUR SERVICES</span>
          <h2>
            OUR SERVICES
            <span className="blue-line"></span>
          </h2>
        </div>
        <div className="cards">
          {CardData.map((ele) => {
            return (
              <>
                <div className="cardItem" data-aos="fade-up">
                  <div className="card-img">
                    <img className="zoom" src={ele.img} alt="" />
                  </div>
                  <div className="card-txt">
                    <h4>
                      <a href="">{ele.heading}</a>
                    </h4>
                    <p> {ele.para} </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesCompo1;
