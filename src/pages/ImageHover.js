import React from 'react';

import style from '../styles/image-hover.module.css'
import imageHover from "../utils/static/ImageHover/image-hover";

const ImageHover = () => {
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems:"center", height:"100vh"}}>
            <div className={style.container}>
                {
                    imageHover.map((item) => {
                        return (
                            <div key={item.id} className={style.box}>
                                <div className={style.imgBox}>
                                    <img src={item.photo} alt="Breaking Bad Photo"/>
                                </div>
                                <div className={style.details}>
                                   <div className={style.content}>
                                       <h2>What is Lorem Ipsum?</h2>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                   </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ImageHover;
