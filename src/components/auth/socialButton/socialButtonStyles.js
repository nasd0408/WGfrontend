import { windowHeight, windowWidth } from "../../../utils/Dimentions"
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    buttonContainer : {
        flexDirection:'row',
        marginTop:10,
        width :'100%',
        height: windowHeight /15 ,
        backgroundColor: '#2e64e5',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff',
        
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        fontWeight:'bold',
    },
    btnTxtWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
})
export default styles 