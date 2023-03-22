import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function NotesCard({item, updateNote, deleteNote}) {


  const Button = ({ label, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={
          label === "Delete"
            ? [styles.button, styles.delete]
            : [styles.button, styles.update]
        }
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.card}>
      <View style={{ width: "70%" }}>
        <Text style={{ fontSize: 20, fontWeight: "500", marginBottom:6 }} numberOfLines={1}>
        {item.sub}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "300" }} numberOfLines={2}>
          {item.desc}
        </Text>
      </View>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button label={"Update"} onPress={()=>updateNote(item)} />
        <Button label={"Delete"} onPress={()=>deleteNote(item)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: "100%",
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor: "white",
    padding: 12,
    margin: 10,
    alignSelf: "center",
    borderRadius: 10,
    height: 150,
    flexDirection: "row",
  },
  button: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 6,
    width: 90,
  },
  delete: {
    backgroundColor: "red",
  },
  update: {
    backgroundColor: "#00E5EC",
  },
});
