import React from "react";
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

const Partners = () => {
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
        <div className="section__blocks">
          <Grid
            item
            xs={12}
            sm={6}
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
            item
            xs={12}
            sm={6}
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
            <div className="section__block">
              <img src={Book} />
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
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
            item
            xs={12}
            sm={6}
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
            item
            xs={12}
            sm={6}
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
