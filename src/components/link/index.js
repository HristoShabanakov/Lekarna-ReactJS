import React from 'react';
import styles from './index.module.css';

const Link = ({title, href}) => {
return (
    
    <li className={styles.link}>
        <a href={href}>
            {title}
        </a>
    </li>
)
}

export default Link;