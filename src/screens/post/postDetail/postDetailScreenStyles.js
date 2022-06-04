import {windowHeight, windowWidth} from '../../../utils/Dimentions'
import { StyleSheet } from 'react-native'
const  styles = StyleSheet.create({

    container: {
        backgroundColor: '#E6EAF4',
        width:'100%',
        paddingHorizontal:20,
    },
    title:{
        fontSize:20,
        alignSelf:'center',
        fontWeight:'bold',
        margin:20

    },
    postImg:{
        width: windowWidth- 20,
        height: windowWidth -20,
        margin:10,
        borderRadius:10,
        alignSelf:'center'
    },
    desc:{
        fontSize:16,
        alignSelf:'baseline'
    },
    fecha:{
        fontSize:11,
        color:'gray'
    },
    selectContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:10,
        marginTop:0
    },
    select:{
        borderBottomColor:'#5D08DA',
        borderBottomWidth:1,
        width: windowWidth/3,
        alignItems:'center'
    },
    selectActive:{
        borderBottomColor:'red',
        borderBottomWidth:2,
        width: windowWidth/3,
        alignItems:'center'
        
    },
    interactionWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:10,
    },
    commentsList:{
        marginTop:5,
        borderBottomColor:'#04030F',
        borderBottomWidth:1
    },
    commentName:{
        fontSize:14,
        fontWeight:'bold',
        color:'#04030F'
    },  
    FlatList:{
        marginBottom:20,
    }

})

export default styles;