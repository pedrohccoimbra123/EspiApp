import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { comments, Comment } from '../data/commentData';
import { commonStyles } from '../styles/common';
import { colors } from '../styles/Colors';
import { RootStackParamList } from '../navigation';

type CommentSectionRouteProp = RouteProp<RootStackParamList, 'CommentSection'>;

export default function CommentSection() {
    const route = useRoute<CommentSectionRouteProp>();
    const id_card = route.params?.id_card;

    if (!id_card) {
        return (
            <View style={commonStyles.container}>
                <Text style={styles.noComment}>ID do local não fornecido.</Text>
            </View>
        );
    }

    // Forçar id_card para string para garantir comparação correta
    const idCardStr = id_card.toString();

    const filteredComments = comments.filter(
        (comment: Comment) => comment.id_card.toString() === idCardStr
    );

    const renderComment = ({ item }: { item: Comment }) => (
        <View style={styles.commentCard}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.comment}>{item.comment}</Text>
            </View>
        </View>
    );

    return (
        <View style={commonStyles.container}>
            <Text style={styles.header}>Comentários</Text>
            {filteredComments.length > 0 ? (
                <FlatList
                    data={filteredComments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderComment}
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
