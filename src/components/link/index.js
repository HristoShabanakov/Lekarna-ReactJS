import React from 'react';
import styles from './index.module.css';
import {Link} from 'react-router-dom';

const LinkComponent = ({title, href}) => {
return (
    <li className={styles.link}>
        <Link className={styles.li} to={href}>
            {title}
        </Link>
    </li>
)
}

export default LinkComponent;