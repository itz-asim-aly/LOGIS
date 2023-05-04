import React, { useEffect } from 'react'
import "./GetaQuote.css";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiOutlineArrowUp } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const GetaQuote = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="Quote-hero">
        <div className="Quote-hero-content">
          <h1>Get a Quote</h1>
          <p>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
        </div>
      </div>
      <div className="Quote-BreadCrumb">
        <Breadcrumb className="container">
          <Breadcrumb.Item className="Breadcrumb-Item" href="#">
            Home
          </Breadcrumb.Item>

          <Breadcrumb.Item className="Breadcrumb-Item" active>
            Quote
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <section id="get-a-quote" class="get-a-quote">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <div class="row g-0">
            <div class="col-lg-5 quote-bg quote-img"></div>

            <div class="col-lg-7 quote-form">
              <form action="">
                <h3>Get a quote</h3>
                <p>
                  Vel nobis odio laboriosam et hic voluptatem. Inventore vitae
                  totam. Rerum repellendus enim linead sero park flows.
                </p>
                <div class="row gy-4">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="departure"
                      class="form-control"
                      placeholder="City of Departure"
                      required=""
                    />
                  </div>

                  <div class="col-md-6">
                    <input
                      type="text"
                      name="delivery"
                      class="form-control"
                      placeholder="Delivery City"
                      required=""
                    />
                  </div>

                  <div class="col-md-6">
                    <input
                      type="text"
                      name="weight"
                      class="form-control"
                      placeholder="Total Weight (kg)"
                      required=""
                    />
                  </div>

                  <div class="col-md-6">
                    <input
                      type="text"
                      name="dimensions"
                      class="form-control"
                      placeholder="Dimensions (cm)"
                      required=""
                    />
                  </div>

                  <div class="col-lg-12">
                    <h4>Your Personal Details</h4>
                  </div>

                  <div class="col-md-12">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      required=""
                    />
                  </div>

                  <div class="col-md-12 ">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>

                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="phone"
                      placeholder="Phone"
                      required=""
                    />
                  </div>

                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    {/* <div class="loading">Loading</div> */}
                    <div class="error-message"></div>
                    {/* <div class="sent-message">
                      Your quote request has been sent successfully. Thank you!
                    </div> */}

                    {/* <button type="submit">Get a quote</button> */}
                    <Button className="" id="quote-btn">
                      <NavLink to="#" className="nav-link text-white">
                        Send Message
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
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
      </section>
    </>
  );
}

export default GetaQuote