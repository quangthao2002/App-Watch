import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";
import { StyleSheet } from "react-native";

const Carousel = () => {
  const slides = [
    "https://www.kddl.com/wp-content/themes/kddl/assets/images/slider/004.jpg",
    "https://sm.ign.com/t/ign_za/photo/default/apple-watch-s8-nike-7up-hero-220907-1662580135850_jtkc.1080.jpg",
    "https://www.casio-europe.com/resource/images/panel-brands/watches_gshock.jpg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides} dotColor={COLORS.primary} inactiveDotColor={COLORS.secondary} ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }} autoplay circleloop />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Carousel;
