import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,Fontisto
} from "@expo/vector-icons";
import styles from "./productDetails.style";
import { COLORS, SIZES } from "../constants";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const route = useRoute()
  const {item} = route.params
  console.log(item);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    // <Text>   </Text>
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.detaill}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color={"gold"} />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.decriptionWrapper}>
          <Text style={styles.decription}>Description</Text>
          <Text style={styles.decriptionText}>
           {item.description}
          </Text>
        </View>
        <View style={{ marginTop: SIZES.small}}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={22} />
              <Text> Ho Chi Minh</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={22} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
              <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                      <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                      <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite}/>
                </TouchableOpacity> 
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
