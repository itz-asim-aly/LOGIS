import React, { useEffect } from "react";
import "./Faqs.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";
import Aos from "aos";
import "aos/dist/aos.css";

const Faqs = () => {
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  return (
    <>
      <div className="FAQ-main container">
        <div className="faq-heading" data-aos="fade-up">
          <span className="faq-shadow">FREQUENTLY ASKED QUESTIONS</span>
          <h2>
            FREQUENTLY ASKED QUESTIONS
            <span className="blue-line"></span>
          </h2>
        </div>
        <div className="accor" data-aos="fade-up">
          <Accordion>
            <Accordion.Item eventKey="0" flush>
              <Accordion.Header id="Accordion-Header">
                <AiOutlineQuestionCircle className="accordion-icon" /> Non
                consectetur a erat nam at lectus urna duis?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <AiOutlineQuestionCircle className="accordion-icon" />
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque?
              </Accordion.Header>
              <Accordion.Body>
                <AiOutlineQuestionCircle />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <AiOutlineQuestionCircle className="accordion-icon" />
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <AiOutlineQuestionCircle className="accordion-icon" />
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <AiOutlineQuestionCircle className="accordion-icon" />
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faqs;
