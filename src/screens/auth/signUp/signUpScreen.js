import { View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import FormInput from '../../../components/auth/formInput/formInput'
import FormButton from '../../../components/auth/formButton/formButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './signUpScreenStyles'
import * as ImagePicker from 'expo-image-picker';
import useForm from '../../../hooks/useForm'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'



const SignupScreen = ({navigation}) => {
  const [changed, setChanged] = useState(false)
  const [openFecha, setOpenfecha] = useState(false)
const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      initialState.imagen=(result.uri);
    }
  };
  const initialState ={
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
    telefono:'',
    bio:'',
    gustos:'',
    imagen:'https://medinajosedev.com/public/storage/perfil0.jpg',
    estado:1,
  }
  let config ={
    headers:{
      "Accept":"application/json"
    }
  }
  const onSubmit= values => {
    axios.post('https://medinajosedev.com/public/api/registro', values , config)
    .then(response=> (SecureStore.setItemAsync('secure_token',response.data.token)))
    .catch((e)=> console.error(e))

  }
  const {subscribe, inputs, handleSubmit} = useForm(initialState,onSubmit)
  return (
    <KeyboardAvoidingView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -50 : 25}>

      <View style={styles.inner}>
          <Ionicons name="game-controller" size={50} color='white' style={{ padding:5}} />
          <Text style={{fontSize:20,color:'white' ,fontWeight:'100', marginBottom:10}}>Registrate </Text>
          <FormInput
          labelValue={inputs.name}
          placeHolderText="Nombre y apellido"
          iconType="user"
          autoCorrect={false}
          onChangeText= {subscribe('name')}
          />

        <FormInput
        labelValue={inputs.email}
        placeHolderText="Correo electronico"
        iconType="mail"
        keyboardType="email-address"
        autoCapitalize= "none"
        autoCorrect={false}
        onChangeText= {subscribe('email')}
        />
      
          <FormInput
              labelValue={inputs.password}
              onChangeText= {subscribe('password')}
              placeHolderText="Contraseña"
              iconType="lock"
              secureTextEntry={true}
          />
          <FormInput
              labelValue={inputs.password_confirmation}
              onChangeText= {subscribe('password_confirmation')}
              placeHolderText="Contraseña"
              iconType="lock"
              secureTextEntry={true}
          />
          <FormInput
              labelValue={inputs.telefono}
              onChangeText= {subscribe('telefono')}
              placeHolderText="Telefono"
              iconType="phone"
              />
          <FormInput
              labelValue={inputs.bio}
              onChangeText= {subscribe('bio')}
              placeHolderText="Biografia"
              iconType="form"
              />
          <FormInput
              labelValue={inputs.gustos}
              onChangeText= {subscribe('gustos')}
              placeHolderText="Gustos"
              iconType="hearto"
              />

          <FormButton
              buttonTitle="Elegir Imagen"
              onPress = {pickImage}
          />

          <FormButton
              buttonTitle="Registrarte"
              onPress = {handleSubmit}
          />
        

            <TouchableOpacity style={styles.forgotButton} onPress={()=> {navigation.goBack()}}>
                <Text style={styles.navButtonText}> Ya tienes una cuenta? Inicia sesión aqui!</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
  )
}

export default SignupScreen