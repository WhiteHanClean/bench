import React from 'react';
import ServiceBlock from './ServiceBlock';
import './service.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ios1 from '../../assets/css8.png'

const Service = () => {
    const [sliderRef] = useKeenSlider({
        slidesPerView: 8,
        mode: "free",
        spacing: 15,
        loop: true,
    })

    return (
        <div className="service">

            <h2 className="service_main_name">Services that connect you to your users</h2>

            <div className="service_blocks">
                <ServiceBlock />
                <ServiceBlock />
                <ServiceBlock />
                <ServiceBlock />
                <ServiceBlock />
                <ServiceBlock />
            </div>

            <div className="slave">

                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <img className="slave_img" src={ios1} alt="произошла ошибка" />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <img className="slave_img" src={ios1} alt="произошла ошибка"/>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <img className="slave_img" src={ios1} alt="произошла ошибка"/>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <img className="slave_img" src={ios1} alt="произошла ошибка"/>
                    </div>
                    <div className="keen-slider__slide number-slide5">
                        <img className="slave_img" src={ios1} alt="произошла ошибка"/>
                    </div>
                    <div className="keen-slider__slide number-slide6">
                        <img className="slave_img" src={ios1} alt="произошла ошибка"/>
                    </div>
                </div>

            </div>


        </div>

    );
};

export default Service;