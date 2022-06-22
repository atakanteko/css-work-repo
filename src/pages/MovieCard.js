import React from 'react';

import Poster from '../assets/images/movie-card/BeautyAndBeast.jpg'
import Emma from '../assets/images/movie-card/emma_watson.jpeg'
import Luke from '../assets/images/movie-card/luke_evans.jpg'
import Dan from '../assets/images/movie-card/dan_stevens.jpg'
import Josh from '../assets/images/movie-card/josh_gad.jpg'
import EmptyStart from '../assets/images/movie-card/star-empty.svg'
import FilledStart from '../assets/images/movie-card/star-filled.svg'
import style from '../styles/movie-card.module.css'

const MovieCard = () => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.poster}>
                    <img src={Poster} alt="Beauty and The Beast"/>
                </div>
                <div className={style.details}>
                    <h2>Beauty and the Beast (2017)
                        <br/>
                        <span>Directed by Bill Condon</span>
                    </h2>
                    <div className={style.rating}>
                        <div><img src={FilledStart} alt="Filled Star"/></div>
                        <div><img src={FilledStart} alt="Filled Star"/></div>
                        <div><img src={FilledStart} alt="Filled Star"/></div>
                        <div><img src={FilledStart} alt="Filled Star"/></div>
                        <div><img src={EmptyStart} alt="Empty Star"/></div>
                    </div>
                    <div className={style.tags}>
                        <div className={style.fantasy}>Fantasy</div>
                        <div className={style.romance}>Romance</div>
                    </div>
                    <div className={style.info}>
                        <p>
                            A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.
                        </p>
                    </div>
                    <div className={style.star}>
                        <h4>Cast</h4>
                        <ul>
                            <li><img src={Emma} alt="Emma Watson"/></li>
                            <li><img src={Luke} alt="Luke Evans"/></li>
                            <li><img src={Josh} alt="Josh Gad"/></li>
                            <li><img src={Dan} alt="Dan Stevens"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
