import TabStack from './tabs/tabStack';
import HeaderStack from './headerNav/headerStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../../components/general/header/header';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
      <Stack.Navigator
      initialRouteName='tabs'
      headerMode='screen'
       screenOptions={{
           header: ({ navigation, route, options, back })=> <Header navigation={navigation}/>
       }}
      >
          <Stack.Screen name='tabs' component={TabStack}></Stack.Screen>
          <Stack.Screen name='header' component={HeaderStack} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
  )
}

export default AppStack

