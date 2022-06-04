import { View, Text, Image, TouchableOpacity, ActivityIndicator,FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './postDetailScreenStyles'
import axios from 'axios'

const PostDetailScreen = ({route,navigation}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [likes, setLikes] = useState([])
    const [comments, setComments] = useState([])
    const [userData, setUserData] = useState([])
    const [selection, setSelection] = useState(false)
    const [listdata, setListdata] = useState([])
    let config ={
        headers:{
          "Accept":"application/json",
          "Authorization": 'Bearer '+ route.params.token
        }}
      useEffect(()=>{
        axios.get('https://medinajosedev.com/public/api/usuarios/'+route.params.user_id, config)
        .then(response => {setUserData(response.data)})
        .catch(e=>console.error(e))
        .finally(()=>setIsLoading(false))

        axios.get('https://medinajosedev.com/public/api/publicaciones/'+route.params.post_id, config)
        .then(response => {setData(response.data)})
        .catch(e=>console.error(e))
        .finally(()=>setIsLoading(false))
        
        axios.get('https://medinajosedev.com/public/api/comentarios/publicacion/'+route.params.post_id, config)
        .then(response => {setComments(response.data)
            setListdata(response.data)
        })
        .catch(e=>console.error(e))
        .finally(()=>setIsLoading(false))
        
        axios.get('https://medinajosedev.com/public/api/megusta/publicacion/'+route.params.post_id, config)
        .then(response => {setLikes(response.data)
        })
        .catch(e=>console.error(e))
        .finally(()=>setIsLoading(false))
        

      },[])
    const likeIcon = route.params.isLiked ? 'heart' : 'heart-outline'
    const likeIconColor = route.params.isLiked ? '#C00C86' : 'black'
    const favIcon = route.params.isFavorite ? 'star' : 'star-outline'
    const favIconColor = route.params.isFavorite? '#C00C86' : 'black'
    
    const ChoseRender =(item)=>{
        if (selection){
            return(
                RenderLikes(item)
            )
        }else if (!selection){
            return (RenderComments(item))
        }
    }

    const RenderLikes = (item) =>{
        return(
            <View style={{flexDirection:'row'}}>
                <Ionicons name='heart' color={'#C00C86'} size={20}/>
                <Text style={styles.commentName}>{item.user.name}</Text>
            </View>
        )
    }

    const RenderComments= (item)=>{
        return(
            <View style={styles.commentsList}>
                <Text style={styles.commentName}>{item.user.name}:</Text>
                <Text style={styles.commentDesc}>{item.descripcion}</Text>
            </View>
        )
    }
    return (
    <View style={styles.container}>
        {isLoading 
        ? <ActivityIndicator/> 
        :    
         <FlatList
            style={styles.FlatList}
            data={listdata}
            renderItem={({item})=>ChoseRender(item)}
            keyExtractor={(item)=>item.id}
            ListHeaderComponent={
                <>
                  <TouchableOpacity onPress={()=>navigation.navigate('header',{screen:'Profile', params:{user_id: userData.id}})}>
                <Text style={styles.title}> Publicacion de: {userData.name} </Text>
            </TouchableOpacity>
            <Image style={styles.postImg} source={{uri: `${data.imagen}`}}/>
            <Text style={styles.fecha}>Fecha de pubblicacion</Text>
            <Text style={styles.fecha}> {data.created_at} </Text>
            <Text style={styles.desc}>{data.descripcion}</Text>
            <View style={styles.interactionWrapper}>
                <TouchableOpacity >
                    <Ionicons size={30} color={likeIconColor} name={likeIcon} />
                    </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons size={30} color={favIconColor} name={favIcon} />
                    </TouchableOpacity>
            </View>
            <View style ={styles.selectContainer}>
                <TouchableOpacity 
                style={selection ? styles.select: styles.selectActive} 
                onPress={()=> {setSelection(false)
                    setListdata(comments)
                }}>
                    <Text>Comments {comments.length}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={!selection ? styles.select: styles.selectActive} 
                onPress={()=> {setSelection(true)
                setListdata(likes)}}>
                    <Text>Likes {likes.length}</Text>
                </TouchableOpacity>
            </View>
           
                </>
            }
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ></FlatList> 
          
            
        }
    </View>
  )
}

export default PostDetailScreen