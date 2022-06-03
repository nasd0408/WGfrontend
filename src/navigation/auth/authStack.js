import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/auth/login/loginScreen'
import SignUpScreen from '../../screens/auth/signUp/signUpScreen'
import RecoverAuthScreen from '../../screens/auth/recover/recoverScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const Stack = createNativeStackNavigator();
const AuthStack = () => {

  return (
      <SafeAreaProvider>

        <Stack.Navigator 
        initialRouteName='login'
        screenOptions={{
            headerStyle: {backgroundColor:'#5D08DA'},
            title: ''
        }}>
            <Stack.Screen name ="login" component={LoginScreen} ></Stack.Screen>
            <Stack.Screen name ="signUp" component={SignUpScreen} ></Stack.Screen>
            <Stack.Screen name ="recover" component={RecoverAuthScreen} ></Stack.Screen>
        </Stack.Navigator>
      </SafeAreaProvider>
    )
}

export default AuthStack