import { View, Text } from "react-native";
import { Badge } from "react-native-elements";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Welcome } from "../components";
import Headings from "../components/home/Headings";
import Carousel from "../components/home/Carousel";
import ProductsRow from "../components/products/ProductRow2";

import Categories from "../components/home/Categories";

const Home = () => {
  return (
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />

          <Text>TP. Ho Chi Minh, Viet Nam</Text>

          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
            <Badge status="success" value="3" containerStyle={{ position: "absolute", top: -8, right: -8 }} />
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Categories />
        <Headings />
        <ProductsRow />
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
