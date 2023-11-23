import { StyleSheet, Text, View } from 'react-native'
import {COLORS,SIZES} from '../constants/index'



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.lightWhite,
    },
    wrapper:{
        flex:1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow:{
        width: SIZES.width-50,
        backgroundColor:COLORS.primary,
        // position:'absolute',
        top:SIZES.large,
        marginHorizontal:SIZES.large,
        borderRadius:SIZES.large,
        zIndex:999,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    heading:{
        fontFamily: 'semibold',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:5

    }
})
export default styles
