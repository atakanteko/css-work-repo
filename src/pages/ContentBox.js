import React from 'react';

import content from "../utils/static/ContentBox/content";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from '../styles/content-box.module.css'

const ContentBox = () => {
    return (
        <div className={style.contentBox}>
            <div className={style.container}>
                {
                    content.map((item) => {
                        return (
                            <div style={{background: item.color}} key={item.id} className={style.box}>
                                <div className={style.icon}>
                                    <FontAwesomeIcon size="5x" icon={item.icon} />
                                </div>
                                <div className={style.text}>
                                    <h2>{item.title}</h2>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ContentBox;
