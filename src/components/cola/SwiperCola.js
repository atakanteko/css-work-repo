import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {swiperImages} from "../../utils/static/Cocacola/cocacola";

const SwiperCola = () => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
                scale: 0.5,
            }}
            className="mySwiper"

        >

            {
                swiperImages.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <img src={item.path} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default SwiperCola;
