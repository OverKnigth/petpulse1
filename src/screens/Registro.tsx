import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator';
import { getIdNewUser, hasErrorFormRegister, showSnackbar, verifyExistUser } from '../commons/authValidations';
import { ERROR_COLOR, PRIMARY_COLOR } from '../commons/ConstantColors';
import { TitleComnponents } from '../components/TitleComponents';
import { BobyComponents } from '../components/BodyComponent';
import { InputComponents } from '../components/InputComponents';
import { ButtonComponents } from '../components/ButtonComponents';

export interface RegisterForm {
  username: string;
  email: string;
  password: string;
  hasError: boolean;
}

interface RegisterProps {
  usersLogins: User[];
  setUsersLogins: (users: User) => void;
}

export const Registro = ({ usersLogins, setUsersLogins }: RegisterProps) => {

    const [hiddenpassword, sethiddenpassword] = useState(true);

   const [form, setForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
    hasError: false,
  });

  const navigation = useNavigation();

  const handlerSaveUser = () => {
           if(hasErrorFormRegister (form)) {     
            setForm(prevState=>({
              ...prevState,
              hasError: true
            }))
            return;
          }
          setForm(prevState=>({
            ...prevState,
            hasError: false
          }))

          const existUser = verifyExistUser(usersLogins, form);
          if (existUser) {
            showSnackbar('El usuario ya existe', ERROR_COLOR);
            return;
          }

          const newUser : User = {
            id: getIdNewUser(usersLogins),
            ...form
          }

          setUsersLogins(newUser);
          showSnackbar('Usuario creado con exito', PRIMARY_COLOR);
          console.log(form);
          navigation.goBack();
  }

  const handlerChangeText = (name: string, value: string) => {
  setForm(prevState=>({
    ...prevState,
    [name]: value,
  }))
}

  return (
    <View >
        <TitleComnponents title="Registrate Ahora" />
        <BobyComponents>
          <Text style={styles.textDescription}>Ingrese su usuario</Text>
          <InputComponents placeholder="Usuario" name={'username'} onChangeText={handlerChangeText} hasError={form.hasError}/>
          <Text style={styles.text}>Ingrese su correo electronico</Text>
          <InputComponents placeholder="Email" name={'email'} onChangeText={handlerChangeText} hasError={form.hasError}/>
          <Text style={styles.textDescription}>Ingrese su contraseñia</Text>
          <InputComponents placeholder="Contraseña" name={'password'} onChangeText={handlerChangeText} isPassword={hiddenpassword} hasIcon={true} hasError={form.hasError} acctionIcon={() => sethiddenpassword(!hiddenpassword)}/>
          <ButtonComponents title="Registrar" onPress={handlerSaveUser}/>
          <View style={styles.container}>
            <Text style={styles.text}>¿Ya tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={[styles.text, styles.link]}>Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{uri: 'https://cdn-icons-png.flaticon.com/128/13774/13774693.png'}}
            style={styles.image}
          />
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