import { Text, View, TouchableOpacity } from 'react-native'
import * as React from 'react'
import FormInput from '../../../components/auth/formInput/formInput'
import FormButton from '../../../components/auth/formButton/formButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './loginScreenStyles'
import useForm from '../../../hooks/useForm'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import AuthContext from '../../../navigation/context/AuthContext'
const LoginScreen = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext)
  const initialState ={
    email:'',
      password:'',
    }
    
    const onSubmit= values => {
      signIn(values)
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