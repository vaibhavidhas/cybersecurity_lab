import React from "react";
import "../styling/ResearchIntro.css";
import IntroImg from "../assets/BackgroundImage3.png";


import { AiOutlineArrowLeft } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const ResearchIntro = () => {
  return (
    <div className="aboutIntroContainer">
      <div className="aboutIntroMask">
        <div className="aboutIntroHero">
          <img className="BkgImg3" src={IntroImg} alt="cybersecurity images" />
        </div>
      </div>

      <div className="container1">
        <div className="pointer">
          <div className="pointer1">
            <p>Workshops</p>
          </div>

          <div className="pointer1">
            <p>Consultancy</p>
          </div>

          <div className="pointer1">
            <p>Research Facilities</p>
          </div>
        </div>
        <div className="waviy">
          <span style={{ "--i": 1 }}>R</span>
          <span style={{ "--i": 2 }}>E</span>
          <span style={{ "--i": 3 }}>S</span>
          <span style={{ "--i": 4 }}>E</span>
          <span style={{ "--i": 5 }}>A</span>
          <span style={{ "--i": 6 }}>R</span>
          <span style={{ "--i": 7 }}>C</span>
          <span style={{ "--i": 8 }}>H</span>
        </div>
        <div className="hexagon2"></div>
        <div className="hexagon3"></div>

        <div className="subContainer1">
          <div className="hexagon1">
            <div className="aboutIntroContent">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                // navigation={{
                //   nextEl: ".swiper-button-next",
                //   prevEl: ".swiper-button-prev",
                // }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>Complex Power Grid</SwiperSlide>
                <SwiperSlide>
                  Smart Grid modeled as cyber-physical system (CPS)
                </SwiperSlide>
                <SwiperSlide>Cyber-Security in Smart Grid Systems</SwiperSlide>
                <SwiperSlide>
                  Nonlinear dynamics & transient stability of electrical pulse
                  power & plasma systems
                </SwiperSlide>
                <SwiperSlide>
                  Hybrid energy management systems for clean renewable energy
                </SwiperSlide>
                <SwiperSlide>Nonlinear vibration analysis etc.</SwiperSlide>
                <div className="custom-navigation">
                  <div className="swiper-button-prev">
                    <AiOutlineArrowLeft size={20} style={{ color: "white" }} />
                  </div>
                  <div className="swiper-button-next">
                    <AiOutlineArrowLeft size={20} style={{ color: "white" }} />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchIntro;
