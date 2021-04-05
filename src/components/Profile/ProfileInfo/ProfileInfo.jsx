import React from  'react';
import s from './ProfileInfo.module.css';
// import MyPosts from "./MyPosts/MyPosts";

const ProfileInfo = () => {
return (
    <div>
        <div className={s.mersedes}>
            <img src='img/images.png' alt='logo'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src='img/island.jpg' alt='beach'/>
            AVA+Description
        </div>
        {/*<MyPosts/>*/}
    </div>
)
}

export default ProfileInfo;
