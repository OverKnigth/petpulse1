import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'

//indicador las propiedades de nuestro componente reutilizable
interface TitleProps{
    title: string;
}


export const TitleComnponents = ({title}:TitleProps) => {
    const{height}=useWindowDimensions();
  return (
    <Text style={{height:height*0.12,
        ...styles.title}}>{title}</Text>
  )
}
const styles= StyleSheet.create({
  
    title:{
        fontSize:30,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:30,
        textAlign:'center',
    },
   
})