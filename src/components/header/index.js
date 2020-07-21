import React from 'react';
import Link from '../link';
import styles from './index.module.css';

const Header = () => {
return (
    <header className={styles.navigation}>
        <ul className={styles.ul}>
            <Link href="/" title="Home"/>
            <Link href="/offers" title="Offers"/>
            <Link href="/pharmacies" title="Pharmacies"/>
        </ul>
    </header>
)
}

export default Header;