import React, {Component} from 'react';
import styles from './index.module.css';
import {Link} from 'react-router-dom';
import getNavigation from '../../services/navigation';
import UserContext from '../../Context';


 const LinkComponent = ({title, href}) => {
 return (
     <li className={styles.link}>
         <Link className={styles.li} to={href}>
             {title}
         </Link>
     </li>
 )
 }




//  class LinkComponent extends Component  {
//      static contextType = UserContext;

//      render() {
//          const {
//              user
//          } = this.context;

//          const links = getNavigation(user);

//          return (
//              links.map(navElement => {
//                  return (
//                      <li className={styles.link}>
//                      <Link className={styles.li} 
//                      href={navElement.link}>
//                          {navElement.title}
//                      </Link>
//                  </li>
//                 )
//              }) 
//         )
//      }
//  }

export default LinkComponent;