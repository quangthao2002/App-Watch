import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import styles from "./search.style";
import { TextInput } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
import MenuDrawer from "react-native-side-drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import axios  from 'axios'
import SearchTitle from "../components/products/SearchTitle";
const Search = () => {
  const[searchKey,setSearchkey] = useState('')
  const [searchResult,setSerchResult] = useState([])
  console.log(searchResult)
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  // http://localhost:3000/api/products/search/${searchKey}
  const handleSearch=async ()=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/products/search/${searchKey}`)
        setSerchResult(response.data)
    } catch (error) {
        console.log("search product faill",error)
    }
  }

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
            <TouchableOpacity style={styles.searchBtn} onPress={()=> handleSearch()}>
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
        {searchResult.length === 0 ? (
          <View>
            <Image source={require('../assets/images/Pose23.png')}
              style={{resizeMode:'contain',width:SIZES.width-120,height:SIZES.height-180,opacity:0.9}}
            />
          
          </View>
        ):(
          <FlatList
            data={searchResult}
            keyExtractor={(item) => item._id}
            renderItem={({item})=> <SearchTitle item={item}/>}
            style={{marginHorizontal:10}}
          />
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Search;
