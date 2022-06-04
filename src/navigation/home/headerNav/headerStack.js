import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NotificationScreen from "../../../screens/notifications/notificationsScreen"
import ChatScreen from "../../../screens/chat/chatScreen"
import ProfileScreen from "../../../screens/profile/profileScreen";
import FavoritesScreen from "../../../screens/favorites/favoritesScreen"
import EditProfileScreen from "../../../screens/profile/EditProfileScreen"
import PostDetailScreen from "../../../screens/post/postDetail/postDetailScreen";
import FriendListScreen from "../../../screens/friends/friendListScreen";
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
    <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
    <Stack.Screen name="EditProfile" component={EditProfileScreen}></Stack.Screen>
    <Stack.Screen name="Post" component={PostDetailScreen}></Stack.Screen>
    <Stack.Screen name="FriendList" component={FriendListScreen}></Stack.Screen>
</Stack.Navigator>
  )
}

export default HeaderStack

