import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../../images/lekarna.png'

const Header = () => {
return (
    <header className={styles.navigation}>
        <ul className={styles.ul}>
        <img className={styles.logo} src={logo} alt="logo" />
            <Link href="/" title="Home"/>
            <Link href="/offers" title="Offers"/>
            <Link href="/pharmacies" title="Pharmacies"/>
            <Link href="/login" title="Login"/>
            <Link href="/register" title="Register"/>
        </ul>
    </header>
)
}

export default Header;