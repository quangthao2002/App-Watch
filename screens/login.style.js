import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  cover: {
    height: SIZES.height / 2.2,
    width: SIZES.width - 60,
    resizeMode: "contain",
    marginBottom: SIZES.xxLarge,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: SIZES.xxLarge,
  },
  wrapper: {
    marginBottom: 20,
  },
  lable: {
    fontFamily: "regular",
    fontSize: SIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    height: 50,
    borderWidth: 0.8,
    borderColor: borderColor,
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    paddingHorizontal: 15,
  }),
  iconstyle: {},
  registration: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "regular",
  },
});
export default styles;
