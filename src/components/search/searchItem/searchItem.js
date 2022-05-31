import React from 'react'
import { 
  Card, 
  PostImg, 
  PostText, 
  PostTime, 
  TouchableContainer, 
  UserInfo, 
  UserInfoContainer,
  Divider 
} from './searchStyles'



const SearchItem = ({item}) => {
    
  return (
    <Card>
      <TouchableContainer>

        <UserInfoContainer>
            <UserInfo>{item.userName}</UserInfo>
            <PostTime>{item.postTime}</PostTime>
        </UserInfoContainer>
        {item.postImg != 'none' ? <PostImg source={{uri: `${item.postImg}`}}/>: <PostText>{item.post}</PostText>
    }
    </TouchableContainer>
    </Card>
  )
}

export default SearchItem