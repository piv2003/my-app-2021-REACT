import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost();
        // newPostElement.current.value = '';
        // props.updateNewPostText = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.content}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                          className={s.size_textarea}/>
                <button onClick={addPost} className={s.color_button}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;
