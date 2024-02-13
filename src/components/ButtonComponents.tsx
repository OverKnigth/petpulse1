import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { BUTTON_COLOR } from '../commons/ConstantColors'

interface ButtonProps{
    title:string
    
    onPress: () => void
}
export const ButtonComponents = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        
        <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

     button:{
        backgroundColor: BUTTON_COLOR,
        textAlign:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        marginTop:20,
        color: 'white',
        fontSize: 20
      },
    
})