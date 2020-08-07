import React, {Component} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';
import authenticate from '../../services/authenticate';
import UserContext from '../../Context';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    static contextType = UserContext;

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
            
           await authenticate('https://localhost:44305/identity/register', {
               username,
               email,
               password
           }, (user) => {
               this.context.logIn(user);
               this.props.history.push('/');
           }, (e) => {
               console.log('Error', e)
           });
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