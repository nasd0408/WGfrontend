import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { 
  Card, 
  PostImg, 
  PostText, 
  PostTime, 
  TouchableContainer, 
  UserInfo, 
  UserInfoContainer,
} from './searchStyles'



const SearchItem = ({item, navigation}) => {

  const {data, error , loading} = useFetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users/' + item.userId )    
  return (
    <Card>
      <TouchableContainer     
        onPress={()=>navigation.navigate('header',{screen:'Post', params:{user_id: item.userId, post_id: item.id}})}

      >

        <UserInfoContainer>
            <UserInfo>{data.userName}</UserInfo>
            <PostTime>{item.createdAt}</PostTime>
        </UserInfoContainer>
        {item.postImg != 'none' ? <PostImg source={{uri: `${item.postImg}`}}/>: <PostText>{item.desc}</PostText>}
        <PostText>{item.desc.substring(0,35).concat('...')}</PostText>
      </TouchableContainer>
    </Card>
  )
}

export default SearchItem