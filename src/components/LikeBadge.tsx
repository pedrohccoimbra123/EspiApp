import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingBadge = () => {
    const [rating, setRating] = useState<number>(0);

    useEffect(() => {
        const randomRating = (Math.random() * 0.5 + 4.5); // entre 4.5 e 5.0
        const formatted = parseFloat(randomRating.toFixed(1)); // ex: 4.6
        setRating(formatted);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Icon name="star" size={12} color="#fff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 45,
        alignSelf: 'flex-start',
        marginTop: 0,
    },
    ratingText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        marginRight: 6,
    },
});

export default RatingBadge;
