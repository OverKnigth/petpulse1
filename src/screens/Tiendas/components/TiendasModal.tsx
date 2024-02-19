import React from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Tienda } from '../Tienda';

interface Props {
    establecimientos: Tienda;
    isVisible: boolean;
    changeVisible: () => void;
}

export const TiendasModal = ({ establecimientos, isVisible, changeVisible }: Props) => {
    const { width } = useWindowDimensions();

    return (
        <Modal visible={isVisible} animationType='slide' transparent={true}>
            <View style={styles.root}>
                <View style={[styles.content, { width: width * 0.8 }]}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{establecimientos.name}</Text>
                    </View>
                    <Text style={styles.resp}>Descripción: {establecimientos.description}</Text>
                    <Text style={styles.resp}>Ubicación: {establecimientos.address}</Text>
                    <Text style={styles.resp}>Teléfono: {establecimientos.phone}</Text>
                    <Text style={styles.resp}>Horario de Atención: {establecimientos.atention}</Text>
                    <TouchableOpacity style={styles.iconClose} onPress={changeVisible}>
                            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/6276/6276642.png' }} style={styles.closeIcon} />
                        </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 10,
    },
    iconClose: {
        padding: 5,
    },
    closeIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    image: {
        alignItems: 'center',
        marginBottom: 10,
    },
    resp: {
        fontSize: 17,
        textAlign: 'center',
        marginVertical: 10,
    }
});
