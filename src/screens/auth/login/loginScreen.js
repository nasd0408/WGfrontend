import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../../../components/auth/formInput/formInput'
import FormButton from '../../../components/auth/formButton/formButton'
import SocialButton from '../../../components/auth/socialButton/socialButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './loginScreenStyles'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
        <Ionicons name="logo-xbox" size={50} color='white' style={{margin:10, padding:5}} />
        <Text style={{fontSize:45,color:'white' ,fontWeight:'bold', margin:10}}>World Gamers</Text>
        <Text style={{fontSize:20,color:'white' ,fontWeight:'100', margin:10}}>Inicio de sesión</Text>
        <FormInput
        labelValue={email}
        placeHolderText="Correo electronico"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize= "none"
        autoCorrect={false}
        onChangeText= {(userEmail) => setEmail(userEmail)}
        />

        <FormInput
            labelValue={password}
            onChangeText= {(userPassword) => setPassword(userPassword)}
            placeHolderText="Contraseña"
            iconType="lock"
            secureTextEntry={true}
        />
        <FormButton
            buttonTitle="Iniciar Sesion"
            onPress = {()=>{navigation.replace('app',{screen:'Home'})}}
        />
        <SocialButton
        buttonTitle={"Inicia sesión con Facebook"}
        btnType="facebook"
        color="#4867aa"
        backgroundColor={"#e6eaf4"}
        onPress={()=>{}}
      />

      <SocialButton
        buttonTitle={"Inicia sesión con Google"}
        btnType="google"
        color="#de4d41"
        backgroundColor={"#f4e7ea"}
        onPress={()=>{}}
      />

    <TouchableOpacity style={styles.forgotButton} onPress={()=> {navigation.navigate('signUp')}}>
        <Text style={styles.navButtonText}> No tienes una cuenta? Creala aqui!</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.forgotButton} onPress={()=> {navigation.navigate('recover')}}>
        <Text style={styles.navButtonText}> Olvidaste tu contraseña? Recuperala aqui!</Text>
    </TouchableOpacity>
    </View>
  )
}

export default LoginScreen