import React, {Component} from 'react';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import Title from '../../components/title';
import Input from '../../components/input';
import authenticate from '../../services/authenticate';
import UserContext from '../../Context';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
    }

    static contextType = UserContext;

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

        console.log(this.context);

    await authenticate('https://localhost:44305/identity/login', {
     username,
     password
    }, (user) => {
     console.log('Logged In Completed');
     this.context.logIn(user);
     this.props.history.push('/');
     }, (e) => {
     console.log('Error', e)
    }
    )};
    

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