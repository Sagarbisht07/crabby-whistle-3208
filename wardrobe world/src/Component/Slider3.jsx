// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./Swipers.css";

import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function Slider3() {
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
        <img src="slider1.png" alt="slider" 
        width={300}></img>
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/be/P00708422.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a6/P00769773.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/99/P00708521.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d8/P00610571.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/45/P00758770.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f1/P00701810.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/14/P00727695.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3c/P00701822.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0c/P00736875.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/36/P00758756.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/68/P00736878.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
        <img src="slider1.png" alt="slider" 
        width={300}
        />
          <img
            src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/cf/P00736888.jpg"
            alt=""
          />
        </SwiperSlide>

        <a
        style={{
            marginBottom: "2rem",
        }}
          class="button"
          href="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/36/P00758756.jpg"
        >
          View All
        </a>
      </Swiper>
    </div>
  );
}
