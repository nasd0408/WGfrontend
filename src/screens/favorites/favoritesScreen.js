import SearchItem from '../../components/search/searchItem/searchItem'
import { ActivityIndicator, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from './favoritesScreenStyles'



const FavoritesScreen = ({navigation}) => {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

    
  useEffect(()=>{
    fetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users')
      .then ((Response) => Response.json())
      .then((responseJson) => {
        setData(responseJson.map(item=>item.posts).flat())
      })
      .catch((error)=>console.error(error))
      .finally(()=>setLoading(false))
  },[])

  

  return (
    <Container>
    {isLoading ?  <ActivityIndicator color={'white'} size={'large'} />  :
        <FlatList 
       
        data={data}
        renderItem={({item}) => <SearchItem item={item}
          navigation={navigation}
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

