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
    const [isLiked, setIsLiked] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const postData = item;
  useEffect(()=>{
    axios.get('https://medinajosedev.com/public/api/usuarios/'+item.user_id, config)
    .then(response => {setData(response.data)})
    .catch(e=>console.error(e))
    .finally(()=>setLoading(false))
    axios.get('https://medinajosedev.com/public/api/megusta/usuario/publicacion/'+item.id,config)
    .then(response => setIsLiked(response.data))

    .catch(e=>console.error(e))

    axios.get('https://medinajosedev.com/public/api/favoritos/usuario/publicacion/'+item.id,config)
    .then(response => setIsFavorite(response.data))

    .catch(e=>console.error(e))

  },[])
            
    
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
        likeText = '0 likes';
    }
    if (postData.nro_comentarios == '1'){
        commentText = '1 Comment'
    }else if ( postData.nro_comentarios > 1){
        commentText = postData.nro_comentarios + ' Comments';
    }else {
        commentText = '0 Comments';
    }
    return (
    
    <Card>
      {loading 
      ?<View style={{height:300, width:300, justifyContent:'center'}}>
         <ActivityIndicator size={'large'} color={'#5D08DA'}/>
      </View> 
      :<>
      <UserInfo
      onPress={()=>navigation.navigate('header',{screen:'Profile', params:{user_id: postData.user_id, token:token}})}
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
            onPress={()=>
              navigation.navigate('header',
              {screen:'Post', 
                params:{user_id: 
                  postData.user_id,
                  post_id: postData.id, 
                  token:token,
                  isLiked: isLiked,
                  isFavorite: isFavorite,
                }})}

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
        <Interaction onPress={()=>{}} active ={isLiked}>
          <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={25}  color={isLiked ? '#C00C86' : 'black'} />
          <InteractionText active={isLiked} >Me gusta</InteractionText>
        </Interaction>
        <Interaction onPress={()=>{}}>
          <Ionicons name='md-chatbubble-outline' size={25} />
          <InteractionText>Comentar</InteractionText>
        </Interaction >
        <Interaction active={isFavorite}>
          <Ionicons name={isFavorite ? 'star' : 'star-outline'} size={25} color={isFavorite? '#C00C86' : 'black'}/>
          <InteractionText active={isFavorite}> Favorito </InteractionText>
        </Interaction>
      </InteractionWrapper>
</> 
}
    </Card>
  

  )
}

export default PostCard

