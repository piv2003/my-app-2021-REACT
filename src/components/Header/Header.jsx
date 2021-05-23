import React from 'react';
import s from './Header.module.css';

const Nav = () => {
    return <header className={s.header}>
        <div className={s.header_header}><p className={s.header_text}>React lessons by Dimych</p></div>
    </header>
}

export default Nav;
