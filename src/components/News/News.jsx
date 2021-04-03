import React from  'react';
import s from './News.module.css';

const News = (props) => {
    return (
        <div className={s.news_color}>
            <div>
                NEWS
            </div>
            <div className={s.news_size}>
                <img src='img/news.jpg' alt='music'/>
            </div>
        </div>
    )
}

export default News;
