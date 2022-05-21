import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NotificationScreen from "../../../screens/notifications/notificationsScreen"
import ChatScreen from "../../../screens/chat/chatScreen"
import FavoritesScreen from "../../../screens/profile/favorites/favoritesScreen";
const Stack = createNativeStackNavigator();
const HeaderStack = () => {
  return (
<Stack.Navigator
screenOptions={{title:'',
headerStyle : { backgroundColor: '#5D08DA'}
}}
>
    <Stack.Screen name="Notifications" component={NotificationScreen}></Stack.Screen>
    <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
    <Stack.Screen name="Favorites" component={FavoritesScreen}></Stack.Screen>
</Stack.Navigator>
  )
}

export default HeaderStack

