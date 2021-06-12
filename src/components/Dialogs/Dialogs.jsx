import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newPostElement2 = React.createRef();
    let addPost2 = () => {
        let text = newPostElement2.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.color_item}>
                DIALOGS
            </div>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogs_img}>
                <img src='img/dialog.jpg' alt='dialogs'/>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.content}>
                <textarea className={s.size_textarea} ref={newPostElement2} > </textarea>
                <button onClick={addPost2} className={s.color_button}>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs;

