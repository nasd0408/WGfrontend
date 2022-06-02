import {  Image, View, Platform, TextInput, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './createPostScreenStyles'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'

const PostScreen = () => {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState('')
  const createdAt = new Date()

  const handleSubmit = (e) =>{
    e.preventDefault();
    const postData={
      postImg: image,
      desc: desc,
      createdAt: createdAt,
      tags:tags,
      
    };
    axios.post("Api***", postData).then((response)=> {
      console.log(response.status);
      console.log(response.data);
    })
  }
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
      setImage(result.uri);
    }
  };
  

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Crea una publicacion</Text>
      <View style={styles.createCard}>
        <View>
          <TextInput
          multiline={true}
          placeholder={'Descripcion de la publicacion!'}
          value={desc}
          onChangeText={setDesc}
          style={styles.input}
          ></TextInput>
          <TextInput
          placeholder={'Etiquetas!'}
          value={tags}
          onChangeText={setTags}
          style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.imageContainer} >
          {image && <Image source={{uri: image}} style={styles.image}/>}
        </View>
      </View>
      <ActionButton buttonColor="#C00C86" offsetY={130}>
          <ActionButton.Item 
          buttonColor='#E6EAF4' 
          title="Limpiar campos" 
          onPress={()=>{
            setDesc('');
            setImage(null);
            setTags('');
          }}>
            <Icon name="trash-outline" style={[styles.actionButtonIcon, {color:'black'}]}  />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1D13A4' title="Elige desde galeria!" onPress={pickImage}>
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#F77F00' title="Publica!" onPress={handleSubmit}>
            <Icon name="md-create-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
   </View>  )
}

export default PostScreen

