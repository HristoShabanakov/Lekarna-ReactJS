import React, {useContext} from 'react';
import {useHistory } from 'react-router-dom'
import LinkComponent from '../link';
import styles from './index.module.css';
import logo from '../../images/lekarna.png'
import getNavigation from '../../services/navigation';
import {Context} from '../../providers/GlobalContextProvider';

const Header = () =>  {

  
    const context = useContext(Context);
    const user  = context.user;
    const history = useHistory()
    const links = getNavigation(user)

    const logOut = () => {
      context.logOut()
      history.push('/')
    }
      return( 
        <header className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className={styles.ul}>
        {
            links.map(navElement => {
                return (
                    <LinkComponent
                    key={navElement.title}
                    href={navElement.link}
                    title={navElement.title}
                />)
            })
        }
        {user && user.loggedIn ? <button onClick={logOut}>Logout</button> : null}
         </ul>
        </header>
      )
    }

export default Header;