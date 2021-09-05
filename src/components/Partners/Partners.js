import React, { useEffect } from "react";
import "./partners.css";
import Grid from "@material-ui/core/Grid";
import Airbnb from "../../assets/Airbnb.svg";
import Google from "../../assets/Google.svg";
import Book from "../../assets/Book.svg";
import Microsoft from "../../assets/Microsoft.svg";
import Fedex from "../../assets/FedEx.svg";
import Walmart from "../../assets/Walmart.svg";
import Oyo from "../../assets/Oyo.svg";
import Ola from "../../assets/OLA.svg";
import Amazon from "../../assets/Amazon.svg";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

SwiperCore.use([Pagination]);

const Partners = () => {
  const getPartners = () => {
    const response = axios.get(
      `http://35.198.122.64/api/v1/main/studio-partner/`
    );
    console.log(response);
  };

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <div className="container">
      <div className="section">
        <div className="section__items">
          <div className="section__item_1">
            <h1>Partners</h1>
          </div>
          <div className="section__item_2">
            <p>We have been working with some Fortune 500 clients</p>
          </div>
        </div>
        <div className="partners_swiper">
          <Swiper grabCursor={true} className="mySwiper">
            <SwiperSlide>
              <img className="section__block" src={Airbnb} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Google} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Book} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Microsoft} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Fedex} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Walmart} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Google} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Ola} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="section__block" src={Amazon} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="section__blocks">
          <Grid
            className="grid1"
            item
            xs={12}
            md={4}
            lg={3}
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <div className="section__block">
              <img src={Airbnb} />
            </div>
          </Grid>

          <Grid
            className="grid1"
            item
            xs={12}
            md={4}
            lg={3}
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <div className="section__block">
              <img src={Google} />
            </div>
            <div className="section__block_book">
              <img src={Book} />
            </div>
          </Grid>

          <Grid
            className="grid1"
            item
            xs={12}
            md={4}
            lg={3}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="section__block">
              <img src={Microsoft} />
            </div>

            <div className="section__block">
              <img src={Fedex} />
            </div>

            <div className="section__block">
              <img src={Walmart} />
            </div>
          </Grid>

          <Grid
            className="grid1"
            item
            xs={12}
            md={4}
            lg={3}
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <div className="section__block">
              <img src={Oyo} />
            </div>
            <div className="section__block">
              <img src={Ola} />
            </div>
          </Grid>

          <Grid
            className="grid1"
            item
            xs={12}
            md={4}
            lg={3}
            container
            direction="column"
            justifyContent="center"
          >
            <div className="section__block">
              <img src={Amazon} />
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Partners;
