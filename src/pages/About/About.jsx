import React, { useEffect } from "react";
import "./About.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AboutCompo from "../../component/aboutCop/AboutCompo";
import CountUp from "react-countup";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import pic1 from "./team/team-1.jpg";
import pic2 from "./team/team-2.jpg";
import pic3 from "./team/team-3.jpg";
import Faqs from "../../component/FAQs/Faqs";
import Aos from "aos";
import { AiOutlineArrowUp } from "react-icons/ai";
import "aos/dist/aos.css"
import Slider from "../../component/Slider/Slider";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  
  return (
    <>
      <div className="about-hero" data-aos="fade-up">
        <div className="about-hero-content">
          <h1>About</h1>
          <p>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
        </div>
      </div>
      <div className="about-BreadCrumb">
        <Breadcrumb className="container">
          <Breadcrumb.Item className="Breadcrumb-Item" href="#">
            Home
          </Breadcrumb.Item>

          <Breadcrumb.Item className="Breadcrumb-Item" active>
            About
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <AboutCompo />

      <div className="about-counter" data-aos="fade-up">
        <div className="about-count">
          <h3>
            <CountUp start={0} end={232} duration={2} delay={0} />
            <span className="about-count-span"></span>
          </h3>
          <p>Clients</p>
        </div>
        <div className="about-count">
          <h3>
            <CountUp start={0} end={521} duration={2} delay={0} />
            <span className="about-count-span"></span>
          </h3>
          <p>Projects</p>
        </div>
        <div className="about-count">
          <h3>
            <CountUp start={0} end={1453} duration={2} delay={0} />
            <span className="about-count-span"></span>
          </h3>
          <p>Hours Of Support</p>
        </div>
        <div className="about-count">
          <h3>
            <CountUp start={0} end={32} duration={2} delay={0} />
            <span className="about-count-span"></span>
          </h3>
          <p>Workers</p>
        </div>
      </div>
      <div className="about-cards-main">
        <div className="about-cards-heading" data-aos="fade-up">
          <span className="about-card-shadow">OUR TEAM</span>
          <h2>
            OUR TEAM
            <span className="about-count-span"></span>
          </h2>
        </div>
        <div className="about-cards" data-aos="fade-up">
          <div className="about-card">
            <div className="about-card-img">
              <img src={pic1} alt="person one" />
            </div>
            <div className="about-card-txt">
              <h3>Walter White</h3>
              <span>Web Development</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas
                repellendus. In architecto rerum rerum temporibus
              </p>
              <div className="about-card-txt-icons">
                <a href="">
                  {" "}
                  <BsTwitter />
                </a>
                <a href="">
                  {" "}
                  <BsFacebook />
                </a>
                <a href="">
                  <BsInstagram />
                </a>
                <a href="">
                  {" "}
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-img">
              <img src={pic2} alt="" />
            </div>
            <div className="about-card-txt">
              <h3>William Anderson</h3>
              <span>Content</span>

              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                qui porro et laborum toro des clara
              </p>
              <div className="about-card-txt-icons">
                <a href="">
                  {" "}
                  <BsTwitter />
                </a>
                <a href="">
                  {" "}
                  <BsFacebook />
                </a>
                <a href="">
                  <BsInstagram />
                </a>
                <a href="">
                  {" "}
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-img">
              <img className="img-fluid" src={pic3} alt="" />
            </div>
            <div className="about-card-txt">
              <h3>Walter White</h3>
              <span>Web Development</span>
              <p>
                Magni qui quod omnis unde et eos fuga et exercitationem.
                veritatis perspiciatis quaerat qui aut aut aut
              </p>
              <div className="about-card-txt-icons">
                <a href="">
                  <BsTwitter />
                </a>
                <a href="">
                  <BsFacebook />
                </a>
                <a href="">
                  <BsInstagram />
                </a>
                <a href="">
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <Faqs />
      </div>
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

export default About;
