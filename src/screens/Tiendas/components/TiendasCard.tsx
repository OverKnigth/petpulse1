import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR, PRIMARY_COLOR_DARK, SECOND_COLOR } from '../../../commons/ConstantColors';
import { Tienda } from '../Tienda';
import { TiendasModal } from './TiendasModal';

interface Props {
    establecimientos : Tienda;
}

export const TiendasCard = ({ establecimientos}: Props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <View style={styles.root}>
                    <Image source={{ uri: establecimientos.image}} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={styles.title}>{establecimientos.name}</Text>
                        <Image source={{ uri: establecimientos.qualification}} style={styles.image2} />
                    </View>
                </View>
            </TouchableOpacity>
            <TiendasModal establecimientos={establecimientos} isVisible={showModal} changeVisible={() => setShowModal(!showModal)} />
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
