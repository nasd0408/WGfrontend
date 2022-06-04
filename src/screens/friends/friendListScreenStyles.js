import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/Dimentions";

export default styles = StyleSheet.create({
    container:{
        width:windowWidth,
        backgroundColor:'red',
        alignContent:'center',
        
    },
    listcontainer:{
        backgroundColor:'white',
        width:'100%'
    },
    avatar:{
        height:60,
        width:60,
        borderRadius:30,
        marginHorizontal:10,
    },
    listItem:{
        flexDirection:'row',
        alignItems:'center',
        height:80,
        backgroundColor:'white',
        margin:10,
    },
    nombre:{
        fontSize:18,
        fontWeight:'bold',
        
    },


})