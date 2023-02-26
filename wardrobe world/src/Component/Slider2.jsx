// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./Swipers.css";

import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function Slider2() {
  return (
    <div className="swiper">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper1">
          <img src="slider3.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/34/P00634730.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider3.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f3/P00770920.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/6d/P00669698.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/de/P00669699.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/06/P00431661.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1f/P00431811.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/81/P00738260.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/73/P00734208.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9e/P00734169.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider3.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/06/P00735437.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider3.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/92/P00768826.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="slider3.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4f/P00687755.jpg"
            alt=""
          />
        </SwiperSlide>

        <a
          style={{
            marginBottom: "2rem",
          }}
          class="button"
          href="https://www.mytheresa.com/int_en/men/new-arrivals/current-week.html?reco=1"
        >
          View All
        </a>
      </Swiper>
    </div>
  );
}
