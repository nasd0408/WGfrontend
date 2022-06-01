import { View, Text } from 'react-native'
import React from 'react'
import { Card, PostImg, PostText, PostTime, TouchableContainer, UserInfo, UserInfoContainer } from './profileSyles'


const ProfileCard = ({item, navigation}) => {
  return (
    <Card>
    <TouchableContainer 
            onPress={()=>navigation.navigate('header',{screen:'Post', params:{user_id: item.userId, post_id: item.id}})}
            >

      <UserInfoContainer>
          <PostTime>{item.createdAt}</PostTime>
      </UserInfoContainer>
      {item.postImg != 'none' ? <PostImg source={{uri: `${item.postImg}`}}/>: <PostText>{item.desc}</PostText>
  }
  </TouchableContainer>
  </Card>
  )
}
export default ProfileCard