import React from 'react';
import { Image, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { INPUT_COLOR } from '../commons/ConstantColors';

interface InputProps {
    placeholder?: string;
    name: string;
    isPassword?: boolean;
    hasIcon?: boolean;
    onChangeText: (key: string, value: string) => void;
    acctionIcon?: () => void;
}

export const InputComponents = ({ placeholder, name, onChangeText, isPassword = false, hasIcon = false, acctionIcon = () => { } }: InputProps) => {
    return (
        <View>
            {hasIcon &&
                <TouchableOpacity onPress={acctionIcon}>
                    <Image style={style.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2767/2767146.png' }} />
                </TouchableOpacity>
            }

            <TextInput
                placeholder={placeholder}
                keyboardType={'default'}
                style={style.inputText}
                onChangeText={(value: string) => onChangeText(name, value)}
                secureTextEntry={isPassword}
            />
        </View>
    );
};


const style = StyleSheet.create({
    inputText: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        marginTop: 10,
        zIndex: -1
    },
    icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 25,
        right: 25,
        zIndex: 2
    }
});
