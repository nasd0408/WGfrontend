import React, { useState } from 'react'
import { Text, FlatList } from 'react-native'
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { 
  Card, 
  UserInfoText,
  UserInfo, 
  UserImg, 
  UserName, 
  PostTime, 
  PostText, 
  PostImg,
  Divider,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Opciones,
  ModalContainer,
  ModalItem,
  ListHeaderContainer,

} from '../feedStyles'  

const PostCard = ({item}) => {

const [modalLikeVisible, setModalLikeVisible] = useState(false)
const [modalCommentVisible, setModalCommentVisible] = useState(false)

const likeIcon = item.liked ? 'heart' : 'heart-outline'
const likeIconColor = item.liked ? '#C00C86' : 'black'
const favIcon = item.fav ? 'star' : 'star-outline'
const favIconColor = item.fav? '#C00C86' : 'black'
let likeText 
let commentText

const likeArray = item.likes
const likeCount = likeArray.length

const commentArray = item.comments
const commentCount= commentArray.length
console.log(likeCount);

if (likeCount == '1'){
    likeText = '1 Like'
}else if ( likeCount > 1){
    likeText = likeCount + ' Likes';
}else {
    likeText = 'like';
}
if (commentCount == '1'){
    commentText = '1 Comment'
}else if ( commentCount > 1){
    commentText = commentCount + ' Comments';
}else {
    commentText = 'Comment';
}
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
    <>
    <Modal
     isVisible={modalLikeVisible}
     onSwipeComplete={()=>setModalLikeVisible(false)}
     onBackButtonPress={()=>setModalLikeVisible(false)}
     swipeDirection={['up','down','right','left']}
     >
      <ModalContainer  >
        <FlatList
        ListHeaderComponent={<ListHeaderContainer>
          <Text style={{color:'white'}}>usuarios que les gusta esta publicacion</Text>
          </ListHeaderContainer>}       
        style={{width:'100%', padding:20,}}
        data={likeArray}
        renderItem={({item})=>(
        <ModalItem>
          <Text>{item.nombre}</Text>
        </ModalItem>)
          }
          keyExtractor={item => item.id}
        ></FlatList>
        
      </ModalContainer>
    </Modal>
    
    <Modal 
    isVisible={modalCommentVisible}
    onSwipeComplete={()=>setModalCommentVisible(false)}
    onBackButtonPress={()=>setModalCommentVisible(false)}
    swipeDirection={['up','down','right','left']}
    >
      <ModalContainer >
      <FlatList
        ListHeaderComponent={
          <ListHeaderContainer>
            <Text style={{color:'white'}}>Comentarios de esta publicacion</Text>
          </ListHeaderContainer>}   
        data={commentArray}
        renderItem={({item})=>(
        <ModalItem>
          <Text>{item.nombre}</Text>
          <Text>{item.comment}</Text>
        </ModalItem>)
          }
          keyExtractor={item => item.id}
        ></FlatList>
      </ModalContainer>
    </Modal>
    <Card>
      <UserInfo>
        <UserImg source={profilePic} ></UserImg>
        <UserInfoText>  
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText> 
        <Opciones onPress={()=>alert('Opciones de pubblicacion')}>
          <Ionicons name='ellipsis-vertical' size={25} />
        </Opciones> 
      </UserInfo>
      <PostText>
        {item.post}
      </PostText>
        {item.postImg != 'none' ?  <PostImg source={postPic} />: <Divider/>}
      <InteractionWrapper >
        <Interaction onPress={()=>setModalLikeVisible(true)} active ={item.liked}>
          <Ionicons name={likeIcon} size={25}  color={likeIconColor} />
          <InteractionText active={item.liked} >{likeText}</InteractionText>
        </Interaction>
        <Interaction onPress={()=>setModalCommentVisible(true)}>
          <Ionicons name='md-chatbubble-outline' size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction >
        <Interaction active={item.fav}>
          <Ionicons name={favIcon} size={25} color={favIconColor}/>
          <InteractionText active={item.fav}> Favorito </InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
    </>

  )
}

export default PostCard

