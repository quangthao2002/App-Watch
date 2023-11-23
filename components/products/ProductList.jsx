import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./productList.style";
const ProductList = () => {
    const {data,isLoading,error} = useFetch()

  //     isLoading = true là đang trong quá trình tải dữ liệu từ api
  if (isLoading) {
    return (
      <View style={styles.isLoadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  };
  console.log(data)
  return(
    <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({item})=> (<ProductCardView item={item}/>)}
                contentContainerStyle ={styles.container}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}
           />
    </View>
  )
};

export default ProductList;

