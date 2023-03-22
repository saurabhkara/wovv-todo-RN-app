import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{color:'white', fontSize:18}}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:55,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:10,
        marginVertical:20,
    }
})