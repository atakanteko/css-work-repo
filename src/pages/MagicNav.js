import React from 'react';

import style from '../styles/magic-navigation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faUser, faComment, faCamera, faGear} from "@fortawesome/free-solid-svg-icons";

import magicNav from "../utils/static/MagicNav/magic-nav";

const MagicNav = () => {
    return (
        <div className={style.container}>
            <div className={style.navigation}>
                <ul>
                    {
                        magicNav.map(item => {
                            return (
                                <li key={item.id} className={`${style.list} ${style.active}`}>
                                    <a href="#">
                                        <span className={style.icon}>
                                            <FontAwesomeIcon icon={item.icon} />
                                        </span>
                                        <span className={style.text}>
                                            {item.text}
                                        </span>
                                    </a>
                                </li>
                            )
                        })
                    }
                    <div className={style.indicator}></div>
                </ul>
            </div>
        </div>
    );
};

export default MagicNav;
