import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your Healthy and Wealthy?'},
        {id: 3, message: 'Yo1'},
        {id: 4, message: 'Yo2'},
        {id: 5, message: 'Yo3'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div className={s.dialogs_size}>
                    <img src='img/dialog.jpg' alt='dialogs'/>
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default  Dialogs;

