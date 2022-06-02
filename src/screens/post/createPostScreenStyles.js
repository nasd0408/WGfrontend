import { StyleSheet } from "react-native"
import {windowHeight, windowWidth} from '../../utils/Dimentions'
const styles = StyleSheet.create({
background:{
    backgroundColor:'#060422',
    height:windowHeight
},
createCard:{
    padding:10,
    margin:5,
    backgroundColor:'#e6eaf4',
    borderRadius:10
},
title:{
    fontSize:20,
    color:'#E6EAF4',
    alignSelf:'center',
    marginVertical:10,
},
image:{
    width:windowWidth/1.5,
    height: windowWidth/1.5,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#5D08DA',
},
imageContainer:{
    alignItems:'center',
    margin: 20,
    padding:10,
},
button:{
    marginTop:10,
    width :'70%',
    height: windowHeight/15 ,
    backgroundColor: '#c00c86',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    alignSelf:'center',
},
buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'lightgrey',
},
buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:10,
},
button1:{
    backgroundColor:'#5D08DA',
    height:windowHeight/15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    padding:10,
    width:'45%'
},
input:{
    height:windowHeight/9,
    borderRadius:10,
    borderColor:'lightgray',
    borderWidth:1,
    padding: 10
},
actionButtonIcon:{
    fontSize:20,
    height:22,
    color:'white'
},


})

export default styles