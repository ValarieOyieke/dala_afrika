'use client'

import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/navbar.module.css'
import classNames from 'classnames';
import { useRef } from 'react';


const Navbar = () => {

    const navRef = useRef(null);
    const showNav = () => {
        navRef.current.classList.toggle(styles.show)
    }
    return (     
        <nav className={styles.navHolder}>
        
                <Link href="/">
                   <h1 className={styles.logo}>Dala Afrika</h1>
                </Link>
            
            <div className={styles.navLinkHolder} ref={navRef}>
                <Link onClick={showNav} className={styles.navLink} href="/about">About</Link>
                <Link onClick={showNav} className={styles.navLink} href="/services">Services</Link>
                <Link onClick={showNav} className={styles.navLink} href="/projects">Projects</Link>
                <button onClick={showNav} className={classNames(styles.navBtn, styles.navBtnClose)}><FaTimes /></button>
            </div>
            <button onClick={showNav} className={styles.navBtn}><FaBars /></button>
        </nav>
     );
}
 
export default Navbar;