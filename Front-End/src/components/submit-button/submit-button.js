import React from 'react';
import styles from './submit-button.module.css';

const Button = ({title, type, onClick}) => {
    return(
<button onClick={onClick} type={type} className={styles.button}>{title}</button>
    )
}

export default Button;