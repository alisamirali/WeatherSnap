import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../utils/Colors";
import { hp, wp } from "../utils/ResponsiveLayout";
import { FONTS } from "../utils/Fonts";

const Loader = ({ title = "Fetching Weather" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.YELLOW_COLOR} />
      <Text style={styles.loaderText}>{title}</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    ...StyleSheet.absoluteFillObject,
  },
  loaderText: {
    fontSize: wp(22),
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.WHITE,
    marginTop: hp(16),
  },
});
