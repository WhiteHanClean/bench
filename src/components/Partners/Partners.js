import React, { useEffect, useState } from "react";
import "./partners.css";
import Grid from "@material-ui/core/Grid";
// import Airbnb from "../../assets/Airbnb.svg";
// import Google from "../../assets/Google.svg";
// import Book from "../../assets/Book.svg";
// import Microsoft from "../../assets/Microsoft.svg";
// import Fedex from "../../assets/FedEx.svg";
// import Walmart from "../../assets/Walmart.svg";
// import Oyo from "../../assets/Oyo.svg";
// import Ola from "../../assets/OLA.svg";
// import Amazon from "../../assets/Amazon.svg";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

SwiperCore.use([Pagination]);

const Partners = () => {
  
  const [slider, setSlide] = useState([])

  useEffect(() => {
      axios.get('http://35.198.122.64/api/v1/main/studio-partner/').then(res => {
          console.log(res)
          setSlide(res.data)
      })
          .catch(err => console.log(err))
  }, [])

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
           {slider.map(slide => {
             return <SwiperSlide>
             <img className="section__block" src={slide.logo} />
           </SwiperSlide>
           })}
          </Swiper>
            
        </div>
        <div className="section__blocks">
          {slider.map(slide => {
            return  <Grid
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
              <img className="partners_image"src={slide.logo}/>
            </div>
          </Grid>
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
