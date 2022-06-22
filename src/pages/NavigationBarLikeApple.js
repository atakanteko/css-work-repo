import React, {useState} from 'react';

import nav from "../utils/static/NavigationApple/nav";
import style from '../styles/navigation-apple.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAppleAlt, faSearch, faShoppingBasket, faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const NavigationBarLikeApple = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const handleToggle = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    return (
        <div className={style.container}>
            <nav>
                <div className={style.menu}>
                    <ul>
                        <li><a href='#' ><FontAwesomeIcon icon={faAppleAlt} className={style.apple} /></a></li>
                        {
                            nav.map((item) => {
                                return (
                                    <li key={item.id}><a href='#' className={`${style.menuItem} ${isSearchOpen ? style.hideItem : ''}`}>{item.text}</a></li>
                                )
                            })
                        }
                        <li onClick={handleToggle}>
                            <a href='#' className={`${style.menuItem}`}>
                                {
                                    isSearchOpen ?
                                        <div><FontAwesomeIcon icon={faCircleXmark} /></div> :
                                        <div><FontAwesomeIcon icon={faSearch}/></div>
                                }
                            </a>
                        </li>
                        <li><a href='#' className={style.menuItem}><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                    </ul>
                    <div className={`${style.searchForm} ${isSearchOpen ? style.active : ''}`}>
                        <div className={style.searchIcon}><FontAwesomeIcon icon={faSearch} /></div>
                        <form>
                            <input type="text" placeholder="Search apple.com"/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBarLikeApple;
