import { View, Text } from "react-native";
import { Badge } from "react-native-elements";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView>
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
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Home;
