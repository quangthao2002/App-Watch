import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import useFetch from '../../hook/useFetch'
import axios from 'axios'

const ProductsRow = () => {
  // const[data,setData] = useState([])
    const {data,isLoading,error} = useFetch()
    // console.log(data)
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/api/products')
    //     .then((rs)=>{
    //         setData(rs.data)

    //         console.log(rs.data)
    //       }).catch((err)=>{
    //       console.log(err)
    //     })
    // },[])
    
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
      ): error ? (
        <Text>Some went wrong</Text>
      ):(  
        <FlatList
          data={data}
          keyExtractor={(item)=>item._id}
          renderItem={({item}) => <ProductCardView item={item} />}
          horizontal ={true}
          contentContainerStyle={{columnGap: SIZES.medium}}
      />
       )}
    </View>
  )
}

export default ProductsRow
