import React from 'react';

import style from '../styles/home.module.css';
import connection from "../utils/static/connection";

const Home = () => {
    return (
        <div className={style.container}>
            <div>
                <h2>css repository</h2>
            </div>
            {
                connection.map(item => {
                    return (
                        <div key={item.id} className={style.connection}>
                            <div>
                                <a href={item.path} target='_blank'>
                                    {item.name}
                                </a>
                            </div>
                            <div>
                    <span>
                        {item.date}
                    </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;
