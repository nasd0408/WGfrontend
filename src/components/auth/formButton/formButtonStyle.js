import { windowHeight } from "../../../utils/Dimentions"
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    buttonContainer : {
        marginTop:10,
        width :'100%',
        height: windowHeight/15 ,
        backgroundColor: '#c00c86',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'lightgrey',
    }
})

export default styles