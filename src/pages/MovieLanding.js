import React, {useState} from 'react';

import style from '../styles/movie-landing.module.css'

import LogoTv from '../../src/assets/images/movie-landing/tv.svg'
import Rating from '../../src/assets/images/movie-landing/rating.svg'
import Imdb from '../../src/assets/images/movie-landing/imdb.svg'
import JohnWick from '../../src/assets/images/movie-landing/john-wick-2.jpg'
import JohnWick2 from '../../src/assets/images/movie-landing/john-wick.jpeg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlay } from '@fortawesome/free-solid-svg-icons'


const pageNumbers = [
    {
        id: 0,
        num: 1,
        image: JohnWick
    },
    {
        id: 1,
        num: 2,
        image: JohnWick
    },
    {
        id: 2,
        num: 3,
        image: JohnWick
    },
    {
        id: 3,
        num: 4,
        image: JohnWick2
    },
    {
        id: 4,
        num: 5,
        image: JohnWick
    },
    {
        id: 5,
        num: 6,
        image: JohnWick
    },

]

const MovieLanding = () => {
    const [backgroundImage, setBackgroundImage] = useState(JohnWick)
    const [activePage, setActivePage] = useState(3)

    const changeBackground = (movieNumber) => {
        const {image} = pageNumbers.find((item) => item.num === movieNumber)
        setBackgroundImage(image)
        setActivePage(movieNumber)
    }

    return (
        <div style={{backgroundImage: `url("${backgroundImage}")`, transition: '0.5s'}} className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <div className={style.logo}>
                        <img src={LogoTv} alt="logo" />
                        <h2>MovieBox</h2>
                    </div>
                    <div className={style.input}>
                        <input type="text" placeholder="What do you want to watch?"/>
                        <div className={style.iconSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className={style.signIn}>
                        <span>Sign In</span>
                    </div>
                </div>

                <div className={style.midSection}>
                    <div className={style.description}>
                        <div className={style.title}>
                            <h2>
                                John Wick 3 : Parabellum
                            </h2>
                        </div>
                        <div className={style.rating}>
                            <div className={style.ratingChild}>
                                <img src={Imdb} alt="imdb"/>
                                <span>86.0/100</span>
                            </div>
                            <div className={style.ratingChild}>
                                <img src={Rating} alt="rating"/>
                                <span>97%</span>
                            </div>
                        </div>
                        <div className={style.info}>
                            <span>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</span>
                        </div>
                        <div className={style.button}>
                            <div className={style.iconSearch}>
                                <FontAwesomeIcon icon={faCirclePlay}/>
                            </div>
                            <span>Watch Trailer</span>
                        </div>
                    </div>
                    <div className={style.pageNumber}>
                        {
                            pageNumbers.map((item) => {
                                return (
                                    <div key={item.id} onClick={()=>changeBackground(item.num)}>
                                        <span className={`${item.num===activePage && style.active}`}>{item.num}</span>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieLanding;
