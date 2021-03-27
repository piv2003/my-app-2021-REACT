import React from  'react';
import s from './Profile.module.css';


const Profile = () => {
return  <aside className={s.content}>
    <div>
        <img src='https://kuku.travel/wp-content/uploads/2017/08/Plage-de-Palombaggia.jpg' alt='beach'/>
    </div>
    <div>
        <img src='img/images.png' alt='logo'/>         </div>
    <div>
        My posts
        <div>
            New post
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                post1
            </div>
            <div className={s.item}>
                post 2
            </div>



        </div>
    </div>
</aside>

}

export default Profile;
