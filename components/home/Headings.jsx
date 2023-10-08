import { StyleSheet,Text,View } from "react-native";
import React from "react";
import { COLORS,SIZES } from "../../constants";
import {Ionicons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


const Headings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Watch</Text>
                <TouchableOpacity>
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