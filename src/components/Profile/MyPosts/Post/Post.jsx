import React from 'react';
import s from './Post.module.css';

const Post = () => {
return (
    <div className={s.item}>
        <img src='./img/avatar1.jpg'/>
        <div>
            <span>Like</span>
        </div>
    </div>
)
}
export default Post;
