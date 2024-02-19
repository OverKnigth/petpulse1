import React from 'react';
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

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="InicioSesion" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InicioSesion" component={InicioSesion} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Consultas" component={Consultas} />
      <Stack.Screen name="Tienda" component={Tienda} />
      <Stack.Screen name="Veterinarias" component={Veterinarias} />
    </Stack.Navigator>
  );
};

