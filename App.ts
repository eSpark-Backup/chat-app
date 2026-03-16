import { Platform, StyleSheet, useWindowDimensions, View } from "react-native";
import { useHookstate } from "@hookstate/core";

import { ChatList, TextField } from "./components";
import { chat } from "./utils/globalStates";

export default function App() {
  const chatArr = useHookstate(chat?.chatObj)?.get();
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={
          Platform.OS == "web"
            ? {
                flex: 1,
              }
            : { flex: 1 }
        }
      >
        <ChatList />
      </View>
      <View style={{ flexDirection: "column-reverse" }}>
        <TextField chatHistory={chatArr} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: Platform.OS == "web" ? 200 : 20,
    paddingVertical: Platform.OS == "web" ? 80 : 20,
  },
});
