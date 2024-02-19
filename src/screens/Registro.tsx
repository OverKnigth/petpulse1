import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { InputComponents } from '../components/InputComponents';
import { PRIMARY_COLOR } from '../commons/ConstantColors';
import { BobyComponents } from '../components/BodyComponent';
import { TitleComnponents } from '../components/TitleComponents';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { ButtonComponents } from '../components/ButtonComponents';

interface Props extends StackScreenProps<RootStackParamList, 'Registro'> {}

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

export const Registro = ({ navigation }: Props) => {
  const [form, setForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    console.log('Datos de registro:', form);
    navigation.navigate('InicioSesion');
  };


  return (
    <View style={{ backgroundColor: PRIMARY_COLOR, flex: 1 }}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComnponents title="Registro" />
      <BobyComponents>
        <Text style={styles.textDescription}>Ingrese su nombre de usuario</Text>
        <InputComponents
          placeholder="Usuario"
          name={'username'}
          onChangeText={handleInputChange}
        />
        <Text style={styles.textDescription}>Ingrese su correo electrónico</Text>
        <InputComponents
          placeholder="Correo electrónico"
          name={'email'}
          onChangeText={handleInputChange}
        />
        <Text style={styles.textDescription}>Ingrese su contraseña</Text>
        <InputComponents
          placeholder="Contraseña"
          name={'password'}
          onChangeText={handleInputChange}
          isPassword={true}
        />

        <ButtonComponents
          title="Registrarse"
          onPress={handleRegister}
        />
        <View style={styles.container}>
          <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
            <Text style={[styles.text, styles.link]}>Inicia sesión aquí</Text>
          </TouchableOpacity>
        </View>
      </BobyComponents>
    </View>
  );
};

const styles = StyleSheet.create({
  textDescription: {
    fontSize: 20,
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  link: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});