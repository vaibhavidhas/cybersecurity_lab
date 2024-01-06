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
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
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
      <div
        className="reserachContent1"
        // style={{ backgroundImage: `url(${researchImage2})` }}
      >
        <h3>Research Theme: CPS, Industry 4.0 & IoT</h3>
        <p>
          The phrase ‘cyber-physical systems’ was coined in 2006 by Helen Gill
          of the US National Science Foundation (NSF) Cyber–physical systems
          (CPSs) are the next generation of engineered systems in which control,
          computing and communication (C3) technologies are tightly integrated
          to achieve stability, performance, reliability, robustness, and
          efficiency in dealing with physical systems of many application
          domains.
        </p>
        <p>
          Application domains: Energy, Manufacturing, Water & Waste Water,
          Refinery & Petrochemicals, Oil& Gas, Transportation, Healthcare etc
        </p>
      </div>
    </div>
  );
};

export default ResearchIntro;
