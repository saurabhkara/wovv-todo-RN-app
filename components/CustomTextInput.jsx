import { View, Text, TextInput, StyleSheet} from "react-native";
import React from "react";

export default function CustomTextInput({ placeholder, value, onChangeText ,label}) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={(text)=>onChangeText(text)}
        style={label==='Subject'? styles.input:[styles.input,{height:100}]}
        multiline={label==="Subject"? false:true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
        width:'100%',
        padding:10,
    },
    label:{
        fontSize:18,
        marginBottom:5,
    },
    input:{
        backgroundColor:'#B2B2B2',
        padding:5,
        height:50,
        borderRadius:5
    }
})