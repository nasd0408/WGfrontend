import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../../../components/auth/formInput/formInput'
import FormButton from '../../../components/auth/formButton/formButton'
import SocialButton from '../../../components/auth/socialButton/socialButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './loginScreenStyles'
import useForm from '../../../hooks/useForm'
const LoginScreen = ({navigation}) => {
    const initialState ={
      email:'',
      password:'',
    }
    const onSubmit= values => {
      console.log(values);
    }
    const {subscribe, inputs, handleSubmit} = useForm(initialState,onSubmit)
  return (
    <View style={styles.container}>
        <Ionicons name="logo-xbox" size={50} color='white'  />
        <Text style={{fontSize:45,color:'white' ,fontWeight:'bold', margin:10}}>World Gamers</Text>
        <Text style={{fontSize:20,color:'white' ,fontWeight:'100', margin:10}}>Inicio de sesión</Text>
        <FormInput
        labelValue={inputs.email}
        placeHolderText="Correo electronico"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize= "none"
        autoCorrect={false}
        onChangeText ={subscribe('email')}
        />

        <FormInput
            labelValue={inputs.password}
            onChangeText={subscribe('password')}
            placeHolderText="Contraseña"
            iconType="lock"
            secureTextEntry={true}
        />
        <FormButton
            buttonTitle="Iniciar Sesion"
            onPress = {handleSubmit}
        />
        <SocialButton
        buttonTitle={"Inicia sesión con Facebook"}
        btnType="facebook"
        color="#4867aa"
        backgroundColor={"#e6eaf4"}
        onPress={()=>{navigation.replace('app',{screen:'Home'})}}
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