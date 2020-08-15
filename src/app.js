import React, { Component, useState, useEffect } from 'react';
import UserContext from './Context';

const App = (props) => {
    const[user, setUser] = useState(null);

    const logIn = (user) => {
        setUser({
            ...user,
            loggedIn: true
        })
    }

    const logOut = () => {
        document.cookie ='Lekarna-token='
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