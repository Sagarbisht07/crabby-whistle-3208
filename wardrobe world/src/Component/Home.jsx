import React from "react";
import About from "./About";
import Footer from "./Footer";
import HomeImg from "./HomeImg";
import HomeImg2 from "./HomeImg2";
import HomeSecond from "./HomeSecond";
import Slider1 from "./Homeslider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

const Home = () => {
  return (
    <div>
      <HomeSecond />
      <Slider1 />
      <HomeImg />
      <Slider2 />
      <HomeImg2 />
      <Slider3 />
      <About />
    </div>
  );
};

export default Home;
