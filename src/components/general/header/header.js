import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './headerStyles'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>WorldGamer</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('header',{screen:'Notifications'})}}>
        <Ionicons style={styles.icon} name='notifications' size={30}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('header',{screen: 'Favorites'})}}>
        <Ionicons style={styles.icon} name='star' size={30}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('header',{screen: 'Chat'})}}>
        <Ionicons style={styles.icon} name='chatbubble' size={30}/>
      </TouchableOpacity>
    </View>
  )
}
export default Header