import { View, Text, Image, TouchableOpacity, ActivityIndicator,ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './postDetailScreenStyles'

const PostDetailScreen = ({route,navigation}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [likes, setLikes] = useState([])
    const [comments, setComments] = useState([])
    const [userData, setUserData] = useState([])
    const [select, setSelect] = useState('comments')
    const [selectColor, setSelectColor] = useState(true)
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
    const likeIcon = data.liked ? 'heart' : 'heart-outline'
    const likeIconColor = data.liked ? '#C00C86' : 'black'
    const favIcon = data.fav ? 'star' : 'star-outline'
    const favIconColor = data.fav? '#C00C86' : 'black'

    function ShowSelect () {
            if (select === 'likes'){
                setSelectColor(true)
                return (
                    likes.map(like=><Text>{like}</Text>)
                )
            }else if (select=== 'comments'){
                setSelectColor(false)

                return (
                    comments.map(comment=><Text>{comment}</Text>)
                )
            }
        
    }
    return (
    <ScrollView contentContainerStyle={styles.container}>
        {isLoading 
        ? <ActivityIndicator/> 
        : <>      
            <TouchableOpacity onPress={()=>navigation.navigate('header',{screen:'Profile', params:{user_id: userData.id}})}>
                <Text style={styles.title}> Publicacion de: {userData.userName} </Text>
            </TouchableOpacity>
            <Image style={styles.postImg} source={{uri: `${data.postImg}`}}/>
            <Text style={styles.fecha}>Fecha de pubblicacion</Text>
            <Text style={styles.fecha}> {data.createdAt} </Text>
            <Text style={styles.desc}>{data.desc}</Text>
            <View style={styles.interactionWrapper}>
                <TouchableOpacity >
                    <Ionicons size={30} color={likeIconColor} name={likeIcon} />
                    </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons size={30} color={favIconColor} name={favIcon} />
                    </TouchableOpacity>
            </View>
            <View style ={styles.selectContainer}>
                <TouchableOpacity style={selectColor ? styles.select: styles.selectActive} onPress={()=> setSelect('comments')}><Text>Comments {comments.length}</Text></TouchableOpacity>
                <TouchableOpacity style={!selectColor ? styles.select: styles.selectActive} onPress={()=> setSelect('likes')}><Text>Likes {likes.length}</Text></TouchableOpacity>
            </View>
            <ShowSelect/>
        </>}
    </ScrollView>
  )
}

export default PostDetailScreen