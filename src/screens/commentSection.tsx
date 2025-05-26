import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { comments } from '../data/commentData';
import { commonStyles } from '../styles/common';
import { colors } from '../styles/Colors';
import { RootStackParamList } from '../navigation';

type CommentSectionRouteProp = RouteProp<RootStackParamList, 'CommentSection'>;

export default function CommentSection() {
    const route = useRoute<CommentSectionRouteProp>();
    const { id_card } = route.params;

    const filteredComments = comments.filter(comment => comment.id_card === id_card);

    return (
        <View style={commonStyles.container}>
            <Text style={styles.header}>Comentários</Text>
            {filteredComments.length > 0 ? (
                <FlatList
                    data={filteredComments}
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
            ) : (
                <Text style={styles.noComment}>Nenhum comentário para este local ainda.</Text>
            )}
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
    noComment: {
        fontSize: 16,
        color: colors.subText,
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'AncizarSans-Regular',
    },
});
