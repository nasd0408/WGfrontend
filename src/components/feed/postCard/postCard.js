import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { TouchableOpacity,ActivityIndicator,View } from 'react-native'
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
  EstadisticaText,
  EstadisticaWrapper,

} from '../feedStyles'  

const PostCard = ({item, navigation, token}) => {

  let config ={
    headers:{
      "Accept":"application/json",
      "Authorization": 'Bearer '+ token
    }}
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)      
    const postData = item;
  useEffect(()=>{
    axios.get('https://medinajosedev.com/public/api/usuarios/'+item.user_id, config)
    .then(response => {setData(response.data)})
    .catch(e=>console.error(e))
    .finally(()=>setLoading(false))

  },[])
            
    const likeIcon = postData.isLiked ? 'heart' : 'heart-outline'
    const likeIconColor = postData.isLiked ? '#C00C86' : 'black'
    const favIcon = postData.isFavorite ? 'star' : 'star-outline'
    const favIconColor = postData.isFavorite? '#C00C86' : 'black'
    let likeText 
    let commentText


    function truncateString(str, num) {
      if (str.length <= num) {
        return str
      }
      return str.slice(0, num) + '...'
    };

    if (postData.nro_likes == '1'){
        likeText = '1 Like'
    }else if ( postData.nro_likes > 1){
        likeText = postData.nro_likes + ' Likes';
    }else {
        likeText = 'like';
    }
    if (postData.nro_comentarios == '1'){
        commentText = '1 Comment'
    }else if ( postData.nro_comentarios > 1){
        commentText = postData.nro_comentarios + ' Comments';
    }else {
        commentText = 'Comment';
    }
    return (
    
    <Card>
      {loading ? <View style={{height:300, width:300, justifyContent:'center'}}><ActivityIndicator size={'large'} color={'#5D08DA'}/></View> :<>
      
      <UserInfo
      onPress={()=>navigation.navigate('header',{screen:'Profile', params:{user_id: postData.userId}})}
      >
        <UserImg source={{uri: `${data.imagen}`}} ></UserImg> 
        <UserInfoText>  
          <UserName>{data.name}</UserName>
          <PostTime>{postData.created_at}</PostTime>
        </UserInfoText> 
        <Opciones onPress={()=>alert('Opciones de pubblicacion')}>
          <Ionicons name='ellipsis-vertical' size={25} />
        </Opciones> 
      </UserInfo>
        
      <TouchableOpacity 
            onPress={()=>navigation.navigate('header',{screen:'Post', params:{user_id: postData.userId, post_id: postData.id}})}

      >
      <PostText>
        {truncateString(postData.descripcion,100)}
      </PostText>
        {postData.imagen != 'none' ?  <PostImg source={{uri: `${postData.imagen}`}} />: <Divider/>}
      </TouchableOpacity>
        <EstadisticaWrapper>
            <EstadisticaText>{likeText}</EstadisticaText>
            <EstadisticaText>{commentText}</EstadisticaText>
        </EstadisticaWrapper>
      <InteractionWrapper >
        <Interaction onPress={()=>{}} active ={postData.isLiked}>
          <Ionicons name={likeIcon} size={25}  color={likeIconColor} />
          <InteractionText active={postData.isLiked} >Me gusta</InteractionText>
        </Interaction>
        <Interaction onPress={()=>{}}>
          <Ionicons name='md-chatbubble-outline' size={25} />
          <InteractionText>Comentar</InteractionText>
        </Interaction >
        <Interaction active={postData.isFavorite}>
          <Ionicons name={favIcon} size={25} color={favIconColor}/>
          <InteractionText active={postData.isFavorite}> Favorito </InteractionText>
        </Interaction>
      </InteractionWrapper>
</> 
}
    </Card>
  

  )
}

export default PostCard

