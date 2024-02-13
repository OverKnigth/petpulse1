import React from 'react'
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { BUTTON_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_DARK } from '../commons/ConstantColors'

interface Props extends StackScreenProps <RootStackParamList, 'Consultas'> { };

export const Consultas = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>¡Consultas!</Text>
        <Text style={styles.text1}>Resuelve tus dudas y mantente informado sobre los cuidados que le debes dar a tu mascota.</Text>
        <View style={styles.busq1}>
            <Image style={styles.img1} source={{uri: 'https://cdn-icons-png.flaticon.com/128/1854/1854700.png'}} />
            <TextInput placeholder="Ingresa una consulta" style={styles.text2} />
        </View>
        <TouchableOpacity style={styles.bot}>
            <Button title="Enviar" color={BUTTON_COLOR} onPress={() => Alert.alert('Cargando información')} />
        </TouchableOpacity>
        <Text style={styles.text3}>Preguntas Frecuentes</Text>
        <View style={styles.fren}>
            <Text style={styles.title2}>¿Cuánta comida debo darle a mi mascota y con qué frecuencia?</Text>
            <Text style={styles.text4}>La cantidad y frecuencia de alimentación dependen de la edad, tamaño y salud de tu mascota. Sigue las recomendaciones del veterinario y ajusta según sea necesario.</Text>
        </View>
        <View style={styles.fren2}>
            <Text style={styles.title2}>¿Cuándo es el momento adecuado para esterilizar a mi mascota?</Text>
            <Text style={styles.text4}>La esterilización es recomendada entre los 6 meses y 1 año de edad, pero es mejor discutir el momento específico con tu veterinario para adaptarlo a las necesidades de tu mascota.</Text>
        </View>
        <TouchableOpacity style={styles.botR}>
            <Button title="Volver" color={BUTTON_COLOR} onPress={() => navigation.navigate('Inicio')} />
        </TouchableOpacity>
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
        top: '3%',  
    },
    text1: {
        fontSize: 20,
        top: '4%',
        textAlign: 'center',
    },
    img1: {
        width: 60,
        height: 60, 
        left: '40%',
    },
    busq1: {
        backgroundColor: PRIMARY_COLOR_DARK,
        borderRadius: 10,
        padding: 10,
        top: '12%',
        flexDirection: 'row',
        fontSize: 20,   
        width: '80%',
    },
    text2: {
        flex: 1, 
        textAlign: 'center',  
        fontSize: 16,
    },
    bot: {
        top: '8%',   
    },
    text3: {
        fontSize: 20,
        top: '10%',
        fontWeight: 'bold',
    },
    fren: {
        backgroundColor: PRIMARY_COLOR_DARK,
        borderRadius: 10,
        padding: 10,
        top: '12%',
        width: '90%',
    },
    fren2: {
        backgroundColor: PRIMARY_COLOR_DARK,
        borderRadius: 10,
        padding: 10,
        top: '15%',
        width: '90%',
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text4: {
        fontSize: 18,
        textAlign: 'center',
    },
    botR: {
        borderRadius: 10,
        padding: 10,
        fontSize: 20, 
        alignSelf: 'center',  
        position: 'absolute',
        top: '92%',
    },
})
