import React from 'react';

import style from '../styles/imagehover3d.module.css'
import imagePaths from "../utils/static/ImageHover3D/paths";

const ImageHover3D = () => {
    return (
        <div className={style.ctxBody}>
            <div className={style.container}>
                {
                    imagePaths.map((image, index) => {
                        return (
                            <div className={style.box}>
                                <div className={style.imgBox}>
                                    <img src={image.photo} alt={`Lord of the Rings ${index}`} />
                                </div>
                                <div className={style.content}>
                                    <div>
                                        <h2>Image Title</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s' </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ImageHover3D;
