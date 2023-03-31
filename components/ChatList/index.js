import React, { useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, Platform } from "react-native";
import { useHookstate } from "@hookstate/core";

import { MyText } from "../";
import { chat } from "../../utils/globalStates";

export default function ChatList() {
  const chatArr = useHookstate(chat?.chatObj).get();
  const listRef = useRef(null);

  const renderChatField = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor:
            Platform.OS == "web"
              ? index % 2 == 0
                ? "transparent"
                : "#ffffff"
              : index % 2 == 0
              ? "#ffffff"
              : "transparent",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 14,
          borderRadius: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 28,
              backgroundColor: index % 2 == 0 ? "#006d9b" : "#9b7900",
            }}
          />
          <View style={{ width: 16 }} />
          <MyText>{item.text}</MyText>
        </View>
        <MyText fontOpacity={0.33}>{item.time}</MyText>
      </View>
    );
  };

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <FlatList
        data={chatArr}
        ref={listRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS !== "web" ? 200 : 0,
        }}
        renderItem={({ item, index }) => renderChatField({ item, index })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
