import React from 'react';

import style from '../styles/image-hover.module.css'
import deneme from '../assets/images/image-hover/breakin-bad-2.jpg'

const ImageHover = () => {
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems:"center", height:"100vh"}}>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.imgBox}>
                        <img src={deneme} alt="Breaking Bad Photo"/>
                    </div>
                </div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
            </div>
        </div>
    );
};

export default ImageHover;
