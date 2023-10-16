import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1, // là tỉ lệ giữa chiều rộng và chiều cao của ảnh
    resizeMode: "cover",
  },
  detaill: {
    backgroundColor: COLORS.lightWhite,
    marginTop: -SIZES.large,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    marginBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  ratingRow: {
    paddingBottom:SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width-10,
    top: 5,
},
rating: {
    top:SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems:"center",
    marginHorizontal:SIZES.large,
  },
ratingText:{
    color: COLORS.gray,
    fontFamily:"medium",
    paddingHorizontal:5
},
  title: {
    fontWeight: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  decriptionWrapper:{
    marginTop:SIZES.large *2,
    marginHorizontal:SIZES.large,
  },
  decription:{
    fontFamily:"bold",
    fontSize: SIZES.large -2,
  },
  decriptionText:{
    fontSize:SIZES.small ,
    fontFamily:"regular",
    textAlign:"justify"
  },
  location:{
    flexDirection:"row",
    marginHorizontal:SIZES.large,
    padding:5,
    justifyContent:"space-between",
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium
},
cartRow:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:SIZES.width -27,
    marginHorizontal:SIZES.large,
    marginVertical:SIZES.small,
},
cartBtn:{
    backgroundColor:COLORS.black,
    width: SIZES.width*0.7,
    padding:SIZES.small/2,
    borderRadius:SIZES.large,
},
addCart:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor: COLORS.black,
    margin:SIZES.small,
    alignItems:"center",
    justifyContent:"center"
},
cartTitle:{
    color: COLORS.lightWhite,
    // textAlign:"center",
    marginLeft:15,
    fontFamily:"bold",
    fontSize:SIZES.medium
    
}

});
export default styles;
