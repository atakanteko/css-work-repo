import React from 'react';

import style from '../styles/cocacola.module.css'
import Logo from '../assets/images/coca-cola/logo.png'

import {cocaColaNav} from "../utils/static/Cocacola/cocacola";
import {socialConnect} from "../utils/static/Cocacola/cocacola";

import SwiperCola from "../components/cola/SwiperCola";


const CocaCola = () => {
    return (
        <div className={style.container}>
            <section>
                <div className={style.circle}></div>
                <header>
                    <a href="/" >
                        <img src={Logo} alt="Logo" className={style.logo}/>
                    </a>
                    <ul className={style.navigation}>
                        {
                            cocaColaNav.map((item) => {
                                return (
                                    <li key={item.id}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </header>
                <div className={style.content}>
                    <div className={style.textBox}>
                        <h2>Taste the Feeling</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div className={style.colaImages}>
                        <SwiperCola/>
                    </div>
                </div>
                <div className={style.social}>
                    <ul className={style.sci}>
                        {
                            socialConnect.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href="#">
                                            <img src={item.icon} alt={`sci-${item.id}`}/>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default CocaCola;
