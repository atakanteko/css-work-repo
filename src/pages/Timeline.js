import React from 'react';
import style from '../styles/timeline.module.css';

const Timeline = () => {

    return (
        <div className={style.container}>
            <div className={style.box}>
                <ul>
                    <li>
                        <div className={style.item}>
                            <span>3rd January 2022</span>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.item}>
                            <span>3rd January 2022</span>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.item}>
                            <span>3rd January 2022</span>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.item}>
                            <span>3rd January 2022</span>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline;
