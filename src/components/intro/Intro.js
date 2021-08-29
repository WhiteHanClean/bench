import React, { useEffect } from "react";
import "./intro.css";

import layer5 from "../../assets/layer5.svg";
import layer7 from "../../assets/Layer 7.svg";
import layer6 from "../../assets/Layer 6.svg";
import layer8 from "../../assets/layer 8.svg";

import layer9 from "../../assets/Layer 9.svg";
import layer10 from "../../assets/Layer 10.svg";
import layer11 from "../../assets/Layer 11.svg";
import axios from "axios";

export default function Intro() {
  const getIntro = async () => {
    let data = await axios.get(
      `http://35.198.122.64/api/v1/main/studio-intro/`
    );
    console.log(data);
  };

  useEffect(() => {
    getIntro();
  }, []);

  return (
    <div className="bench">
      <div className="layer_block_main">
        <img className="layer_img_1" src={layer7} alt="произошла ошибка" />
        <img className="layer_img_2" src={layer6} alt="произошла ошибка" />
        <img className="layer_img_3" src={layer8} alt="произошла ошибка" />
        <img className="layer_img_4" src={layer5} alt="произошла ошибка" />

        <img className="layer_img_5" src={layer9} alt="произошла ошибка" />
        <img className="layer_img_6" src={layer10} alt="произошла ошибка" />
        <img className="layer_img_7" src={layer11} alt="произошла ошибка" />
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
