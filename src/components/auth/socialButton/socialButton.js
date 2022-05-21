import {  Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './socialButtonStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialButton = ({buttonTitle, btnType, color, backgroundColor, ...rest}) => {
    let bgColor = backgroundColor
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: bgColor}]} {...rest}>
        <View style={styles.iconWrapper}>
            <FontAwesome name = {btnType} size={22} color={color} style={styles.icon}/>
        </View>
        <View style={styles.btnTxtWrapper}>
            <Text style={[styles.buttonText, {color:color}]}>{buttonTitle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default SocialButton