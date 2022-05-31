import {ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, SearchBar } from './searchScreenStyles'
import SearchItem from '../../components/search/searchItem/searchItem'
import {useFetch} from '../../hooks/useFetch'
const SearchScreen = (item) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item)=>{
        const itemData = item.userName ? item.userName.toUpperCase() : ''.toUpperCase();
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
  
  const {data,isLoading, error }= useFetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users')
const masterDataSource = data.map((item)=> item.posts)
  return (
    <Container>

    {isLoading ? <ActivityIndicator color={'white'} size={'large'} /> : 
      <FlatList 
      ListHeaderComponent={     
         <SearchBar
        placeholder='Busqueda por nombre de usuario'
        onChangeText={(text) =>{searchFilterFunction(text)}}
        />}
      data={filteredDataSource}
      renderItem={({item}) => <SearchItem item={item}/>}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator ={false}
      numColumns={2}
      columnWrapperStyle={{flex:1, justifyContent:'space-around'}}
      />

    }
    </Container> 
    )
}

export default SearchScreen
