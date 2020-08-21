import React, {useContext} from 'react';
import {useHistory } from 'react-router-dom'
import LinkComponent from '../link';
import styles from './index.module.css';
import logo from '../../images/lekarna.png'
import getNavigation from '../../services/navigation';
import UserContext from '../../Context';

const Header = () =>  {

  
    const context = useContext(UserContext);
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
        <button onClick={logOut}>Logout</button>
         </ul>
        </header>
      )
    }

export default Header;