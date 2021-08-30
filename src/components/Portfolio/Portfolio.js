import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./portfolio.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import port from "../../assets/port.png";

// import "swiper/css";
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"

SwiperCore.use([EffectCoverflow, Pagination]);

export default function Portfolio() {
  return (
    <div className="slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="port_item">
            <img className="port_img" src={port} />
            <h2 className="port_name">Alu.kg</h2>
            <p className="port_description">
              Online Marketplace, launched in 2020 in Bishkek. A product of the
              Kyrgyz Chocolady company. We developed a web application for
              customers and sellers and an admin panel
            </p>
            <button className="port_btn"> view </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="port_item">
            <img className="port_img" src={port} />
            <h2 className="port_name">Alu.kg</h2>
            <p className="port_description">
              Online Marketplace, launched in 2020 in Bishkek. A product of the
              Kyrgyz Chocolady company. We developed a web application for
              customers and sellers and an admin panel
            </p>
            <button className="port_btn"> view </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="port_item">
            <img className="port_img" src={port} />
            <h2 className="port_name">Alu.kg</h2>
            <p className="port_description">
              Online Marketplace, launched in 2020 in Bishkek. A product of the
              Kyrgyz Chocolady company. We developed a web application for
              customers and sellers and an admin panel
            </p>
            <button className="port_btn"> view </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="port_item">
            <img className="port_img" src={port} />
            <h2 className="port_name">Alu.kg</h2>
            <p className="port_description">
              Online Marketplace, launched in 2020 in Bishkek. A product of the
              Kyrgyz Chocolady company. We developed a web application for
              customers and sellers and an admin panel
            </p>
            <button className="port_btn"> view </button>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide> <img src={port} /></SwiperSlide>
                <SwiperSlide> <img src={port} /></SwiperSlide>
                <SwiperSlide> <img src={port} /></SwiperSlide>
                <SwiperSlide> <img src={port} /></SwiperSlide> */}
      </Swiper>
    </div>
  );
}
