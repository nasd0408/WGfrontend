import React from 'react'
import { TouchableOpacity,ActivityIndicator } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useFetch } from '../../../hooks/useFetch'
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
  EstadisticaText,
  EstadisticaWrapper,

} from '../feedStyles'  

const PostCard = ({item, navigation}) => {
const postData = item;

const {data, error, loading} = useFetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users/'+item.userId)
if(error){
  console.log(error);
}
        
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

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

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
    
    <Card>
      {loading ? <ActivityIndicator/> :<>
      <UserInfo
      onPress={()=>navigation.navigate('header',{screen:'Profile', params:{user_id: postData.userId}})}
      >
        <UserImg source={{uri: `${data.userImg}`}} ></UserImg>
        <UserInfoText>  
          <UserName>{data.userName}</UserName>
          <PostTime>{postData.createdAt}</PostTime>
        </UserInfoText> 
        <Opciones onPress={()=>alert('Opciones de pubblicacion')}>
          <Ionicons name='ellipsis-vertical' size={25} />
        </Opciones> 
      </UserInfo>
      <TouchableOpacity 
            onPress={()=>navigation.navigate('header',{screen:'Post', params:{user_id: postData.userId, post_id: postData.id}})}

      >
      <PostText>
        {truncateString(postData.desc,100)}
      </PostText>
        {postData.postImg != 'none' ?  <PostImg source={{uri: `${postData.postImg}`}} />: <Divider/>}
      </TouchableOpacity>
        <EstadisticaWrapper>
            <EstadisticaText>{likeText}</EstadisticaText>
            <EstadisticaText>{commentText}</EstadisticaText>
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
</> 
}
    </Card>
  

  )
}

export default PostCard

