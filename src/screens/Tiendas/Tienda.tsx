import React from 'react'
import { Alert, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { BUTTON_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_DARK } from '../../commons/ConstantColors'
import { TiendasCard } from './components/TiendasCard'

interface Props extends StackScreenProps <RootStackParamList, 'Tienda'> { };

export interface Tienda{
    id: number;
    name: string;
    image: string;
    address: string;
    description: string;
    phone: string;
    atention: string;
    qualification: string;
}

const establecimientos : Tienda[] = [
    {id: 1, name: 'HappyPaws', image: 'https://cdn-icons-png.flaticon.com/128/8277/8277615.png', address: 'Av. Napo y Alpahuasi',
     phone: '0995244152', description: 'HappyPaws ofrece una amplia gama de productos para mascotas, desde alimentos y juguetes hasta servicios de cuidado y peluquería. Nos dedicamos a brindar todo lo necesario para el bienestar de tu mascota.', atention: 'Lunes a sábado de 9:00 am a 7:00 pm', qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png'},
    {id: 2, name: 'El Refugio de la Mascota', image: 'https://cdn-icons-png.flaticon.com/128/1145/1145724.png', address: 'Av. Alonso de Angulo y Lauro Guerrero',
     phone: '0992563218', description: 'Nos especializamos en ofrecer alimentos naturales y saludables para perros y gatos. Nuestros productos están hechos con ingredientes de alta calidad para mantener a tu mascota feliz y saludable.', atention: 'Martes a domingo de 10:00 am a 6:00 pm', qualification: 'https://cdn-icons-png.flaticon.com/128/992/992000.png'},
    {id: 3, name: 'La Guarida del Juguete', image: 'https://cdn-icons-png.flaticon.com/128/4716/4716494.png', address: 'Av. Mariscal Sucre y Av. Alonso de Angulo',
     phone: '0994625874', description: 'La Guarida del Juguete es el paraíso de las mascotas juguetonas. Ofrecemos una amplia selección de juguetes seguros y divertidos para mantener entretenidos a perros y gatos de todas las edades.', atention: 'Lunes a Viernes de 9:00 a 18:00', qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png'},
    {id: 4, name: 'PetVet', image: 'https://cdn-icons-png.flaticon.com/128/1566/1566779.png', address: 'Av. 6 de Diciembre y Luis Cordero',
     phone: '0996324850', description: 'Nos dedicamos a ofrecer todo lo que necesitas para el cuidado y la felicidad de tu compañero peludo. Desde alimentos premium hasta servicios de cuidado especializado, estamos aquí para ayudarte a consentir a tu mascota.', atention: 'Lunes a sábado de 8:00 am a 6:00 pm', qualification: 'https://cdn-icons-png.flaticon.com/128/992/992000.png'},
    {id: 5, name: 'Center Pets', image: 'https://cdn-icons-png.flaticon.com/128/1303/1303476.png', address: 'Av. Francisco de Orellana y Av. Río Amazonas',
     phone: '0994521532', description: 'Consentimos a tu mascota con tratamientos de belleza y relajación. Desde cortes de pelo hasta baños relajantes, nuestro equipo experto se encarga de que tu amigo peludo se sienta y se vea mejor que nunca.', atention: 'Todos los días de 10:00 am a 8:00 pm', qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png'},
    {id: 6, name: 'Miau & Guau Boutique', image: 'https://cdn-icons-png.flaticon.com/128/6536/6536073.png', address: 'Av. de los Shyris y Av. República del Salvador',
     phone: '0996544853', description: 'Miau & Guau Boutique es el lugar perfecto para consentir a tu mascota con lo último en moda y accesorios. Desde collares elegantes hasta ropa cómoda, aquí encontrarás todo lo que necesitas para que tu amigo peludo luzca a la moda.', atention: 'Miércoles a domingo de 11:00 am a 5:00 pm', qualification: 'https://cdn-icons-png.flaticon.com/128/992/992001.png'},
]


export const Tienda = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>¡Tiendas Recomendadas!</Text> 
        <Image style={styles.img} source={{uri: 'https://cdn-icons-png.flaticon.com/128/1496/1496967.png'}} />
        <Text style={styles.text1}>Conoce las mejores tiendas de productos y servios para tu mascota.</Text>
        <View style={styles.cardContainer}>
            <FlatList
                data={establecimientos}
                renderItem={({item}) => <TiendasCard establecimientos={item}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
        <TouchableOpacity style={styles.botR}>
            <Button title="Volver" color={BUTTON_COLOR} onPress={() => navigation.navigate('Inicio')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botS}>
            <Button title="Más" color={BUTTON_COLOR} onPress={() => Alert.alert('Pronto se cargaran más tiendas')}/>
        </TouchableOpacity>
        <Text style={styles.text3}>¡Revisa diariamente esta seccion para encontrar ofertas únicas!</Text>
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
        top: '5%',
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
