import {ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, SearchBar } from './searchScreenStyles'
import SearchItem from '../../components/search/searchItem/searchItem'
const SearchScreen = (item) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true)
let profilePic
switch (item.userImg) {
  case '1':
    profilePic=require('../../../assets/users/user-1.jpg')
    break;
  case '2':
    profilePic=require('../../../assets/users/user-2.jpg')
    break;
  case '3':
    profilePic=require('../../../assets/users/user-3.jpg')
    break;
  case '4':
    profilePic=require('../../../assets/users/user-4.jpg')
    break;
  case '5':
    profilePic=require('../../../assets/users/user-5.jpg')
    break;
  case '6':
    profilePic=require('../../../assets/users/user-6.jpg')
    break;
}
let postPic
switch (item.postImg) {
  case '1':
    postPic=require('../../../assets/posts/post-img-1.jpg')
    break;
  case '2':
    postPic=require('../../../assets/posts/post-img-2.jpg')
    break;
  case '3':
    postPic=require('../../../assets/posts/post-img-3.jpg')
    break;
  case '4':
    postPic=require('../../../assets/posts/post-img-4.jpg')
    break;
  case '5':
    postPic=require('../../../assets/posts/post-img-5.jpg')
    break;
  case '6':
    postPic=require('../../../assets/posts/post-img-1.jpg')
    break;
}
  
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
  
 
  useEffect(()=>{
    fetch('https://ecf3ba35-e391-4a86-90d8-60b4f15ac40d.mock.pstmn.io/posts')
      .then ((Response) => Response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        setLoading(false)
      })
      .catch((error)=>console.error(error))
  },[])
  
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
