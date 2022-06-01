import { ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import PostCard from '../../../components/feed/postCard/postCard'
import { Container } from './homeScreenStyles'
import { useFetch } from '../../../hooks/useFetch'

const HomeScreen = ({ navigation }) => {

  const {data, error, loading }= useFetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users')
  if (error){
    console.error(error);
  }

  return (
    <>
      
      <Container>
      {loading ?  <ActivityIndicator color={'white'} size={'large'} />  :
         <FlatList
            data={data.map(item=>item.posts).flat()}
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
        /> } 
        </Container>
    </>
  )
}

export default HomeScreen
