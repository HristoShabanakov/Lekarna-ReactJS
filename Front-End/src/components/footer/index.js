import React from 'react';
import styles from './index.module.css';

const Footer = () => {
    return (
<footer className={styles.footer}>
    <div className={styles.container}>
        <h2>This is the Footer</h2>
    </div>
    <p className={styles.p}>Lekarna - Front-End with ReactJS</p>
</footer>
    )
}

export default Footer;