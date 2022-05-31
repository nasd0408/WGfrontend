import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './profileHeaderStyles'
export default  ProfileHeader=(self)=> {
    console.log(self.self);
   if(self.self === "Nico"){
       return (
        <View style= {styles.header}>
          
          <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Configuracion</Text>
                <Ionicons name='settings-outline' size={30} color='#E6EAF4'/>
            </View>
          </TouchableOpacity>
        </View>         
       )
   }else {return (
    <View style= {styles.header}>
        <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Añadir a amigos</Text>
                <Ionicons name='person-add-outline' size={30} color='#E6EAF4'/>
            </View>
        </TouchableOpacity>
      </View> 
  )}
}