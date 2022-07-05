import React, {useState} from 'react';

import style from '../styles/starbucks.module.css'

import Logo from '../assets/images/starbucks/logo.png'

import Thumb1  from '../assets/images/starbucks/thumb1.png'
import Thumb2 from '../assets/images/starbucks/thumb2.png'
import Thumb3 from '../assets/images/starbucks/thumb3.png'

import Image1 from '../assets/images/starbucks/img1.png'
import Image2 from '../assets/images/starbucks/img2.png'
import Image3 from '../assets/images/starbucks/img3.png'

import Facebook from '../assets/images/starbucks/facebook.png'
import Twitter from '../assets/images/starbucks/twitter.png'
import Instagram from '../assets/images/starbucks/instagram.png'

const Starbucks = () => {
    const [changeBackground, setChangeBackground] = useState('#017143')
    const [showImage, setShowImage] = useState(Image1)

    const handleBgColor = (color, img) => {
        setShowImage(img)
        setChangeBackground(color)
    }
    return (
        <div className={style.container}>
            <div className={style.circle} style={{clipPath:'circle(50% at 99% 99%)', background:`${changeBackground}`}}></div>
            <header>
                <img src={Logo} alt="Logo"/>
                <nav>
                    <ul className={style.menu}>
                        <li><a href="#">home</a></li>
                        <li><a href="#">menu</a></li>
                        <li><a href="#">what's new</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className={style.content}>
                <div className={style.textBox}>
                    <h2>It's not just a Coffee</h2>
                    <h2>It's <span>Starbucks</span> </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s' Loes of Windows and the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <a href="#">learn more</a>
                </div>
                <div className={style.miniImages}>
                    <ul>
                        <li onClick={()=>handleBgColor('#017143',Image1)}><img src={Thumb1} alt="Thumb1"/></li>
                        <li onClick={()=>handleBgColor('#EA98AC',Image2)}><img src={Thumb2} alt="Thumb2"/></li>
                        <li onClick={()=>handleBgColor('#C63598',Image3)}><img src={Thumb3} alt="Thumb3"/></li>
                    </ul>
                </div>
            </div>
            <div className={style.imgAndIcon}>
                <img className={style.largeImage} src={`${showImage}`} alt="Image 1"/>
                <div className={style.sci}>
                    <ul>
                        <li><img src={Facebook} alt="Facebook"/></li>
                        <li><img src={Twitter} alt="Twitter"/></li>
                        <li><img src={Instagram} alt="Instagram"/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Starbucks;
