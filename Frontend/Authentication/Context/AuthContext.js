import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null); // By default is null

    // create a login function
    const login = (email, password) => {
        setIsLoading(true)
    const result = axios.post('http://10.0.2.2:4000/api/login', {
        email,
        password,
    }).then((res) => {
        if(res.status === 200) {
            console.log(res.status)
            setIsLoading(false)
        }
        setUserToken('sometoken')
        AsyncStorage.setItem('userToken', 'sometoken')
        // setUserToken('')
    })
  }
  
//   When Logged In

    const LoggedIn = async () => {
        let userToken = await AsyncStorage.getItem('userToken')
        setUserToken(userToken)
  }
  useEffect(() => {
    LoggedIn()
  }, [])
  
    // Logout function 
    const logout = () => {
        setUserToken(null);
        AsyncStorage.removeItem('userToken') // remove the token
    }

    // Children will accept from parentices -? Two curl brackets
    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
