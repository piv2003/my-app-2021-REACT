import React from 'react';
import s from './Music.module.css';

const Music = (props) => {
    return (
        <div className={s.music_color}>
            <div>
                MUSIC
            </div>
            <div className={s.music_size}>
                <img src='img/music.jpg' alt='music'/>
            </div>
        </div>
    )
}

export default Music;
