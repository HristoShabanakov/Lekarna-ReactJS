import React, {Component} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        
        newState[type] = event.target.value
        this.setState(newState)
        }

    render() {
        const {
            email,
            password,
            rePassword
          } = this.state
        
     return (
        <div className={styles.container}>
        <Title title="Register Page" />
        <Input 
        value={email}
        onChange={(e) => this.onChange(e, 'email')}
        label="Email"
        id="email"
        />
        <Input 
        value={password}
        onChange={(e) => this.onChange(e, 'password')}
        label="Password"
        id="password"
        />
        <Input 
        value={rePassword}
        onChange={(e) => this.onChange(e, 'rePassword')}
        label="Re-Password"
        id="re-password"
        />
        <div>
        <SubmitButton title="Login"/>
        </div>
    </div>
    )
    }
}

export default RegisterPage;