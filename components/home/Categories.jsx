import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants";
import React, { useState } from "react";
import { Image } from "react-native";

const Categories = () => {
  const [categories, setCategories] = useState([
    { name: "Smart watch", imageUrl: "https://cdn-icons-png.flaticon.com/512/3978/3978934.png" },
    {
      name: "kids watch",
      imageUrl: "https://w7.pngwing.com/pngs/539/890/png-transparent-gps-navigation-systems-smartwatch-gps-tracking-unit-global-positioning-system-gps-watch-smart-watch-purple-gadget-child.png",
    },
    { name: "Smart watch", imageUrl: "https://cdn-icons-png.flaticon.com/512/3978/3978934.png" },
    { name: "Smart watch", imageUrl: "https://cdn-icons-png.flaticon.com/512/3978/3978934.png" },
    { name: "Smart watch", imageUrl: "https://cdn-icons-png.flaticon.com/512/3978/3978934.png" },
    { name: "Smart watch", imageUrl: "https://cdn-icons-png.flaticon.com/512/3978/3978934.png" },
  ]);

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.lineBorder} />
      <FlatList
        horizontal={true} //flatlist ngang
        data={categories}
        // keyExtractor={item => item.name} //Ten khong trung nhau
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => {
                alert(`${item.name}`);
              }}
            >
              <Image style={styles.image} source={{ uri: item.imageUrl }} />
              <Text style={{ color: COLORS.black, fontSize: SIZES.xSmall }}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        style={styles.listCategories}
      ></FlatList>
      <View style={styles.lineBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    height: 100,
    marginTop: 10,
  },
  lineBorder: {
    height: 1,
    backgroundColor: COLORS.gray,
  },
  listCategories: {
    flex: 1,
  },
  categoryItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50 / 2,
    margin: 10,
  },
});

export default Categories;
