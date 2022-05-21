import { TextInput, View } from 'react-native'
import React from 'react'
import AntDesing from 'react-native-vector-icons/AntDesign'
import styles from './formInputStyles'
const FormInput = ({labelValue, placeHolderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
        <View style ={styles.iconStyle}>
            <AntDesing name={iconType} size={25} color="#666"/>
        </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        placeholder={placeHolderText}
        numberOfLines={1}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  )
}

export default FormInput;