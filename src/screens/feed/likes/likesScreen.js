import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'

const LikeModalScreen = ({navigation}) => {
    const [modalVisible,setModalVisible]=useState(true)
  return (
<Modal 
animationType='slide'
transparent={true}
visible={modalVisible}
onRequestClose={()=>{navigation.goBack(), setModalVisible(false)}}
>
    <View>
        <Text>Modal!</Text>
    </View>
</Modal>
  )
}

export default LikeModalScreen