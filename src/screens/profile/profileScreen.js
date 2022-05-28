import { ActivityIndicator, Image,  Text, View, FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileCard from '../../components/profile/profileCard/profileCard'
import styles from './profileScreenStyles'
const ProfileScreen = ({navigation, route}) => {
const payload = route.params;
console.log(payload);
  const userInfo = {
    userName: 'Nico',
    profilePic: require('../../../assets/users/user-8.jpg'),
    bio: 'I like gamer world',
    followingNumber: '20',
    followersNumber: '100',
    posts:'10'
  }
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
 
  useEffect(()=>{
    fetch('https://ecf3ba35-e391-4a86-90d8-60b4f15ac40d.mock.pstmn.io/posts')
      .then ((Response) => Response.json())
      .then((responseJson) => {
        setPosts(responseJson);
        setLoading(false)
      })
      .catch((error)=>console.error(error))
    },[])
    
    return (
    <FlatList 
    ListHeaderComponent={ isLoading ? <ActivityIndicator/> : 
    <View style={styles.container} >
      <View style= {styles.header}>
      </View>
      <Image source={userInfo.profilePic} style={styles.avatar}></Image>
      <View style={styles.body}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{payload.user_name}</Text>
          <Text style={styles.userBio}>{userInfo.bio}</Text>
          <View style={styles.stats}>
            <TouchableOpacity>
              <View style={styles.statItem}>

                <Text>Followers</Text>
                <Text>{userInfo.followersNumber}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.statItem}>
                <Text>Following</Text>
              <Text>{userInfo.followingNumber}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.statItem}>
                <Text>Posts</Text>
              <Text>{userInfo.posts}</Text>
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
