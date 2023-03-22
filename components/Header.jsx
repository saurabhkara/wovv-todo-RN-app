import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Header({onAddNote}) {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 25 }}>
        Hello, <Text style={{ fontSize: 16 }}>Good Morning !!</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={onAddNote}>
        <Text style={{ fontSize: 18 }}>Add Notes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "pink",
    width: 110,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#fc6a60",
  },
});
