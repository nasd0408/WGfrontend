import { ActivityIndicator, FlatList, Button } from 'react-native'
import React ,{useState, useEffect}from 'react'
import PostCard from '../../../components/feed/postCard/postCard'
import { Container } from './homeScreenStyles'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'


const HomeScreen = ({ navigation }) => {
  
  
  const [token, setToken] = useState(null) 
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
     setToken(result);
    } else {
      alert('No values stored under that key.');
    }
  }
  useEffect(()=>{
    getValueFor('userToken')
  },[])
    let config ={
    headers:{
      "Accept":"application/json",
      "Authorization": 'Bearer '+token,
    }}
  useEffect(() => {
    if (token===null){}
    else {
    axios.get('https://medinajosedev.com/public/api/publicaciones', config)
    .then(response => {setData(response.data)})
    .catch(e=>console.error(e))
    .finally(()=>setLoading(false))}
  }, [token])
  return (
    <>
      
      <Container>
      {loading ?  <ActivityIndicator color={'white'} size={'large'} />  :
         <FlatList
            data={data}
           renderItem={({ item }) => 
            <PostCard 
            token={token}
            item={item} 
            handleLike={()=>{navigation.navigate('LikeModalScreen')}} 
            handleComment={()=>{navigation.navigate('CommentModalScreen')}} 
            navigation={navigation}
            />
          }
            keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
        /> } 
        </Container>
    </>
  )
}

export default HomeScreen
