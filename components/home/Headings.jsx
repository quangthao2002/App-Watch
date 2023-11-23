import { StyleSheet,Text,View } from "react-native";
import React from "react";
import { COLORS,SIZES } from "../../constants";
import {Ionicons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'

const Headings = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Watchs</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ProductList')}>
                    <Ionicons name="ios-grid" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        //    marginBottom: SIZES.xSmall,
        marginHorizontal: 12,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: SIZES.xLarge -2,
        fontFamily: "semibold",
        fontWeight: "bold",
    }
})
export default Headings