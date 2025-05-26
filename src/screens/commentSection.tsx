import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { comments } from '../data/commentData';
import { commonStyles } from '../styles/common';
import { colors } from '../styles/Colors';

export default function CommentSection() {
    return (
        <View style={commonStyles.container}>
            <Text style={styles.header}>Comentários</Text>
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.commentCard}>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.comment}>{item.comment}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 16,
        fontFamily: 'AncizarSerif-Regular',
    },
    commentCard: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        padding: 12,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: colors.border,
        borderWidth: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
        fontFamily: 'AncizarSerif-Regular',
    },
    comment: {
        fontSize: 14,
        color: colors.subText,
        marginTop: 4,
        fontFamily: 'AncizarSans-Regular',
    },
});
