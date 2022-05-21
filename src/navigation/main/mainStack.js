import AppStack from '../home/AppStack';
import AuthStack from '../auth/authStack'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const main = createNativeStackNavigator();
const MainStack = () => {
  return (
   <NavigationContainer>
       <main.Navigator 
       initialRouteName='auth'

       screenOptions={{
        headerShown:false
    }}
       
       >
           <main.Screen name='auth' component={AuthStack}></main.Screen>
           <main.Screen name='app' component={AppStack}></main.Screen>
       </main.Navigator>
   </NavigationContainer>
   )
}

export default MainStack