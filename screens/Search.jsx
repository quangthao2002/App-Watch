import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import styles from "./search.style";
import { TextInput } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
import MenuDrawer from "react-native-side-drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Search = () => {
  const[searchKey,setSearchkey] = useState('')
  // console.log(searchKey)
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const drawerContent = () => {
    return (
      <TouchableOpacity
        onPress={toggleOpen}
        style={{ flex: 1, backgroundColor: "#38C8EC", padding: 10 }}
      >
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <MenuDrawer
          open={open}
          position={"right"}
          drawerContent={drawerContent()}
          drawerPercentage={70}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        ></MenuDrawer>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={toggleOpen}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value= {searchKey}
              onChangeText={setSearchkey}
              // onPressIn={() => {}}
              placeholder="what are you looking for"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Search;
