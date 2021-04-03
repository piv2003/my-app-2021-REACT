import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs_size}>
                <img src='img/dialog.jpg' alt='dialogs'/>
            </div>
            <div  className={s.color_item}>
                Dialogs
            </div>
        </div>
    )
}

export default  Dialogs;

