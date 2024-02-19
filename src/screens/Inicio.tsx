import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RootStackParamList } from '../navigator/StackNavigator';
import { BUTTON_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_DARK, SECOND_COLOR } from '../commons/ConstantColors';

interface Props extends StackScreenProps <RootStackParamList, 'Inicio'> { };

export const Inicio = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡BIENVENIDO!</Text>
      <Image style={styles.img}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/2664/2664654.png',
        }}
      />
      <Text style={styles.text1}>PetPulse{'\n'}Love In Every Paw</Text>
      <Text style={styles.frase}>"La alegría de tener una mascota es un regalo que perdura toda la vida."</Text>
      <View style={styles.boxBot}>
        <TouchableOpacity>
          <Button title="Consultas" color={BUTTON_COLOR} onPress={() => navigation.navigate('Consultas')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bot}>
          <Button title="Tiendas" color={BUTTON_COLOR} onPress={() => navigation.navigate('Tienda')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Button title="Veterinarias" color={BUTTON_COLOR} onPress={() => navigation.navigate('Veterinarias')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>Consejo del Día:</Text>
      <Text style={styles.consejo}>Proporciona un espacio tranquilo y cómodo para que tu mascota descanse y se relaje.</Text>
      <Text style={styles.text3}>Noticia Destacada</Text>
      <View style={styles.noti}>
      <Text style={styles.title2}>Cambios Estacionales y el Impacto en la Salud de tus Mascotas:</Text>
      <Text style={styles.text4}>Explora cómo los cambios estacionales pueden afectar la salud de tus mascotas y qué medidas tomar para garantizar su bienestar.</Text>
      </View>
{/*       <Image style={styles.img2}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/3372/3372394.png',  
        }}/> */}
      <Text style={styles.frase2}>"Más cuidado en cada actualización. ¡Mantente atento!"</Text>
    </View>
  ); 
};

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
  img: {
    width: 100,
    height: 100, 
    top: '4%',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    top: '5%',
    textAlign: 'center',
  },
  frase: {
      backgroundColor: PRIMARY_COLOR_DARK,
      borderRadius: 10,
      padding: 5,
      top: '7%',
      textAlign: 'center',
      fontSize: 20,
  },
  frase2: {
    backgroundColor: PRIMARY_COLOR_DARK,
    borderRadius: 10,
    padding: 5,
    top: '16%',
    textAlign: 'center',
    fontSize: 18,
    width: '90%',
  },
  boxBot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '18%',
  },
  bot: {
    marginHorizontal: 20, 
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: '11%',
  },
  consejo: {
    fontSize: 20,
    textAlign: 'center',
    top: '12%',
    backgroundColor: SECOND_COLOR,
    borderRadius: 10,
    padding: 5,   
    marginHorizontal: 20,
  }, 
  text3: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: '13%',   
  },
  noti: {
    top: '14%',
    backgroundColor: SECOND_COLOR,
    borderRadius: 10,
    padding: 5,   
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',      
    textAlign: 'center',
  },
  text4: {
    fontSize: 18,
    textAlign: 'center',
  },
  img2: {
    width: 50,
    height: 50, 
  }
});
