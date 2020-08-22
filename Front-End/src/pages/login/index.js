import React, { useState, useContext} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';
import authenticate from '../../services/authenticate';
import {useHistory} from 'react-router-dom';
import {Context} from '../../providers/GlobalContextProvider';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const context = useContext(Context);
    const history = useHistory();

    const handleSubmit = async (event) => {
            event.preventDefault()

    await authenticate('https://localhost:44305/identity/login', {
     username,
     password
    }, (user) => {
     context.logIn(user);
     history.push('/');
     }, (e) => {
     setError(true)
    }
    )};


    return (
        <content className={styles.content}>
         <div className ={styles.div}>
        <form className={styles.container} onSubmit={handleSubmit}>
        <Title title="Login Page" />
        <Input 
        value={username}
        onChange={e => setUsername(e.target.value)}
        label="Username"
        id="username"
        />
        <Input 
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        label="Password"
        id="password"
        />
        <div>
        <SubmitButton title="Login"/>
        </div>
        {error ? <div>Invalid User or Password !</div> : null}
    </form>
    </div>
    </content>
    )
}

export default LoginPage;