import React, {Component} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        
        newState[type] = event.target.value
        this.setState(newState)
        }

        handleSubmit = async (event) => {
            event.preventDefault()
            const {
                username,
                email,
                password
            } = this.state;
            try {
           const promise = await fetch('https://localhost:44305/identity/register', {
                method: 'POST',
                body: JSON.stringify({
                  username,
                  email,  
                  password
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
        });
    
        
         const authToken = promise.headers.get('Authorization');
         console.log(authToken);
        //document.cookie = `x-auth-token'=${data}`
    
        const response = await promise.json();
        const token = document.cookie = `Lekarna-token'=${response}`
    
        console.log(response)
        
        if (response.username && authToken) {
            this.props.history.push('/');
        }
    
        } catch(e) {
            console.log(e);
            
        }
    }
    render() {
        const {
            username,
            email,
            password
          } = this.state
        
     return (
         <div>
        <form className={styles.container} onSubmit={this.handleSubmit}>
        <Title title="Register Page" />
        <Input 
        value={username}
        onChange={(e) => this.onChange(e, 'username')}
        label="Username"
        id="username"
        />
        <Input 
        value={email}
        onChange={(e) => this.onChange(e, 'email')}
        label="Email"
        id="email"
        />
        <Input
        type="password"
        value={password}
        onChange={(e) => this.onChange(e, 'password')}
        label="password"
        id="password"
        />
        <div>
        <SubmitButton title="Login"/>
        </div>
    </form>
    </div>
    )
    }
}

export default RegisterPage;