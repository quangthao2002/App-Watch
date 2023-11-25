import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import CartContext from "../components/products/CardContext";
import styles from "./cart.style";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
const Cart = ({ navigation }) => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace("$", ""));
    const quantity = Number(item.quantity);

    if (isNaN(price) || isNaN(quantity)) {
      console.error(
        `Invalid price or quantity: ${item.price}, ${item.quantity}`
      );
      return sum;
    }

    return sum + price * quantity;
  }, 0);
  console.log(cart);
  return (
    <View style={{ flex: 1}}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Orders</Text>
      </View>
      {Array.isArray(cart) ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item?.id?.toString()}
          contentContainerStyle={{ marginTop: 80 }}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.image}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.imageProduct}
                />
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.nameProduct}>{item.name}</Text>
                <Text style={styles.supplierProduct}>{item.supplier}</Text>
                <Text style={styles.supplierProduct}>{item.price}</Text>
                <Text style={styles.supplierProduct}>
                  Quantity {item.quantity}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text>No items in cart</Text>
      )}
      <View style={{backgroundColor:COLORS.gray,flex:1}}>
        <Text style={{fontWeight:'bold',marginBottom:10,fontSize:18,marginTop:10}}>Order Infor</Text>
        <View style={{justifyContent:'space-between',flexDirection:"row",marginVertical:5}}>
          <Text style={{color:COLORS.gray2}} >Total:</Text>
          <Text style={{color:COLORS.lightWhite}}>{total}</Text>
        </View>
        <View>
          <Pressable style={{width:'80%',height:70,marginBottom:10,marginHorizontal:20,marginLeft:50,backgroundColor:COLORS.primary, borderRadius:20,alignItems:"center",justifyContent:'center'}}>
            <Text style={{fontWeight:'bold',color: COLORS.lightWhite}}>CHECKOUT {total}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Cart;
