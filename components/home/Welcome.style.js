import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: { width: "100%" },
  welcomeTxt: (color, top) => ({
    fontFamily: "bold",
    marginHorizontal: 12,
    fontSize: SIZES.xxLarge - 6,
    marginTop: top,
    color: color,
  }),
});

export default styles;
