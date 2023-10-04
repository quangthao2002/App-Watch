import { StyleSheet,Text,View } from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


const Headings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New rival</Text>
                <TouchableOpacity>
                    <Ionicons name="ios-grid" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Headings

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 60,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: "semiBold",
        fontWeight: "bold",
    }
})