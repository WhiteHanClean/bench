import React from "react";
import "./intro.css";
import layer5 from "../../assets/layer5.svg";
import layer7 from "../../assets/Layer 7.svg";
import layer6 from "../../assets/Layer 6.svg";
import layer8 from "../../assets/layer 8.svg";

export default function Intro() {
  return (
    <div className="bench">
      <div className="layer_block_main">
        <img className="layer_img_1" src={layer7} alt="произошла ошибка" />
        <img className="layer_img_2" src={layer6} alt="произошла ошибка" />
        <img className="layer_img_3" src={layer8} alt="произошла ошибка" />
        <img className="layer_img_4" src={layer5} alt="произошла ошибка" />
      </div>

      <div className="container">
        <div className="section__item">
          <div className="section__item__text">
            <h1>Organise projects. Get more done.</h1>
            <p>
              Pipe transforms recurring revemue into upfront capital for arowth
              without debt or dilution.
            </p>
          </div>
          <h2>
            Reverse <span> Your </span> Mind<span>.</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
