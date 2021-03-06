import React from 'react';
import styles from './submit-button.module.css';

const SubmitButton = ({title}) => {
    return(
<button type='submit' className={styles.button}>{title}</button>
    )
}

export default SubmitButton;