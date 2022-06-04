import SearchItem from '../../components/search/searchItem/searchItem'
import { ActivityIndicator, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from './favoritesScreenStyles'
import * as SecureStore from 'expo-secure-store'
import axios from 'axios'



const FavoritesScreen = ({navigation}) => {

  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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
        axios.get('https://medinajosedev.com/public/api/publicaciones', config)
        .then(response => {setData(response.data)})
        .catch(e=>console.error(e))
        .finally(()=>setLoading(false))
      }
    },[token])
    

  

  return (
    <Container>
    {isLoading ?  <ActivityIndicator color={'white'} size={'large'} />  :
        <FlatList 
       
        data={data}
        renderItem={({item}) => <SearchItem item={item}
          navigation={navigation}
          token={token}
        />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator ={false}
        numColumns={2}
        columnWrapperStyle={{flex:1, justifyContent:'space-around'}}
        />
      }
      </Container>
  
  )
}

export default FavoritesScreen

