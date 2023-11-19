import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS,SIZES} from "../constants"



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    cover:{
       height:250,
       width: '100%' ,
       resizeMode:'cover'
    },
    profileContainer:{
        flex:1,
        alignItems:'center'
    },
    profile:{
      height:140,
      width:140,
      borderRadius:999,
      borderColor:COLORS.gray,
      resizeMode:'cover',
      marginTop:-90 ,
      borderWidth:2
    },
    name:{
        fontFamily:"bold",
        color: COLORS.primary,
    },
    btnLogin:{
        backgroundColor: COLORS.secondary,
        padding:2,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.medium
    },
    menuText:{
        color:COLORS.primary,
        fontFamily:"regular",
        fontSize: 14,
        fontWeight:'600',
        lineHeight:26,
        color: COLORS.gray,
        marginLeft:15,
    },
    menuWrapper:{
        marginTop: SIZES.large,
        borderColor: COLORS.lightWhite,
        width: SIZES.width-SIZES.large,
        borderRadius:12,
    },
    menuItem: (bordeBottomWidth)=> ({
        borderBottomWidth:bordeBottomWidth,
        borderBottomColor: COLORS.gray,
        flexDirection:'row',
        paddingVertical: 15,
        paddingHorizontal: 20,

             
    })
    
    


})
export default styles
