import React, {Component} from 'react';
import LinkComponent from '../link';
import styles from './index.module.css';
import logo from '../../images/lekarna.png'
import getNavigation from '../../services/navigation';
import UserContext from '../../Context';

class Header extends Component {

    static contextType = UserContext
  
    render() {
      const {
        user
      } = this.context
      
      const links = getNavigation(user)

      return( 
        <header className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
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
        </header>
      )
    }
}


// const Header = () => {
// return (
//     <header className={styles.navigation}>
//         <img className={styles.logo} src={logo} alt="logo" />
//         <ul className={styles.ul}>
//             <LinkComponent href="/" title="Home"/>
//             <LinkComponent href="/offers" title="Offers"/>
//             <LinkComponent href="/pharmacies" title="Pharmacies"/>
//             <LinkComponent href="/login" title="Login"/>
//             <LinkComponent href="/register" title="Register"/>
//         </ul>
//     </header>
// )
// }

export default Header;