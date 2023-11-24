import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.small,
    padding:SIZES.medium,
    borderRadius:SIZES.small,
    backgroundColor:COLORS.white,
    ...SHADOWS.medium,
    shadowColor:COLORS.lightWhite
  },
  image:{
    width:70,
    borderRadius:SIZES.medium,
    backgroundColor:COLORS.secondary,
    justifyContent:'center',
    alignContent:'center'
  },
  imageProduct:{
    width:'100%',
    height: 65,
    borderRadius:SIZES.small,
    resizeMode:'cover'
  },
  txtContainer:{
    flex:1,
    marginHorizontal:SIZES.medium,
  },
  nameProduct:{
        fontSize:SIZES.medium,
        fontWeight:'bold',
        color:COLORS.primary
    },
    supplierProduct:{
        fontSize:SIZES.small + 2,
        fontWeight:'regular',
        marginTop:3,
        color:COLORS.gray
    }
    
});
export default styles;
