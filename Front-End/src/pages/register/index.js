import React, { useState, useContext} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';
import authenticate from '../../services/authenticate';
import {Context} from '../../providers/GlobalContextProvider';
import {useHistory} from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const context = useContext(Context);
    const history = useHistory();

  const  handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('https://localhost:44305/identity/register', {
               username,
               email,
               password
           }, (user) => {
               context.logIn(user);
               history.push('/');
           }, (e) => {
               console.log('Error', e)
           });
        
}
return (
    <div className={styles.div}>
   <form className={styles.container} onSubmit={handleSubmit}>
   <Title title="Register Page" />
   <Input 
   value={username}
   onChange={e => setUsername(e.target.value)}
   label="Username"
   id="username"
   />
   <Input 
   value={email}
   onChange={e => setEmail(e.target.value)}
   label="Email"
   id="email"
   />
   <Input
   type="password"
   value={password}
   onChange={e => setPassword(e.target.value)}
   label="password"
   id="password"
   />
   <div className={styles.buttonDiv}>
   <SubmitButton title="Login"/>
   </div>
</form>
</div>
)
}

export default RegisterPage;