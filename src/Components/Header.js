import React from 'react';
import styles from './commonstyle.module.css'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className={styles.head}>
            <div className={styles.alignLeft}> Quizzie</div>
            <div className={styles.alignRight}> Contacts</div>   
        </div>
    );
}

export default Header;