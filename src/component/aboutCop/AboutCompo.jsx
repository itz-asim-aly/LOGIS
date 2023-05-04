import React, { useEffect } from "react";
import "./aboutCompo.css";
import { BsDiagram3, BsFullscreenExit, BsBroadcast } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutCompo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="about-sec">
        <div className="about-text" data-aos="fade-up">
          <div className="about-main-txt" data-aos="fade-up">
            <h2>About Us</h2>
            <p>
              Dolor iure expedita id fuga asperiores qui sunt consequatur
              minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui
              magnam itaque veritatis dolores. Corrupti totam ut eius incidunt
              reiciendis veritatis asperiores placeat.
            </p>
          </div>
          <div className="about-texticon" data-aos="fade-up">
            <div className="about-icon">
              <BsDiagram3 />
            </div>
            <div className="about-txt">
              <h5>Ullamco laboris nisi ut aliquip consequat</h5>
              <p>
                Magni facilis facilis repellendus cum excepturi quaerat
                praesentium libre trade
              </p>
            </div>
          </div>
          <div className="about-texticon" data-aos="fade-up">
            <div className="about-icon">
              <BsFullscreenExit />
            </div>
            <div className="about-txt">
              <h5>Ullamco laboris nisi ut aliquip consequat</h5>
              <p>
                Magni facilis facilis repellendus cum excepturi quaerat
                praesentium libre trade
              </p>
            </div>
          </div>
          <div className="about-texticon" data-aos="fade-up">
            <div className="about-icon">
              <BsBroadcast />
            </div>
            <div className="about-txt">
              <h5>Ullamco laboris nisi ut aliquip consequat</h5>
              <p>
                Magni facilis facilis repellendus cum excepturi quaerat
                praesentium libre trade
              </p>
            </div>
          </div>
        </div>
        <div className="about-video">
          <div class="ratio ratio-16x9" data-aos="fade-up">
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompo;
