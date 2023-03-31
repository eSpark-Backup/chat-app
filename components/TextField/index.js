import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { handleSendText } from "../../utils/chatFunctions";

export default function TextField({ chatHistory }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity
        onPress={() => {
          handleSendText(text, chatHistory);
        }}
      >
        <Image
          source={require("../../assets/send.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 16,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  input: {
    flex: 1,
  },
});
