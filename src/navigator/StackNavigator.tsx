import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screens/Inicio';
import { Consultas } from '../screens/Consultas';
import { Tienda } from '../screens/Tienda';
import { Veterinarias } from '../screens/Veterinarias';
import { InicioSesion } from '../screens/InicioSesion';

export type RootStackParamList = {
    Inicio: undefined;
    Consultas: undefined;
    Tienda: undefined;  
    Veterinarias: undefined;  
    InicioSesion: undefined;
}

const Stack = createStackNavigator <RootStackParamList> ();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="InicioSesion" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Consultas" component={Consultas} />
      <Stack.Screen name="Tienda" component={Tienda} />
      <Stack.Screen name="Veterinarias" component={Veterinarias} />
      <Stack.Screen name="InicioSesion" component={InicioSesion} />
    </Stack.Navigator>
  );
}