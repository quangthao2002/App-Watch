import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './searchTitle.style'
import {useNavigation} from '@react-navigation/native'
 
const SearchTitle = ({item}) => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('ProductDetails',{item})}>
                <View style={styles.image}>
                        <Image
                            source={{uri: item.imageUrl}}
                            style={styles.imageProduct}
                        />
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.nameProduct}>{item.name}</Text>
                    <Text style={styles.supplierProduct}>{item.supplier}</Text>
                    <Text style={styles.supplierProduct}>{item.price}</Text>
                </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTitle
