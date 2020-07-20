import React from 'react';
import Link from '../link';
import styles from './index.module.css';

const Header = () => {
return (
    <header className={styles.navigation}>
        <ul className={styles.ul}>
            <Link href="/" title="Home"/>
            <Link href="/" title="Offers"/>
            <Link href="/" title="Pharmacies"/>
        </ul>
    </header>
)
}

export default Header;