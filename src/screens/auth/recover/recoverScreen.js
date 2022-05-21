import { Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FormInput from '../../../components/auth/formInput/formInput'
import FormButton from '../../../components/auth/formButton/formButton'
import styles from './recoverScreenStyles'
const RecoverAuthScreen = ({navigation}) => {
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
  <Ionicons name="game-controller" size={50} color='white' style={{margin:10, padding:5}} />
        <Text style={{fontSize:20,color:'white' ,fontWeight:'100', margin:10}}>Recupera tu contraseña </Text>
        <Text style={styles.textInfo}>Introduce tu correo electronico, recibiras un correo con las instrucciones a seguir </Text>
        <Text style={styles.textInfo}></Text>
        <FormInput
        labelValue={email}
        placeHolderText="Correo electronico"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize= "none"
        autoCorrect={false}
        onChangeText= {(userEmail) => setEmail(userEmail)}
        />

        
        <FormButton
            buttonTitle="Enviar correo de recuperacion"
            onPress = {()=>{Alert.alert('Correo de recuperacion enviado', 'Sigue las instrucciones del correo',
            [
              {
                text: "ok",
                onPress: () => navigation.goBack(),
                style: "cancel",
              },
            ],)
           
          }}
        />
    </View>
  )
}

export default RecoverAuthScreen
