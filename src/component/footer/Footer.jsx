import React from "react";
import "./footer.css";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-links1">
          <h3 className="logo">
            <b>Logis</b>
          </h3>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div className="footer-icons">
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

        <div className="footer-links2">
          <h6>Useful links</h6>
          <div className="list2">
            <ul>
              <li>
                <a href="#"> Home</a>
              </li>
              <li>
                <a href="#"> About</a>
              </li>
              <li>
                <a href="#"> Services</a>
              </li>
              <li>
                <a href="#"> Tearms and Services</a>
              </li>
              <li>
                <a href="#"> privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links2">
          <h6>Our Services</h6>
          <div className="list2">
            <ul>
              <li>
                <a href="#"> Web Design</a>
              </li>
              <li>
                <a href="#"> Web Development</a>
              </li>
              <li>
                <a href="#"> Product Management</a>
              </li>
              <li>
                <a href="#"> Marketing</a>
              </li>
              <li>
                <a href="#"> Graphic Design</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links3">
          <h6>Contect Us</h6>
          <div className="list4">
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
              <br />
              United States
              <br />
              <br />
              <b>Phone:</b> +1 5589 55488 55
              <br />
              <b>Email:</b> info@example.com
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="last-part">
        <div className="section1">
          © Copyright<b> Logis</b>. All Rights Reserved
        </div>
        <div className="section2">
          Designed by<b>Asim Aly</b>
        </div>
      </div>
    </>
  );
};

export default Footer;
