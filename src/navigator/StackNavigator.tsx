import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registro } from '../screens/Registro';
import { Inicio } from '../screens/Inicio';
import { Consultas } from '../screens/Consultas/Consultas';
import { Tienda } from '../screens/Tiendas/Tienda';
import { Veterinarias } from '../screens/Veterinarias/Veterinarias';

export type RootStackParamList = {
  InicioSesion: undefined;
  Registro: undefined;
  Inicio: undefined;
  Consultas: undefined;
  Tienda: undefined;
  Veterinarias: undefined;
};

export interface User{
  id: number,
  username: string,
  email: string,
  password: string
}

//Data de prueba
const users: User[] = [
  {id: 1, username: 'OverKnigth',email: 'over@gmai.com', password: '12304'},
  {id: 2, username: 'vouNando', email: 'nando@gmai.com', password: '12345'},
  {id: 3, username: 'DXNIEL', email: 'kevdax@gmai.com', password: '0147'},
  {id: 4, username: 'Gauz', email: 'gauzz@gmai.com', password: '155'},
  {id: 5, username: 'Estalin5', email: 'estalin@gmai.com', password: '0007'},
]


const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {

   //Hook que gestiona los formularios registrados
   const [userLogin, setUserLogin] = useState(users);

   //Funcion para agregar un nuevo usuario
   const handlerAddUser = (user: User) => {
     setUserLogin([...userLogin, user]);
   }

  return (
    <Stack.Navigator initialRouteName="InicioSesion" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InicioSesion" options={{ title: 'Login', headerShown: false  }} children={() => <InicioSesion users={userLogin}/>} />
      <Stack.Screen name="Registro" options={{ title: 'Register', headerShown: false  }} children={() => <Registro usersLogins={userLogin} setUsersLogins={handlerAddUser}/>} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Consultas" component={Consultas} />
      <Stack.Screen name="Tienda" component={Tienda} />
      <Stack.Screen name="Veterinarias" component={Veterinarias} />
    </Stack.Navigator>
  );
};

