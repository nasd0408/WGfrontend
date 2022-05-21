import { StyleSheet, View } from 'react-native'
import React from 'react'
import { InputField, InputWrapper } from './createPostScreenStyles'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import { windowHeight } from '../../utils/Dimentions';
const PostScreen = () => {
  return (
    <View style={styles.container}>
      <InputWrapper>
        <InputField
          placeholder="Que estas pensando?"
          multiline
          numbersOfLines={4}
        />
      </InputWrapper>
      <ActionButton buttonColor="#060422" offsetY={130}>
          <ActionButton.Item buttonColor='#C00C86' title="Toma una foto!" onPress={() => console.log("notes tapped!")}>
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1D13A4' title="Elige desde galeria!" onPress={() => {}}>
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#F77F00' title="Publica!" onPress={() => alert('Publicacion creada')}>
            <Icon name="md-create-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',

  },
})