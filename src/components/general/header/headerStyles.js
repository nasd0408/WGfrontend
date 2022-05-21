import { windowWidth } from "../../../utils/Dimentions"
import { StyleSheet, StatusBar } from "react-native"
const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#5D08DA',
      width:windowWidth,
      paddingHorizontal: 15,
      height:50,
      marginTop:StatusBar.currentHeight,
    },
    icon:{
      color:'#E6EAF4',
      paddingHorizontal: 10,
    },
    headerText:{
      color:'#E6EAF4',
      flex:4,
      fontSize:26,
      fontWeight:'bold',
    }
  })
  export default styles