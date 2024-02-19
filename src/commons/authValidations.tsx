import Snackbar from "react-native-snackbar";
import { User } from "../navigator/StackNavigator";
import { LoginForm } from "../screens/InicioSesion";
import { RegisterForm } from "../screens/Registro";

export const hasErrorFormLogin = (form: LoginForm) => {
    return form.username == '' || form.password == ''
}

export const hasErrorFormRegister = (form: RegisterForm) => {
    return form.username == '' || form.email == '' || form.password == ''   
}

export const verifyExistUser = (users: User[], form: LoginForm) => {
    return users.filter(user => user.username == form.username)[0];
}

export const showSnackbar = (message: string, backgroundColor: string) => {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: backgroundColor,
        textColor: 'white'
      });
}

export const getIdNewUser = (users: User[]) => {
    const getIdUser = users.map(user => user.id);
    return Math.max(...getIdUser) + 1; 
}