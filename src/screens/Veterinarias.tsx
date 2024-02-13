import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { BUTTON_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_DARK } from '../commons/ConstantColors'

interface Props extends StackScreenProps <RootStackParamList, 'Veterinarias'> { };

export const Veterinarias = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>¡Veterinarias Recomendadas!</Text> 
        <Image style={styles.img} source={{uri: 'https://cdn-icons-png.flaticon.com/128/2934/2934749.png'}} />
        <Text style={styles.text1}>Conoce las veterinarias más seguras y confiables para tu mascota.</Text>
        <View style={styles.tarje1}>
            <Image style={styles.img1} source={{uri: 'https://cdn-icons-png.flaticon.com/128/2954/2954418.png'}} />
            <Text style={styles.text2}>
            Nombre: PawCare Veterinaria
            {'\n'}
            Descripción: Nos especializamos en el cuidado integral de tu mascota, con más de 15 años de experiencia.
            {'\n'}
            Dirección: Av. Rodrigo de Chavez y Pedro de Alfaro
            </Text>
        </View>
        <View style={styles.tarje2}>
            <Image style={styles.img1} source={{uri: 'https://cdn-icons-png.flaticon.com/128/403/403890.png'}} />
            <Text style={styles.text2}>
            Nombre: VetAmor y Cuidado
            {'\n'}
            Descripción: Creemos que cada mascota merece amor y atención especializada, contamos con personal de élite y de confianza.
            {'\n'}
            Dirección: Avenida Patria y 9 de Octubre
            </Text>
        </View>
        <TouchableOpacity style={styles.botR}>
            <Button title="Volver" color={BUTTON_COLOR} onPress={() => navigation.navigate('Inicio')} />
        </TouchableOpacity>
        <Text style={styles.text3}>¡Dentro de poco ingresaremos nuevas veterinarias, mantente actualizado!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        top: '2%',  
        textAlign: 'center',
    },
    img: {
        width: 100,
        height: 100, 
        top: '4%',   
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        top: '4.5%',
        padding: 10,
        textAlign: 'center',
    },
    img1: {
        width: 80,
        height: 80, 
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    tarje1: {
        backgroundColor: PRIMARY_COLOR_DARK,
        borderRadius: 10,
        padding: 10,
        top: '10%',
        flexDirection: 'row',
        fontSize: 20,   
        width: '94%',
    },
    tarje2: {
        backgroundColor: PRIMARY_COLOR_DARK,
        borderRadius: 10,
        padding: 10,
        top: '13%',
        flexDirection: 'row',
        fontSize: 20,   
        width: '94%',
    },
    text2: {
        flex: 1, 
        textAlign: 'center',  
        fontSize: 16,
    },
    botR: {
        borderRadius: 10,
        padding: 10,
        fontSize: 20, 
        alignSelf: 'center',
        position: 'absolute',  
        top: '90%',
    },
    text3: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        top: '8%',
        marginHorizontal: 10,
    }
})
