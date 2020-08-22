import React, {useState, createContext, useEffect } from 'react';
import { getUser } from '../services/users';
import { getCookie, deleteCookie } from '../utils/cookie';

const initialState = {
    user : null,
    logIn: () => {},
    logOut: () => {},
};

export const Context = createContext(initialState);

const GlobalContextProvider = ({children}) => {
    const [ user, setUser ] = useState(null);

    const logIn = (userObject) => {
        setUser({
            ...userObject,
            loggedIn: true
        });
    }

    const logOut = () => {
        document.cookie ="LekarnaToken=, expires = Thu, 01 Jan 1970 00:00:00 GMT";
        setUser({
            loggedIn: false
        })
    }


    const fetchUser = async () => {
        const token = getCookie('LekarnaToken');
        if (!token) {
           
            deleteCookie('LekarnaToken');
            
            return;
        }
    
        const response = await getUser(token);
        if (response.error) {
           
            deleteCookie('LekarnaToken');
           
            return;
        }
    
        logIn(response);
    };

    useEffect(() => {
		fetchUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return(<Context.Provider
        value={{
            user,
            logIn,
            logOut
        }}>
            {children}
        </Context.Provider>)
}


export default GlobalContextProvider;