import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import styles from "./search.style";
import { TextInput } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
import MenuDrawer from "react-native-side-drawer";

const Search = () => {
  const [open, setOpen] = useState(false);

  toggleOpen = () => {
    setOpen(!open);
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={toggleOpen} style={{ flex: 1, backgroundColor: "#38C8EC", padding: 10 }}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <MenuDrawer open={open} position={"right"} drawerContent={drawerContent()} drawerPercentage={70} animationTime={250} overlay={true} opacity={0.4}></MenuDrawer>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={toggleOpen}>
          <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onPressIn={() => {}} placeholder="what are you looking for" />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
