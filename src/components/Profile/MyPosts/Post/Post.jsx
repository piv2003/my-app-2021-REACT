import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

return (
    <div className={s.item}>
        <img src='./img/avatar1.jpg'/>
        <div>
            {props.message}
            <br />
            <span>Like </span>
            {props.like}
        </div>
    </div>
)
}
export default Post;
