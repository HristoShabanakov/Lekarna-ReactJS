import React from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';
const LoginPage = () => {
    return (
    <div className={styles.container}>
        <Title title="Login Page" />
        <Input 
        value=""
        onChange={() => {}}
        label="Email"
        id="email"
        />
        <Input 
        value=""
        onChange={() => {}}
        label="Password"
        id="password"
        />
        <Input 
        value=""
        onChange={() => {}}
        label="Re-Password"
        id="re-password"
        />
        <div>
        <SubmitButton title="Login"/>
        </div>
    </div>

    )
}

export default LoginPage;