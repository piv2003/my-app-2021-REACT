import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='./img/avatar1.jpg' alt='avatar'/>
            <div className={s.color}>
                {props.message}
            </div>
            <div>
                <span className={s.color_like}>Like: </span>
                {props.likesCount}
            </div>
            <br/>
        </div>
    )
}
export default Post;
