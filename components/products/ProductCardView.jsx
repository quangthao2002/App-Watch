import { TouchableOpacity, Text, Touchable, View ,Image} from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import {COLORS} from '../../constants';
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation("ProductDetails");
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
                <Image
                source={{uri:"https://img1.kienthucvui.vn/uploads/2021/02/11/anh-dong-ho-dep-cho-nam_113838496.jpg"}}
                style={styles.image}
               />
        </View>
        <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>Product</Text>
            <Text style={styles.supplier} numberOfLines={1}>Please click on the specific area of the page that your feedback is related to.</Text>
            <Text style={styles.price}>$1200</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={32} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
