import React from "react";
import { StyleSheet, Text } from "react-native";

export default function MyText({ size, fontOpacity, children }) {
  return (
    <Text
      style={{
        ...styles.text,
        fontSize: size,
        opacity: fontOpacity,
        flexWrap: "wrap",
        maxWidth: "80%",
      }}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    flexWrap: "wrap",
    color: "#000000",
    fontWeight: "400",
    opacity: 1,
    fontSize: 16,
  },
});
