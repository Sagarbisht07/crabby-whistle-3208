// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./Swipers.css";

import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function Swipers() {
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
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1f/P00738120.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/30/P00738081.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3d/P00799265.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2b/P00795673.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img

            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/53/P00785771.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/53/P00768832.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/93/P00762814.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d4/P00774687.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a8/P00760153.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/68/P00688259.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9b/P00734220.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider2.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/30/P00781209.jpg"
            alt=""
          />
        </SwiperSlide>

        <a
          class="button"
          href="https://www.mytheresa.com/int_en/men/new-arrivals/current-week.html?reco=1"
        >
          View All
        </a>
      </Swiper>
    </div>
  );
}
