import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mersedes}>
                <img src='img/images.png' alt='logo'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src='img/island.jpg' alt='beach'/><br/>
                AVA+Description
            </div>
        </div>
    )
}

export default ProfileInfo;
