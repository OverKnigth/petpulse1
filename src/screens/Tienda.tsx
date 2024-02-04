import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Tienda = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>¡Tiendas Recomendadas!</Text> 
        <Image style={styles.img} source={{uri: 'https://cdn-icons-png.flaticon.com/128/1581/1581600.png'}} />
        <Text style={styles.text1}>Conoce las mejores tiendas de comida, accesorios, productos y servios para tu mascota.</Text>
        <View style={styles.tarje1}>
            <Image style={styles.img1} source={{uri: 'https://cdn-icons-png.flaticon.com/128/3659/3659779.png'}} />
            <Text style={styles.text2}>
            Nombre: PawLand
            {'\n'}
            Descripción: Tu tienda de confiaza donde encontraras desde alimentos premium hasta accesorios y juguetes para tu mascota.
            {'\n'}
            Dirección: Av. Juan de Alcazar y Matín de la calle 
            </Text>
        </View>
        <View style={styles.tarje2}>
            <Image style={styles.img1} source={{uri: 'https://cdn-icons-png.flaticon.com/128/5029/5029313.png'}} />
            <Text style={styles.text2}>
            Nombre: AnimalSmart Quito
            {'\n'}
            Descripción: Tienda reconocida y de confianza donde encontrars accesorios y servicios de belleza para tu mascota.
            {'\n'}
            Dirección: Avenida Patria y 9 de Octubre
            </Text>
        </View>
        <TouchableOpacity style={styles.botR}>
            <Button title="Volver" color={'#C7E9B0'} onPress={() => Alert.alert('Volviendo al Inicio')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botS}>
            <Button title="Más" color={'#C7E9B0'} onPress={() => Alert.alert('Cargando más Consultas')}/>
        </TouchableOpacity>
        <Text style={styles.text3}>¡Revisa diariamente esta seccion para encontrar ofertas únicas!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FCE1',
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
        width: 100,
        height: 100, 
        top: '4.5%',
    },
    tarje1: {
        backgroundColor: '#E9EDC9',
        borderRadius: 10,
        padding: 10,
        top: '10%',
        flexDirection: 'row',
        fontSize: 20,   
        width: '94%',
    },
    tarje2: {
        backgroundColor: '#E9EDC9',
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
        alignSelf: 'flex-start',  
        position: 'absolute',
        top: '92%',
        left: '5%',
    },
    botS: {
        borderRadius: 10,
        padding: 10,
        fontSize: 20,      
        alignSelf: 'flex-end',  
        position: 'absolute',
        top: '92%',
        right: '5%',
    },
    text3: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        top: '8%',
    }
})
