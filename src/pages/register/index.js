import React from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
const RegisterPage = () => {
    return (
        <div className={styles.container}>
        <Title title="Register Page" />
        <div>
        <SubmitButton title="Register"/>
        </div>
    </div>

    )
}

export default RegisterPage;