import { View, Text,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './profileHeaderStyles'
import i18n from "../../i18n/i18n"
import AuthContext from '../../../navigation/context/AuthContext'
export default  ProfileHeader=({self,  navigation, userData} )=> {
  const {signOut} = useContext(AuthContext)
   if(self === "yo"){
       return (
        <View style= {styles.header}>
          
          <TouchableOpacity onPress={signOut}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{i18n.t("configuration")}</Text>
                <Ionicons name='settings-outline' size={30} color='#E6EAF4'/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={signOut}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Cerrar Sesion</Text>
                <Ionicons name='exit-outline' size={30} color='#E6EAF4'/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=>navigation.navigate('header',{screen:'EditProfile', params:{user: userData}})}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{i18n.t("profile.editProfile")}</Text>
                <Ionicons name='create-outline' size={30} color='#E6EAF4'/>
            </View>
          </TouchableOpacity>
        </View>         
       )

   }else {return (
    <View style= {styles.header}>
        <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{i18n.t("profile.addFriends")}</Text>
                <Ionicons name='person-add-outline' size={30} color='#E6EAF4'/>
            </View>
        </TouchableOpacity>
      </View> 
  )}
}