import React from 'react'
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { BUTTON_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_DARK } from '../../commons/ConstantColors'
import { VeterinariasCard } from './components/VeterinariasCard'

interface Props extends StackScreenProps <RootStackParamList, 'Veterinarias'> { };

export interface Veterinarias {
    id: number;
    name: string;
    description: string;
    address: string;
    qualification: string;
    image: string;
    phone: string;
    attention: string;
    services: string;
}

const veterinarias: Veterinarias[] = [
    {id: 1, name: 'Clínica VetSalud', description: 'Nuestra clínica ofrece cuidados médicos completos para tu mascota con un equipo experto y servicios que van desde consultas básicas hasta cirugías especializadas.', address: 'Av. Eloy Alfaro y Av. Río Amazonas',
    qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png', image: 'https://cdn-icons-png.flaticon.com/128/7078/7078959.png',
    phone: '0995462514', attention: 'Lunes a viernes de 9:00 am a 7:00 pm, sábado de 9:00 am a 1:00 pm', services: 'Consultas médicas, vacunaciones, cirugías, radiología, análisis de laboratorio.'},
    {id: 2, name: 'Veterinaria PetCare', description: 'En PetCare, nos preocupamos por el bienestar integral de tu mascota, ofreciendo servicios médicos y de peluquería con amor y profesionalismo.', address: 'Av. La Coruña y Whymper',
    qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png', image: 'https://cdn-icons-png.flaticon.com/128/2105/2105138.png',
    phone: '0994265139', attention: 'Lunes a sábado de 8:00 am a 8:00 pm, domingo de 10:00 am a 4:00 pm', services: 'Consultas médicas, vacunaciones, desparasitación, cuidados intensivos, peluquería canina y felina.'},
    {id: 3, name: 'Clínica Animalia', description: 'Con atención las 24 horas, estamos comprometidos a brindar cuidados de emergencia y servicios veterinarios avanzados para todas las mascotas.', address: 'Av. 12 de Octubre y Av. La Coruña', 
    qualification: 'https://cdn-icons-png.flaticon.com/128/992/992000.png', image: 'https://cdn-icons-png.flaticon.com/128/784/784133.png',
    phone: '0994825397', attention: 'Todos los días de 9:00 am a 10:00 pm', services: 'Urgencias 24 horas, cirugías de emergencia, atención a domicilio, análisis clínicos, fisioterapia animal.'},
    {id: 4, name: 'Centro Veterinario Amigo Animal', description: 'En nuestro centro, tu mascota es nuestra prioridad. Ofrecemos atención personalizada y servicios completos para garantizar su salud y felicidad.', address: 'Av. Juan de Alcazar y Pedro Cobo',
    qualification: 'https://cdn-icons-png.flaticon.com/128/992/992000.png', image: 'https://cdn-icons-png.flaticon.com/128/403/403890.png',
    phone: '0994798520', attention: 'Lunes a viernes de 10:00 am a 6:00 pm, sábado de 9:00 am a 2:00 pm', services: 'Consultas médicas, vacunaciones, cirugías, rehabilitación postoperatoria, nutrición animal.'},
    {id: 5, name: 'PawCare Animal Center', description: 'u compañero peludo merece lo mejor, por eso ofrecemos servicios médicos de calidad con un equipo dedicado a su bienestar.', address: 'Av. Alonso de Angulo y Lauro Guerrero',
    qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png', image: 'https://cdn-icons-png.flaticon.com/128/3659/3659258.png',
    phone: '0990254562', attention: 'Lunes a sábado de 9:00 am a 8:00 pm', services: 'Consultas médicas, vacunaciones, análisis de laboratorio, cuidado dental, microchipado.'},
    {id: 6, name: 'Veterinaria SoulAnimal', description: 'En SoulAnimal, nos enfocamos en promover la salud y el bienestar de tu mascota con servicios veterinarios de alta calidad y cuidado personalizado.', address: 'Av. Mariscal Sucre y Av. Ajaví',
    qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png', image: 'https://cdn-icons-png.flaticon.com/128/2913/2913297.png',
    phone: '0994532157', attention: 'Todos los días de 8:00 am a 9:00 pm', services: 'Consultas médicas, vacunaciones, odontología, endoscopias, hospedaje y cuidado de mascotas.'},
]

export const Veterinarias = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>¡Veterinarias Recomendadas!</Text> 
        <Image style={styles.img} source={{uri: 'https://cdn-icons-png.flaticon.com/128/2934/2934749.png'}} />
        <Text style={styles.text1}>Conoce las veterinarias más seguras y confiables para tu mascota.</Text>
        <View style={styles.cardContainer}>
            <FlatList
                data={veterinarias}
                renderItem={({item}) => <VeterinariasCard veterinarias={item}/>}
                keyExtractor={item => item.id.toString()}
            />
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
    botR: {
        borderRadius: 10,
        padding: 10,
        fontSize: 20, 
        alignSelf: 'center',
        position: 'absolute',  
        top: '91%',
    },
    text3: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        top: '4%',
        marginHorizontal: 10,
    },
    cardContainer: {
        backgroundColor: BUTTON_COLOR,
        borderRadius: 10,
        width: '90%',
        maxHeight: '42%',
        paddingVertical: 10,
        marginVertical: 10,
        top: '4%',
    },
})
