import { StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../../utils/Dimentions"
const styles = StyleSheet.create({
    container:{
      width:windowWidth,
      backgroundColor:'#E6EAF4'
    },
    header:{  
      backgroundColor:'#5d08da',
      height:200,
      alignItems:'flex-end'
    },
    avatar:{
      width:130,
      height:130,
      borderRadius:63,
      borderWidth:4,
      borderColor:'#E6EAF4',
      alignSelf:'center',
      position:'absolute',
      marginTop:130,
    },
    body:{
      zIndex:-1, 
      backgroundColor:'#E6EAF4',
      paddingTop: 70,
    },
    userInfo:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    userName:{
      fontSize:30,
      fontFamily:'Roboto',
      letterSpacing:2,
      textShadowColor:'#5D08DA',
      textShadowRadius:5,
    },
    stats:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-around',
      margin:20,
    },
    statItem:{
      alignItems:'center',
      justifyContent:'center',
      borderColor:'#5D08DA',
      borderBottomWidth:2,
      padding:10,
      width:100,
    },
    buttonContainer:{
      margin:2,
      padding:2,
      borderBottomColor:'#E6EAF4',
      borderBottomWidth:2,
      width:100,
      alignItems:'center',
      justifyContent:'center',
    },
    buttonText:{
      color:'#E6EAF4',
    },
  })

  export default styles