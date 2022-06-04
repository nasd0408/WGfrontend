import {ActivityIndicator, FlatList,View,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, SearchBar } from './searchScreenStyles'
import SearchItem from '../../components/search/searchItem/searchItem'
import * as SecureStore from 'expo-secure-store'
import axios from 'axios'

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [token, setToken] = useState(null) 

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item)=>{
        const itemData = item.descripcion ? item.descripcion.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      });
      setFilteredDataSource(newData)
      setSearch(text)
    }else {
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }
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

    useEffect(() => {
      if (token===null){}
      else {
      axios.get('https://medinajosedev.com/public/api/publicaciones', config)
      .then(response => {setMasterDataSource(response.data); setFilteredDataSource(response.data)})
      .catch(e=>console.error(e))
      .finally(()=>setLoading(false))}
    }, [token])
  
  
  return (
    <Container>

    {isLoading ? <ActivityIndicator color={'white'} size={'large'} /> : 
      <FlatList 
      ListHeaderComponent={     
         <SearchBar
        placeholder='Busqueda por palabras en la publicacion'
        onChangeText={(text) =>{searchFilterFunction(text)}}
        value={search}
        />}
      data={filteredDataSource}
      renderItem={({item}) => <SearchItem navigation={navigation} item={item}  token={token}
      />}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator ={false}
      numColumns={2}
      columnWrapperStyle={{flex:1, justifyContent:'space-around'}}
      ListEmptyComponent={
        <View style={{width:'100%', backgroundColor:'#E6EAF4', padding:10, height:300, justifyContent:'center', borderRadius:20}}>

          <Text style={{fontSize:18, width:'100%'}}>Ups, no hay publicaciones para mostrar</Text>
        </View>
      }
      />

    }
    </Container> 
    )
}

export default SearchScreen
