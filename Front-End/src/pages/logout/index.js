import React, { useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../Context'


const LogoutPage = () => {
  const [username, setUsername] = useState(null)
  const context = useContext(UserContext)
  const history = useHistory()
  
  const logOut = () => {
    context.logOut()
    history.push('/')
  }

}

export default LogoutPage