import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <ul className={s.nav_list}>
            <li className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </li>
            <li className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </li>
        </ul>
    </nav>

}

export default Navbar;
