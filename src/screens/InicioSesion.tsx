import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { hasErrorFormLogin, showSnackbar, verifyExistUser } from '../commons/authValidations';
import { User } from '../navigator/StackNavigator';
import { ERROR_COLOR, PRIMARY_COLOR } from '../commons/ConstantColors';
import { BobyComponents } from '../components/BodyComponent';
import { ButtonComponents } from '../components/ButtonComponents';
import { InputComponents } from '../components/InputComponents';
import { TitleComnponents } from '../components/TitleComponents';

export interface LoginForm {
  username: string;
  password: string;
  hasError: boolean;
}

interface LoginProps {
  users: User[];
}

export const InicioSesion = ({ users }: LoginProps) => {

  const navigation = useNavigation();

  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: '',
    hasError: false,
  });

  const [hiddenPassword, setHiddenPassword] = useState(true);

  const handlerChangeText = (name: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handlerSendInfo = () => {
    if (hasErrorFormLogin(form)) {
      setForm(prevState => ({
        ...prevState,
        hasError: true
      }))
      return;
    }
    setForm(prevState => ({
      ...prevState,
      hasError: false
    }))

    const existUser = verifyExistUser(users, form);
    if (!existUser || existUser.password !== form.password) {
      showSnackbar('Usuario o contraseña incorrectos', ERROR_COLOR);
      return;
    }
    navigation.dispatch(CommonActions.navigate('Inicio'));
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComnponents title="PetPulse" />
      <BobyComponents>
        <Text style={styles.textWelcom}>¡Inicia Sesión!</Text>
        <Text style={styles.textDescription}>Ingrese su correo electronico</Text>
        <InputComponents placeholder="Usuario" name={'username'} onChangeText={handlerChangeText} hasError={form.hasError} />
        <Text style={styles.textDescription}>Ingrese su contraseñia</Text>
        <InputComponents placeholder="Contraseña" name={'password'} onChangeText={handlerChangeText} isPassword={hiddenPassword} hasIcon acctionIcon={() => setHiddenPassword(!hiddenPassword)} hasError={form.hasError} />
        <ButtonComponents title="Iniciar" onPress={handlerSendInfo} />

        <View style={styles.container}>
          <Text style={styles.text}>¿No tienes una Cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate('Registro'))}>
          <Text style={[styles.text,styles.link]}>¡Regístrate Ahora!</Text>
        </TouchableOpacity>
        </View>
          <Image
            source={{uri: 'https://cdn-icons-png.flaticon.com/128/8418/8418203.png'}}
            style={styles.image}
          />
          <Text style={styles.bottomText}>"Construyendo un mundo mejor, una mascota a la vez."</Text>
      </BobyComponents>
    </View>
  )
}
const styles = StyleSheet.create({
  textWelcom: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
  bottomText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});