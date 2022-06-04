import {  Image, View, TextInput, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './createPostScreenStyles'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import * as SecureStore from 'expo-secure-store'

const PostScreen = () => {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState('')
  const [userData, setUserData] = useState([])


  const [token, setToken] = useState(null)
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
     setToken(result);
    } else {
      alert('No values stored under that key.');
    }
  }
  useEffect(()=>{
    getValueFor('userToken')
  },[])
  let config ={
    headers:{
      "Accept":"application/json",
      "Authorization": 'Bearer '+token
    }}

    useEffect(()=>{
      if (token===null){

      }else {
        axios.get('https://medinajosedev.com/public/api/usuarios/yo', config)
        .then(response => {setUserData(response.data)})
        .catch(e=>console.error(e))
        
      }
    },[token])
  const handleSubmit = () =>{

    const postData={
      created_at: new Date(),
      updated_at: new Date(),
      descripcion: desc,
      imagen: image,
      user_id: userData.id,
      nro_likes:0,
      nro_comentarios:0,
      isLiked:false,
      isFavorite:false,
      estado:1,
      etiquetas:tags,
      user: userData,
      
    };
    axios.post("https://medinajosedev.com/public/api/publicaciones/", postData, config)
    .then((response)=> {
      console.log(response.status);
      console.log(response.data);
    })
    .catch(e=>console.error(e))
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

