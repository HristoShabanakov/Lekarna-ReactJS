import React from 'react';
import styles from './index.module.css';
import baner from '../../images/baner.jpg'
const Main = (props) => {
    return (
    <div className={styles.container}>
       {props.children}
    </div>
    )
}

export default Main