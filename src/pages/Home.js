import React from 'react';

import style from '../styles/home.module.css';
import connection from "../utils/static/connection";
import {Link} from "react-router-dom";

const Home = () => {
    const trySweetAlert = () => {
        console.log('123')
    }
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
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
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
            <div onClick={trySweetAlert}>
                <h1>Button</h1>
            </div>
        </div>
    );
};

export default Home;
