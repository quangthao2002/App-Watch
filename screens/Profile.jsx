import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";
import { StatusBar } from "react-native";
import { COLORS } from "../constants";

import {
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  // lúc user chưa đăng nhập
  const [userLogin, setUserLogin] = useState(false );
  const cleanCache = () =>{
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to clear cache",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        
        { text: "OK", onPress: () => {
            console.log("delete account")
        } },
      ],
    )
  }
  const deleteAcount = () =>{
    Alert.alert(
      "Delete Acount",
      "Are you sure you want to delete your acount",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        
        { text: "OK", onPress: () => {
            console.log("delete account")
        } },
      ],
    )
  }

  useEffect(()=>{
    checkExistingUser()
  },[])
  
  const checkExistingUser = async ()=>{
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);
      if(currentUser !== null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      }else{
        navigation.navigate('Login')
      }
    } catch (error) {
        console.log("Error retrieving the data:",error)
    }
  }
  const useLogout = async ()=>{

    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`

    try {
        await AsyncStorage.multiRemove([useId,'id'])
        navigation.replace("Bottom Navigation")
    } catch (error) {
      console.log("Error loggin out the user:",error)
    }
  }
  const logout = () =>{
    console.log('log out')
    useLogout()
    // Alert.alert(
    //   "Logout",
    //   "Are you sure you want to logout",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel",
    //     },
        
    //     { text: "OK", onPress: () => {
    //         setUserLogin(false)
    //     } },
    //   ],
    // )
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={COLORS.lightWhite} /> */}
        <View style={{ width: "100%" }}>
          <Image source={require("../assets/images/space.jpg")} style={styles.cover} />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true ? userData.name : "Bạn chưa đăng nhập"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.btnLogin}>
                <Text style={styles.menuText}>L O G I N </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View>
              <View style={styles.btnLogin}>
                <Text style={styles.menuText}>{userLogin === true ? userData.email : ""}</Text>
              </View>
            </View>
          )}
          {/* */}
          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Favorites");
                }}
              >
                <View style={styles.menuItem(0.4)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                navigation.navigate("Orders")
               }}>
                <View style={styles.menuItem(0.4)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                navigation.navigate('Cart')
               }}>
                <View style={styles.menuItem(0.4)}>
                  <MaterialCommunityIcons
                    name="cart-arrow-down"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.4)}>
                  <MaterialCommunityIcons
                    name="cached"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Clear cache </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {deleteAcount()}}>
                <View style={styles.menuItem(0.4)}>
                  <AntDesign
                    name="deleteuser"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Delete Acount</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.4)}>
                  <AntDesign name="logout" color={COLORS.primary} size={22} />
                  <Text style={styles.menuText}>Log out</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
