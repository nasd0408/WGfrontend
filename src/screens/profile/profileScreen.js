import { ActivityIndicator, Image,  Text, View, FlatList, TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileCard from '../../components/profile/profileCard/profileCard'
import styles from './profileScreenStyles'
import ProfileHeader from '../../components/profile/profileHeader/profileHeader'
const ProfileScreen = ({route, navigation}) => {
  const userInfo = {
    "createdAt": "2022-05-30T05:12:01.134Z",
    "userName": "Nicolás Sira",
    "userImg": "http://loremflickr.com/640/480/transport",
    "direccion": "79542 Wuckert Park",
    "telefono": "(212) 499-9802",
    "biografia": "If we reboot the port, we can get to the XSS port through the solid state SMTP program!",
    "followersNumber": 51253,
    "followingNumber": 89590,
    "id": "10000",
    "posts": [{
      "createdAt": "2022-05-30T03:54:03.948Z",
      "desc": "Rem ipsam omnis ipsum vitae.",
      "postImg": "http://loremflickr.com/640/480/nightlife",
      "likes": [
       "o%T5vP[=Cd",
       "#SwsQ6IlJG",
       22468,
       "PUECx-]7Oi",
       "JOqXoDHwUX",
       "i<*rXa=|O2",
       8844,
       "'Zk;wuI]y@",
       "&#yX0HNFpD",
       34371
      ],
      "comments": [
       "c}W8?T&n0-",
       36784,
       "ia;o9&LV\"N",
       "}xoRNJ^BTw",
       "v+Bn}Gd&fv",
       87862,
       66063,
       "Gy\"9RHj0SO",
       "Naw27\"jbvF",
       "0V%<vLly;E"
      ],
      "liked": true,
      "fav": true,
      "id": "1",
      "userId": "1"
     },
     {
      "createdAt": "2022-05-29T19:15:53.678Z",
      "desc": "Omnis odio assumenda sed tempora nisi consequuntur quasi.",
      "postImg": "http://loremflickr.com/640/480/technics",
      "likes": [
       99830,
       "jV1BFku=xI",
       "z$qy0llf;X",
       "=r\\{s.m|cM",
       82728,
       61165,
       "M;i<uM%Y%y",
       "`YC7PEDiF*",
       "U$W`^U\"B;#",
       "#[c1?kfDBC"
      ],
      "comments": [
       "61Dut,+u5z",
       "63<K0&/eRB",
       "]cCHN|U&oO",
       22239,
       85333,
       28809,
       "I3$+I8eX\"w",
       "<*W+#-T`8a",
       "Vx#FY$LW,E",
       72148
      ],
      "liked": true,
      "fav": false,
      "id": "2",
      "userId": "1"
     }],
   }
   
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([])
 
  function getPost(id) {
    if (id === "Nico") {
      setUserData(userInfo);
      setPosts(userInfo.posts);
      setLoading(false);
    }
    else {
  return (    fetch('https://62918ba8cd0c91932b646bdc.mockapi.io/api/v1/users/'+id)
  .then ((Response) => Response.json())
  .then((responseJson) => {
    setUserData(responseJson);
    setLoading(false)
    setPosts(responseJson.posts);
  })
  .catch((error)=>console.error(error))
)}}


  useEffect(()=>{

    getPost(route.params.user_id)
  },[])
  return (
     <FlatList 
    ListHeaderComponent={ isLoading ? <ActivityIndicator/> : 
    <View style={styles.container} >
      <ProfileHeader self={route.params.user_id} navigation={navigation} userData={userData}/>      
      <Image source={{uri: `${userData.userImg}`}} style={styles.avatar}></Image>
      <View style={styles.body}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.userName}</Text>
          <Text style={styles.userBio}>{userData.biografia}</Text>
          <View style={styles.stats}>
            <TouchableOpacity>
              <View style={styles.statItem}>

                <Text>Followers</Text>
                <Text>{userData.followersNumber}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.statItem}>
                <Text>Following</Text>
              <Text>{userData.followingNumber}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.statItem}>
                <Text>Posts</Text>
              <Text> {posts.length} </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
}
      data={posts}
      renderItem={({item}) => <ProfileCard item={item}/>}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator ={false}
      numColumns={2}
      columnWrapperStyle={{flex:1, justifyContent:'space-around'}}
      style={{backgroundColor:'#E6EAF4'}}
      />
 )
}

export default ProfileScreen
