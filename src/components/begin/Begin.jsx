import React from 'react';
import begin from '../../assets/begin1.svg'
import begin2 from '../../assets/begin2.svg'
import './begin.css'

const Begin = () => {
    return (
        <div className="main">

            <img src={begin} className="white_one" alt="" />

            <div className="red_wrapper">

                <div className="red_sub_wrapper">
                    <img src={begin2} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Begin;