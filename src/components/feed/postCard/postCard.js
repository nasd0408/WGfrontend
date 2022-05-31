import React, { useState } from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
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
  EstadisticaText,
  EstadisticaWrapper,

} from '../feedStyles'  

const PostCard = ({item, navigation}) => {
const postData = item.posts[0];
const [modalLikeVisible, setModalLikeVisible] = useState(false)
const [modalCommentVisible, setModalCommentVisible] = useState(false)

        
        
const likeIcon = postData.liked ? 'heart' : 'heart-outline'
const likeIconColor = postData.liked ? '#C00C86' : 'black'
const favIcon = postData.fav ? 'star' : 'star-outline'
const favIconColor = postData.fav? '#C00C86' : 'black'
let likeText 
let commentText

const likeArray = postData.likes
const likeCount = likeArray.length

const commentArray = postData.comments
const commentCount= commentArray.length
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
      <UserInfo
      onPress={()=>navigation.navigate('header',{screen:'Profile', params:{user_id: postData.userId}})}
      >
        <UserImg source={{uri: `${item.userImg}`}} ></UserImg>
        <UserInfoText>  
          <UserName>{item.userName}</UserName>
          <PostTime>{postData.createdAt}</PostTime>
        </UserInfoText> 
        <Opciones onPress={()=>alert('Opciones de pubblicacion')}>
          <Ionicons name='ellipsis-vertical' size={25} />
        </Opciones> 
      </UserInfo>
      <PostText>
        {postData.post}
      </PostText>
        {postData.postImg != 'none' ?  <PostImg source={{uri: `${postData.postImg}`}} />: <Divider/>}
        <EstadisticaWrapper>
          <TouchableOpacity onPress={()=>setModalLikeVisible(true)}>
            <EstadisticaText>{likeText}</EstadisticaText>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalCommentVisible(true)}>
            <EstadisticaText>{commentText}</EstadisticaText>
          </TouchableOpacity>
        </EstadisticaWrapper>
      <InteractionWrapper >
        <Interaction onPress={()=>{}} active ={postData.liked}>
          <Ionicons name={likeIcon} size={25}  color={likeIconColor} />
          <InteractionText active={postData.liked} >Me gusta</InteractionText>
        </Interaction>
        <Interaction onPress={()=>{}}>
          <Ionicons name='md-chatbubble-outline' size={25} />
          <InteractionText>Comentar</InteractionText>
        </Interaction >
        <Interaction active={postData.fav}>
          <Ionicons name={favIcon} size={25} color={favIconColor}/>
          <InteractionText active={postData.fav}> Favorito </InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
    </>

  )
}

export default PostCard

