import React from  'react';
import s from './Settings.module.css';

const Settings = (props) => {
    return (
        <div className={s.news_color}>
            <div>
            SETTINGS
            </div>
            <div className={s.settings_size}>
                <img src='img/settings.jpg' alt='settings'/>
            </div>
        </div>
    )
}

export default Settings;
