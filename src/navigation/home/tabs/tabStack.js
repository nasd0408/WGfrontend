
import HomeScreen from "../../../screens/feed/home/homeScreen";
import ProfileScreen from '../../../screens/profile/profileScreen';
import SearchScreen from "../../../screens/search/searchScreen";
import PostScreen from "../../../screens/post/createPostScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const TabStack = () => {

return (
        <Tab.Navigator 
            
            initialRouteName="Home"
            
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, }) =>{
                    let iconName;
                    let iconColor = focused ? '#c00c86' : '#5d08da'  

                    if (route.name === 'Home') {
                        iconName = focused 
                        ? 'home'
                        : 'home-outline'
                    }
                    else if (route.name === 'UserProfile'){
                        iconName = focused 
                        ? 'person'
                        : 'person-outline'
                    }
                    else if (route.name === 'Search'){
                        iconName= focused 
                        ?'search'
                        :'search-outline'
                    }
                    else if (route.name === 'Post'){
                        iconName=focused 
                        ?'add-circle'
                        :'add-circle-outline'
                    }
                    return <Ionicons name={iconName} size={25} color={iconColor}/>
                },
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: false,
                headerShown:false,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} ></Tab.Screen>
            <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
            <Tab.Screen name="UserProfile" component={ProfileScreen} initialParams={{user_id:"yo"}}></Tab.Screen>
            <Tab.Screen name="Post" component={PostScreen} ></Tab.Screen>
        </Tab.Navigator>
)}

export default TabStack