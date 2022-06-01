import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'

const PostDetailScreen = ({route}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [likes, setLikes] = useState([])
    const [comments, setComments] = useState([])
    const [userData, setUserData] = useState([])
    const [select, setSelect] = useState('comments')
    useEffect(()=>{
        fetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users/' + route.params.user_id + '/post/' + route.params.post_id)
        .then(response => response.json())
        .then((responseJson)=>{
            setData(responseJson)
            setLikes(responseJson.likes)
            setComments(responseJson.comments)
        })
        .catch(e=>console.error(e))
        .finally(()=>setIsLoading(false))
        fetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users/' + route.params.user_id)
        .then(response=> response.json())
        .then(responseJson=> setUserData(responseJson))
        .catch(e=>console.error(e))
        .finally(()=>setIsLoading(false))
        
    },[])

    function ShowSelect () {
            if (select === 'likes'){
                return (
                    likes.map(like=><Text>{like}</Text>)
                )
            }else if (select=== 'comments'){
                return (
                    comments.map(comment=><Text>{comment}</Text>)
                )
            }
        
    }
    return (
    <View>
        {isLoading 
        ? <ActivityIndicator/> 
        : <>      
            <Text> Publicacion de: {userData.userName} </Text>
            <Image style={{width:'100%', height:200}} source={{uri: `${data.postImg}`}}/>
            <Text>{data.desc}</Text>
            <Text>Fecha de pubblicacion</Text>
            <Text> {data.createdAt} </Text>
            <TouchableOpacity onPress={()=> setSelect('likes')}><Text>Likes</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> setSelect('comments')}><Text>Comments</Text></TouchableOpacity>
            <ShowSelect/>
        </>}
    </View>
  )
}

export default PostDetailScreen