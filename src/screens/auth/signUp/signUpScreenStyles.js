import { windowHeight, windowWidth } from "../../../utils/Dimentions";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#060422',
    height: windowHeight,
    flex:1,
  },
  inner:{
    alignItems:'center'
  },

  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#c00c86',
  
  },
  fechaContainer: {
    marginBottom:10,
    marginTop:5,
    width: '100%',
    height: windowHeight/15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center', 
    backgroundColor: '#fff'
},
iconStyle:{
    padding:10,
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
    borderRightColor:'#ccc',
    borderRightWidth: 1,
    width:50,
},
unchangedFecha:{
    padding:10,
    flex:1,
    fontSize:16,
    color: 'gray',
    justifyContent:'center',
    alignItems:'center',

},
fecha:{
    padding:10,
    flex:1,
    fontSize:16,
    color: 'black',
    justifyContent:'center',
    alignItems:'center',

},
})

export default styles