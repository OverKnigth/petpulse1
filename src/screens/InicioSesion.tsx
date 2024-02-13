import React, {useState} from 'react';
import {Image,StatusBar,StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import {InputComponents} from '../components/InputComponents';
import {PRIMARY_COLOR} from '../commons/ConstantColors';
import {BobyComponents} from '../components/BodyComponent';
import {TitleComnponents} from '../components/TitleComponents';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/StackNavigator';
import {ButtonComponents} from '../components/ButtonComponents';

interface Props extends StackScreenProps<RootStackParamList, 'InicioSesion'> {}

interface LoginForm {
  username: string;
  password: string;
}
export const InicioSesion = ({navigation}: Props) => {
    const [form, setForm] = useState<LoginForm>({
      username: '',
      password: '',
    });
  
    const [hiddenPassword, sethiddenPassword] = useState(true);
    const [error, setError] = useState('');
  
    const handlesChangeText = (name: string, value: string) => {
      setForm(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSendInfo = () => {
      if (!form.username || !form.password) {
        setError('Por favor, complete todos los campos.');
        return; 
      }
      setError('');
      console.log(form);
      navigation.navigate('Inicio');
    };
  
    return (
      <View style={{backgroundColor: PRIMARY_COLOR, flex: 1}}>
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        <TitleComnponents title="¡PetPulse!" />
        <BobyComponents>
          <Text style={styles.textWelcom}>Inicia sesion </Text>
          <Text style={styles.textDescription}>
            Ingrese su correo electrónico
          </Text>
          <InputComponents
            placeholder="Usuario"
            name={'username'}
            onChangeText={handlesChangeText}
          />
          <Text style={styles.textDescription}>Ingrese su contraseña</Text>
          <InputComponents
            placeholder="Contraseña"
            name={'password'}
            onChangeText={handlesChangeText}
            isPassword={hiddenPassword}
            hasIcon={true}
            acctionIcon={() => sethiddenPassword(!hiddenPassword)}
          />
  
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
  
          <ButtonComponents
            title="Iniciar Sesión"
            onPress={() => handleSendInfo()}
          />
          <View style={styles.container}>
            <Text style={styles.text}>¿No tienes cuenta?</Text>
            <TouchableOpacity onPress={() => console.log('Regístrate ahora')}>
              <Text style={[styles.text, styles.link]}>Regístrate ahora</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{uri: 'https://cdn-icons-png.flaticon.com/128/8418/8418203.png'}}
            style={styles.image}
          />
          <Text style={styles.bottomText}>"Construyendo un mundo mejor, una mascota a la vez."</Text>
        </BobyComponents>
      </View>
    );
  };
  
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
  