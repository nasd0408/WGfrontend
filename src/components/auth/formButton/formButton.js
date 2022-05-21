import {   Text, TouchableOpacity } from 'react-native'
import styles from './formButtonStyle'
import React from 'react'
const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

export default FormButton
