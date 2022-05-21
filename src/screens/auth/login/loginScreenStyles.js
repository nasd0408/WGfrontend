import { StyleSheet } from "react-native"
import { windowHeight } from "../../../utils/Dimentions"
const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#060422',
    height: windowHeight
  },
  forgotButton: {
    marginTop:25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#c00c86',
  
  },
})

export default styles