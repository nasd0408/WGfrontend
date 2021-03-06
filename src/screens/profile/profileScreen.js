import { ActivityIndicator, Image,  Text, View, FlatList, TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileCard from '../../components/profile/profileCard/profileCard'
import styles from './profileScreenStyles'
import i18n from "../../i18n/i18n"
import ProfileHeader from '../../components/profile/profileHeader/profileHeader'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
const ProfileScreen = ({route, navigation}) => {
  
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([])
  const [token, setToken] = useState(null)
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
      "Authorization": 'Bearer '+token
    }}
  useEffect(()=>{
    if (token === null){}
    else{
    axios.get('https://medinajosedev.com/public/api/usuarios/'+route.params.user_id, config)
    .then(response => {setUserData(response.data)})
    .catch(e=>console.error(e))
    .finally(()=>setLoading(false))
    
    axios.get('https://medinajosedev.com/public/api/publicaciones/usuario/'+route.params.user_id, config)
    .then(response => {setPosts(response.data)})
    .catch(e=>console.error(e))
    .finally(()=>setLoading(false))

    }
  },[token])


  return (
     <FlatList 
    ListHeaderComponent={ isLoading ? <ActivityIndicator/> : 
    <View style={styles.container} >
      <ProfileHeader self={route.params.user_id} navigation={navigation} userData={userData}/>      
      <Image source={{uri: `${userData.imagen}`}} style={styles.avatar}></Image>
      <View style={styles.body}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userBio}>{userData.bio}</Text>
          <View style={styles.stats}>
            
            <TouchableOpacity>
              <View style={styles.statItem}>

                <Text>{i18n.t("profile.followers")}</Text>
                <Text>{userData.followersNumber}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.statItem}>
                <Text>{i18n.t("profile.followers")}</Text>
              <Text>{userData.followingNumber}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.statItem}>
                <Text>{i18n.t("posts.posts")}</Text>
              <Text> {posts.length} </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
}
      data={posts}
      renderItem={({item}) => <ProfileCard item={item}
        navigation={navigation}
        token={token}
        />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator ={false}
      numColumns={2}
      columnWrapperStyle={{flex:1, justifyContent:'space-around'}}
      style={{backgroundColor:'#E6EAF4'}}
      />
 )
}

export default ProfileScreen
