import { ScrollView, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../../../components/auth/formInput/formInput'
import FormButton from '../../../components/auth/formButton/formButton'
import SocialButton from '../../../components/auth/socialButton/socialButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './signUpScreenStyles'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SignupScreen = ({navigation}) => {
    const [nombre, setNombre] = useState();
    const [cedula, setCedula] = useState();
    const [fecha, setFecha] = useState(new Date);
    const [changed, setChanged] = useState(false);
    const [openFecha, setOpenfecha] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  return (
    <ScrollView contentContainerStyle={styles.container}
    >

        <Ionicons name="game-controller" size={50} color='white' style={{margin:10, padding:5}} />
        <Text style={{fontSize:20,color:'white' ,fontWeight:'100', margin:10}}>Registrate </Text>
        <FormInput
        labelValue={nombre}
        placeHolderText="Nombre y apellido"
        iconType="user"
        autoCorrect={false}
        onChangeText= {(userName) => setNombre(userName)}
        />
        <FormInput
        labelValue={cedula}
        placeHolderText="Numero de identificacion (CI)"
        iconType="user"
        keyboardType="numeric"
        onChangeText= {(userCedula) => setCedula(userCedula)}
        />

        <TouchableOpacity style={styles.fechaContainer}
        onPress={()=>setOpenfecha(true)}
        >
          <Ionicons name='calendar-outline' size={25} style={styles.iconStyle}/>
          <Text style={changed ?styles.fecha: styles.unchangedFecha} >{ changed ? fecha.toISOString().substring(0,10) : 'fecha de nacimiento'} </Text>
        </TouchableOpacity>
       
       <DateTimePickerModal
       isVisible={openFecha}
       mode='date'
       onConfirm={(fecha)=>{setFecha(fecha); setChanged(true); setOpenfecha(false)}}
       onCancel={()=>setOpenfecha(false)}
       />
       
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
            buttonTitle="Registrarte"
            onPress = {()=>{navigation.goBack()}}
        />
        <SocialButton
        buttonTitle={"Registrate con Facebook"}
        btnType="facebook"
        color="#4867aa"
        backgroundColor={"#e6eaf4"}
        onPress={()=>{}}
      />

      <SocialButton
        buttonTitle={"Registrate con Google"}
        btnType="google"
        color="#de4d41"
        backgroundColor={"#f4e7ea"}
        onPress={()=>{}}
      />

    <TouchableOpacity style={styles.forgotButton} onPress={()=> {navigation.goBack()}}>
        <Text style={styles.navButtonText}> Ya tienes una cuenta? Inicia sesión aqui!</Text>
    </TouchableOpacity>
    </ScrollView>
  )
}

export default SignupScreen