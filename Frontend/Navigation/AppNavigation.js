import { View, Text, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SecondStack from './SecondStack';
import FirstStack from './FirstStack';
import {AuthContext} from '../Authentication/Context/AuthContext';

const AppNavigation = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if(isLoading) {
    <ActivityIndicator size="large"/>
  } else {
    
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <SecondStack /> : <FirstStack/> }
      {isLoading === true ? <ActivityIndicator size="large" color="#00ff00" /> : null}
    </NavigationContainer>
  )
}

export default AppNavigation