import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

//import Vectores from './src/screens/Vectores';
export const App = () => {
  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  );
};

export default App;
