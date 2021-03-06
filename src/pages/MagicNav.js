import React, {useState} from 'react';

import style from '../styles/magic-navigation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import magicNav from "../utils/static/MagicNav/magic-nav";

const MagicNav = () => {
    const [active, setActive] = useState(0)

    const setActiveLink = (id) => {
        setActive(id)
    }
    return (
        <div className={style.container}>
            <div className={style.navigation}>
                <ul>
                    {
                        magicNav.map((item) => {
                            return (
                                <li key={item.id}
                                    onClick={()=>setActiveLink(item.id)}
                                    className={`${item.id===active ? style.active : ''}`}>
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
