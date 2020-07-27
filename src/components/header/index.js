import React from 'react';
import LinkComponent from '../link';
import styles from './index.module.css';
import logo from '../../images/lekarna.png'
import { BrowserRouter as Router} from 'react-router-dom';

const Header = () => {
return (
    <header className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className={styles.ul}>
            <LinkComponent href="/" title="Home"/>
            <LinkComponent href="/offers" title="Offers"/>
            <LinkComponent href="/pharmacies" title="Pharmacies"/>
            <LinkComponent href="/login" title="Login"/>
            <LinkComponent href="/register" title="Register"/>
        </ul>
    </header>
)
}

export default Header;