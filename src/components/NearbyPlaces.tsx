// src/components/NearbyPlaces.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { localItems } from '../data/localData';

const getRandomPlaces = (count: number) => {
    const shuffled = [...localItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function NearbyPlaces() {
    const navigation = useNavigation<NavigationProp>();
    const places = getRandomPlaces(3);

    const handlePlacePress = (itemId: string) => {
        navigation.navigate('Detail', { itemId });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Conheça Lugares Próximos:</Text>
            <View style={styles.placesContainer}>
                {places.map((place) => (
                    <TouchableOpacity 
                        key={place.id} 
                        style={styles.placeCard}
                        onPress={() => handlePlacePress(place.id)}
                        activeOpacity={0.7}
                    >
                        <Image
                            source={typeof place.image === 'string' ? { uri: place.image } : place.image}
                            style={styles.image}
                        />
                        <Text style={styles.placeName}>{place.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    placesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    placeCard: {
        alignItems: 'center',
        width: 100,
    },
    image: {
        width: 100,
        height: 60,
        borderRadius: 8,
        marginBottom: 6,
    },
    placeName: {
        fontSize: 14,
        textAlign: 'center',
    },
});
