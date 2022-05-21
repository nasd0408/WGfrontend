import { windowHeight } from "../../../utils/Dimentions";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#060422',
    height: windowHeight
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#c00c86',
  
  },
  textInfo:{
    fontSize:16,
    textAlign:'center',
    color:'white'
  }
  })

  export default styles