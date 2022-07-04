import React from 'react';

import style from '../styles/fitness.module.css'

import Toggle from '../assets/images/fitness/toggle.png'
import JohnCena from '../assets/images/fitness/man.png'
import Facebook from '../assets/images/fitness/facebook.png'
import Twitter  from '../assets/images/fitness/twitter.png'
import Instagram from '../assets/images/fitness/instagram.png'
import VideoFitness from '../assets/images/fitness/bg.mp4'

const FitnessLandind = () => {
    return (
        <div className={style.container}>
            <header>
                <a href="#" className={style.logo}>Fit<span>ness</span></a>
                <div className={style.toggle}>
                    <img src={Toggle} alt="toggle"/>
                </div>
            </header>
            <div className={style.banner}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    src={VideoFitness}
                />
                <div className={style.textBox}>
                    <h2>More Than Fitness</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s' Loes of type. Lorem Ipsum has been the industry's standard dummy'</p>
                    <a href="#">Read More</a>
                </div>
                <div className={style.imgBox}>
                    <img src={JohnCena} alt="man"/>
                </div>
                <ul className={style.sci}>
                    <li><a href="#"><img src={Facebook} alt="Facebook"/></a></li>
                    <li><a href="#"><img src={Twitter} alt="Twitter"/></a></li>
                    <li><a href="#"><img src={Instagram} alt="Instagram"/></a></li>
                </ul>
            </div>
        </div>
    );
};

export default FitnessLandind;
