import React, { useEffect } from "react";
// import "./ServicesCompo2.css";
// import "./servicesCompo2.css   "
import "./servicesCompo2.css";
import { GrFormCheckmark } from "react-icons/gr";
// import { AiOutlineQuestionCircle } from "react-icons/ai";
// import { BsDiagram3, BsFullscreenExit, BsBroadcast } from "react-icons/bs";
import feature1 from "./features-1.jpg";
import feature2 from "./features-2.jpg";
import feature3 from "./features-3.jpg";
import feature4 from "./features-4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesCompo2 = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <>
      <div className="card2-main">
        <div className="card2" data-aos="fade-up">
          <div className="card2-img">
            <img src={feature1} alt="" />
          </div>
          <div className="card2-txt">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p>
              <i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
            </p>
            <ul>
              <li>
                <i>
                  <GrFormCheckmark />
                </i>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <i>
                  <GrFormCheckmark />
                </i>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                <i>
                  <GrFormCheckmark />
                </i>
                Ullam est qui quos consequatur eos accusamus.
              </li>
            </ul>
          </div>
        </div>
        <div className="card2" data-aos="fade-up">
          <div className="card2-txt">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p>
              <i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
          <div className="card2-img">
            <img src={feature2} alt="" />
          </div>
        </div>
        <div className="card2" data-aos="fade-up">
          <div className="card2-img">
            <img src={feature3} alt="" />
          </div>
          <div className="card2-txt">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p>
              <i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
            </p>
            <ul>
              <li>
                <i>
                  <GrFormCheckmark />
                </i>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <i>
                  <GrFormCheckmark />
                </i>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                <i>
                  <GrFormCheckmark />
                </i>
                Ullam est qui quos consequatur eos accusamus.
              </li>
            </ul>
          </div>
        </div>
        <div className="card2" data-aos="fade-up">
          <div className="card2-txt">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p>
              <i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
          <div className="card2-img">
            <img src={feature4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCompo2;
