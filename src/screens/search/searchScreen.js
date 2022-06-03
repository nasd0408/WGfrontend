import {ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, SearchBar } from './searchScreenStyles'
import SearchItem from '../../components/search/searchItem/searchItem'
import {useFetch} from '../../hooks/useFetch'


const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item)=>{
        const itemData = item.desc ? item.desc.toUpperCase() : ''.toUpperCase();
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
  useEffect(()=>{
    fetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users')
      .then ((Response) => Response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson.map(item=>item.posts).flat());
        setMasterDataSource(responseJson.map(item=>item.posts).flat())
      })
      .catch((error)=>console.error(error))
      .finally(()=>setLoading(false))
  },[])

  
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
      renderItem={({item}) => <SearchItem navigation={navigation} item={item}/>}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator ={false}
      numColumns={2}
      columnWrapperStyle={{flex:1, justifyContent:'space-around'}}
      />

    }
    </Container> 
    )
}

export default SearchScreen
