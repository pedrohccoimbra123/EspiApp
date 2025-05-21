import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LikeBadge = () => {
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        const randomLikes = Math.floor(Math.random() * 280) + 20;
        setLikes(randomLikes);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.likeText}>{likes}</Text>
            <TouchableOpacity>
                <Icon name="heart" size={12} color="#fff" />
            </TouchableOpacity>
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
    likeText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        marginRight: 8,
    },
});

export default LikeBadge;
