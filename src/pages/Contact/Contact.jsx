import React, { useEffect } from 'react'
import "./Contact.css"
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { BsFillGeoAltFill, BsEnvelope, BsPhone } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";



const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <>
      <div className="Contact-hero">
        <div className="Contact-hero-content">
          <h1>Contact</h1>
          <p>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
        </div>
      </div>
      <div className="Contact-BreadCrumb">
        <Breadcrumb className="container">
          <Breadcrumb.Item className="Breadcrumb-Item" href="#">
            Home
          </Breadcrumb.Item>

          <Breadcrumb.Item className="Breadcrumb-Item" active>
            Contact
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="Contact-main">
        <div className="Contact-main-map" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.89157059023!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1681378948168!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class=" contact-form-main" data-aos="fade-up">
          <div class=" contact-form-location">
            <div class="contact-icon-div">
              <i class="bi bi-geo-alt flex-shrink-0">
                <BsFillGeoAltFill />
              </i>
              <div>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div class="contact-icon-div">
              <i class="bi bi-envelope flex-shrink-0">
                <BsEnvelope />
              </i>
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>

            <div class="contact-icon-div">
              <i class="bi bi-phone flex-shrink-0">
                <BsPhone />
              </i>
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div class="col-lg-8 contact-form ">
            <form action="">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              {/* <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div> */}
              <div class="text-center">
                {/* <button type="submit">Send Message</button> */}
                <Button className="" id="form-btn">
                  <NavLink to="#" className="nav-link text-white">
                    Send Message
                  </NavLink>
                </Button>
              </div>
            </form>
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

export default Contact