import {SafeAreaView} from 'react-native';
import { Inicio } from './src/screens/Inicio';
import { Tienda } from './src/screens/Tienda';
import { Consultas } from './src/screens/Consultas';

//import Vectores from './src/screens/Vectores';
export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
     <Inicio/>
     {/* <Tienda/> */}
     {/* <Consultas/> */}
    </SafeAreaView>
  );
};

export default App;
