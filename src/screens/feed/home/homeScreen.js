import { ActivityIndicator, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PostCard from '../../../components/feed/postCard/postCard'
import { Container } from './homeScreenStyles'
import Header from '../../../components/general/header/header'

const HomeScreen = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/posts')
    .then((Response) => Response.json())
      .then((responseJson) => {
        setData(responseJson);
        setLoading(false)
        console.log(data);
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      
      <Container>
      {isLoading ?  <ActivityIndicator color={'white'} size={'large'} />  :
          <FlatList
            data={data}
           renderItem={({ item }) => 
            <PostCard 
            item={item} 
            handleLike={()=>{navigation.navigate('LikeModalScreen')}} 
            handleComment={()=>{navigation.navigate('CommentModalScreen')}} 
            navigation={navigation}
            />
          }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />}
        </Container>
    </>
  )
}

export default HomeScreen
