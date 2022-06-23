import React from 'react';

import style from '../styles/roadmap.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faHourglass} from "@fortawesome/free-solid-svg-icons";

const Roadmap = () => {
    return (
        <div className={style.container}>
            <div className={style.roadmap}>
                <div className={style.dates}>
                    <ul>
                        <li><span>2020</span></li>
                        <li><span>2021</span></li>
                        <li><span className={`${style.blueDate}`}>2022</span></li>
                        <li><span>2023</span></li>
                    </ul>
                </div>
                <div className={style.states}>
                    <ul>
                        <li className={style.stateHolder}>
                            <div className={`${style.filledBlue} ${style.item}`}>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.check}`}><FontAwesomeIcon icon={faCheck} /></div>
                                    <span className={style.text}>MTE Points Points Points Collection System</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.check}`}><FontAwesomeIcon icon={faCheck} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.check}`}><FontAwesomeIcon icon={faCheck} /></div>
                                    <span className={style.text}>Gamification Design</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.check}`}><FontAwesomeIcon icon={faCheck} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.check}`}><FontAwesomeIcon icon={faCheck} /></div>
                                    <span className={style.text}>Closing Investment round</span>
                                </div>
                            </div>
                            <div className={`${style.stateName} ${style.currentState}`}>
                                <span>Current State Q1</span>
                            </div>
                        </li>
                        <li className={style.stateHolder}>
                            <div className={style.item}>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>MTE Points  Points Collection System</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Gamification Design</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Closing Investment round</span>
                                </div>
                            </div>
                            <div className={`${style.stateName}`}>
                                <span>Q2</span>
                            </div>
                        </li>
                        <li className={style.stateHolder}>
                            <div className={style.item}>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>MTE Points  Points Collection System</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Gamification Design</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Closing Investment round</span>
                                </div>
                            </div>
                            <div className={`${style.stateName}`}>
                                <span>Q3</span>
                            </div>
                        </li>
                        <li className={style.stateHolder}>
                            <div className={style.item}>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>MTE Points  Points Collection System</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Gamification Design</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Swap System to Crypto Currencies</span>
                                </div>
                                <div className={style.iconAndText}>
                                    <div className={`${style.icon} ${style.hourGlass}`}><FontAwesomeIcon icon={faHourglass} /></div>
                                    <span className={style.text}>Closing Investment round</span>
                                </div>
                            </div>
                            <div className={`${style.stateName}`}>
                                <span>Q4</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
