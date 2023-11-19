import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

const Button = ({title,onpress,isValid}) => {
  return (
    <TouchableOpacity onPress={onpress}  style={styles.btn(isValid ? COLORS.primary :COLORS.gray)} >
        <Text style={styles.btntxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:(backgroundColor)=>({
        height:50,
        width:'100%',
        marginVertical:20,
        backgroundColor: backgroundColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    }),
    btntxt:{
        fontFamily: 'bold',
        color: COLORS.white,
        fontSize:18
    },
    
})