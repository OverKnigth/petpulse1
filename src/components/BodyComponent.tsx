import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { PRIMARY_COLOR_DARK } from '../commons/ConstantColors';

export const BobyComponents = ( props:any) => {
    const { height}=useWindowDimensions();

  return (
    <View style={{height:height*0.9,
    ...styles.container}}>
        {props.children}
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:PRIMARY_COLOR_DARK,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
    }
})