import React,{useEffect,useState} from 'react'
import { 
  Card, 
  PostImg, 
  PostText, 
  PostTime, 
  TouchableContainer, 
  UserInfo, 
  UserInfoContainer,
} from './searchStyles'

import axios from 'axios';
import { ActivityIndicator } from 'react-native';



const SearchItem = ({item, navigation,token}) => {
  let config ={
    headers:{
      "Accept":"application/json",
      "Authorization": 'Bearer '+ token
    }}

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true) 

  useEffect(()=>{

    axios.get('https://medinajosedev.com/public/api/usuarios/'+item.user_id, config)
    .then(response => {setData(response.data)})
    .catch(e=>console.error(e))
    .finally(()=>setLoading(false))

  },[]);
  return (
    <Card>
      {loading? <ActivityIndicator/>:
      <TouchableContainer     
        onPress={()=>navigation.navigate('header',{screen:'Post', params:{user_id: item.user_id, post_id: item.id, token:token}})}

      >

        <UserInfoContainer>
            <UserInfo>{data.name}</UserInfo>
            <PostTime>{item.created_at}</PostTime>
        </UserInfoContainer>
        {item.imagen != 'none' ? <PostImg source={{uri: `${item.imagen}`}}/>: <PostText>{item.descripcion}</PostText>}
        <PostText>{item.descripcion.substring(0,35).concat('...')}</PostText>
      </TouchableContainer>}
    </Card>
  )
}

export default SearchItem