import React, { useState } from 'react';
import { Alert, Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { BUTTON_COLOR, ERROR_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_DARK, SECOND_COLOR } from '../../commons/ConstantColors';
import { ConsultasCard } from './components/ConsultasCard';

interface Props extends StackScreenProps<RootStackParamList, 'Consultas'> { };

export interface Consult {
    id: number;
    pregunta: string;
    respuesta: string;
    img: string;
}

const consultas: Consult[] = [
    { id: 1, pregunta: '¿Cuál es la importancia de llevar a tu mascota al veterinario regularmente?', respuesta: 'Las visitas regulares al veterinario ayudan a detectar y prevenir enfermedades tempranas, así como a mantener al día las vacunas y el cuidado general de la mascota.', img: 'https://cdn-icons-png.flaticon.com/128/2365/2365014.png' },
    { id: 2, pregunta: '¿Por qué es importante proporcionar una dieta balanceada a tu mascota?', respuesta: 'Una dieta equilibrada proporciona los nutrientes necesarios para mantener la salud y el bienestar de la mascota, incluyendo vitaminas, minerales y proteínas.', img: 'https://cdn-icons-png.flaticon.com/128/2002/2002535.png' },
    { id: 3, pregunta: '¿Qué medidas de seguridad se deben tomar al pasear a tu mascota?', respuesta: 'Es importante usar correa y collar adecuados, además de estar al tanto del entorno para evitar situaciones de peligro, como el tráfico o perros agresivos.', img: 'https://cdn-icons-png.flaticon.com/128/1719/1719853.png' },
    { id: 4, pregunta: '¿Cómo se puede prevenir la infestación de parásitos en las mascotas?', respuesta: 'Mantener al día el tratamiento antipulgas y garrapatas, así como desparasitar regularmente según las recomendaciones del veterinario.', img: 'https://cdn-icons-png.flaticon.com/128/2934/2934691.png' },
    { id: 5, pregunta: '¿Qué cuidados especiales requieren las mascotas mayores?', respuesta: 'Las mascotas mayores pueden necesitar visitas veterinarias más frecuentes, dietas específicas para su edad y atención especial a cualquier cambio en su comportamiento o salud.', img: 'https://cdn-icons-png.flaticon.com/128/2138/2138440.png' },
]

export const Consultas = ({ navigation }: Props) => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Consultas!</Text>
            <Text style={styles.text1}>Resuelve tus dudas y mantente informado sobre los cuidados que le debes dar a tu mascota.</Text>
            <View style={styles.busq1}>
                <Image style={styles.img1} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1854/1854700.png' }} />
                <TextInput placeholder="Ingresa una consulta" value={searchQuery} style={styles.text2} onChangeText={text => setSearchQuery(text)} />
            </View>
            <Text style={styles.text3}>Preguntas Frecuentes</Text>
            <View style={styles.cardContainer}>
                <FlatList
                    data={consultas.filter(item => item.pregunta.toLowerCase().includes(searchQuery.toLowerCase()) || item.respuesta.toLowerCase().includes(searchQuery.toLowerCase()))}
                    renderItem={({ item }) => <ConsultasCard consultas={item} />}
                    keyExtractor={item => item.id.toString()}
                />
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
        padding: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text1: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    img1: {
        width: 60,
        height: 60,
    },
    busq1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR_DARK,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    text2: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
    },
    bot: {
        marginBottom: 20,
        width: '100%',
    },
    text3: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContainer: {
        backgroundColor: BUTTON_COLOR,
        borderRadius: 10,
        width: '100%',
        maxHeight: '45%',
        paddingVertical: 10,
    },
    botR: {
        alignSelf: 'center',
        marginTop: 20,
    },
});
