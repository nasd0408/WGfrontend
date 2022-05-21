import { ActivityIndicator, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PostCard from '../../../components/feed/postCard/postCard'
import { Container } from './homeScreenStyles'
import Header from '../../../components/general/header/header'

const HomeScreen = ({ navigation }) => {

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
            />
          }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        }
        </Container>
    </>
  )
}

export default HomeScreen
