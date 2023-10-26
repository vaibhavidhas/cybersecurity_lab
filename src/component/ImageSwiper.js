import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styling/ImageSwiper.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination} from "swiper/modules";

import image1 from "../assets/filtered/Image1.JPG"
import image2 from "../assets/filtered/Image2.JPG";
import image3 from "../assets/filtered/Image3.JPG";
import image4 from "../assets/filtered/Image4.JPG";
import image5 from "../assets/filtered/Image5.JPG";
import image6 from "../assets/filtered/Image6.JPG";
import image7 from "../assets/filtered/Image7.JPG";
import image8 from "../assets/filtered/Image8.JPG";
import image9 from "../assets/filtered/Image9.JPG";
import image10 from "../assets/filtered/Image10.JPG";

const ImageSwiper = () => {
  return (
    <div className="swiperConatiner">
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          loop={true}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            loop: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image10} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default ImageSwiper;
