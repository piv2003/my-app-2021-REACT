import React from  'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
return (
    <aside>
        <div>
            <img src='img/island.jpg' alt='beach'/>
        </div>
        <div className={s.mersedes}>
            <img src='img/images.png' alt='logo'/>
        </div>
        <MyPosts/>
    </aside>
)
}

export default Profile;
