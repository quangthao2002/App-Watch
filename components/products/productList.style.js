import { StyleSheet, Text, View } from 'react-native'
import { COLORS ,SIZES} from '../../constants'


const styles = StyleSheet.create({
    isLoadingContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        // zIndex:999
    },
    container:{
        alignItems:'center',
        // marginTop:50,
        paddingTop: SIZES.xxLarge,
        paddingLeft:10
    },
    separator:{
        height:26
    }

})
export default styles