import React from 'react';
//style
import style from '../styles/card-hover.module.css'
//images
import image1 from '../assets/images/image-hover-3d/nature-1.jpeg'
import image2 from '../assets/images/image-hover-3d/nature-2.jpeg'
import image3 from '../assets/images/image-hover-3d/nature-4.jpeg'

const CardHover = () => {
    return (
        <div className={style.container}>
            <div className={style.cover}>
                <div className={style.card}>
                    <div className={style.imgBox}>
                        <img src={image1} alt="CardHover"/>
                    </div>
                    <div className={style.content}>
                        <h2>Card One</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBox}>
                        <img src={image2} alt="CardHover"/>
                    </div>
                    <div className={style.content}>
                        <h2>Card Two</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBox}>
                        <img src={image3} alt="CardHover"/>
                    </div>
                    <div className={style.content}>
                        <h2>Card Three</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHover;
