import React, {useState} from 'react';

import style from '../styles/movie-landing.module.css'

import LogoTv from '../../src/assets/images/movie-landing/tv.svg'
import Rating from '../../src/assets/images/movie-landing/rating.svg'
import Imdb from '../../src/assets/images/movie-landing/imdb.svg'

import JohnWick from '../../src/assets/images/movie-landing/john-wick-2.jpg'
import Avengers from '../../src/assets/images/movie-landing/avengers.jpg'
import FastAndFurious from '../../src/assets/images/movie-landing/fast-and-furious.jpg'
import Batman from '../../src/assets/images/movie-landing/batman-superman.jpg'
import Logan from '../../src/assets/images/movie-landing/Logan.jpg'
import JackSparrow from '../../src/assets/images/movie-landing/jack-sparrow.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlay } from '@fortawesome/free-solid-svg-icons'


const movies = [
    {
        id: 0,
        num: 1,
        desc: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.',
        title: 'Fast and Furious 6',
        imdb: '6/10',
        rating: '63%'
    },
    {
        id: 1,
        num: 2,
        desc: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
        title: 'Avengers',
        imdb: '7.4/10',
        rating: '86%'
    },
    {
        id: 2,
        num: 3,
        desc: 'John Wick is on the run after killing a member of the international assassins\' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.',
        title: 'John Wick 3 : Parabellum',
        imdb: '8/10',
        rating: '97%'
    },
    {
        id: 3,
        num: 4,
        desc: 'Batman is manipulated by Lex Luthor to fear Superman. Superman´s existence is meanwhile dividing the world and he is framed for murder during an international crisis. The heroes clash and force the neutral Wonder Woman to reemerge.',
        title: 'Batman vs Superman',
        imdb: '7.2/10',
        rating: '78%'
    },
    {
        id: 4,
        num: 5,
        desc: 'In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.',
        title: 'Logan',
        imdb: '8.1/10',
        rating: '98%'
    },
    {
        id: 5,
        num: 6,
        desc: 'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governor\'s daughter, from Jack\'s former pirate allies, who are now undead.',
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        imdb: '8.1/10',
        rating: '98%'
    },
]
const pageNumbers = [
    {
        id: 0,
        num: 1,
        image: FastAndFurious
    },
    {
        id: 1,
        num: 2,
        image: Avengers
    },
    {
        id: 2,
        num: 3,
        image: JohnWick
    },
    {
        id: 3,
        num: 4,
        image: Batman
    },
    {
        id: 4,
        num: 5,
        image: Logan
    },
    {
        id: 5,
        num: 6,
        image: JackSparrow
    },

]

const defaultMovie = {
    id: 0,
    num: 3,
    desc: 'John Wick is on the run after killing a member of the international assassins\' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.',
    title: 'John Wick 3 : Parabellum',
    imdb: '8/10',
    rating: '97%'
}

const MovieLanding = () => {
    const [backgroundImage, setBackgroundImage] = useState(JohnWick)
    const [activePage, setActivePage] = useState(3)
    const [renderMovie, setRenderMovie] = useState(defaultMovie)

    const changeBackground = (movieNumber) => {
        const {image} = pageNumbers.find((item) => item.num === movieNumber)
        const movie = movies.find((item) => item.num === movieNumber)
        setBackgroundImage(image)
        setActivePage(movieNumber)
        setRenderMovie(movie)
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
                                {renderMovie.title}
                            </h2>
                        </div>
                        <div className={style.rating}>
                            <div className={style.ratingChild}>
                                <img src={Imdb} alt="imdb"/>
                                <span>{renderMovie.imdb}</span>
                            </div>
                            <div className={style.ratingChild}>
                                <img src={Rating} alt="rating"/>
                                <span>{renderMovie.rating}</span>
                            </div>
                        </div>
                        <div className={style.info}>
                            <span>
                                {renderMovie.desc}
                            </span>
                        </div>
                        <div className={style.button}>
                            <div className={style.iconSearch}>
                                <FontAwesomeIcon icon={faCirclePlay}/>
                            </div>
                            <span>Watch Trailer</span>
                        </div>
                    </div>
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
    );
};

export default MovieLanding;
