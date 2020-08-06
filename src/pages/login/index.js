import React, {Component} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';
import authenticate from '../../services/authenticate';

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
      await authenticate('https://localhost:44305/identity/login', {
     username,
     password
 }, () => {
     console.log('Logged In Completed');
     this.props.history.push('/');
 })
    }

        


    render() {
        const {
            username,
            password,
          } = this.state
        
     return (
         <content className={styles.content}>
         <div className ={styles.div}>
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
    </div>
    </content>
    )
    }
}

export default LoginPage;