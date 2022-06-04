import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import axios from 'axios'
import styles from './friendListScreenStyles'



const FriendListScreen = ({route}) => {
  const [amigos, setAmigos] = useState([])
  const [pendientes, setPendientes] = useState([])
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setToken(result);
    } else {
      alert('No values stored under that key.');
    }
  }
  useEffect(() => {
    getValueFor('userToken')
  }, [])

  let config = {
    headers: {
      "Accept": "application/json",
      "Authorization": 'Bearer ' + token
    }
  }
  useEffect(() => {
    if (token === null) { }
    else {
      axios.get('https://medinajosedev.com/public/api/amigos', config)
        .then(response => {
          setAmigos(response.data.amigos)
        })
        .catch(e => console.error(e))
        .finally(() => setLoading(false))

      axios.get('https://medinajosedev.com/public/api/amigos/pendientes', config)
        .then(response => { setPendientes(response.data.amigos) })
        .catch(e => console.error(e))
        .finally(() => setLoading(false))

    }
  }, [token])

  const renderItem= (item)=>{
    return(
      <View style={styles.listItem}>
        <Image style={styles.avatar} source={{uri: `${item.imagen}`}}/>
        <Text style={styles.nombre}>{item.name}</Text>
      </View>
    )
  }
  const handleAccept= (id)=>{

    const postData ={
      estado: 'A',
      user_id:route.params.user_id
    }
    
      axios.post('https://medinajosedev.com/public/api/amigos/aceptar/'+id,postData,config)
      .then(response=>console.log(response.status))
      .catch(e=>console.error(e))
    }
  const renderItemSolicitud= (item)=>{
    return(
      <View style={styles.listItem}>
        <Image style={styles.avatar} source={{uri: `${item.imagen}`}}/>
        <Text style={styles.nombre}>{item.name}</Text>
        <TouchableOpacity onPress={()=>handleAccept(item.id)}><Text>Aceptar</Text></TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.listcontainer}>

        <FlatList
          ListHeaderComponent={()=>{return(
          <View styles={styles.listcontainer}>
          <Text style={styles.listtitle}>Solicitudes de amistad!</Text>
          <FlatList
            data={pendientes}
            renderItem={({ item }) => renderItemSolicitud(item)}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text>No tienes solicitudes de amistad</Text>}
          />
          <View style={styles.separator}/>
          <Text style={styles.listtitle}>Amigos!</Text>
        </View>)}}
          data={amigos}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default FriendListScreen