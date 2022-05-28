import SearchItem from '../../components/search/searchItem/searchItem'
import { ActivityIndicator, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, TouchableContainer } from './favoritesScreenStyles'



const FavoritesScreen = (item) => {
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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
    
  useEffect(() => {
    fetch('https://ecf3ba35-e391-4a86-90d8-60b4f15ac40d.mock.pstmn.io/posts')
      .then((Response) => Response.json())
      .then((responseJson) => {
        setData(responseJson);
        setLoading(false)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <Container>
    {isLoading ?  <ActivityIndicator color={'white'} size={'large'} />  :
        <FlatList 
       
        data={data}
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

export default FavoritesScreen

