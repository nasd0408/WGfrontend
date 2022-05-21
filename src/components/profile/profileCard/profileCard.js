import { View, Text } from 'react-native'
import React from 'react'
import { Card, PostImg, PostText, PostTime, TouchableContainer, UserInfo, UserInfoContainer } from './profileSyles'


const ProfileCard = ({item}) => {
    let profilePic
switch (item.userImg) {
  case '1':
    profilePic=require('../../../../assets/users/user-1.jpg')
    break;
  case '2':
    profilePic=require('../../../../assets/users/user-2.jpg')
    break;
  case '3':
    profilePic=require('../../../../assets/users/user-3.jpg')
    break;
  case '4':
    profilePic=require('../../../../assets/users/user-4.jpg')
    break;
  case '5':
    profilePic=require('../../../../assets/users/user-5.jpg')
    break;
  case '6':
    profilePic=require('../../../../assets/users/user-6.jpg')
    break;
}
let postPic
switch (item.postImg) {
  case '1':
    postPic=require('../../../../assets/posts/post-img-1.jpg')
    break;
  case '2':
    postPic=require('../../../../assets/posts/post-img-2.jpg')
    break;
  case '3':
    postPic=require('../../../../assets/posts/post-img-3.jpg')
    break;
  case '4':
    postPic=require('../../../../assets/posts/post-img-4.jpg')
    break;
  case '5':
    postPic=require('../../../../assets/posts/post-img-5.jpg')
    break;
  case '6':
    postPic=require('../../../../assets/posts/post-img-1.jpg')
    break;
}
  return (
    <Card>
    <TouchableContainer>

      <UserInfoContainer>
          <PostTime>{item.postTime}</PostTime>
      </UserInfoContainer>
      {item.postImg != 'none' ? <PostImg source={postPic}/>: <PostText>{item.post}</PostText>
  }
  </TouchableContainer>
  </Card>
  )
}
export default ProfileCard