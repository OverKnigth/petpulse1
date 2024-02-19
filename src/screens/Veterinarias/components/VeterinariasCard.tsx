import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR, PRIMARY_COLOR_DARK, SECOND_COLOR } from '../../../commons/ConstantColors';
import { Veterinarias } from '../Veterinarias';
import { VeterinariasModal } from './VeterinariasModal';


interface Props {
    veterinarias : Veterinarias;
}

export const VeterinariasCard = ({veterinarias}: Props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <View style={styles.root}>
                    <Image source={{ uri: veterinarias.image}} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={styles.title}>{veterinarias.name}</Text>
                        <Image source={{ uri: veterinarias.qualification}} style={styles.image2} />
                    </View>
                </View>
            </TouchableOpacity>
            <VeterinariasModal veterinarias={veterinarias} isVisible={showModal} changeVisible={() => setShowModal(!showModal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
    },
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 5,
        borderColor: PRIMARY_COLOR,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    image2: {
        width: 70,
        height: 40,
    }
});
