import React from 'react';
import styles from './index.module.css';

const Input = ({label, id, value, onChange, type}) => {
    return (
        <div className={styles.div}>
            <label className={styles.label} htmlFor={id}>
                {label }:
                <input className={styles.input} type={type || 'text'} id={id} value={value} onChange={onChange} />
            </label>
        </div>
    )
}

export default Input;