import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
    /*
    isLoading: Will load while the user is login
    userToken: We set the userToken to some text when the credential/login is valid, 
    so the user can get access 
    */
    
    const [isLoading, setIsLoading] = useState(false); 
    const [userToken, setUserToken] = useState(null); // By default is null

    // create a login function
    const login = (email, password) => {
        if(email == '' || password == '') {
            setIsLoading(false)
        } else {
            setIsLoading(true)
        }
    // using post request to check if the user exist, will return status code of 200 if success
    axios.post('http://10.33.2.46:5001/api/User/login', { 
        email,
        password,
    }).then((res) => {
        if(res.status === 200) {
            console.log(res.status)
            setIsLoading(false)
        } 
        setUserToken('sometoken')
        // 
        AsyncStorage.setItem('userToken', 'sometoken')
        // setUserToken('')
    })
    .catch(err => {
        setIsLoading(false)
        console.log(err)
    })
  }
  
  // When Logged In
  // After user left the app, user will still be logged in
  // After signing out of the app, user will be logged out and Item in AsyncStorage will  be removed 
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
