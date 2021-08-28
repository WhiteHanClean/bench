import React from 'react';
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'

const ServiceBlock = () => {
    return (

        <div className="service_block">
            
            <img className="service_img"src={icon1} alt="произошла ошибка" />

            <h2 className="service_name">Mobile Application</h2>
            
            <p className="service_description">
                Lorem ipsum dolor amet, consectetur adipiscing elit.
                Mattis et sed nam sem tellus erat.
            </p>

            <button className="service_btn"> Explore </button>
            <img className="service_img_icon2" src={icon2} alt="произошла ошибка" />

        </div>

    );
};

export default ServiceBlock;
