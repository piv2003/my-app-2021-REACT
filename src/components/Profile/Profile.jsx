import React from  'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
return (
    <aside className={s.content}>
        <div>
            <img src='https://kuku.travel/wp-content/uploads/2017/08/Plage-de-Palombaggia.jpg' alt='beach'/>
        </div>
        <div className={s.mersedes}>
            <img src='img/images.png' alt='logo'/>
        </div>
        <MyPosts/>
    </aside>
)
}

export default Profile;
