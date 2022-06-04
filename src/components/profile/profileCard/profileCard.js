import React from 'react'
import { Card, PostImg, PostText, PostTime, TouchableContainer, UserInfo, UserInfoContainer } from './profileSyles'


const ProfileCard = ({item, navigation, token}) => {
  return (
    <Card>
    <TouchableContainer 
            onPress={()=>navigation.navigate('header',{screen:'Post', params:{user_id: item.user_id, post_id: item.id, token:token}})}
            >

      <UserInfoContainer>
          <PostTime>{item.created_at}</PostTime>
      </UserInfoContainer>
      {item.imagen != 'none' ? <PostImg source={{uri: `${item.imagen}`}}/>: <PostText>{item.descripcion}</PostText>
  }
  </TouchableContainer>
  </Card>
  )
}
export default ProfileCard