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
  const [loading, setLoading] = useState(false)
  const [imageData, setImageData] = useState()


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
      "Authorization": 'Bearer '+token,
      
    }}

    useEffect(()=>{
      if (token===null){

      }else {
        axios.get('https://medinajosedev.com/public/api/usuarios/yo', config)
        .then(response => {setUserData(response.data)})
        .catch(e=>console.error(e))
        
      }
    },[token])
    const getMimeType = (ext) => {
      // mime type mapping for few of the sample file types
      switch (ext) {
        case 'pdf': return 'application/pdf';
        case 'jpg': return 'image/jpeg';
        case 'jpeg': return 'image/jpeg';
        case 'png': return 'image/png';
      }
    }
    const uploadFile = async () => {
      if(image){
        const fileUri =image;
        let filename = fileUri.split('/').pop();
   
        const extArr = /\.(\w+)$/.exec(filename);
        const type = getMimeType(extArr[1]);

        setLoading(true)

        let formData = new FormData();
   
        formData.append('file', { uri: fileUri, name: filename, type });
   
        const response = await fetch("https://medinajosedev.com/public/api/imagen/publicacion", {
          method: 'POST',
          body: formData,
          headers: {
            'content-type': 'multipart/form-data',
            "Accept":"application/json",
            "Authorization": 'Bearer '+token,
            
          },
        });
        setLoading(false)
        const responseAgain = await response.json();
        setImageData(responseAgain.file)
        console.log(imageData);

        return response;
      }
  
      

    }
     


    const handleSubmit = () =>{
    const postData={
      descripcion: desc,
      imagen:imageData,
      user_id: userData.id,
      nro_likes:0,
      nro_comentarios:0,
      isLiked:false,
      isFavorite:false,
      etiquetas:tags,
      user: userData,
      
    };
    console.log(postData);
    axios.post("https://medinajosedev.com/public/api/publicaciones", postData, config)
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
      aspect: [1, 1],
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
        {loading &&<Text style={[styles.title, {color:'black'}]}>Cargando imagen...</Text>}
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
          <ActionButton.Item buttonColor='#F77F00' title="Upload!" onPress={uploadFile}>
            <Icon name="md-create-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          {imageData&& <ActionButton.Item buttonColor='#F77F00' title="Publica!" onPress={handleSubmit}>
            <Icon name="md-create-outline" style={styles.actionButtonIcon} />

            </ActionButton.Item>}
        </ActionButton>
   </View>  )
}

export default PostScreen

