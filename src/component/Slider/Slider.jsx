import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pic1 from "./testimonials/testimonials-1.jpg";
import pic2 from "./testimonials/testimonials-2.jpg";
import pic3 from "./testimonials/testimonials-3.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="cont">
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper testimonial"
      >
        <div className="testi-content mySwiper">
          <SwiperSlide className="Slide">
            <img src={pic1} alt="" />
            <h3 className="Slide-h3">Matt Brandon</h3>
            <h4 className="Slide-h4">Freelancer</h4>
            <div class="stars">
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
            </div>
            <p className="slider-txt">
              <i class="quote-icon-left">
                <FaQuoteLeft />
              </i>
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
              <i class="quote-icon-right">
                <FaQuoteRight />
              </i>
            </p>
            <div className="details">
              <span className="name">asim aly</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <img src={pic2} alt="" />
            <h3 className="Slide-h3">Matt Brandon</h3>
            <h4 className="Slide-h4">Freelancer</h4>
            <div class="stars">
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
            </div>
            <p className="slider-txt">
              <i class="quote-icon-left">
                <FaQuoteLeft />
              </i>
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
              <i class="quote-icon-right">
                <FaQuoteRight />
              </i>
            </p>
            <div className="details">
              <span className="name">asim aly</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <img src={pic3} alt="" />
            <h3 className="Slide-h3">Matt Brandon</h3>
            <h4 className="Slide-h4">Freelancer</h4>
            <div class="stars">
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
            </div>
            <p className="slider-txt">
              <i class="quote-icon-left">
                <FaQuoteLeft />
              </i>
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
              <i class="quote-icon-right">
                <FaQuoteRight />
              </i>
            </p>
            <div className="details">
              <span className="name">asim aly</span>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="Slide">
            <img src={pic2} alt="" />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <div class="stars">
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
            </div>
            <p>
              <i class="quote-icon-left">
                <FaQuoteLeft />
              </i>
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
              <i class="quote-icon-right">
                <FaQuoteRight />
              </i>
            </p>
            <div className="details">
              <span className="name">asim aly</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <img src={pic3} alt="" />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <div class="stars">
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
              <i class="bi bi-star-fill">
                <AiFillStar />
              </i>
            </div>
            <p>
              <i class="quote-icon-left">
                <FaQuoteLeft />
              </i>
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
              <i class="quote-icon-right">
                <FaQuoteRight />
              </i>
            </p>
            <div className="details">
              <span className="name">asim aly</span>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide className="Slide">
            <img src={pic2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. //
              Laboriosam delectus fuga quas sequi amet beatae iure sit est, //
              voluptatibus, iste itaque deserunt quia id ratione magni eius //
              possimus asperiores reiciendis?
            </p>
            <div className="details">
              <span className="name">asim aly</span>
            </div>
          </SwiperSlide> */}
        </div>
      </Swiper>
    </section>
  );
};
export default Slider;
