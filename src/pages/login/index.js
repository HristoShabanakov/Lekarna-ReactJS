import React, {Component} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
    }

    handleChange = (event, type) => {
        const newState = {}
        
        newState[type] = event.target.value
        this.setState(newState)
        }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state;
        try {
       const promise = await fetch('http//localhost:44509/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
              username,  
              password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
    });
    
    const authToken = promise.headers.get('Authorization');
    document.cookie = `x-auth-token'=${authToken}`

    const response = await promise.json();
    
    if (response.username && authToken) {
        this.props.history.push('/');
    }

    } catch(e) {
        console.log(e);
        
    }
}

    render() {
        const {
            email: username,
            password,
          } = this.state
        
     return (
        <form className={styles.container} onSubmit={this.handleSubmit}>
        <Title title="Login Page" />
        <Input 
        value={username}
        onChange={(e) => this.handleChange(e, 'username')}
        label="Username"
        id="username"
        />
        <Input 
        type="password"
        value={password}
        onChange={(e) => this.handleChange(e, 'password')}
        label="Password"
        id="password"
        />
        <div>
        <SubmitButton title="Login"/>
        </div>
    </form>
    )
    }
}

export default LoginPage;