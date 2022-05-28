import { StyleSheet } from "react-native"
import { windowHeight } from "../../../utils/Dimentions"
const styles = StyleSheet.create({
    container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
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