
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./portfolio.css";
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import port from '../../assets/port.png'
import axios from 'axios';

// import logo from '../../assets/logo.png'
// import "swiper/css";
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"

SwiperCore.use([EffectCoverflow, Pagination]);


export default function Portfolio() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://35.198.122.64/api/v1/main/studio-portfolio/').then(res => {
            console.log(res)
            setPosts(res.data)
        })
            .catch(err => console.log(err))
    }, [])

    console.log(posts)
    return (
        <>
            <h2 className="port_intro_name">Portfolio</h2>

            <div className="slider">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 130,
                    "stretch": 0,
                    "depth": 150,
                    "modifier": 2,
                    "slideShadows": true
                }} pagination={true} className="mySwiper" >

                    {
                        posts.map(post => {

                            return <SwiperSlide>

                                <div className="port_item">
                                    <img className="port_img" src={post.image} />
                                    <h2 className="port_name">{post.title}</h2>
                                    <p className="port_description">
                                        {post.description}
                                    </p>
                                    <div className="port_button_center">
                                        <button className="port_btn"> view </button>
                                    </div>
                                </div>

                            </SwiperSlide>

                        })
                    }


                </Swiper>
            </div>
        </>
    )
}