import React, {useState} from 'react';
import UserContext from './Context';


const App = (props) => {
    const[user, setUser] = useState(props.user ? {
        ...props.user,
        loggedIn: true
    }: null);

    const logIn = (userObject) => {
        setUser({
            ...userObject,
            loggedIn: true
        });
    }

    const logOut = () => {
        document.cookie ="Lekarna-token=, expires = Thu, 01 Jan 1970 00:00:00 GMT";
        setUser({
            loggedIn: false
        })
    }
        return (
            <UserContext.Provider value={{
                user,
                logIn,
                logOut
            }}>
              {props.children}
            </UserContext.Provider>
        )
}

export default App